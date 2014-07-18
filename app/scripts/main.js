'use strict';

$('.home-boxes li').click(function () {
	$('.box').addClass('animation-target');
});


var winWidth = window.innerWidth;
var winHeight = window.innerHeight;



//$('.home-boxes li').width(winWidth / 3);
$('.home-boxes li').height(winHeight / 3);



for(var i = 0 ; i <= $('.home-boxes li').length ; i++) {
	//$('.home-boxes li').css('background', 'red');
}

$('.home-boxes li').each(function(i) {
	$(this).css({'background-color': 'rgb('+i*5+','+ i*5+',' + i*5+')' });
})

$('.navigation').click(function(){
	$(this).toggleClass('is-open');
	$('body').toggleClass('nav-open');
})