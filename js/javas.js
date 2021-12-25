var txt= "- "+"Daniel RR ";
var espera=400;
var refresco= null;
function rotulo_title() {
document.title=txt;
txt=txt.substring(1,txt.length)+txt.charAt(0);
refresco=setTimeout("rotulo_title()",espera);}
rotulo_title();

$(function () {
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 10){
      $("body").addClass("sticky-header");
    }else{
      $("body").removeClass("sticky-header");
    }
  })
});

$(document).ready(function(){
  var alt = $('.d1').offset().top;
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > alt) {
      $('.d1').addClass('menu-fixed');
    }else {
      $('.d1').removeClass('menu-fixed');
    }
  })
});
