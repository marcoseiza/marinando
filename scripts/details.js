$('#tab').hover(function() {
  let t = $('.details__date__detes .content')
  if(parseInt(t.css("left")) <= 0) {
    t.addClass('over');
  }
}, function() {
  $(".details__date__detes .content").removeClass('over');
})

$("#tab").one("mousedown", function() {
  $( ".details__date__detes .content" ).draggable({
    axis: "x",
    cancel: ".details__date__detes__basic, .details__date__detes__countdown",
    containment: "parent"
  });
});

$("#tab").mouseup(function() {
  let t = $('.details__date__detes .content');
  $('.details__date__detes #tab').css("cursor", "grab");
  if(parseInt(t.css("left")) <= t.width() / 2 && !t.hasClass("ui-draggable-dragging")) {
    t.removeClass('over');
    t.css("left", $(".details__date__detes__basic").outerWidth());
  } else if(parseInt(t.css("left")) >= t.width() / 2 && !t.hasClass("ui-draggable-dragging")) {
    t.css("left", "0");
  }
})

$("#tab").mousedown(function() {
  $('.details__date__detes #tab').css("cursor", "grabbing");
})

