window.onload = function() {
  var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        resistanceRatio : 0,
  });
  var swiper = new Swiper('#foodbanner .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay : 5000,
        resistanceRatio : 0,
  });
  $("#wl_food .col-xs-9").css("line-height",$(window).width()*1.8/360+"em");
}

