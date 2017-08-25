document.addEventListener("plusready",function(){
	//导航位置地理位置获取效果
	plus.geolocation.getCurrentPosition(function(e){
//		plus.nativeUI.alert("当前所在城市为"+e.address.city,function(){},"","知道了");
		$(".geolocaltion").click(function(){
			if(confirm("将要打开第三方地图软件进行定位")){
				var dst = new plus.maps.Point(e.coords.latitude,e.coords.longitude); 
				var src = new plus.maps.Point(); 
				// 调用系统地图显示 
				plus.maps.openSysMap( dst, e.address.street, src );
			}
		})
		$(".geolocaltion span:first-child").text(e.address.street);	
		
	})
	//二维码显示隐藏效果
	$(".Ecode").click(function(){
		$("#QR").fadeToggle("fast")
	})
})