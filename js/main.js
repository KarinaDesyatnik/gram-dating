$(function(){

// ------start sticky header------

$(window).scroll(function() {
if ($(this).scrollTop() > 1){
$('.sticky-header').addClass("sticky");
}
else{
$('.sticky-header').removeClass("sticky");
}
});

//-------end sticky header--------

//-------start mobil menu----------

$('.mobil-menu-button').click(function(){
		$('.menu ul').toggleClass('active');
		$('.mobil-menu-button').toggleClass('active');
		$('.logo').toggleClass('active');
	})

//-------end mobil menu------------

//--------start popup--------------

$('.login-link').click(function(e){
	 e.preventDefault();
		$('.login-popup').show();
		$('.reg-popup').hide();
		$('.logo').addClass('active');
	})
$('.close').click(function(e){
		$('.login-popup').hide();
	})

/// start close lenguage and currency block //
jQuery(function($){
  $(document).mouseup(function (e){ 
    var div = $(".login-popup"); 
    var divWrap = $(".login-popup-wrapper");
    if (!divWrap.is(e.target) 
        && divWrap.has(e.target).length === 0) {
      div.hide();

    }
  });
});

$('.reg-link').click(function(e){
	 e.preventDefault();
		$('.reg-popup').show();
		$('.login-popup').hide();
		$('.logo').addClass('active');

	})
$('.close').click(function(e){
		$('.reg-popup').hide();
	})

/// start close lenguage and currency block //
jQuery(function($){
  $(document).mouseup(function (e){ 
    var div = $(".reg-popup"); 
    var divWrap = $(".login-popup-wrapper");
    if (!divWrap.is(e.target) 
        && divWrap.has(e.target).length === 0) {
      div.hide();

    }
  });
});
//----------end popup---------------
});