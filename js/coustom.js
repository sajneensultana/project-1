
$('.header-top-icon i').on('click',function(){
	$('.menu').animate({
    'left':'0'
  });
});
$('.menu .close i').on('click',function(){
	$('.menu').animate({
    'left':'-250'
  });
});


//----owl carousel------
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})

//---isotop---

// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  var $grid = $('.grid').isotope({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use element for option
      columnWidth: '.grid-item'
    }
  })

//water riple
$('.banner').ripples();
