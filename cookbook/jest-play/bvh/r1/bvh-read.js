// copyright &copy; 2013 Jaanga authors ~ MIT License

// Thank you, Saqoosha ~ http://saqoo.sh/a/


	var renderer, scene, camera, controls, stats;
	var reader = new FileReader();
	var textarea;
	var xmlhttp;
	var Bvh = {};

	init();

	function init() {
		var css, selBvh, geometry, material, mesh;

		css = document.body.appendChild( document.createElement('style') );
		css.innerHTML = 'body { font: 600 12pt monospace; overflow: hidden; }' +
			'input { font: 600 12pt monospace; }';

		Bvh.info = document.body.appendChild( document.createElement( 'div' ) );
		
/*		
		Bvh.info.innerHTML = '<h1>Read BVH CMU DAZ</h1>' +
		'<select id=selBvh onchange=requestFile("bvh-cmu-daz/"+Bvh.files[this.selectedIndex]) ></select> ' +
		'<input type=file onchange=readText(this) /> <input type="checkbox" id="play" checked>Play - ' +
		'<button type=button onclick=Bvh.play.checked=false;Bvh.animate(0); >First frame</button>';

		Bvh.play = document.getElementById('play');
		selBvh = document.getElementById('selBvh');

		Bvh.files = [ '05_01.bvh', '05_14.bvh', '05_15.bvh', '07_03.bvh', '07_06.bvh', '08_08.bvh', '10_02.bvh', '13_14.bvh', '13_20.bvh', '13_29.bvh',
			'13_32.bvh', '14_10.bvh', '14_24.bvh', '16_15.bvh', '16_31.bvh', '16_36.bvh', '17_07.bvh'
		];
		for (var len = Bvh.files.length, option, i = 0; i < len; i++) {
			option = document.createElement( 'option' );
			option.innerText = Bvh.files[i];
			selBvh.appendChild( option );

		}
		selBvh.selectedIndex = 6;
*/

		textarea = document.body.appendChild( document.createElement( 'textarea' ) );
		textarea.style.cssText = 'height: ' + (window.innerHeight - 150) + 'px; width: ' +  0.45 * window.innerWidth + 'px; ';
		textarea.value = 'text here...';

		renderer = new THREE.WebGLRenderer( { antialias: true }  );
		renderer.setSize( 0.5 * window.innerWidth, window.innerHeight - 150 );

		document.body.appendChild( renderer.domElement );
		scene = new THREE.Scene();

		camera = new THREE.PerspectiveCamera( 40, (0.45 * window.innerWidth) / (window.innerHeight - 150) , 1, 5000 );
		camera.position.set( 500, 500, 500 );
		controls = new THREE.TrackballControls( camera, renderer.domElement );

		stats = new Stats();
		stats.domElement.style.cssText = 'position: absolute; right: 0; top: 0px; zIndex: 100; ';
		document.body.appendChild( stats.domElement );

		geometry = new THREE.AxisHelper( 80 );
		scene.add( geometry );

		geometry = new THREE.PlaneGeometry( 600, 600, 1, 1 );
		geometry.applyMatrix( new THREE.Matrix4().makeRotationX( - Math.PI / 2 ) );
		material = new THREE.MeshBasicMaterial( {color: Math.random() * 0xffffff, side: THREE.DoubleSide } );
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( 0, 0, 0 );
		scene.add( mesh );
	}

	function readText( that ){
		if ( that.files && that.files[0] ){
			var reader = new FileReader();
			reader.onload = function (event) {
				if ( scene.children.length > 1 ) {
					scene.remove( scene.children[2] );
				}
				var data = event.target.result;
				textarea.value = data;
				Bvh.parseData( data );
			};
			reader.readAsText(that.files[0]);
		}
	}

	function requestFile( fname ) {
		dataPlay = false;
		xmlhttp = new XMLHttpRequest();
		xmlhttp.open( 'GET', fname, true );
		xmlhttp.onreadystatechange = callbackFile;
		xmlhttp.send( null );
		callbackCount = 0;
	}

	function callbackFile() {
		if ( xmlhttp.readyState == 4  ) {
			if ( scene.children.length > 1 ) {
				scene.remove( scene.children[2] );
			}
			var data = xmlhttp.responseText;
			textarea.value = data;
			Bvh.parseData ( data );
		} else {
// console.log('waiting...');
		}
	}

	Bvh.parseData = function ( data ) {
		var _this = Bvh;
		_this.data = data.split(/\s+/g);
		_this.channels = [];
		done = false;
		while (!done) {
			switch (_this.data.shift()) {
			case 'ROOT':
				_this.root = _this.parseNode(_this.data);
				scene.add(_this.root);
				break;
			case 'MOTION':
				_this.data.shift();
				_this.numFrames = parseInt( _this.data.shift() );
				_this.data.shift();
				_this.data.shift();
				_this.secsPerFrame = parseFloat(_this.data.shift());
				done = true;
			}
		}
		_this.root.material = new THREE.MeshBasicMaterial({ color: 0xff0000});
		_this.startTime = Date.now();
		animate();
    }

	
    Bvh.animate = function( frame ) {
		var ch, frame, n, torad, ref;
		n = frame % this.numFrames * this.channels.length;
		torad = Math.PI / 180;
		ref = this.channels;
		for ( var i = 0, len = ref.length; i < len; i++) {
			ch = ref[ i ];
			switch ( ch.prop ) {
				case 'Xrotation':
					ch.node.rotation.x = (parseFloat(this.data[n])) * torad;
					break;
				case 'Yrotation':
					ch.node.rotation.y = (parseFloat(this.data[n])) * torad;
					break;
				case 'Zrotation':
					ch.node.rotation.z = (parseFloat(this.data[n])) * torad;
					break;
				case 'Xposition':
					ch.node.position.x = ch.node.offset.x + parseFloat(this.data[n]);
					break;
				case 'Yposition':
					ch.node.position.y = ch.node.offset.y + parseFloat(this.data[n]);
					break;
				case 'Zposition':
					ch.node.position.z = ch.node.offset.z + parseFloat(this.data[n]);
			}
			n++;
		}
	};	

	function animate() {
		requestAnimationFrame( animate );
		controls.update();
		renderer.render( scene, camera );
		stats.update();
		if ( Bvh.play.checked ) { 
			var frame = ( (Date.now() - Bvh.startTime ) / Bvh.secsPerFrame / 1000) | 0; 
			Bvh.animate( frame ); }
	}	