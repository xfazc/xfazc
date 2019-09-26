$(function () {

    $('.animate').animateCss();

    search(); //搜索

    banner();

    ihonor(); //视频

    tools();

    checkForm();

	toolbar();

    index();

    

    $(".imglistTog").each(function(){

		var _this=$(this);

		imglistTog(_this);

	});

	

	$('.animate').animateCss();

});

function index(){ 

	$(".ibigimg").click(function(e){

		var bigurl=$(this).find("img").attr("data-big");

		$(".indexBigimg").find("img").attr("src",bigurl)

		layout(1);

		$(".indexBigimg").show();

	});

	$(".indexBigimg .close").click(function(e){

		$(".indexBigimg").hide();

		layout(0);

	});

}

function toolbar(){

	$('#toolbar dd').bind({

		'mouseenter': function(){

			if($(this).children('.slide').length){

				var _this = $(this).children('.slide');

				_this.stop(true, true).animate({'width': 180}, 200);

			}else if($(this).children('.pop').length){

				var _this = $(this).children('.pop');

				_this.show().animate({'right': 65}, 200);

			}

		},

		'mouseleave': function(){

			if($(this).children('.slide').length){

				var _this = $(this).children('.slide');

				_this.stop(false, false).animate({'width': 0}, 200);

			}else if($(this).children('.pop').length){

				var _this = $(this).children('.pop');

				_this.hide().animate({'right': 90}, 200);

			}

		}

	});

	$("#top").click(function () {

        $("body, html").stop().animate({ "scrollTop": 0 });

    });

	

}

function search() {

    var searchVa = $(".search .stxt").val();

    $(".search .stxt").focus(function () {

        $(this).val("");

    }).blur(function () {

        if ($(this).val() == "") {

            $(this).val(searchVa);

        }

    });

}

function imglistTog(_this) {

	if(_this.parent("#floor_5_main").length){

		if ( _this.find(".item").length <= 2) {	return false; }

	}else{

	    if ( _this.find(".item").length <= 5) {	return false; }

	}

	var t, a = _this;

	var clone = a.find(".list").html();

	a.find(".list").append(clone); // 克隆数据

	var n = 0,

		N = a.find(".list").children(".item").length,

		wid = a.find(".list").children(".item").width() + 7,

		time = 3000,

		step = 300;

	if(a.parent("#floor_5_main").length){

		//alert(111)

		wid = a.find(".list").children(".item").width() + 20;

	}

	a.find(".list").width(N * wid);

	var func = function() {

		if (n >= N / 2) {

			n = 0;

			a.find(".list").css({

				"margin-left": 0

			});

			func();

		} else {

			n++;

			a.find(".list").stop().animate({

				"margin-left": -wid * n

			}, step);

		}

	}

	var func2 = function() {

		if (n <= 0) {

			n = N / 2;

			a.find(".list").css({

				"margin-left": -wid * n

			});

			func2();

		} else {

			n--;

			a.find(".list").stop().animate({

				"margin-left": -wid * n

			}, step);

		}

	}

	// 手动触发滚动效果::向右箭头

	_this.find(".togRight").click(function() {

		clearInterval(t);

		func();

	});

	// 手动触发滚动效果::向左箭头

	_this.find(".togLeft").click(function() {

		clearInterval(t);

		func2();

	});

}

function ihonor() {

    if (!$("#ihonor").length || $("#ihonor .list li").length <= 1) { return false; }

    var a = $("#ihonor"), b = a.find(".list"), c = b.find("li"), width = a.width(), length = c.length, i = 0, interval = 5000, speed = 400,t;

    c.width(width);

    b.width(width * (length + 1)).append(c.eq(0).clone()).css({ "left": 0 });

    function fun() {

    	i++;

    	//console.log(i)

    	if(i>length-1){

    		b.stop().animate({"left":-i*width},speed,function(){ b.css( "left", 0); });

    		i=0;

    	}else if(i<0){

    		i=length-1;

    		b.css({"left":-length*width}).stop().animate({"left":-i*width},speed);

    	}else{

			b.stop().animate({"left":-i*width},speed);

    	}

    }

    $(".leftbtn").click(function(){

    	i-=2;

    	fun();

    });

    $(".rightbtn").click(function(){

    	fun();

    });

    t=setInterval(fun,interval);

    $(".aboutRight").hover(function(){

    	clearInterval(t);

    },function(){

    	t=setInterval(fun,interval);

    })

}

 // banner焦点图

function banner() {

    if (!$("#banner").length || $("#banner .list li").length <= 1) { return false; }

    $("#banner .list li:gt(0)").hide();

    var _this = $("#banner"),

		me = $("#banner .list"),

		tip = $("#banner .tip"),

		t, interval = 4000,

		speed = 1000,

		speed2 = 700,

		n = 0,

		N = me.children("li").length;

    if ($("#banner .tip").length) {

        var htmlTip = "";

        for (var i = 0; i < N; i++) {

            if (i == 0) {

                htmlTip += "<li class='cur'><span></span></li>";

            } else {

                htmlTip += "<li><span></span></li>";

            }

        }

        tip.html(htmlTip);

    }

    

    var func = function () {

        if (n >= N - 1) {

            n = 0;

        } else {

            n++;

        }

        me.children("li").eq(n).css({

            "z-index": 2

        }).stop().fadeIn(speed).siblings("li").css({

            "z-index": 1

        }).stop().fadeOut(speed2);

        if ($("#banner .tip").length) {

            tip.children("li").eq(n).addClass("cur").siblings("li").removeClass("cur");

        }

    }

    tip.children("li").click(function () {

        clearInterval(t);

        n = $(this).index() - 1;

        func();

    })

    t = setInterval(func, interval);

    me.hover(function(){

    	clearInterval(t);

    },function(){

    	t = setInterval(func, interval);

    });

}


function tools() {

    

    $("a").focus(function () {

        $(this).blur();

    });

}

function checkForm() {

    if ($("#formPost").length) {

        $("#formPost tr.code input").val("");

    }

    $("#formPost input[type='submit']").click(function () {



        var bool = true;

        $("#formPost .required").each(function () {

            var a, b, c;

            $(this).find(".tip").html("");

            if ($(this).find("input").length) {

                a = $(this).find("input").val().replace(/\s+/gm, ' ');

                b = $(this).find("input").attr("model");

                c = $(this).find("label").text();

                c = c.substr(0, c.length - 1);

            } else {

                a = $(this).find("textarea").val().replace(/\s+/gm, ' ');

                b = "text";

                c = $(this).find("label").text();

                c = c.substr(0, c.length - 1);

            }

            if (a == "" || a == " ") {

                $(this).find(".tip").html("<span class='err'>" + c + " 不能为空!</span>");

                bool = false;

            } else {



                switch (b) {

                    case "name":

                        if (!a.match(/^[A-Za-z]+$/) && !a.match(/^[\u4e00-\u9fa5]{0,}$/)) {

                            $(this).find(".tip").html("<span class='err'>只能是汉字或英文</span>");

                            bool = false;

                        } else {

                            $(this).find(".tip").html("");

                        }

                        break;

                    case "phone":

                        if (!a.match(/^[0-9]*$/)) {

                            $(this).find(".tip").html("<span class='err'>只能是纯数字</span>");

                            bool = false;

                        } else {

                            $(this).find(".tip").html("");

                        }

                        break;

                    case "email":

                        if (!a.match(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {

                            $(this).find(".tip").html("<span class='err'>请输入正确的邮箱格式</span>");

                            bool = false;

                        } else {

                            $(this).find(".tip").html("");

                        }

                        break;

                }

            }

        });

        return bool;

    });

    $("#formPost .txt").each(function(){

		var txt=$(this).val(); 

		$(this).focus(function(){

			if($(this).val() == txt){

				$(this).val("");  

			}

		}).blur(function(){

			if(!$(this).val() == ""){

					  

			}else{

				$(this).val(txt);

			}

		});

	});

	$("#formPost textarea").focus(function(){

		if($(this).text()=="请输入您要咨询的内容"){

			$(this).text("");  

		}

	}).blur(function(){

		if(!$(this).val() == ""){

				  

		}else{

			$(this).text(txt);

		}

	});

}

function layout(u){

	var $obj = $('<div class="dialog-layout"></div>');

	if(u == 0){

		$('.dialog-layout').remove();

	}else{

		if(!$('.dialog-layout').length){

			$obj.appendTo('body').show();

		}

	}

}



;(function($){

	var $=$;

	$.fn.animateCss=function(opt){ 

		var that=this;

		$(this).each(function(i){ 

			var _=$(this);

				if(!_.attr('data-as')){ return false;}

			var attr=_.attr('data-as').split('|');

			var speed=attr[0],

				ease=attr[1],

				flag=false;

				if((!speed)||(!ease)) return false;

				if((speed==0)&&(!flag)){ 

					_.show();

					_.addClass(ease+' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){ 

							flag=true;

							$(this).removeClass(ease+' animated animate');

						});	

				}

				$(window).scroll(function(){ 

					var t=$(this).scrollTop();

//						console.log(t)

					if((t>=speed)&&(!flag)){

						_.show();

						_.animate({"opacity":1},200);

 						_.addClass(ease+' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){

							flag=true;

							$(this).removeClass(ease+' animated animate');

						});	

					}

					else{ 

						return false;

					}

				});

		})

	}

})(jQuery);

function AddFavorite(title, url) {

    try {

        window.external.addFavorite(url, title);

    } catch (e) {

        try {

            window.sidebar.addPanel(title, url, "");

        } catch (e) {

            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");

        }

    }

}





$(".nav ul li a").removeClass("hover"); //状态保存

$(".nav ul li a").each(function (i) {

    if ($(this).attr("href") != "/") {

        if (window.location.href.indexOf($(this).attr("href")) > -1) {

            $(this).addClass("hover");



        }



    }

});



;(function($){

	var $=$;

	$.fn.animateCss=function(opt){ 

		var that=this;

		$(this).each(function(i){ 

			var _=$(this);

				if(!_.attr('data-as')){ return false;}

			var attr=_.attr('data-as').split('|');

			var speed=attr[0],

				ease=attr[1],

				flag=false;

				if((!speed)||(!ease)) return false;

				if((speed==0)&&(!flag)){ 

					_.show();

					_.addClass(ease+' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){ 

							flag=true;

							$(this).removeClass(ease+' animated animate');

						});	

				}

				$(window).scroll(function(){ 

					var t=$(this).scrollTop();

//						console.log(t)

					if((t>=speed)&&(!flag)){

						_.show();

						_.animate({"opacity":1},200);

 						_.addClass(ease+' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){

							flag=true;

							$(this).removeClass(ease+' animated animate');

						});	

					}

					else{ 

						return false;

					}

				});

		})

	}

})(jQuery);	



