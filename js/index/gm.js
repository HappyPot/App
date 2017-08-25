$(function(){
	setInterval(function(){
		if($(".display_1").css("display") == "none"){
			$(".display_1").fadeIn(4000);
			$(".display").css("display","none");
		}else{
			$(".display").fadeIn(4000);
			$(".display_1").css("display","none");
		}
	},9000)
})
	