$(function(){
	var last=0;
	var btns=$('div.slider ul.btns a');
	var total=btns.length;
	var active = 0;
	
	function gotoSlide(n){
		
		if(n<0) n = total-1;
		if(n>=total) n = 0;
		active=n;
		left=-950* n;
		$('div.train').animate({
			left:left+'px'
		},500,'linear');
		
		btns.eq(last).removeClass('active').css({
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