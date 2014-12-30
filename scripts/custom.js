
  function selMenueItemActiv(){
    var bodyid = 	$("body").attr("id");
    
    var divitem = $("#nav_" + bodyid);

    var subitems = divitem.children('div.submenu-item');
    
    if(window.screen.width < 640){
      if(window.location.hash == ""){
        divitem.find('a').first().addClass('nav-aktiv');
      }
      else{
        var stringarr = window.location.hash.split('#');
        
        $('nav a#nav_' + stringarr[1]).addClass("nav-aktiv");
      }

      return;
    }

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
    if(window.screen.width < 640){
      return;
    }
    
    var varsection;

    $("section").removeClass("aktiv");
    
    if(window.location.hash == ""){
      varsection = $("section:first");
      varsection.addClass("aktiv");
    }
    else{
      var stringarr = window.location.hash.split('#');
      varsection = $("section#" + stringarr[1]);
      varsection.addClass("aktiv");
    }
  }

  function showSelSection(anker){
    var varsection;
    var stringarr = anker.split('#');

    $("section").removeClass("aktiv"); 
    varsection = $('section#' + stringarr[1]);
    $(varsection).addClass("aktiv");

    $("nav#mainnav a").removeClass("nav-aktiv"); 
    $('nav a#nav_' + stringarr[1]).addClass("nav-aktiv");
  }
