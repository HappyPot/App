//		倒计时
		var zero=function(num){
			return num<10?("0"+num):num;
		}
		window.setInterval(
			function(){
				var date1=new Date();
				var date2=new Date("2050/10/1");
				var date3=date2.getTime()-date1.getTime();
				var days=Math.floor(date3/(24*3600*1000));
				var leave1=date3%(24*3600*1000);
				var hours=Math.floor(leave1/(3600*1000));
				var leave2=leave1%(3600*1000);
				var minutes=Math.floor(leave2/(60*1000));
				var leave3=leave2%(60*1000);
				var seconds=Math.round(leave3/1000);
				var div=document.getElementById("time");
//				div.innerHTML=zero(hours)+"小时"+zero(minutes)+"分钟"+zero(seconds)+"秒";
				$(".sales_time").eq(0).text(zero(hours));
				$(".sales_time").eq(1).text(zero(minutes));
				$(".sales_time").eq(2).text(zero(seconds));
			},1000
		)