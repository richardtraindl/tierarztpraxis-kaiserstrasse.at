
	
var richie_slider_new = function( id, opts ) 
{
		var settings = $.extend({
			width: 600,
			height: 400,
			speed: 2500,
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
			width: settings.width, 
			height: settings.height,
			position: 'relative',
			overflow: 'hidden'
		});

		$images = $sliderDiv.find( 'img' );


		$images.css({
			position: 'absolute',
			width: settings.width,
			height: settings.height
		});


		slidesCnt = $images.length; 
		slideCur = 0;

		keepRunning = true;


		$images.hide();
		$images.eq( slideCur ).show();


		$images.click( _toggle );

		setInterval( _next, settings.interval ); 
		}


		_init( id, opts );


		return {
			next:		function() { _next(); },
			back:		function() { _back(); },
			resume:	function() { _resume(); },
			pause:	function() { _pause(); },
			toggle:	function() { _toggle(); }
		};
};

