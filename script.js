function drawGrid(size) {
  for (x = 0; x < size; x++) {
    for (y = 0; y < size; y++) {
      $('<div class="boxes">').appendTo("#grid");
    };
    $("<br>").appendTo("#grid");
  };
}

$(document).ready(function() {
  drawGrid(16)
  $("#grid").on("mouseenter", ".boxes", function() {
    var randomColorChange =  '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    $(this).css("background-color",randomColorChange);
  });
  $("#reset").click(function() {
    $("#grid").empty()
    $(".boxes").css("background-color","transparent");
    var size = prompt("Enter a size for the grid");
    drawGrid(size);
    var boxSize = ( $("#grid").height() / size ) + "px";
    $(".boxes").css("width", boxSize);
    $(".boxes").css("height", boxSize);
  });
  $("#schwifty").click(function() {
    $(location).attr('href','https://www.youtube.com/watch?v=n4Xp6g-_UUw')
  });
});


