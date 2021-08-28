// rocket_parallax.js
(function($){
// jQuery

// 스크롤시 가져오는 위치의 %값 확인
// .rocket 위치값을 파악( offset().top )
// 브라우저의 높이 계산
// .rocket 의 위치값을 변경

// 변수 ----------------------------------
var win = $(window);
var wrap = $('#wrap');
var intro = wrap.find('#introBox');
var rocket = intro.find('.rocket');

// 이벤트 ---------------------------------
win.on('scroll', function(e){
  var winScroll = win.scrollTop();
  var winH = win.outerHeight();
  
  var rocOffset = rocket.offset().top;

  // 선택된 형태가 브라우저 하단에서 0부터 값 나오도록
  var findScroll = winScroll - rocOffset + winH;
  // % 계산법 : 스크롤값 / 기준치 * 100
  var percentScroll = parseInt(findScroll / winH * 100);
  var per = percentScroll;
  if (percentScroll < 0){ per = 0;} else if (percentScroll > 100){ per = 100; }
  rocket.css({transform:'translateY(' + -per + '%)', transition:'all 300ms linear'});
});


})(jQuery);

  // 스크롤시 가져오는 위치의 %값확인
  // li.eq(0)번째 위치값을 파악( offset().top );
  // 브라우저의 높이 계산
  // li.eq(0) 내부에 존재하는 .position_img의 위치값을 변경

  // 변수 --------------------------------------------------
  // var win = $(window);
  // var part = $('.part2');
  // var li = part.find('li');
  // // 이벤트 --------------------------------------------------
  // win.on('scroll', function(e){
  //   var winScroll = win.scrollTop();
  //   // ---------------------------------------------
  //   var winH = win.outerHeight();
  //   var liOffset, liPImg, findScroll, percentScroll, per;
    
  //   var i=0;
  //   for(; i < li.length; i++){
  //     liPImg = li.eq(i).find('.position_img');
  //     liOffset = liPImg.offset().top;
  //     // ---------------------------------------------
  //     // 선택된형태가 브라우저 하단에서 0부터 값나오도록 
  //     findScroll = winScroll - liOffset + winH; 
  //     // %계산법 : 스크롤값 / 기준치 * 100
  //     percentScroll = parseInt(findScroll / winH * 100);
  //     per = percentScroll;
  //     if (percentScroll < 0){ per = 0; } else if (percentScroll > 100){ per = 100; } 
  //     // liPImg.stop().animate({marginTop: -per/3 + 'px'}, 300 );
  //     liPImg.css({transform:'translateY(' + -per  + '%)', transition:'all 300ms linear'});
  //     } // for
  // });
