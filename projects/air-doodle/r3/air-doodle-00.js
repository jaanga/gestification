	var ADO = ADO || {}

	ADO.init = function ( fname ) {
		var fname = fname || '';
		var scene, renderer, camera, controls;
		var light, loader, material, geometry, mesh;
		var doodle, data, airDoodle;

		ADO.doodle = document.body.appendChild( document.createElement( 'div' ) );
		ADO.doodle.style.cssText = 'bottom: 0; font: 600 12pt monospace; left: 0; margin: auto; position: absolute; right: 0; text-align: center; width: 50% ';

		if ( window.innerHeight > 500 ) {
			ADO.doodle.innerHTML = '<p title="This feature requires a Leap Motion device.">This page has an ' +
			'<a href="http://jaanga.github.io/libs/ado/index.html" target="_blank">airDoodle</a></p>';
// for testing
//			data = document.body.appendChild( document.createElement( 'div' ) );
//			data.style.cssText = 'bottom: 50px; left: 0; margin: auto; position: absolute; right: 0; text-align: center; width: 50% ';
		}

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
		ADO.controls = controls = new THREE.OrbitControls( camera, renderer.domElement );
		controls.target.set( 0, 100, 0 );

// Lights
		light = new THREE.AmbientLight( 0xaaaaaa );
		scene.add( light );

 		light = new THREE.DirectionalLight( 0xffffff, 2 );
		light.position.set( 0, 2000, 0 );
		light.castShadow = true;
		light.shadowMapWidth = light.shadowMapHeight = 1024;

		var d = 330;
		light.shadowCameraLeft = -d;
		light.shadowCameraRight = d;
		light.shadowCameraTop = d;
		light.shadowCameraBottom = -d;

		light.shadowCameraNear = 1500;
		light.shadowCameraFar = 2500;
//		light.shadowCameraVisible = true;
		scene.add( light );

		loader = new THREE.JSONLoader();

		if ( fname === '' ) {

			var names = ['pumpkin.js','rubber-duck-10.js','skeleton-left.js','WrightFlyer-pb-jw.js'];
			fname = 'http://jaanga.github.io/libs/ado/models/' + names[ Math.floor( Math.random() * names.length) ];

		}

		loader.load( fname, function ( geometry, materials ) {

			ADO.airDoodle = airDoodle = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial( materials ) );
			airDoodle.castShadow = true;
			airDoodle.receiveShadow = true;
			airDoodle.visible = false;
			airDoodle.scale.set( 100, 100, 100 )
			scene.add( airDoodle );
			ADO.showDoodle = true;
//			ADO.animate();
			ADO.renderer.render( ADO.scene, ADO.camera );
		} );
	};

	ADO.animate = function () {

		if ( ADO.showDoodle ) {

			requestAnimationFrame( ADO.animate );
			ADO.controls.update();
			ADO.renderer.render( ADO.scene, ADO.camera );

		}

	};

	ADO.toggleAirDoodle = function () {
		if ( ADO.showDoodle  === true ) {
			ADO.showDoodle = false;
		} else {
			ADO.showDoodle = true;
			ADO.animate();
		}
	};

	Leap.loop( function( frame ) {

		var hand, airDoodle = ADO.airDoodle;

		if ( ADO.showDoodle ) {

//			requestAnimationFrame( ADO.animate );
			ADO.controls.update();
			ADO.renderer.render( ADO.scene, ADO.camera );

		}

		if ( frame.hands.length > 0) {

			hand = frame.hands[0];

			airDoodle.position.set( hand.stabilizedPalmPosition[0], hand.stabilizedPalmPosition[1], hand.stabilizedPalmPosition[2] );
			airDoodle.rotation.set( hand.pitch(), -hand.yaw(), hand.roll() );
			airDoodle.visible = true;
//			data.innerHTML = 'Hand X:' + hand.stabilizedPalmPosition[0].toFixed(0) + ' Y:' +  hand.stabilizedPalmPosition[1].toFixed(0) + ' Z:' + hand.stabilizedPalmPosition[2].toFixed(0) + '<br>' +
//				airDoodle.visible + ' ' + airDoodle.position.x + ' '  + airDoodle.position.y + ' '  + airDoodle.position.z + ' '
//			'';

		} else if ( !!airDoodle ) {

			airDoodle.visible = false;

		}

	});

