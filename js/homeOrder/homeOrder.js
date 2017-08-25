document.addEventListener("plusready",function(){
	
})
var app = angular.module("myapp",[]);
app.controller("homeOrder",["$scope",function($scope){
	$scope.myVar = false;
	$scope.moreText = "更多";
	$scope.src = "img/user_down_16.jpg";
	$scope.more = function(){
		if($scope.myVar == false){
			$scope.myVar = true;
			$scope.moreText = "收起";
			$scope.src = "img/user_up_16.jpg";
		}else{
			$scope.myVar = false;
			$scope.moreText = "更多";
			$scope.src = "img/user_down_16.jpg";
		}
		
	}
}])