$(function(){
//			$(window).scroll(function() {
//				if($(document).height() == $(window).height() + $(window).scrollTop()){
//					$('#nav_top').fadeIn("slow");
//				}
//			});

			$('#nav_top').click(function() {
				$('body').animate({
					"scrollTop": 0},
					"3000", function() {
//					$('#nav_top').fadeOut();
				});
			});			
		})