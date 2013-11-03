	var DS = DS || {};
	var ADO = ADO || {};

	DS.converter = new Showdown.converter();	
	
	DS.basic = 'border: 3px double #eee; overflow-x: hidden; overflow-y: auto; position: absolute; ';
	DS.position = 'position: absolute;';

	DS.horzMnu = 'left: 0; width: 20%;';
	DS.horzIfr = 'left: 25%; margin: auto; right: 20%; width: 55%;' ;
	DS.horzRdm = 'left: 25%; margin: auto; right: 20%; ';
	DS.horzLnk = 'right: 0; width: 18%; ';

	DS.height = ' height: ' + (window.innerHeight * 0.40) + 'px;';
	DS.heightFull = ' height: ' + (window.innerHeight * 0.90) + 'px;';

	DS.top1 = ' top: ' + (window.innerHeight * 0.05) + 'px;';
	DS.top2 = ' top: ' + (window.innerHeight * 0.55) + 'px;';

	DS.menu.style.cssText = DS.basic + DS.heightFull + DS.horzMnu + DS.top1;

	DS.ifr = document.body.appendChild( document.createElement( 'iframe' ) );
	DS.ifrStyle = DS.basic + DS.height + DS.top1 + DS.horzIfr;

	DS.readme = document.body.appendChild( document.createElement( 'div' ) );
	DS.readmeStyleFull = DS.basic + DS.heightFull + DS.top1 + DS.horzRdm;
	DS.readmeStyle = DS.basic + DS.height + DS.top2 + DS.horzRdm;

	DS.runApp = document.body.appendChild( document.createElement( 'div' ) );
	DS.runApp.style.cssText = DS.position + DS.top1 + DS.horzLnk;

	DS.viewSource = document.body.appendChild( document.createElement( 'div' ) );
	DS.viewSource.style.cssText = DS.position + DS.top2 + DS.horzLnk;

	if ( !location.hash ) {
		displayPage( 'introduction.md', intro);
	} else {
		var str = location.hash.split('#');
		if ( str.length < 4 ) {
			displayPage( str[1], null )  // add id's...
		} else {
			displayOverview( str[1], str[2], null )
		}
	}

	function displayPage( fname, element ) {
		DS.ifr.style.cssText = 'display: none;';

		DS.readme.innerHTML = DS.converter.makeHtml( requestFile( fname ) );
		DS.readme.style.cssText = DS.readmeStyleFull;

		DS.runApp.innerHTML = '<h2><a href="https://github.com/jaanga/gestification/tree/gh-pages/cookbook" target="_blank">' +
			'View<br>Cookbook<br>source code<br> on GitHub<br>in <br> new tab</a></h2>';
		DS.viewSource.innerHTML = '';

		clearMenuHighlights( element );

		location.hash = fname + '#';

		if ( ADO.doodle ) {
			ADO.doodle.style.display = 'block';
			ADO.showDoodle = true;
			animate();
		}
	}

	function displayOverview( folder, fname, element) {
		DS.ifr.src = folder + fname;
		DS.ifr.style.cssText = DS.ifrStyle;

		DS.readme.innerHTML = DS.converter.makeHtml( requestFile( folder + 'readme.md' ) );
		DS.readme.style.cssText = DS.readmeStyle;

		DS.runApp.innerHTML = '<h2><a href="' + folder + fname + '" target="_blank">Run<br>HTML app<br>in<br>new tab</a></h2>';

		DS.viewSource.innerHTML = '<h2><a href="https://github.com/jaanga/gestification/tree/gh-pages/cookbook/' + folder + '" target="_blank">' +
			'View<br> source code<br> on GitHub<br>in <br> new tab</a></h2>';

		clearMenuHighlights( element );

		location.hash = folder + '#' + fname + '#';

		if ( ADO.doodle ) {
			ADO.showDoodle = false;
			ADO.doodle.style.display = 'none';
		}
	}

	function clearMenuHighlights( element ) {
		var paragraphs = document.getElementsByTagName('p');
		for (var i = 0, len = paragraphs.length; i < len; i++) {
			paragraphs[i].style.backgroundColor='';
		}
		if ( !!element ) element.style.backgroundColor='#edd';
	}

	function requestFile( fname ) {
		var xmlHttp = null;
		xmlHttp = new XMLHttpRequest();
		xmlHttp.open( 'GET', fname, false );
		xmlHttp.send( null );
		return xmlHttp.responseText;
	}
