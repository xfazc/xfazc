/**图片放大**/
$(function () {
	/*$('.imgs img').zoomify();*/
  var w = $(".imgs").width();
  var h = $(".imgs").height();
  var w2 = w + 100;
  var h2 = h + 100;
 
  $(".imgs ").hover(function () {
 	$(this).stop().animate({ height: h2, width: w2, left: "-10px", top: "-10px" }, 400);
  }, function () {
 		 $(this).stop().animate({ height: h, width: w, left: "0px", top: "0px" }, 400);
      });
   $(".img fl").hover(function () {
 	$(this).stop().animate({ height: h2, width: w2, left: "-10px", top: "-10px" }, 400);
  }, function () {
 		 $(this).stop().animate({ height: h, width: w, left: "0px", top: "0px" }, 400);
      });

})