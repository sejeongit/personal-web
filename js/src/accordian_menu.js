// accordian_menu.js
(function($){
// jQuery

// dt를 클릭시 dd를 나타나거나 사라지게 만들기

// dt 클릭 -> dt 바로 뒤에 있는 dd 나타나게 하기
// 다른 dt 클릭 -> 바로 뒤 dd 나타나게, 다른 dd는 사라지게
// dt를 클릭시 이미 dd가 나타나있다면 사라지게

// 변수 ---------------------------------------
var section = $('section');
var dl = section.find('dl');
var dt = dl.children('dt');
var dd = dl.children('dd');
var button = dt.children('button');

button.on('click', function(e){
  e.preventDefault();
  var thisI = $(this).parent();
  var viewDd = thisI.next(dd);
  var viewDdCheck = viewDd.css('display') === 'none' ;

  var siblingsDd = viewDd.siblings('dd');
  siblingsDd.stop().slideUp();
  thisI.siblings('dt').removeClass('act');

  if(viewDdCheck){
    $(this).attr('tabindex', 0);
    viewDd.slideDown(function(e){
      $(this).focus();
      siblingsDd.attr('tabindex', -1);
    });
    thisI.addClass('act');
  }else{
    viewDd.slideUp();
    thisI.removeClass('act');
  }
})

})(jQuery);