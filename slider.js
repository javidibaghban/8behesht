/*$(function(){
	var last=0;
	var btns=$('div.slider ul.btns a');
	var total=btns.length;
	var active = 0;
	/*
	function gotoSlide(n){
		
		if(n<0) n = total-1;
		if(n>=total) n = 0;
		active=n;
		left=-950* n;
		$('div.train').animate({
			left:left+'px'
		},500,'linear');*/
		/*$('div.train > div').fadeOut(2000,'linear',function(){});*/
	/*	btns.eq(last).removeClass('active').css({
			backgroundPosition:'0 0'},300);
		
		btns.eq(n).addClass('active').css({
			backgroundPosition:'-6px 0'},300);
		last=n;
	}
	setInterval(function() {
      gotoSlide(active+1);
	}, 3000);
	btns.click(function(){
		gotoSlide(btns.index(this));
	});
	
	$('div.slider span.prev').click(function(){
		gotoSlide(active-1);	
	});
	$('div.slider span.next').click(function(){
		gotoSlide(active+1);	
	});
	
});
*/

$(window).load(function(){
	$('div.preloader').delay(2000).fadeOut(500);
});


$(function(){	
	(slideshow=function (){
		$('.img8').fadeOut(2000,null,function(){
			$('.img7').fadeOut(2000,null,function(){
				$('.img6').fadeOut(2000,null,function(){
					$('.img5').fadeOut(2000,null,function(){
						$('.img4').fadeOut(2000,null,function(){
							$('.img3').fadeOut(2000,null,function(){
								$('.img2').fadeOut(2000,null,function(){
									$('.img1').fadeIn(2000,null,function(){
										$('.img2').fadeIn(2000,null,function(){
											$('.img3').fadeIn(2000,null,function(){
												$('.img4').fadeIn(2000,null,function(){
													$('.img5').fadeIn(2000,null,function(){
														$('.img6').fadeIn(2000,null,function(){
															$('.img7').fadeIn(2000,null,function(){
																$('.img8').fadeIn(2000,null,function(){
																	slideshow(gotoSlide());
																})
															})
														})
													})
												})
											})
										})
									})
								})  
							})
						})
					})
				})
			})
		})
	})();
});