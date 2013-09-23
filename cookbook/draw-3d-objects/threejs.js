var threejsBegin = 
'<!doctype html>\n' +
'<html lang=en>\n' +'<head>\n' +
'<title>Draw 3D</title>\n' +
'<meta charset=utf-8>\n' +
'</head>\n' +
'<body>\n' +
'<script src=http://mrdoob.github.com/three.js/build/three.min.js></script>\n' +
'<script src=http://mrdoob.github.com/three.js/examples/js/controls/TrackballControls.js></script>\n' +
'<script>\n' +
'	var renderer, scene, camera, controls, stats;\n' +
'	var info;\n' +
'\n';


var threejsEnd =
'\n' +
'	init();\n' +
'	animate();\n' +
'\n' +
'	function init() {\n' +
'		var light, geometry, material, mesh;\n' +
'		\n' +

'		css = document.body.appendChild( document.createElement("style") );\n' +
'		css.innerHTML = "body { font: 600 12pt monospace; margin: 0; overflow: hidden; text-align: center; }", \n' +
'\n' +
'		info = document.body.appendChild( document.createElement( "div" ) );\n' +
'		info.style.cssText = "margin 0; position: absolute; top: 0px; width: 100% ";\n' +
'		info.innerHTML = info.txt = "<h1>Draw 3D</h1>"; \n' +
'\n' +
'// Three.js Basics\n' +
'		renderer = new THREE.WebGLRenderer( { antialias: true } );\n' +
'		renderer.setSize( window.innerWidth, window.innerHeight );\n' +
'		renderer.setClearColor(0xffffff, 1);\n' +
'		renderer.shadowMapEnabled = true;\n' +
'		document.body.appendChild( renderer.domElement );\n' +
'		scene = new THREE.Scene();\n' +
'\n' +
'		camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 3000 );\n' +
'		camera.position.set( 0, 250, 600 );\n' +
'		controls = new THREE.TrackballControls( camera, renderer.domElement );\n' +
'		controls.target.set( 0, 100, 0 );\n' +
'\n' +
'//  Lights\n' +
'		light = new THREE.AmbientLight( 0x333333);\n' +
'		light.color.setHSL( 0.1, 0.5, 0.3 );\n' +
'		scene.add( light );\n' +
'		\n' +
' 		light = new THREE.DirectionalLight( 0xffffff, 1 );\n' +
'		light.position.set( 0, 500, 0 );\n' +
'		light.castShadow = true;\n' +
'		light.shadowMapWidth = 2048;\n' +
'		light.shadowMaHeight = 2048;\n' +
'		var d = 200;\n' +
'		light.shadowCameraLeft = -d;\n' +
'		light.shadowCameraRight = d;\n' +
'		light.shadowCameraTop = d * 2;\n' +
'		light.shadowCameraBottom = -d * 2;\n' +
'\n' +
'		light.shadowCameraNear = 100;\n' +
'		light.shadowCameraFar = 600;\n' +
'//		light.shadowCameraVisible = true;\n' +
'		scene.add( light );\n' +
'\n' +
'// Ground plane\n' +
'		material = new THREE.MeshBasicMaterial( {color: Math.random() * 0xffffff } );\n' +
'		geometry = new THREE.CubeGeometry( 600, 10, 300 );\n' +
'		mesh = new THREE.Mesh( geometry, material );\n' +
'		mesh.castShadow = true;\n' +
'		mesh.receiveShadow = true;\n' +
'		scene.add( mesh );\n' +
'			\n' +
'		geometry = new THREE.CubeGeometry( 10, 10, 10 );\n' +
'		material = new THREE.MeshNormalMaterial();\n' +
'		for (var i = 0, len = positions.length; i < len; i++) {\n' +
'			mesh = new THREE.Mesh( geometry, material );\n' +
'			mesh.position.set( positions[i][0], positions[i][1], positions[i][2] );\n' +
'			mesh.castShadow = true;\n' +
'			scene.add( mesh );\n' +
'		}\n' +
'		// console.log( positions)\n' +
'	}\n' +
'\n' +
'	function animate() {\n' +
'		requestAnimationFrame( animate );\n' +
'		controls.update();\n' +
'		renderer.render( scene, camera );\n' +
'	}\n' +
'\n' +
'</script>\n' +
'</body>\n' +
'</html>\n';