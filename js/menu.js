$(document).ready(main);
var start = 1;
function main(){
	$(".menu_bar").click(function(){
		if(start == 1){
			$('nav').animate({
				left: '0'
			});
			start = 0;
		} else {
			start = 1;
			$("nav").animate({
				left: '-100%'
			});
		}
	});
};
