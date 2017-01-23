$(document).ready(function() {
  for (x = 0; x < 16; x++) {
    for (y = 0; y < 16; y++) {
      $('<div class="boxes">').appendTo("#grid");
    };
    $("<br>").appendTo("#grid");
  };
  $(".boxes").hover(function(){
    var randomColorChange =  '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    $(this).css("background-color",randomColorChange);
  });
  $("#reset").click(function() {
    $(".boxes").css("background-color","transparent");
    var size = prompt("Enter a size for the grid");
  });
  $("#schwifty").click(function() {
    $(location).attr('href','https://www.youtube.com/watch?v=n4Xp6g-_UUw')
  });
});



