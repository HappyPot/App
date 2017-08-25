document.addEventListener("plusready",function(){
	detailPrice();
	navPosition();
	goOrder();
	function detailPrice(){
		$(window).on("scroll",function(){
			var height = $(document).scrollTop();
			if(height > 185){
				$(".detail_price").addClass("detail_position");
				$("#important").css("display","block");
			}else if(height <= 185){
				$(".detail_price").removeClass("detail_position");
				$("#important").css("display","none");
			}
		})
	}
	function navPosition(){
		$(window).on("scroll",function(){
			if($(document).scrollTop() > 140){
				$("nav").fadeOut("fast");
			}else{
				$("nav").fadeIn("fast");
			}
		})
	}
	function goOrder(){
		$(".detail_price_2 span").click(function(){
			window.location.href="order.html";
		})
	}
})
