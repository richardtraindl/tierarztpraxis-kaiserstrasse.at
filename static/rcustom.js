

  function showSection(site, sectionid){

    var oldsectionid = $('section:visible').first().attr("id");
    var oldfigureid = $('section:visible').first().children("figure[id^='nivoslider']").first().attr('id');

    if(oldsectionid && oldfigureid){
      stopSlider(oldsectionid, oldfigureid);
    }

    // navigation
    if($('#desktop-nav div[id="nav_' + sectionid + '"]').length > 0){
       $('#desktop-nav div[id="nav_' + site + '"]').children('div.submenu-item').removeClass('nicht-aktiv');
    }
    else{
      $('#desktop-nav div[id="subnav_' + sectionid + '"]').removeClass('nicht-aktiv');
      $('#desktop-nav div[id="subnav_' + sectionid + '"]').siblings().removeClass('nicht-aktiv');
    }
    $('#desktop-nav a').removeClass('nav-aktiv');
    $('#desktop-nav div[id="subnav_' + sectionid + '"]').children('a').addClass('nav-aktiv');

    // content
    $('section').addClass('nicht-aktiv');
    $('section[id="' + sectionid + '"]').removeClass('nicht-aktiv');

    var figureid = $('section#' + sectionid).children('figure[id^="nivoslider"]').first().attr('id');
    if(figureid){
      if($("#" + sectionid + " figure#" + figureid).data('nivoslider')){
        startSlider(sectionid, figureid);
      }
      else{
        initSlider(sectionid, figureid);
      }
    }

    return false;
  }


  function startSlider(sectionid, figureid){
    try{
      $("#" + sectionid + " figure#" + figureid).data('nivoslider').start();
    }
    catch(err) {
      console.log("startSlider Meldung/Fehler: "+ err.message);
    }
  }


  function stopSlider(sectionid, figureid){
    try{
      $("#" + sectionid + " figure#" + figureid).data('nivoslider').stop();
    }
    catch(err) {
      console.log("stopSlider Meldung/Fehler: "+ err.message);
    }
  }


  function initSlider(sectionid, figureid){
    console.log("initSlider");
    $("#" + sectionid + " figure#" + figureid).nivoSlider({
      effect: 'fade',             // Specify sets like: 'fold,fade,sliceDown'
      slices: 15,                 // For slice animations
      boxCols: 0,                 // For box animations
      boxRows: 0,                 // For box animations
      animSpeed: 1000,            // Slide transition speed
      pauseTime: 4000,            // How long each slide will show
      startSlide: 0,              // Set starting Slide (0 index)
      directionNav: true,         // Next & Prev navigation
      controlNav: false,          // 1,2,3... navigation
      controlNavThumbs: false,    // Use thumbnails for Control Nav
      pauseOnHover: false,        // Stop animation while hovering
      manualAdvance: false,       // Force manual transitions
      prevText: '',               // Prev directionNav text
      nextText: '',               // Next directionNav text
      randomStart: false,         // Start on a random slide
      beforeChange: function(){}, // Triggers before a slide transition
      afterChange: function(){},  // Triggers after a slide transition
      slideshowEnd: function(){}, // Triggers after all slides have been shown
      lastSlide: function(){},    // Triggers when last slide is shown
      afterLoad: function(){}     // Triggers when slider has loaded
    });
  }


  function initMap(){
    var map = L.map('anfahrtsplan').setView([48.20004, 16.34072], 16);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var circle = L.circle([48.20004, 16.34072], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.2,
      radius: 30
    }).addTo(map);
  }


  function getDeviceState(){
    // Create the state-indicator element
    var indicator = document.createElement('div');
    indicator.className = 'state-indicator';
    document.body.appendChild(indicator);

    var index = parseInt(window.getComputedStyle(indicator).getPropertyValue('z-index'), 10);

    var states = {
        2: 'small-desktop',
        3: 'tablet',
        4: 'phone'
    };

    return states[index] || 'desktop';
  }


  function isMobile() {
    var match = window.matchMedia || window.msMatchMedia;
    if(match) {
        var mq = match("(pointer:coarse)");
        return mq.matches;
    }
    return false;
  }
