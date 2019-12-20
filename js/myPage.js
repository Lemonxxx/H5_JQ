$(function(){
	// 获取当前屏幕的高度
	var k = $(window).height();
	// var flag = false; //控制动画的
	// 继续向下一屏
	$(".next").click(function(event){
		$.fn.fullpage.moveSectionDown();
	});
	$('#fullpage').fullpage({//fullpage 方法里面接受json对象的形式 

		//是否使用项目导航
		navigation:true, 
		//位置
		//navigationPosition: "left",
		//是否滚回顶部
		loopBottom: true,
		//是否支持键盘导航默认true keyboardScrolling
		
		//回调函数
		afterLoad: function(anchorLink,index){
			if(index == 2){
				$(".next").fadeOut();

						//方块进来
				$(".search").show().animate({"right":370},1500,"easeOutBack",function(){
						//显示文字
						$(".search_words").animate({"opacity":1},500,function(){

							$(".search").hide();
							//图片缩小走

							$(".search-02-1").show().animate({"height":30,"right":250,"bottom":452},1000);
							//等比例缩放
							//同时沙发放大
							$(".goods-02").show().animate({"height":218},1000)
							//同时文字透明度变化
							$(".words-02").animate({"opacity":1},500)
								$(".next").fadeIn();
						})


				});
			}

		},
		
		//刚开始滚动屏幕就触发的回调函数onleave  index,nextIndex,direction
		onLeave:function(index,nextIndex,direction){
			$(".next").fadeOut();
			if(index == 2 &&nextIndex == 3 ){
				//二屏到三屏时，沙发下掉，白色盒子显示  沙发要走的距离是屏幕高度-250
				$(".shirt-02").show().animate({"bottom":-(k-250),"width":207,"left":260},2000,function(){
					$(".img-01").animate({"opacity":1},500,function(){

						$(".next").fadeIn();

					})
				});
				$(".cover").show();

			}

			if(index == 3 &&nextIndex == 4 ){

				$(".shirt-02").hide();
					// 向下的距离：从0 -50-（k-250）
				$(".t1f").show().animate({"bottom":-((k-250)+50),"left":260},2000,function(){
					
					$(this).hide();
					$(".car-img").show();
					$(".car").animate({"left":"150%"},3000,"easeInElastic",function(){

						$(".note").show();
						$(".note-img").animate({"opacity":1},500);
						$(".words-04-a").animate({"opacity":1},500,function(){
							$(".next").fadeIn();

						});

					});//加入缓冲动画-----时间的后面---回调前面
				});

			}

			if(index == 4 &&nextIndex == 5 ){
					//小手上来
					$(".hand-05").animate({"bottom":0},2000,function(){
						//鼠标显示
						// $(".mouse-05-a").fadeIn();  //fadeIn是显示的意思；
						$(".mouse-05-a").animate({"opacity":1});
						//沙发掉下来
						$(".t1f-05").show().animate({"bottom":70},1000,function(){
							//单子上走
							$(".order-05").animate({"bottom":390},function(){
								$(".words-05").addClass("words-05-a");
								$(".next").fadeIn();

							});

						})
					});

			}	
			if(index == 5 && nextIndex == 6 ){
					
					$(".t1f-05").animate({"bottom":-(k-530),"left":"40%","width":65},1500,
						function(){
						$(".t1f-05").hide();
					});
					$(".box-06").animate({"left":"38%"},1500,function(){
							$(".box-06").animate({"bottom":40},500,function(){
								 $(".box-06").hide();
								 //背景走的过程就是货车的行走
								 //背景jquery不好更改 backgroundPositionX x坐标
								 $(".section6").animate({"backgroundPositionX":"100%"},4000,function(){
								 	//背景动画执行完毕后，人大小复原
								 	$(".boy").animate({"height":305,"bottom":116},1000,function(){
								 		$(this).animate({"right":500},500,function(){
								 			//打开门的效果
								 			$(".door").animate({"opacity":1},200,function(){

								 				$(".girl").show().animate({"right":350,"height":306},500,function(){
								 					$(".pop-07").show();
													$(".next").fadeIn();

								 				});
								 			});


								 		});

								 	});

								 });
								 $(".words-06-a").show().animate({"left":"30%"},2000,"easeOutElastic");
								 $(".pop-06").show();
							})


					});



			}

			if(index == 6 && nextIndex == 7 ){
				setTimeout(function(){

					$(".star").animate({"width":120},500,function(){

						$(".good-07").show();
						$(".next").fadeIn();
						
					});



				},1000)//设置时间延迟
				



			}
			//第八屏

				// $(".beginShopping").mouseenter(function(event) {
				// 	$(".btn-08-a").show();


				// }).mouseleave(function(event) {

				// 	$(".btn-08-a").hide();
				// });

				//用hover来替代更简洁，以后一个盒子鼠标经过显示离开隐藏 就用hover和toggle搭配
				$(".beginShopping").hover(function(){

					$(".btn-08-a").toggle();//toggle 显示和隐藏切换
				});
				//手的移动
				$(document).mousemove(function(event) {
					var x = event.pageX - $(".hand-08").width() / 2;//鼠标在页面中的x坐标
					var y = event.pageY + 10;
						//手的top值不能小于这个大小
					var minY = k - 449;
					if(y < minY) {
						y = minY;

					}
					$(".hand-08").css({"left":x,"top":y});

				});
				//再来一次返回第一屏幕 所有动画复原
				$(".again").click(function(event) {
				//1.返回
					$.fn.fullpage.moveTo(1);//fullpage方法调用
				//2.复原 原理：动画元素清除行内样式
					$("img, .move").attr("style","");//attr 属性

				});
				
				



		},


	});


});