$(function(){
	$(".order_title span:first-child").click(function(){
			window.location.href="fooddetails.html";
	});
	$(".order_sumbit").click(function(){
			window.location.href="pay.html";
	});
})
var app = angular.module("myapp",[]);
app.controller("order",["$scope",function($scope){
	$scope.count = 1;
	$scope.price = 97;
	$scope.rPrice = 12;
	$scope.add = function(){
		if($scope.count >= 1){
			$scope.flag=2;
			$scope.count ++;
		}
	}
	$scope.reduce = function(){
		if($scope.count > 1){
			$scope.count --;
		}else{
			$scope.flag=1;
		}
	}
}])