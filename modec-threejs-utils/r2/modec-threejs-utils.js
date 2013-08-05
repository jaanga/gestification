// Theo Armour ~ 2013-07-31 ~ MIT License
// TBD: Namespace & objectification

	var headsUp, pointer, pointerTip;
	var collidableMeshList = [];
	var headsUpText = '<h1>Toolbar Help</h1>' +
		'<p><b>Two Hands Icon</b><br>&bull; Switch hand functions<br>&bull; Not yet implemented</p>' +
		'<p><b>House Icon</b><br>&bull; Return to home page</p>' +
		'<p><b>\'i\' Icon</b><br>&bull; Show about app info</p>' +
		'<p><b>Axis Icon</b><br>&bull; Reset camera</p>' +
	'';
	var camX = 0, camY = 100, camZ = 350, conY = 0;
	var INTERSECTED;
	
	function utilsDetectCollision() {
// Big thanks to Lee Stemkoski for the following code
		// point = pointerTip;
		var originPoint = pointer.position.clone();
		for (var vertexIndex = 0; vertexIndex < pointerTip.geometry.vertices.length; vertexIndex++) {
			var localVertex = pointerTip.geometry.vertices[vertexIndex].clone();
			var globalVertex = localVertex.applyMatrix4( pointerTip.matrix );
			var directionVector = globalVertex.sub( pointerTip.position );

			var ray = new THREE.Raycaster( originPoint, directionVector.clone().normalize() );
			var collisionResults = ray.intersectObjects( collidableMeshList );
			if ( collisionResults.length > 0 && collisionResults[0].distance < directionVector.length() ) {
				//var obj = collisionResults[0].object;
				//if (obj.doIt ) {
				//	obj.doIt();
				//}
				
				if ( INTERSECTED != collisionResults[ 0 ].object ) {
					if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
					INTERSECTED = collisionResults[ 0 ].object;
// if no getHex ability this causes non-critical error...
					INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
					INTERSECTED.material.emissive.setHex( 0xff0000 );
					
					headsUp.innerText = 'Object id: ' + INTERSECTED.uuid;
					// if ( noises != undefined ) { noises[ parseInt( 9 * Math.random() ) ].play(); }
					if ( INTERSECTED.doIt ) {
						INTERSECTED.doIt();
					}
				}
			} else {
				if ( INTERSECTED && INTERSECTED.material.emissive) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
				INTERSECTED = null;
			}
			
		}
	}
	
	function buildHome( X, Y, Z, scale) {
		
		headsUp = document.body.appendChild( document.createElement( 'div' ) );
		headsUp.style.cssText = 'background-color: #aaa; border-radius: 8px; font: 600 14pt monospace; display: block; left: -10px; ' +
			'opacity: 0.85; padding: 5px 5px 20px 20px; ' +
			'position: absolute; text-align: left; top: 170px; width: 280px;';
		headsUp.innerHTML = headsUpText;
		
		var toolbar = new THREE.Object3D();
		
		var line = new THREE.Shape();
		line.moveTo(-2, 1);
		line.lineTo(-2, 4);
		line.lineTo(1, 4);
		line.lineTo(1, 5);
		line.lineTo(5, 5);
		line.lineTo(5, 4);
		line.lineTo(9, 4);
		line.lineTo(9, 3);
		line.lineTo(6, 3);
		line.lineTo(6, 2);
		line.lineTo(5, 2);
		line.lineTo(5, 1);
		line.lineTo(4, 1);
		line.lineTo(4, 0);
		line.lineTo(1, 0);
		line.lineTo(1, 1);
		line.lineTo(-2, 1);
		geometry = line.extrude( { amount: 1, bevelEnabled: false,} );
		material = new THREE.MeshLambertMaterial( { color: 0x00ff00, ambient: 0x00ff00 });
		mesh = new THREE.Mesh( geometry, material );
		mesh.scale.set( 2, 2, 2);
		mesh.position.set( X, Y + 25, Z + 4 );
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		mesh.doIt = function() { headsUp.innerHTML = 'Cominfg soon...' ; }
		collidableMeshList.push( mesh );
		toolbar.add( mesh );

		geometry = line.extrude( { amount: 1, bevelEnabled: false,} );
		material = new THREE.MeshLambertMaterial( { color: 0x0000ff, ambient: 0x0000ff });
		mesh = new THREE.Mesh( geometry, material );
		mesh.scale.set( -2, 2, 2);
		mesh.position.set( X, Y + 25, Z - 6);
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		mesh.doIt = function() { headsUp.innerHTML = 'Cominfg soon...' ; }
		collidableMeshList.push( mesh );
		toolbar.add( mesh );

		line = new THREE.Shape();
		line.moveTo(5, 0);
		line.lineTo(5, 10);
		line.lineTo(7, 10);
		line.lineTo(0, 20);
		line.lineTo(-7, 10);
		line.lineTo(-5, 10);
		line.lineTo(-5, 0);

		geometry = line.extrude( { amount: 10, bevelEnabled: false,} );
		material = new THREE.MeshLambertMaterial( { color: 0xff0000, ambient: 0xff0000 });
		mesh = new THREE.Mesh( geometry, material );
		// mesh.scale.set( scale, scale, scale);
		mesh.position.set( X, Y, Z - 5);
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		mesh.doIt = function() { window.location.assign("../../index.html"); }
		collidableMeshList.push( mesh );
		toolbar.add( mesh );

// info-sphere
		geometry = new THREE.SphereGeometry( 8, 20, 20 );
		var texture = canvasText( 'ⓘ', { fontSize: '72pt',  height: 200, textAlign: 'center', textBaseline: 'middle', width: 200, X: 100, Y: 100} );
		material = new THREE.MeshLambertMaterial( { color: 0xffffff, ambient: 0xffffff, map: texture, side: THREE.DoubleSide, transparent: false });
		mesh = new THREE.Mesh( geometry, material );
		mesh.rotation.y = -1.51;
		mesh.position.set( X, Y - 20, Z);
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		mesh.doIt = function() { headsUp.innerHTML = headsUpText; }
		collidableMeshList.push( mesh );
		toolbar.add( mesh );

// axis
		geometry = new THREE.CubeGeometry( 5, 5, 5 );
		material = new THREE.MeshLambertMaterial( { color: 0xffffff, ambient: 0xffffff });
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( X, Y - 55, Z);
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		mesh.doIt = function() { headsUp.innerHTML = 'Reset canera'; resetCamera( camX, camY, camZ, conY ); };
		collidableMeshList.push( mesh );
		toolbar.add( mesh );

		geometry = new THREE.CubeGeometry( 15, 5, 5 );
		material = new THREE.MeshLambertMaterial( { color: 0xff0000, ambient: 0xff0000 });
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( X + 10, Y - 55, Z);
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		mesh.doIt = function() { headsUp.innerHTML = 'Reset canera'; resetCamera( camX, camY, camZ, conY ); };
		collidableMeshList.push( mesh );
		toolbar.add( mesh );

		geometry = new THREE.CubeGeometry( 5, 15, 5 );
		material = new THREE.MeshLambertMaterial( { color: 0x00ff00, ambient: 0x00ff00 });
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( X, Y - 45, Z);
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		mesh.doIt = function() { headsUp.innerHTML = 'Reset canera'; resetCamera( camX, camY, camZ, conY ); };
		collidableMeshList.push( mesh );
		toolbar.add( mesh );

		geometry = new THREE.CubeGeometry( 5, 5, 15 );
		material = new THREE.MeshLambertMaterial( { color: 0x0000ff00, ambient: 0x0000ff });
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( X, Y - 55, Z - 10);
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		mesh.doIt = function() { headsUp.innerHTML = 'Reset canera'; resetCamera( camX, camY, camZ, conY ); };
		collidableMeshList.push( mesh );
		toolbar.add( mesh );

// back plane
		geometry = new THREE.CubeGeometry( 30, 100, 5 );
		// geometry.applyMatrix( new THREE.Matrix4().makeRotationX( - Math.PI ) );
		material = new THREE.MeshLambertMaterial( {color: Math.random() * 0xffffff, side: THREE.DoubleSide } );
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( X + 5, Y - 15, Z - 15);
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		toolbar.add( mesh );
		
		toolbar.scale.set( scale, scale, scale );
		scene.add(toolbar);
	}

	function buildPointer() {
// pointer
		pointer = new THREE.Object3D();
		pointer.position.y = -500;
		
		geometry = new THREE.TetrahedronGeometry( 10 );
		geometry.applyMatrix( new THREE.Matrix4().makeRotationY( -Math.PI / 4 ) );
		geometry.applyMatrix( new THREE.Matrix4().makeRotationX( Math.PI / 4 ) );
		material = new THREE.MeshNormalMaterial();
		mesh = new THREE.Mesh( geometry, material );
		mesh.scale.set( 1, 0.5, 1 );
		mesh.position.set( 0, 1.5, -10);
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		pointer.add( mesh );
		pointerTip = mesh;

		geometry = new THREE.CubeGeometry( 6, 3, 50 );
// material = new THREE.MeshLambertMaterial();
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( 0, 1, -38 );
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		pointer.add( mesh );

		scene.add( pointer );
/*
// older pointer
		geometry = new THREE.CylinderGeometry( 1, 10, 20, 5 );
		geometry.applyMatrix( new THREE.Matrix4().makeRotationX( Math.PI / 2 ) );
		material = new THREE.MeshLambertMaterial();
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( 0, 0, -20);
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		pointer.add( mesh );

		geometry = new THREE.CubeGeometry( 10, 5, 60 );
		material = new THREE.MeshLambertMaterial();
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( 0, 0, -60 );
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		pointer.add( mesh );
*/		
	}

	function resetCamera( X, Y, Z, conY) {
		camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 3000 );
		camera.position.set( X, Y, Z );
		controls = new THREE.TrackballControls( camera, renderer.domElement );
		controls.target.set( 0, conY, 0 );
	}

	function v( x, y, z ){ return new THREE.Vector3( x, y, z ); }

	function canvasText ( text, parameters ) {
// Must have at least one parameter given in calling function
// Canvas cheatsheet: http://www.nihilogic.dk/labs/canvas_sheet/HTML5_Canvas_Cheat_Sheet.png
		var canvas = document.createElement("canvas");
		var height = ( parameters.height ) ? parameters.height : 150 ;
		canvas.height = height;
		var width = ( parameters.width ) ? parameters.width : 300 ;
		canvas.width = width;

		var context = canvas.getContext("2d");
		context.globalAlpha = ( parameters.globalAlpha ) ? parameters.globalAlpha : 1.0 ;
		if ( parameters.backgroundColor === 'random' ) parameters.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
		context.fillStyle =  ( parameters.backgroundColor ) ? parameters.backgroundColor : 'transparent';
		context.fillRect( 0, 0, width, height );

		context.lineWidth = ( parameters.lineWidth ) ? parameters.lineWidth : 0 ;
		context.strokeRect(0, 0, width, height);

		var rotate = ( parameters.rotate ) ? parameters.rotate : 0 ;
		context.rotate( rotate );

		if ( parameters.color === 'random' ) parameters.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
		context.fillStyle = ( parameters.color ) ? parameters.color : '#000000';
		var fontSize = ( parameters.fontSize ) ? parameters.fontSize : '48pt';
		var fontFamily = ( parameters.fontFamily ) ? parameters.fontFamily : 'Arial';
		var fontWeight = ( parameters.fontWeight ) ? parameters.fontWeight : 'bold';
		context.font = fontSize + ' ' + fontFamily + ' ' + fontWeight;

		context.textAlign = ( parameters.textAlign ) ? parameters.textAlign : 'left' ;
		context.textBaseline = ( parameters.textBaseline ) ? parameters.textBaseline : 'top' ;
		var X = ( parameters.X ) ? parameters.X : 5 ;
		var Y = ( parameters.Y ) ? parameters.Y : 0 ;

		context.fillText(text, X, Y);

		var texture = new THREE.Texture( canvas );
		texture.needsUpdate = true;
		return texture;
	}