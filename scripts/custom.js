
  function selMenueItemActiv(){
    var bodyid = $("body").attr("id");
    var stringarr = bodyid.split('-');
    var divitem = $("#nav_" + stringarr[0]);

    var subitems = divitem.children('div.submenu-item');
    
    $('nav a#nav_' + stringarr[1]).addClass("nav-aktiv");
    
    // if(window.screen.width >= 640){
    subitems.addClass('aktiv');
    // }
  }

    function startSlider(){
      $('figure.image').nivoSlider({
          effect: 'fade',            // Specify sets like: 'fold,fade,sliceDown'
          slices: 15,                     // For slice animations
          boxCols: 0,                     // For box animations
          boxRows: 0,                     // For box animations
          animSpeed: 1000,                 // Slide transition speed
          pauseTime: 4000,                 // How long each slide will show
          startSlide: 0,                     // Set starting Slide (0 index)
          directionNav: true,             // Next & Prev navigation
          controlNav: false,                 // 1,2,3... navigation
          controlNavThumbs: false,         // Use thumbnails for Control Nav
          pauseOnHover: true,             // Stop animation while hovering
          manualAdvance: false,             // Force manual transitions
          prevText: '',                 // Prev directionNav text
          nextText: '',                 // Next directionNav text
          randomStart: false,             // Start on a random slide
          beforeChange: function(){},     // Triggers before a slide transition
          afterChange: function(){},         // Triggers after a slide transition
          slideshowEnd: function(){},     // Triggers after all slides have been shown
          lastSlide: function(){},         // Triggers when last slide is shown
          afterLoad: function(){}         // Triggers when slider has loaded
        });
    }
