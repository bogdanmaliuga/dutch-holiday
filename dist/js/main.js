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
  $('.open-filter').click(function(event) {
    if ($('.search-contrainer').css('display') == 'block') {
      $('.search-contrainer').css('display', 'none');
      $('.open-filter').removeClass('line-up');
    } else {
      $('.search-contrainer').css('display', 'block');
      $('.open-filter').addClass('line-up');
    }


  });
  $('.navbar-toggle').click(function(event) {

    if ($(this).hasClass('collapsed')) {
      $(this).addClass('menu-show');


    } else {
      $(this).removeClass('menu-show');


    }
  });
});
