$(function(){
	
	$(document).ready(function() { $('div.pic1').delay(0).hide().fadeIn(300); } );
    $(document).ready(function() { $('div.pic2').delay(150).hide().fadeIn(300); } );	
    $(document).ready(function() { $('div.pic3').delay(300).hide().fadeIn(300); } );	
    $(document).ready(function() { $('div.pic4').delay(450).hide().fadeIn(300); } );	
    $(document).ready(function() { $('div.pic5').delay(600).hide().fadeIn(300); } );
    $(document).ready(function() { $('div.pic6').delay(750).hide().fadeIn(300); } );	
    $(document).ready(function() { $('div.pic7').delay(900).hide().fadeIn(300); } );	
    $(document).ready(function() { $('div.pic8').delay(1050).hide().fadeIn(300); } );	
    $(document).ready(function() { $('div.pic9').delay(1200).hide().fadeIn(300); } );
    $(document).ready(function() { $('div.pic10').delay(1350).hide().fadeIn(300); } );	
    $(document).ready(function() { $('div.pic11').delay(1500).hide().fadeIn(300); } );
    $(document).ready(function() { $('div.pic12').delay(1650).hide().fadeIn(300); } );	
    $(document).ready(function() { $('div.pic13').delay(1800).hide().fadeIn(300); } )
    $(document).ready(function() { $('div.pic14').delay(1950).hide().fadeIn(300); } );
    $(document).ready(function() { $('div.pic15').delay(2100).hide().fadeIn(300); } );
	$(document).ready(function() { $('div.pic16').delay(2100).hide().fadeIn(300); } );
	$(document).ready(function() { $('div.pic17').delay(2100).hide().fadeIn(300); } );
	$(document).ready(function() { $('div.pic18').delay(2100).hide().fadeIn(300); } );
	$(document).ready(function() { $('div.pic19').delay(2100).hide().fadeIn(300); } );
	$(document).ready(function() { $('div.pic20').delay(2100).hide().fadeIn(300); } );
	
	
	$('div.libox').hover(function(){
		$('div.flash',this).stop().fadeTo(40,0.3).fadeTo(200,0);
		$('#gallery a').lightBox();	
		},function(){
			$('div.flash',this).stop().fadeTo(200,0);
		});
	
});