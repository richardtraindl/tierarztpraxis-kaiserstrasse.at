

	function debug( msg ){
	   if( window.console )
		 window.console.log( msg );
	}

	function showsel(anker){
	   debug( "enter showsel: " + anker );

		$("section").removeClass("aktiv");  
		$('section#' + anker).addClass("aktiv");
	 
		$("div#subnav a").removeClass("nav-active");  
		$('div#subnav a#nav_' + anker).addClass("nav-active");	

	  debug( "leave showsel: " + anker );	
	}

