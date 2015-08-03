	var ADO = ADO || {}

	ADO.names = ['pumpkin.js','rubber-duck-10.js','skeleton-left.js','WrightFlyer-pb-jw.js'];

	ADO.slogans = [ ['Rent','This','Space'], ['Place','Your','Ad','Here'], ['Sell','Your','Stuff','Here' ], 
	['Nice','Place','For','New','Ideas'], ['Disruption','In','Progress'] ];

	ADO.init = function () {

		var light, loader, material, geometry, mesh;

		ADO.doodle = document.body.appendChild( document.createElement( 'div' ) );
		ADO.doodle.style.cssText = 'bottom: 0; font: 600 12pt monospace; left: 0; margin: auto; position: absolute; right: 0; text-align: center; width: 50% ';

		if ( window.innerHeight > 500 ) {
			ADO.doodle.innerHTML = '<p title="This feature requires a Leap Motion device.">This page has an ' +
			'<a href="http://jaanga.github.io/libs/ado/index.html" target="_blank">airDoodle</a></p>';

// for testing
//			data = document.body.appendChild( document.createElement( 'div' ) );
//			data.style.cssText = 'bottom: 50px; left: 0; margin: auto; position: absolute; right: 0; text-align: center; width: 50% ';

		}

		ADO.scene = new THREE.Scene();
		if ( ! Detector.webgl ) {
			ADO.renderer = renderer = new THREE.CanvasRenderer();
		} else {
			ADO.renderer = renderer = new THREE.WebGLRenderer( { alpha: 1, antialias: true, clearColor: 0xffffff } );
		}

		ADO.renderer.setSize( window.innerWidth, window.innerHeight );
		ADO.renderer.shadowMapEnabled = true;
		document.body.appendChild( ADO.renderer.domElement );

		ADO.camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 5000 );
		ADO.camera.position.set( -500, 500, 500 );
		ADO.controls = new THREE.OrbitControls( ADO.camera, ADO.renderer.domElement );
		ADO.controls.target.set( 0, 100, 0 );

		light = new THREE.AmbientLight( 0xaaaaaa );
		ADO.scene.add( light );

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
		ADO.scene.add( light );

		loader = new THREE.JSONLoader();

		fname = '../models/' + ADO.names[ Math.floor( Math.random() * ADO.names.length) ];

		ADO.airDoodle = new THREE.Object3D();
		ADO.scene.add( ADO.airDoodle );

		text = ADO.slogans[ Math.floor( Math.random() * ADO.slogans.length) ];
		sprite = drawSprite( text, 1, 120, -200, -200, -100 )
		ADO.airDoodle.add( sprite );
		ADO.airDoodle.visible = false;

		loader.load( fname, function ( geometry, materials ) {

			mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial( materials ) );
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			mesh.scale.set( 100, 100, 100 )
			ADO.airDoodle.add( mesh );

			ADO.showDoodle = true;

		} );


		function drawSprite( text, scale, color, x, y, z) {

			texture = canvasMultilineText( text, { backgroundColor: color }  );
			var spriteMaterial = new THREE.SpriteMaterial( { map: texture, useScreenCoordinates: false, opacity: 0.9, transparent: true } );
			var sprite = new THREE.Sprite( spriteMaterial );
			sprite.position.set( x, y, z ) ;
			sprite.scale.set( scale * texture.image.width, scale * texture.image.height );

			return sprite;

		}

		function canvasMultilineText( textArray, parameters ) {

			var parameters = parameters || {} ;

			var canvas = document.createElement( 'canvas' );
			var context = canvas.getContext( '2d' );

			if ( typeof textArray === 'string' ) textArray = [ textArray ];

			context.font = parameters.font ? parameters.font : '48px sans-serif';

			var width = 0;

			for (var i = 0, len = textArray.length; i < len; i++) {

				width = context.measureText( textArray[i] ).width > width ? context.measureText( textArray[i] ).width : width;

			}

			canvas.width = width + 20; // 480
			canvas.height = textArray.length * 60;

			col = parameters.backgroundColor ? parameters.backgroundColor : 120 ;

			context.fillStyle = 'hsl( ' + col + ', 80%, 50% )' ;
			context.fillRect( 0, 0, canvas.width, canvas.height);

			context.lineWidth = 1 ;
			context.strokeStyle = '#000';
			context.strokeRect( 0, 0, canvas.width, canvas.height);

			context.fillStyle = '#000' ;
			context.font = parameters.font ? parameters.font : '48px sans-serif';

			for (var i = 0, len = textArray.length; i < len; i++) {

				context.fillText( textArray[i], 10, 48  + i * 60 );

			}

			var texture = new THREE.Texture( canvas );
			texture.minFilter = texture.magFilter = THREE.NearestFilter;
			texture.needsUpdate = true;

			return texture;

		}

	};

	ADO.toggleAirDoodle = function () {

		 ADO.showDoodle = ADO.showDoodle  === true ? false : true ;

	};

	Leap.loop( function( frame ) {

		if ( frame.hands.length > 0 && ADO.showDoodle === true ) {

			hand = frame.hands[0];

			ADO.airDoodle.position.set( hand.stabilizedPalmPosition[0], hand.stabilizedPalmPosition[1], hand.stabilizedPalmPosition[2] );
			ADO.airDoodle.rotation.set( hand.pitch(), -hand.yaw(), hand.roll() );
			ADO.airDoodle.visible = true;
			ADO.controls.update();
			ADO.renderer.render( ADO.scene, ADO.camera );

//			data.innerHTML = 'Hand X:' + hand.stabilizedPalmPosition[0].toFixed(0) + ' Y:' +  hand.stabilizedPalmPosition[1].toFixed(0) + ' Z:' + hand.stabilizedPalmPosition[2].toFixed(0) + '<br>' +
//				ADO.airDoodle.visible + ' ' + ADO.airDoodle.position.x + ' '  + ADO.airDoodle.position.y + ' '  + ADO.airDoodle.position.z + ' '
//			'';

		} else if ( ADO.airDoodle !== undefined ) {

			ADO.airDoodle.visible = false;
			ADO.renderer.render( ADO.scene, ADO.camera );

		}

	});
