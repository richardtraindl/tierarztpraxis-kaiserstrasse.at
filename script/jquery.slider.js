
	
var richie_slider_new = function( id, opts ) 
{
    var settings = $.extend({
     		width: 600,
     		height: 400,
			speed: 1000,
			interval: 5000
	 	}, opts );
 
 	var $sliderDiv, $images; 
	
	var slidesCnt, slideCur, keepRunning;

	
	function _toggle()
	{
	   keepRunning = !keepRunning;
	}
	
	function _pause()
	{
	   keepRunning = false;
	}
	
	function _resume()
	{
	   keepRunning = true;
	   _next();
	}

	function _step( dir )
	{
	  var $imageCur = $images.eq( slideCur );
	  var $imageNxt = $images.eq( (slideCur+dir) % slidesCnt );

      $imageCur.fadeOut( settings.speed ); 
	  $imageNxt.fadeIn( settings.speed );
			
	  slideCur = (slideCur+dir) % slidesCnt;
	}
	
	function _next() 
	{
	  if( keepRunning === false )
	    return;

	  _step( 1 );
	}

	function _back() 
	{
	  if( keepRunning === false )
	    return;

	  _step( -1 );
	}
	
	
    function _init( id, opts )	
	{
	  $sliderDiv = $( id );
	
	  $sliderDiv.css({
			width: settings.width, // Die #slideshow erhält die Weiten Werte aus der vom User angegebenen Option oder Alternativ die Standardwerte
			height: settings.height, // Die #slideshow erhält die Höhen Werte aus der vom User angegebenen Option oder Alternativ die Standardwerte
			position: 'relative', // Die #slideshow erhält die position Angabe relative
			overflow: 'hidden' // und overflow hidden
		});

	  $images = $sliderDiv.find( 'img' );

		
		// Hier werden Styles auf das nächste Child Element der Id #slideshow angewendet, "this" in diesem Beispiel #slideshow
                // wie oben bereits erwähnt
		$images.css({
			position: 'absolute', // Die Elemente erhalten alle ein position absolute und überlagern sich somit
			width: settings.width, // wieder die Weiten
			height: settings.height // und Höhen Angaben aus den Optionen. Entweder vom Nutzer angegeben oder Standards
		});
 
		
	  slidesCnt = $images.length; 
	  slideCur = 0;
		
	  keepRunning = true;

	  
	  $images.hide();
	  $images.eq( slideCur ).show();
				
	   
	  $images.click( _toggle );
	
	
       // Wir setzen den Interval der in dem, in den Optionen angegebenen Zeitabstand
       // die enthaltene Funktion immer wieder ausführt - In unserem Beispiel alle 5 Sekunden
      
	  // alle x (5) Sekunden wird diese Funktion erneut ausgeführt					
	  setInterval( _next, settings.interval ); 
	}


    _init( id, opts );

  
    return {
      next:    function() { _next(); },
	  back:    function() { _back(); },
	  resume:  function() { _resume(); },
      pause:   function() { _pause(); },
      toggle:  function() { _toggle(); }
    }; 
};
