jQuery(document).ready(function($) {
  $('.zoen-title').click(function(event) {
    console.log($(this).next());
    if ($(this).next().css('display') == 'block') {
      $(this).next().css('display', 'none');
      $(this).removeClass('line-up');
      
    } else {
      $(this).next().css('display', 'block');
      $(this).addClass('line-up');

    }


  });
});
