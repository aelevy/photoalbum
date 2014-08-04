$(document).ready(function(event){

$(".pageOne img").click(function(event){
  event.preventDefault();
  console.log(event.target);
  var pageToNavigate =  "." + $(this).attr("data-album");
  console.log(pageToNavigate);


  $(".container").children().removeClass("currentPage");
  $(pageToNavigate).addClass("currentPage");

});
$('.album li').click(function(event){

    $(this).closest('li').siblings().toggleClass('hidden');
    $(this).toggleClass('showImage');

  });
});
