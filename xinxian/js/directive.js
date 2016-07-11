function onepage(){
	return {
		link:function(scope,element){
			var p=element.parent();
			element.height($(p).height());
			element.parents(".container").find(".ce").find("h2").html("小鲜测试")
		}
	}
}
function segpage(){
	return {
		link:function(scope,element){
			var p=element.parents(".wrap");
			element.height($(p).height());
			element.find("a").hide();
			element.find("input").on("click",function(){
				seg=$(this).parent().siblings("label").html();
				scope.$parent.reset.sex=seg
				element.find("a").show();
			})
			element.parents(".container").find(".ce").find("h2").html("基本信息")
		}
	}
}
function bingpage(){
	return {
		link:function(scope,element){
		
			var p=element.parents(".wrap");
			element.height($(p).height());
			element.find("a").hide();
			element.find("input").on("click",function(){
				element.find("#you").prop('checked') && element.find("div").show() && element.find("a").hide();
				element.find("#wu").prop('checked') && element.find("div").hide() && element.find("a").show();
				element.find("div ul li").on("click",function(){
					var txt=$(this).text()
					$(this).toggleClass("bg");
					$(this).hasClass('bg')?
					scope.$parent.reset.sick.push(txt):
					scope.$parent.reset.sick.splice(scope.$parent.reset.sick.indexOf(txt),1);
					element.find("a").show();
				})
			})
			element.parents(".container").find(".ce").find("h2").html("基本信息")
		}
	}
}
function foodpage(){
	return {
		link:function(scope,element){
			
			var p=element.parents(".wrap");
			element.height($(p).height());
			element.find("a").hide();
			element.find("input").on("click",function(){
				element.find("#you").prop('checked') && element.find("div").show() && element.find("a").hide();
				element.find("#wu").prop('checked') && element.find("div").hide() && element.find("a").show();
				element.find("div ul li").on("click",function(){
					var txt=$(this).text()
					$(this).toggleClass("bg");
					$(this).hasClass('bg')?
					scope.$parent.reset.food.push(txt):
					scope.$parent.reset.food.splice(scope.$parent.reset.food.indexOf(txt),1);
					element.find("a").show();
				})
			})
			element.parents(".container").find(".ce").find("h2").html("基本信息")
		}
	}
}
function nofoodpage(){
	return {
		link:function(scope,element){
			
			var p=element.parents(".wrap");
			element.height($(p).height());	
			element.parents(".container").find(".ce").find("h2").html("基本信息");
			$('.fiveji').on('click',function(){

				$('input').each(function(i,v){
					console.log(v)
					if($(this).prop('checked')){
						var val=$(v).val();
						scope.$parent.reset.dislike.push(val)
					}
					

				})
				
			})	
		}
	}
}
function tipage(){
	return {
		link:function(scope,element){
		/*	console.log(scope.$parent.reset)*/
			var p=element.parents(".wrap");
			element.css("padding-top",$(p).height()*0.1)
			element.height($(p).height()*0.9);
			element.find("a").hide();
			var timer=setInterval(function(){
				scope.success && 
				element.find("li").on("click","input",function(){
					$(this).parent().addClass("bg").siblings().removeClass("bg");
					var len=element.find(".bg").length,
						idx=$(this).parents('.s').index();
					
						scope.$parent.reset.rad[idx]=$(this).val();
						
						
					if(len>=5){
						element.find("a").show();
					}
				//$(this).find("input").prop("checked") && i++;
				}),
				clearInterval(timer);
			},200)
			
			element.parents(".container").find(".ce").find("h2").html("您感觉？")
		}
	}
}
angular.module("text")
	.directive("onePage",onepage)
	.directive("segPage",segpage)
	.directive("bingPage",bingpage)
	.directive("foodPage",foodpage)
	.directive("nofoodPage",nofoodpage)
	.directive("tiPage",tipage)