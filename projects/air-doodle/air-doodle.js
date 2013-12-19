	var ADO = ADO || {}
	
	function init( fname ) {
		var scene, renderer, camera, controls;
		var light, loader, material, geometry, mesh
		var doodle, data, airDoodle;
		
		doodle = document.body.appendChild( document.createElement( 'div' ) );
		doodle.style.cssText = 'bottom: 0; font: 600 12pt monospace; left: 0; margin: auto; position: absolute; right: 0; text-align: center; width: 50% ';
		doodle.innerHTML = '<p title="This feature requires a Leap Motion device.">This page has ' +
		'<a href="http://jaanga.github.io/gestification/projects/air-doodle/" target="_blank">airDoodle</a></p>';
		
		//data = document.body.appendChild( document.createElement( 'div' ) );
		//data.style.cssText = 'bottom: 50px; left: 0; margin: auto; position: absolute; right: 0; text-align: center; width: 50% ';
		
		ADO.scene = scene = new THREE.Scene();
		if ( ! Detector.webgl ) {
			ADO.renderer = renderer = new THREE.CanvasRenderer();
		} else {
			ADO.renderer = renderer = new THREE.WebGLRenderer( { alpha: 1, antialias: true, clearColor: 0xffffff } );
		}
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.shadowMapEnabled = true;
		document.body.appendChild( renderer.domElement );
		
		camera = ADO.camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 5000 );
		camera.position.set( -500, 500, 500 );
		ADO.controls = controls = new THREE.TrackballControls( camera, renderer.domElement );
		controls.target.set( 0, 100, 0 );

// Lights
		light = new THREE.AmbientLight( 0x888888 );
		scene.add( light );

 		light = new THREE.DirectionalLight( 0xffffff, 1 );
		light.position.set( 0, 2000, 0 );
		light.castShadow = true;
		light.shadowMapWidth = light.shadowMaHeight = 1024;

		var d = 300;
		light.shadowCameraLeft = -d;
		light.shadowCameraRight = d;
		light.shadowCameraTop = d;
		light.shadowCameraBottom = -d;

		light.shadowCameraNear = 1500;
		light.shadowCameraFar = 2500;
//		light.shadowCameraVisible = true;
		scene.add( light );		

		loader = new THREE.JSONLoader();
		loader.load( fname, function ( geometry, materials ) {
			ADO.airDoodle = airDoodle = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial( materials ) );
			airDoodle.castShadow = true;
			//airDoodle.receiveShadow = true;
			airDoodle.visible = false;
			airDoodle.scale.set( 100, 100, 100 )
			scene.add( airDoodle );	
			animate();
		} );	
	}

	Leap.loop( function( frame ) {
		var hand, airDoodle = ADO.airDoodle;	
		if ( frame.hands.length > 0) {	
			hand = frame.hands[0];
			airDoodle.position.set( hand.stabilizedPalmPosition[0], hand.stabilizedPalmPosition[1], hand.stabilizedPalmPosition[2] );
			airDoodle.rotation.set( hand.pitch(), -hand.yaw(), hand.roll() );
			airDoodle.visible = true;
//			data.innerHTML = 'Hand X:' + hand.stabilizedPalmPosition[0].toFixed(0) + ' Y:' +  hand.stabilizedPalmPosition[1].toFixed(0) + ' Z:' + hand.stabilizedPalmPosition[2].toFixed(0) + '<br>' +
//				airDoodle.visible + ' ' + airDoodle.position.x + ' '  + airDoodle.position.y + ' '  + airDoodle.position.z + ' ' 
//			'';
		} else {
			airDoodle.visible = false;
		}
	});	
	
	function animate() {
		requestAnimationFrame( animate );
		ADO.controls.update();
		ADO.renderer.render( ADO.scene, ADO.camera );
	}	