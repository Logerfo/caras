function overlayClick() {
  $('.container').click(function() {
    $(this).children(".overlay").toggleClass('fullHeight')
  })
}
