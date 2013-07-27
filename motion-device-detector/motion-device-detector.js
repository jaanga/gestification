var MotionDeviceDetector = {

	// motionDevice: ( function () { try { return !! window.WebGLRenderingContext && !! document.createElement( 'canvas' ).getContext( 'experimental-webgl' ); } catch( e ) { return false; } } )(),
	motionDevice: window.Leap,
	
	getMotionDeviceErrorMessage: function () {

		var element = document.createElement( 'div' );
		element.id = 'motion-device-error-message';
		element.style.fontFamily = 'monospace';
		element.style.fontSize = '13px';
		element.style.fontWeight = 'normal';
		element.style.textAlign = 'center';
		element.style.background = '#fff';
		element.style.color = '#000';
		element.style.padding = '1.5em';
		element.style.width = '600px';
		element.style.margin = '5em auto 0';

		if ( ! this.motionDevice ) {
			element.innerHTML = 'Your system does not seem to support motion detection.<br />' +
				'Find out how to obtain a motion detection device at <a href="http://leapmotion.com" style="color:#000">Leap Motion</a>.';
		}
		return element;
	},

	addGetMotionDeviceMessage: function ( parameters ) {

		var parent, id, element;

		parameters = parameters || {};

		parent = parameters.parent !== undefined ? parameters.parent : document.body;
		id = parameters.id !== undefined ? parameters.id : 'oldie';

		element = MotionDeviceDetector.getMotionDeviceErrorMessage();
		element.id = id;

		parent.appendChild( element );
	}
};