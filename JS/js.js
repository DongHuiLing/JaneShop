$(function(){
		//输入框
		$("#input").focus(function(){
			var text=$("#input").val();
			if(text=="请输入商品名称")	
				$("#input").val("");
			})
		$("#input").blur(function(){
			var text=$("#input").val();
			if(text=="")	
				$("#input").val("请输入商品名称");
			})

		//中间部分-上半部分

		   var len = $("#number > li").length;
		   var index = 0;
		   var adTimer;
		   $("#number li").mouseover(function(){
		    index = $("#number li").index(this);
		    showImg(index);
		   }).eq(0).mouseover();  
		   //滑入 停止动画，滑出开始动画.
		   $('.top-left').hover(function(){
		       clearInterval(adTimer);
		     },function(){
		       adTimer = setInterval(function(){
		          showImg(index)
		        index++;
		        if(index==len){index=0;}
		        } , 3000);
		   }).trigger("mouseleave");

		   //中间部分-下半部分




		    var len2 = $(".none>ul>li").length;
			   var index2 = 0;
			   var adTimer2;
			   $(".none>ul>li").mouseover(function(){
			    index2 = $(".none>ul>li").index(this);
			       $(".bottom-top>.yes>li").hide();
			    //$(".bottom-top>.yes>li").eq(index2).show();    
			    showImg2(index2);
			   }).eq(0).mouseover();  
			   //滑入 停止动画，滑出开始动画.
			   $('.bottom').hover(function(){
			       clearInterval(adTimer2);
			     },function(){
			       adTimer2 = setInterval(function(){
			          showImg2(index2)
			    
			        index2++;
			        if(index2==len2){index2=0;}
			        } , 5000);
			   }).trigger("mouseleave");


			   
				var x=10;
				var y=20;
				$("a.tooltip").mouseover(function(e){
					this.myTitle=this.title;
					this.title="";
					var tooltip="<div id='tooltip'>"+this.myTitle+"<\/div>";
					$("body").append(tooltip);
					$("#tooltip").css({
						"top":(e.pageY+y)+"px",
						"left":(e.pageX+x)+"px"
					}).show("fast");  
				}).mouseout(function(){
					this.title=this.myTitle;  
					$("#tooltip").remove();
				}).mousemove(function(e){
					$("#tooltip").css({
						"top":(e.pageY+y)+"px",
						"left":(e.pageX+x)+"px"
					})
				})
				$(".click>li").click(function(){
					var index=$(".click>li").index($(this));
					if(index==0)
					{
						$(".click>li").eq(index).css({"background-position":"0 -14px"})
						$(".nav").css("background","#3f5e9f")
					}
					else if(index==1)
					{
						$(".click>li").eq(index).css({"background-position":"-98px -14px"})
						$(".nav").css("background","#bc3bd8")
					}
					else if(index==2)
					{
						$(".click>li").eq(index).css({"background-position":"-78px -14px"})
						$(".nav").css("background","#e3165c")
					}
					else if(index==3)
					{
						$(".click>li").eq(index).css({"background-position":"-58px -14px"})
						$(".nav").css("background","#0abfcf")
					}
					else if(index==4)
					{
						$(".click>li").eq(index).css({"background-position":"-38px -14px"})
						$(".nav").css("background","#fba70e")
					}
					else if(index==5)
					{
						$(".click>li").eq(index).css({"background-position":"-18px -14px"})
						$(".nav").css("background","#afd400")
					}
				})


				$("#num1").mouseover(function(){
			      var $offset=$(this).offset();
			      var left=$offset.left-17;
			      var top=$offset.top;
			      $(".bottom-bottom1").css({
				        "top":+top+"px",
				        "left":+left+"px"
			      })
			      $(".bottom-bottom1").show();
			      })
				  $(".bottom-bottom1").mouseover(function(){$(this).show()}).mouseout(function(){
				      $(this).hide();
				    })

				  $("#num2").mouseover(function(){
			      var $offset=$(this).offset();
			      var left=$offset.left-17;
			      var top=$offset.top;
			      $(".bottom-bottom2").css({
				        "top":+top+"px",
				        "left":+left+"px"
			      })
			      $(".bottom-bottom2").show();
			      })
				  $(".bottom-bottom2").mouseover(function(){$(this).show()}).mouseout(function(){
				      $(this).hide();
				    })

				  $("#num3").mouseover(function(){
			      var $offset=$(this).offset();
			      var left=$offset.left-17;
			      var top=$offset.top;
			      $(".bottom-bottom3").css({
				        "top":+top+"px",
				        "left":+left+"px"
			      })
			      $(".bottom-bottom3").show();
			      })
				  $(".bottom-bottom3").mouseover(function(){$(this).show()}).mouseout(function(){
				      $(this).hide();
				    })

				  $("#num4").mouseover(function(){
			      var $offset=$(this).offset();
			      var left=$offset.left-7;
			      var top=$offset.top;
			      $(".bottom-bottom4").css({
				        "top":+top+"px",
				        "left":+left+"px"
			      })
			      $(".bottom-bottom4").show();
			      })
				  $(".bottom-bottom4").mouseover(function(){$(this).show()}).mouseout(function(){
				      $(this).hide();
				    })

				  
			// 导航条变颜色
			var $li =$("#skin li");
			$li.click(function(){
				$("#"+this.id).addClass("selected")                //当前<li>元素选中
						.siblings().removeClass("selected");  //去掉其它同辈<li>元素的选中
				$("#cssfile").attr("href","css/"+this.id+".css"); //设置不同皮肤
			})

			})
	function showImg(index){
        var Width = $(".top-left").width();
    $("#child1").stop(true,false).animate({"left" : -Width*index},3000);
    $("#number li").removeClass("on")
      .eq(index).addClass("on");
	}

	function showImg2(index2){
        var Width2 = $(".bottom").width();
    $(".bottom-body").stop(true,false).animate({"left" : -Width2*index2},5000);
    $(".none>ul>li").removeClass("now")
      .eq(index2).addClass("now");
	}