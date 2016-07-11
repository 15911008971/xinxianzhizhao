function main($scope){
	$scope.reset={
		sex : '',
		sick : [], 
		food : [],
		dislike:[],
		rad:['','','','','']
	}
}
function start($scope){

}
function seg($scope,$rootScope){

}
function bing($scope,$rootScope){
	$rootScope.bing="list选择权"

}
function food($scope){

}
function nofood($scope){

	$scope.dog=false;
	$scope.dd=function(){
		$scope.dog=false;
	}
}
function ti($scope,$http){ 
	$http({
			method:"GET",
			url:"data.json",
			headers:{"Content-type":"application/x-www-form-urlencoded"}

		})
		.success(function(data){
			$scope.dataJson=data.data;
			$scope.success=true;
		})
	$scope.sub=function(){
		console.log($scope.$parent.reset)
		alert("提交成功")
	}
}
angular.module("text")
	.controller("start",start)
	.controller("seg",seg)
	.controller("bing",bing)
	.controller("food",food)
	.controller("nofood",nofood)
	.controller("ti",ti)
	.controller("main",main)
	
		 