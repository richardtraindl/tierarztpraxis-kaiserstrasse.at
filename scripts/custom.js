

	function selMenueItemActiv(){
    var WinWidth = $( window ).width();
    if(WinWidth < 640){
      return;
    }

		var bodyid = 	$("body").attr("id");
		
		var divitem = $("#nav_" + bodyid);

		var subitems = divitem.children('div.submenu-item');
		subitems.addClass('aktiv');
				
		if(window.location.hash == ""){
			if( subitems.length == 0 ){
				divitem.find('a').first().addClass('nav-aktiv');
			}
			else{
				subitems.find('a').first().addClass('nav-aktiv');
			}
		}
		else{
			var stringarr = window.location.hash.split('#');
			
			$('nav a#nav_' + stringarr[1]).addClass("nav-aktiv");
		}			
	}

	function showSection(){
    var WinWidth = $( window ).width();
    if(WinWidth < 640){
      return;
    }

		$("section").removeClass("aktiv");
		
		if(window.location.hash == ""){
			$("section:first").addClass("aktiv");
		}
		else{
			var stringarr = window.location.hash.split('#');
			$("section#" + stringarr[1]).addClass("aktiv");
		}
	}

	function showSelSection(anker){
		var stringarr = anker.split('#');

		$("section").removeClass("aktiv");  
		$('section#' + stringarr[1]).addClass("aktiv");
		
		$("nav#mainnav a").removeClass("nav-aktiv"); 
		$('nav a#nav_' + stringarr[1]).addClass("nav-aktiv");
		/* 

		var item = $('a#nav_' + anker).parents('div.menu-item').first();
		var subitems = item.children('div.submenu-item');
		
		if(window.location.hash == ""){
			alert("+++");
			subitems.addClass('aktiv');
			$('a#nav_' + anker).addClass("nav-aktiv");
		}
		else{
			alert(":::" + window.location.hash.substr(1));
			subitems.addClass('aktiv');
			$('a#nav_' + window.location.hash.substr(1)).addClass("nav-aktiv");
		} */
	}
