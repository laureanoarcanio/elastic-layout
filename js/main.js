

$("#over-size-me").on("change", function() {
  var size = $(this).val();
  $("#dinamic-size").css({
    "font-size": size + "px"
  })

});