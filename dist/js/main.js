jQuery(document).ready(function($) {
  $('.zoen-title').click(function(event) {
    $(this).next().slideToggle(function () {

      // $('.zoen-title').removeClass('line-up');
      $(this).prev().toggleClass('line-up');
    })


    // if ($(this).next().css('display') == 'block') {
    //   $(this).next().css('display', 'none');
    //   $(this).removeClass('line-up');
    //
    // } else {
    //   $(this).next().css('display', 'block');
    //   $(this).addClass('line-up');
    //
    // }


  });

  $(".sort-button").click(function() {
    if ($('.sort-menu').css('display') == 'block') {
      $('.sort-menu').css('display', 'none');
    } else {
      $('.sort-menu').css('display', 'block');
    }

  });
  $(".dropdown").click(function() {

    $('.fa-angle-down').toggleClass("down");
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
  $(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});

  var owl = $('#owl1');
  $('.friend-right-click').click(function() {
    owl.trigger('next.owl.carousel');
  })
  $('.friend-left-click').click(function() {
    owl.trigger('prev.owl.carousel');
  })
  owl.owlCarousel({
    loop: true,
    margin:0,
    mouseDrag: false,
    responsive: {
      0: {
        items: 1,
        pagination: false,
        margin: 0
      },
      540: {
        items: 2,
        pagination: false
      },
      667: {
        items:2,
        pagination: false
      },
      768: {
        items: 2,
        pagination: false
      },
      1024: {
        items: 3,
        pagination: false
      },
      1300: {
        items: 4,
        pagination: false
      }




    }
  });
});
