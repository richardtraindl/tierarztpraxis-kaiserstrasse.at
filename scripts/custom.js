
  function selMenueItemActiv(){
    var bodyid = $("body").attr("id");
    var stringarr = bodyid.split('-');
    var divitem = $("#nav_" + stringarr[0]);

    var subitems = divitem.children('div.submenu-item');
    
    $('nav a#nav_' + stringarr[1]).addClass("nav-aktiv");
    
    if(window.screen.width >= 640){
        subitems.addClass('aktiv');
    }
  }
