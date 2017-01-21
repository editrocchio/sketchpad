$(document).ready(function() {
  for (x = 0; x < 16; x++) {
    $("<br>").appendTo("#container");
    for (y = 0; y < 16; y++) {
      $('<div class="grid">').appendTo("#container");
    };
  };
  $(".grid").hover(function(){
    $(this).css("background-color","red");
  });
  $("#reset").click(function() {
    $(".grid").css("background-color","transparent");
    var size = prompt("Enter a size for the grid in pixels");
  });
  $("#schwifty").click(function() {
    $(location).attr('href','https://www.youtube.com/watch?v=n4Xp6g-_UUw')
  });
});