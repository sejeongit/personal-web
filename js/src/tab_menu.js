// tab_menu.js
(function($){
// jQuery

var tabUl = $('.skill_category');
var tabLi = tabUl.children('li');
var tabBtn = tabLi.children('button');
var tabContent = $('.con');

tabLi.eq(0).addClass('act');

tabBtn.on('focus', function(e){
  e.preventDefault();

  var _this = $(this);
  var _thisParent = _this.parent('li');
  var _i = _thisParent.index();

  var liEq = tabLi.eq( _i );
  liEq.addClass('act');
  liEq.siblings().removeClass('act');
  
  var conEq = tabContent.eq( _i );
  conEq.show();
  conEq.siblings().hide();
}); // tabBtn.on('focus')

tabBtn.on('click', function(e){
  e.preventDefault();

  var _this = $(this);
  var _thisParent = _this.parent('li');
  var _i = _thisParent.index();

  var liEq = tabLi.eq( _i );
  liEq.addClass('act');
  liEq.siblings().removeClass('act');
  
  var conEq = tabContent.eq( _i );
  conEq.show();
  conEq.siblings().hide();
}); // tabBtn.on('click')


})(jQuery);
