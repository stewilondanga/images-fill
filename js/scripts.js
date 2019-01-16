var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

MorphSVGPlugin.convertToPath("circle, rect");
/*TweenLite.defaultEase = Power3.easeInOut;
var dur = 2;
var tl = new TimelineMax({yoyo:true, repeat:-1, repeatDelay:0.5});

tl.to(".start", dur, {morphSVG:"#end"}, 0);
tl.from("#kid", dur, {attr:{x:0, y:0, width:800, height:800}, opacity:0}, 0);
