$(".s_menu").click(function(){
    $(this).children("ul").slideToggle();
})

$("ul").click(function(d){
  d.stopPropagation();
})
