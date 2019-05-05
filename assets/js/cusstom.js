$(document).ready(function() {
  $('#owl-carousel').owlCarousel({
    rtl: true,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      }
    }
  });
  $('#mainsliders').owlCarousel({
    loop: true,
    slideSpeed: 300,
    paginationSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 4000,
    singleItem: true,
    pagination: false,
    rewindSpeed: 500,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  $('#extraslider').owlCarousel({
    loop: true,
    margin: 10,
    center: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  $('.tilesSlider .tiles .tileCont .tile')
    .mouseenter(function() {
      if ($(this).hasClass('active')) {
      } else {
        $(this).addClass('active');
        $('.tilesSlider .sliderCoverCont .sliderCover').fadeOut();
        $('#' + $(this).attr('id-role')).fadeIn();
      }
    })
    .mouseleave(function() {
      $('.tilesSlider .tiles .tileCont .tile').removeClass('active');
      $(this).addClass('active');
    });

  $('.sliderlink').on('click', function() {
    $('#nav-toggle').prop('checked', true);
    if ($('#nav-toggle:checked')) {
      $('html').addClass('overflow');
      $('.navigation__button').css({
        display: 'flex'
      });
      $('#' + $(this).attr('data-name')).css({
        display: 'block'
      });
    }
  });
  $('.navigation__button').on('click', function() {
    $('html').removeClass('overflow');
    $('.navigation__container > .container ').css({
      display: 'none'
    });
    $(this).css({
      display: 'none'
    });
  });
});
