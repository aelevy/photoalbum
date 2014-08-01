$(document).ready(function(event){

$(".pageOne li img").click(function(event){
  event.preventDefault();
  var pageToNavigate = "." $(this).attr("div");

  $(".container").children().removeClass("currentPage");
  $(pageToNavigate).addClass("currentPage");

});

});
