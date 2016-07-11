function config($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/start")
	$stateProvider
	.state("start",{
		url:"/start",
		templateUrl : "./views/start.html",
		controller:"start"
	})
	.state("seg",{
		url:"/seg",
		templateUrl : "./views/seg.html",
		controller:"seg"
	})
	.state("bing",{
		url:"/bing",
		templateUrl : "./views/bing.html",
		controller:"bing"
	})
	.state("food",{
		url:"/food",
		templateUrl : "./views/food.html",
		controller:"food"
	})
	.state("nofood",{
		url:"/nofood",
		templateUrl : "./views/nofood.html",
		controller:"nofood"
	})
	.state("ti",{
		url:"/ti",
		templateUrl : "./views/ti.html",
		controller:"ti"
	})
	
}
angular
	.module("text")
	.config(config)
	.run(function($rootScope,$state){
		$rootScope.$state=$state;
	})