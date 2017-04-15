$(document).ready(function() {

	winHeight = window.innerHeight;

	$(function(){
 		$('#viewer').css({ height: winHeight });
  		$(window).resize(function(){
    	$('#viewer').css({ height: winHeight });
 	});
	});

	function randomised() {
		return Math.random() * 50 + "%";
	};

	setInterval(function() {
		$('.square').animate({top: randomised(), left: randomised()}, 5000, 'swing');
		$('.circle').animate({top: randomised(), right: randomised()}, 7000, 'swing');
		$('.triangle').animate({bottom: randomised(), left: randomised()}, 9000, 'swing');
	});

	function changeContents(section) {
		$('.contents').children().fadeOut('fast');
		$(section).delay('fast').fadeIn('fast');
	};


	$('#aboutButton').click(function(){
		changeContents('#aboutSection');
	})

	$('#projectButton').click(function(){
		changeContents('#projectSection');
	})

	$('#contactButton').click(function(){
		changeContents('#contactSection');
	})


});