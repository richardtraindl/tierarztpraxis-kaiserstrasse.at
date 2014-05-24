

	function selMenueItemActiv(){
		var BodyId = 	$("body").attr("id");
		$('nav#mainnav a[href="' + BodyId + '.html"]').addClass('nav-active');
	}

	function showSection(){
		// $('nav a').attr('href', '#');
		$("section").removeClass("aktiv");
		$("section:first").addClass("aktiv");
		// if(window.location.hash == ""){
		// 	$("section:first").addClass("aktiv");
		// }
		// else{
			// $("section" + window.location.hash).addClass("aktiv");
			// $("nav a").removeClass("nav-active");  
			//  $('nav a#nav_' + window.location.hash.substr(1)).addClass("nav-active");
		// }
	}

	function showSelSection(anker){
		$("section").removeClass("aktiv");  
		$('section#' + anker).addClass("aktiv");
	 
		$("nav#mainnav a").removeClass("nav-active");  
		$('nav#mainnav a#nav_' + anker).addClass("nav-active");	
	}
