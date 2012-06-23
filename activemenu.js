/*function activeMenu(){
document.getElementById('home').style.color = '#fff';
document.getElementById('home').style.borderBottomColor = '#fff';
document.getElementById('home').style.borderBottomStyle = 'solid';

document.getElementById('about').style.color = '#fff';
document.getElementById('about').style.borderBottomColor = '#fff';
document.getElementById('about').style.borderBottomStyle = 'solid';

document.getElementById('products').style.color = '#fff';
document.getElementById('products').style.borderBottomColor = '#fff';
document.getElementById('products').style.borderBottomStyle = 'solid';

document.getElementById('galler').style.color = '#fff';
document.getElementById('galler').style.borderBottomColor = '#fff';
document.getElementById('galler').style.borderBottomStyle = 'solid';

document.getElementById('contact').style.color = '#fff';
document.getElementById('contact').style.borderBottomColor = '#fff';
document.getElementById('contact').style.borderBottomStyle = 'solid';
};
*/
var last;
$(function(){
	
	$('div.menu li a').click(function(){
		if(last ) $(last).removeClass('active').animate({'color':'#ccc'},300);
		
		$(this).addClass('active').animate({'color':'#FFF'},300);
		
		last=this;
	});

});
