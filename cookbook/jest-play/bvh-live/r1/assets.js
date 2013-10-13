	Bvh.test = function ( name ) {
		material = new THREE.MeshNormalMaterial( { opacity: 0.5, side: THREE.DoubleSide, transparent: true } );
		if ( name === 'Site' ) {
			geometry = new THREE.SphereGeometry( 3 );

		} else if ( name === 'rHand' ) {
			//geometry = new THREE.CubeGeometry( 80, 20, 80 );
			shape = new THREE.Shape( [ v2(-37, -25), v2(-15, -25), v2(-15, -15), v2( 13, -15), v2(13, -20), v2( 35, -20),  v2( 35, -38), v2( 53, -38), v2( 53, -100), v2( -33, -100) ] );
			geometry = shape.extrude( { amount: 10, bevelEnabled: false} );
			geometry.applyMatrix( new THREE.Matrix4().makeTranslation( -5, 20, 0 ) );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( pi05 ) );

		} else if ( name === 'rThumb1' ) {
			geometry = new THREE.CylinderGeometry( 8, 8, 25 );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );

		} else if ( name === 'rThumb2' || name === 'rThumb3' ) {
			geometry = new THREE.CylinderGeometry( 8, 8, 15 );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );
/*			
		} else if ( name === 'rIndex1'  ) {
			geometry = new THREE.CylinderGeometry( 8, 8, 40 );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );

		} else if ( name === 'rIndex2' || name === 'rIndex3' ) {
			geometry = new THREE.CylinderGeometry( 8, 8, 25 );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );

		} else if ( name === 'rMid1' ) {
			geometry = new THREE.CylinderGeometry( 8, 8, 35 );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );

		} else if ( name === 'rMid2' || name === 'rMid3' ) {
			geometry = new THREE.CylinderGeometry( 8, 8, 30 );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );

		} else if ( name === 'rRing1' ) {
			geometry = new THREE.CylinderGeometry( 8, 8, 35 );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );

		} else if ( name === 'rRing2' || name === 'rRing3' ) {
			geometry = new THREE.CylinderGeometry( 8, 8, 30 );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );

		} else if ( name === 'rPinky1' ) {
			geometry = new THREE.CylinderGeometry( 6, 6, 25 );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );

		} else if ( name === 'rPinky2' || name === 'rPinky3' ) {
			geometry = new THREE.CylinderGeometry( 6, 6, 25 );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );

		} else { // must be root
			geometry = new THREE.CubeGeometry( 50, 20, 100 );	
			geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 10, 0, -100 ) );

		}
*/		
		} else { // use generic
			geometry = new THREE.CubeGeometry( 5, 5, 5 );
			// geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 10, 0, -100 ) );

		}
		
		node = new THREE.Mesh(geometry, material);
		node.castShadow = true;
		//node.receiveShadow = true;
		return node;
	}
	
	Bvh.basic = function ( name ) {
		material = new THREE.MeshNormalMaterial( { opacity: 0.5, side: THREE.DoubleSide, transparent: true } );
		if ( name === 'Site' ) {
			geometry = new THREE.SphereGeometry( 3 );

		} else if ( name === 'rHand' ) {
			//geometry = new THREE.CubeGeometry( 80, 20, 80 );
			shape = new THREE.Shape( [ v2(-37, -25), v2(-15, -25), v2(-15, -15), v2( 13, -15), v2(13, -20), v2( 35, -20),  v2( 35, -38), v2( 53, -38), v2( 53, -100), v2( -33, -100) ] );
			geometry = shape.extrude( { amount: 20, bevelEnabled: false} );
			geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 50, -10 ) );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( pi05 ) );

		} else if ( name === 'rThumb1' ) {
			geometry = new THREE.CylinderGeometry( 8, 8, 25 );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );

		} else if ( name === 'rThumb2' || name === 'rThumb3' ) {
			geometry = new THREE.CylinderGeometry( 8, 8, 25 );

			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );
		} else if ( name === 'rIndex1'  ) {
			geometry = new THREE.CylinderGeometry( 8, 8, 40 );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );

		} else if ( name === 'rIndex2' || name === 'rIndex3' ) {
			geometry = new THREE.CylinderGeometry( 8, 8, 25 );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );

		} else if ( name === 'rMid1' ) {
			geometry = new THREE.CylinderGeometry( 8, 8, 35 );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );

		} else if ( name === 'rMid2' || name === 'rMid3' ) {
			geometry = new THREE.CylinderGeometry( 8, 8, 30 );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );

		} else if ( name === 'rRing1' ) {
			geometry = new THREE.CylinderGeometry( 8, 8, 35 );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );

		} else if ( name === 'rRing2' || name === 'rRing3' ) {
			geometry = new THREE.CylinderGeometry( 8, 8, 30 );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );

		} else if ( name === 'rPinky1' ) {
			geometry = new THREE.CylinderGeometry( 6, 6, 25 );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );

		} else if ( name === 'rPinky2' || name === 'rPinky3' ) {
			geometry = new THREE.CylinderGeometry( 6, 6, 25 );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );

		} else { // must be root
			geometry = new THREE.CubeGeometry( 50, 20, 100 );
			geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 10, 0, -100 ) );

		}
		node = new THREE.Mesh(geometry, material);
		node.castShadow = true;
		//node.receiveShadow = true;
		return node;
	}

	Bvh.knuckleSpheres = function (name) {
		obj = new THREE.Object3D();
		material = new THREE.MeshNormalMaterial( { color: 0x888888, opacity: 0.5, shading: THREE.SmoothShading, side: THREE.DoubleSide, transparent: true } );
		if ( name === 'Site' ) {
			geometry = new THREE.SphereGeometry( 12, 10, 10 );
			mesh = new THREE.Mesh(geometry, material);
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			obj.add( mesh);

		} else if ( name === 'rHand' ) {
			geometry = new THREE.SphereGeometry( 30, 10, 10 );
			geometry.applyMatrix( new THREE.Matrix4().makeTranslation( -10, 0, 0 ) );
			mesh = new THREE.Mesh(geometry, material);
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			obj.add( mesh);

			geometry = new THREE.SphereGeometry( 25, 10, 10 );
			geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 20, 0, 0) );
			mesh = new THREE.Mesh(geometry, material);
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			obj.add( mesh);
			
			geometry = new THREE.SphereGeometry( 20, 10, 10 );
			geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 10, -10, -10) );
			mesh = new THREE.Mesh(geometry, material);
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			obj.add( mesh);			
			
		} else if ( name === 'rThumb1' ) {
			geometry = new THREE.SphereGeometry( 15, 10, 10 );
			geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0, 20 ) );
			mesh = new THREE.Mesh(geometry, material);
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			obj.add( mesh);

			geometry = new THREE.SphereGeometry( 15, 10, 10 );
			geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0, -10 ) );
			mesh = new THREE.Mesh(geometry, material);
			mesh.castShadow = true;
			mesh.receiveShadow = true;	
			obj.add( mesh);	

			geometry = new THREE.CylinderGeometry( 8, 8, 25 );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );
			mesh = new THREE.Mesh(geometry, material);
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			obj.add( mesh);
			
		} else if ( name === 'rThumb2' ) {	

		} else if ( name === 'rThumb3' ) {
			geometry = new THREE.CylinderGeometry( 8, 8, 40 );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );
			mesh = new THREE.Mesh(geometry, material);
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			obj.add( mesh);

		} else if ( name === 'rIndex1'  ) {
			geometry = new THREE.SphereGeometry( 15, 10, 10 );
			geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0, 32 ) );
			mesh = new THREE.Mesh(geometry, material);
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			obj.add( mesh);

			geometry = new THREE.SphereGeometry( 15, 10, 10 );
			geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0, -32 ) );
			mesh = new THREE.Mesh(geometry, material);
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			obj.add( mesh);

			geometry = new THREE.CylinderGeometry( 8, 8, 40 );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );
			mesh = new THREE.Mesh(geometry, material);
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			obj.add( mesh);

		} else if ( name === 'rIndex2' ) {
			geometry = new THREE.CylinderGeometry( 8, 8, 25 );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );
			mesh = new THREE.Mesh(geometry, material);
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			// obj.add( mesh);

		} else if ( name === 'rIndex3' ) {
			geometry = new THREE.SphereGeometry( 15, 10, 10 );
			geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0, 32 ) );
			mesh = new THREE.Mesh(geometry, material);
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			obj.add( mesh);

			geometry = new THREE.CylinderGeometry( 8, 8, 50 );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );
			mesh = new THREE.Mesh(geometry, material);
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			obj.add( mesh);

		} else if ( name === 'rMid1' ) {
			geometry = new THREE.SphereGeometry( 15, 10, 10 );
			geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0, 32 ) );
			mesh = new THREE.Mesh(geometry, material);
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			obj.add( mesh);

			geometry = new THREE.SphereGeometry( 15, 10, 10 );
			geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0, -20 ) );
			mesh = new THREE.Mesh(geometry, material);
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			obj.add( mesh);		
		
			geometry = new THREE.CylinderGeometry( 8, 8, 50);
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );
			mesh = new THREE.Mesh(geometry, material);
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			obj.add( mesh);
			
		} else if ( name === 'rMid2' ) {	

		} else if ( name === 'rMid3' ) {
			geometry = new THREE.CylinderGeometry( 8, 8, 60 );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );
			mesh = new THREE.Mesh(geometry, material);
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			obj.add( mesh);

		} else if ( name === 'rRing1' ) {
			geometry = new THREE.SphereGeometry( 15, 10, 10 );
			geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0, 32 ) );
			mesh = new THREE.Mesh(geometry, material);
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			obj.add( mesh);

			geometry = new THREE.SphereGeometry( 15, 10, 10 );
			geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0, -20 ) );
			mesh = new THREE.Mesh(geometry, material);
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			obj.add( mesh);	
			
			geometry = new THREE.CylinderGeometry( 8, 8, 35 );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );
			mesh = new THREE.Mesh(geometry, material);
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			obj.add( mesh);
		} else if ( name === 'rRing2' ) {	

		} else if ( name === 'rRing3' ) {
			geometry = new THREE.CylinderGeometry( 8, 8, 30 );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );
			mesh = new THREE.Mesh(geometry, material);
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			obj.add( mesh);

		} else if ( name === 'rPinky1' ) {
			geometry = new THREE.SphereGeometry( 15, 10, 10 );
			geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0, 32 ) );
			mesh = new THREE.Mesh(geometry, material);
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			obj.add( mesh);

			geometry = new THREE.SphereGeometry( 15, 10, 10 );
			geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0, -20 ) );
			mesh = new THREE.Mesh(geometry, material);
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			obj.add( mesh);	
			
			geometry = new THREE.CylinderGeometry( 6, 6, 40 );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );
			mesh = new THREE.Mesh(geometry, material);
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			obj.add( mesh);
		} else if ( name === 'rPinky2' ) {
			
		} else if ( name === 'rPinky3' ) {
			geometry = new THREE.CylinderGeometry( 6, 6, 25 );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );
			mesh = new THREE.Mesh(geometry, material);
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			obj.add( mesh);

		} else { // must be root
			geometry = new THREE.CylinderGeometry( 8, 5, 160 );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );
			geometry.applyMatrix( new THREE.Matrix4().makeTranslation( -15, 5, -100 ) );
			mesh = new THREE.Mesh(geometry, material);
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			obj.add( mesh);
			
			geometry = new THREE.CylinderGeometry( 8, 5, 160 );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );
			geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 25, 5, -100 ) );
			mesh = new THREE.Mesh(geometry, material);
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			obj.add( mesh);			

			geometry = new THREE.CylinderGeometry( 5, 8, 160 );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );
			geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 5, -15, -100 ) );
			mesh = new THREE.Mesh(geometry, material);
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			obj.add( mesh);	
			
			geometry = new THREE.CylinderGeometry( 5, 8, 160 );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );
			geometry.applyMatrix( new THREE.Matrix4().makeTranslation( -5, 15, -100 ) );
			mesh = new THREE.Mesh(geometry, material);
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			obj.add( mesh);					
		}
		return obj;
	};

	Bvh.cubiphile = function ( name ) {
		obj = new THREE.Object3D();
		material = new THREE.MeshNormalMaterial( { opacity: 0.5, side: THREE.DoubleSide, transparent: true } );
		if ( name === 'Site' ) {
			for (var i = 0; i < 10; i++) {
				geometry = new THREE.CubeGeometry( 10, 5, 10);
				geometry.applyMatrix( new THREE.Matrix4().makeTranslation( Math.random() * 10  - 5,  Math.random() * 8, Math.random() * 8 + 20) );
				mesh = new THREE.Mesh(geometry, material);
				mesh.castShadow = true;
				obj.add( mesh);	
			}

		} else if ( name === 'rHand' ) {
/*		
			//geometry = new THREE.CubeGeometry( 80, 20, 80 );
			shape = new THREE.Shape( [ v2(-37, -25), v2(-15, -25), v2(-15, -15), v2( 13, -15), v2(13, -20), v2( 35, -20),  v2( 35, -38), v2( 53, -38), v2( 53, -100), v2( -33, -100) ] );
			geometry = shape.extrude( { amount: 20, bevelEnabled: false} );
			geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 50, -10 ) );
			geometry.applyMatrix( new THREE.Matrix4().makeRotationX( pi05 ) );
*/
			for (var i = 0; i < 100; i++) {
				geometry = new THREE.CubeGeometry( 20, 5, 20);
				geometry.applyMatrix( new THREE.Matrix4().makeTranslation( Math.random() * 100 - 50,  Math.random() * 20, Math.random() * 80 - 40) );
				mesh = new THREE.Mesh(geometry, material);
				mesh.castShadow = true;
				obj.add( mesh);	
			}

		} else if ( name === 'rThumb1' ) {
			//geometry = new THREE.CylinderGeometry( 8, 8, 25 );
			// geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );
			for (var i = 0; i < 20; i++) {
				geometry = new THREE.CubeGeometry( 20, 5, 20);
				geometry.applyMatrix( new THREE.Matrix4().makeTranslation( Math.random() * 20 - 10,  Math.random() * 20, Math.random() * 40 - 20) );
				mesh = new THREE.Mesh(geometry, material);
				mesh.castShadow = true;
				obj.add( mesh);	
			}			
			

		} else if ( name === 'rThumb2' || name === 'rThumb3' ) {
			//geometry = new THREE.CylinderGeometry( 8, 8, 25 );
			//geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );
			
			for (var i = 0; i < 50; i++) {
				geometry = new THREE.CubeGeometry( 20, 5, 20);
				geometry.applyMatrix( new THREE.Matrix4().makeTranslation( Math.random() * 20 - 10,  Math.random() * 20, Math.random() * 30 - 15) );
				mesh = new THREE.Mesh(geometry, material);
				mesh.castShadow = true;
				obj.add( mesh);	
			}
			
		} else if ( name === 'rIndex1'  ) {
			//geometry = new THREE.CylinderGeometry( 8, 8, 40 );
			//geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );
			
			for (var i = 0; i < 50; i++) {
				geometry = new THREE.CubeGeometry( 20, 5, 20);
				geometry.applyMatrix( new THREE.Matrix4().makeTranslation( Math.random() * 20 - 10,  Math.random() * 20, Math.random() * 40 - 20) );
				mesh = new THREE.Mesh(geometry, material);
				mesh.castShadow = true;
				obj.add( mesh);	
			}	

		} else if ( name === 'rIndex2' ) {			

		} else if ( name === 'rIndex3' ) {
			//geometry = new THREE.CylinderGeometry( 8, 8, 25 );
			// geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );
			for (var i = 0; i < 50; i++) {
				geometry = new THREE.CubeGeometry( 20, 5, 20);
				geometry.applyMatrix( new THREE.Matrix4().makeTranslation( Math.random() * 20 - 10,  Math.random() * 20, Math.random() * 60 - 30) );
				mesh = new THREE.Mesh(geometry, material);
				mesh.castShadow = true;
				obj.add( mesh);	
			}				
			

		} else if ( name === 'rMid1' ) {
			//geometry = new THREE.CylinderGeometry( 8, 8, 35 );
			//geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );
			for (var i = 0; i < 50; i++) {
				geometry = new THREE.CubeGeometry( 20, 5, 20);
				geometry.applyMatrix( new THREE.Matrix4().makeTranslation( Math.random() * 20 - 10,  Math.random() * 20, Math.random() * 60 - 30) );
				mesh = new THREE.Mesh(geometry, material);
				mesh.castShadow = true;
				obj.add( mesh);	
			}
			
		} else if ( name === 'rMid2') {
		
		} else if ( name === 'rMid3' ) {
			//geometry = new THREE.CylinderGeometry( 8, 8, 30 );
			//geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );
			for (var i = 0; i < 50; i++) {
				geometry = new THREE.CubeGeometry( 20, 5, 20);
				geometry.applyMatrix( new THREE.Matrix4().makeTranslation( Math.random() * 20 - 10,  Math.random() * 20, Math.random() * 60 - 30) );
				mesh = new THREE.Mesh(geometry, material);
				mesh.castShadow = true;
				obj.add( mesh);	
			}			
		
		} else if ( name === 'rRing1' ) {
			//geometry = new THREE.CylinderGeometry( 8, 8, 35 );
			//geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );
			for (var i = 0; i < 50; i++) {
				geometry = new THREE.CubeGeometry( 20, 5, 20);
				geometry.applyMatrix( new THREE.Matrix4().makeTranslation( Math.random() * 20 - 10,  Math.random() * 20, Math.random() * 60 - 30) );
				mesh = new THREE.Mesh(geometry, material);
				mesh.castShadow = true;
				obj.add( mesh);	
			}			
		} else if ( name === 'rRing2' ) {
		
		} else if ( name === 'rRing3' ) {
			//geometry = new THREE.CylinderGeometry( 8, 8, 30 );
			//geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );
			for (var i = 0; i < 50; i++) {
				geometry = new THREE.CubeGeometry( 20, 5, 20);
				geometry.applyMatrix( new THREE.Matrix4().makeTranslation( Math.random() * 20 - 10,  Math.random() * 20, Math.random() * 60 - 30) );
				mesh = new THREE.Mesh(geometry, material);
				mesh.castShadow = true;
				obj.add( mesh);	
			}
		} else if ( name === 'rPinky1' ) {
			//geometry = new THREE.CylinderGeometry( 6, 6, 25 );
			//geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );

		} else if ( name === 'rPinky2' ) {
			for (var i = 0; i < 50; i++) {
				geometry = new THREE.CubeGeometry( 20, 5, 20);
				geometry.applyMatrix( new THREE.Matrix4().makeTranslation( Math.random() * 20 - 10,  Math.random() * 20, Math.random() * 60 - 30) );
				mesh = new THREE.Mesh(geometry, material);
				mesh.castShadow = true;
				obj.add( mesh);	
			}		
		} else if ( name === 'rPinky3' ) {
			//geometry = new THREE.CylinderGeometry( 6, 6, 25 );
			//geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -pi05 ) );
			for (var i = 0; i < 50; i++) {
				geometry = new THREE.CubeGeometry( 20, 5, 20);
				geometry.applyMatrix( new THREE.Matrix4().makeTranslation( Math.random() * 20 - 10,  Math.random() * 20, Math.random() * 60 - 30) );
				mesh = new THREE.Mesh(geometry, material);
				mesh.castShadow = true;
				obj.add( mesh);	
			}
		} else { // must be root
			//geometry = new THREE.CubeGeometry( 50, 20, 100 );
			//geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 10, 0, -100 ) );
			for (var i = 0; i < 50; i++) {
				geometry = new THREE.CubeGeometry( 20, 5, 20);
				geometry.applyMatrix( new THREE.Matrix4().makeTranslation( Math.random() * 60 - 30,  Math.random() * 20, Math.random() * 100 - 150) );
				mesh = new THREE.Mesh(geometry, material);
				mesh.castShadow = true;
				obj.add( mesh);	
			}			

		}
		return obj;
	}