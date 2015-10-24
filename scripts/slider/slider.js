	$.fn.fadeSlideShow = function(options){
		return this.each(function(){
			settings = $.extend({
				width: 512,
				height: 512,
				speed: 1000,
				interval: 5000 }, options);

			var sliderDiv = this;
			var $sliderDiv = $( this );

			$sliderDiv.css({
				width: settings.width, 
				height: settings.height,
				position: 'relative', 
				overflow: 'hidden'
			});

			var $images = $sliderDiv.find( 'img' );

			$images.css({
				position: 'absolute', 
				width: settings.width,
				height: settings.height
			});

			var slidesCnt = $images.length;
			var slideCur = 0;

			var keepRunning = true;

			$images.hide();
			$images.eq( slideCur ).show();

		var resume = function(){
				keepRunning = true;
			};

			var slides_next_step = function(){
				if( keepRunning === true ){
					var $imageCur = $images.eq( slideCur );
					var $imageNxt = $images.eq( (slideCur+1) % slidesCnt );

					$imageCur.fadeOut( settings.speed );
					$imageNxt.fadeIn( settings.speed );

					slideCur = (slideCur+1) % slidesCnt;
				}
			};

			$images.click( function(){
				keepRunning = !keepRunning;
				if(keepRunning == false){
					$('#btn-resume').removeClass('run');
				}
				else{
					$('#btn-resume').addClass('run');
				}
			//  slides_next_step();
			});

			setInterval( slides_next_step, settings.interval);
		});
	};
