

	function selMenueItemActiv(){
		var BodyId = 	$("body").attr("id");
		$('nav#mainnav a[href="' + BodyId + '.html"]').addClass('mainnav-active');
	}

	function showSection(){
		$('div#subnav a').attr('href', '#');
		$("section").removeClass("aktiv");
		if(window.location.hash == ""){
			$("section:first").addClass("aktiv");
		}
		else{
			$("section" + window.location.hash).addClass("aktiv");
			$("div#subnav a").removeClass("nav-active");  
			$('div#subnav a#nav_' + window.location.hash.substr(1)).addClass("nav-active");
		}
	}

	function showSelSection(anker){
		$("section").removeClass("aktiv");  
		$('section#' + anker).addClass("aktiv");
	 
		$("div#subnav a").removeClass("nav-active");  
		$('div#subnav a#nav_' + anker).addClass("nav-active");	
	}
