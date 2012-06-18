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




$('#train').cycle({ 
    fx:      'custom', 
    cssBefore: {  
        left: 475,  
        top:  175,  
        width: 0,  
        height: 0,  
        opacity: 1, 
        display: 'block' 
    }, 
    animOut: {  
        opacity: 0  
    }, 
    animIn: {  
        left: 0,  
        top: 0,  
        width: 950,  
        height: 350  
    }, 
    cssAfter: {  
        zIndex: 0 
    }, 
    delay: -3000 
});









/*$(function(){
	var last=0;
	var btns=$('div.slider ul.btns a');
	var total=btns.length;
	var active = 0;
	
	function gotoSlide(n){
		
		if(n<0) n = total-1;
		if(n>=total) n = 0;
		active=n;
		left=-950* n;
		/*$('div.train').animate({
			left:left+'px'
		},500,'linear');*/
		
		/*btns.eq(last).removeClass('active').css({
			backgroundPosition:'0 0'},300);
		
		btns.eq(n).addClass('active').css({
			backgroundPosition:'-6px 0'},300);
		last=n;
	}
	
	btns.click(function(){
		gotoSlide(btns.index(this));
	});
	
	$('div.slider span.prev').click(function(){
		gotoSlide(active-1);	
	});
	$('div.slider span.next').click(function(){
		gotoSlide(active+1);	
	});
	
	
	(slideshow=function (){
		$('.img8').fadeOut(3000,null,function(){
			$('.img7').fadeOut(3000,null,function(){
				$('.img6').fadeOut(3000,null,function(){
					$('.img5').fadeOut(3000,null,function(){
						$('.img4').fadeOut(3000,null,function(){
							$('.img3').fadeOut(3000,null,function(){
								$('.img2').fadeOut(3000,null,function(){
									$('.img1').fadeIn(3000,null,function(){
										$('.img2').fadeIn(3000,null,function(){
											$('.img3').fadeIn(3000,null,function(){
												$('.img4').fadeIn(3000,null,function(){
													$('.img5').fadeIn(3000,null,function(){
														$('.img6').fadeIn(3000,null,function(){
															$('.img7').fadeIn(3000,null,function(){
																$('.img8').fadeIn(3000,null,function(){
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
});*/