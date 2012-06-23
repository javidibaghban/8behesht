$(window).load(function(){
	$('div.preloader').delay(3000).fadeOut(800);
});


$(function(){	
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
																	slideshow();
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


