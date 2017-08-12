/*menu*/
var $document = $(document);

var home=$(".home").offset();
var about=$(".about").offset();
var portfolio=$(".portfolio").offset();
var contact=$(".contact").offset();



$document.scroll(function() {
  if ($document.scrollTop() > 0) 
  {
     $(".nav-bar").addClass("animation-nav");
      $(".nav-bar ul li a ").css('color', '#b18a22');

  } 

  else
  {
     $(".nav-bar").removeClass("animation-nav"); 
      $(".nav-bar ul li a ").css('color', '#fff');

  }


  /*home enter*/
  if (($document.scrollTop() > home.top) && ($document.scrollTop() < about.top) || ($document.scrollTop() == 0))
  {
      $(".nav-bar ul li:nth-child(1) ").css('text-decoration', 'line-through');
  }
  else
  {
      $(".nav-bar ul li:nth-child(1) ").css('text-decoration', 'none');

  }

  /*about enter*/

  if (($document.scrollTop() > about.top) && ($document.scrollTop() < portfolio.top)  )
  {
      $(".nav-bar ul li:nth-child(2) ").css('text-decoration', 'line-through');
  }
  else
  {
      $(".nav-bar ul li:nth-child(2) ").css('text-decoration', 'none');

  }

    /*porfolio enter*/
  if (($document.scrollTop() > portfolio.top) && ($document.scrollTop() < contact.top) )
  {
      $(".nav-bar ul li:nth-child(3) ").css('text-decoration', 'line-through');
  }
  else
  {
      $(".nav-bar ul li:nth-child(3) ").css('text-decoration', 'none');

  }

      /*contact enter*/
  if (($document.scrollTop() > contact.top)  )
  {
      $(".nav-bar ul li:nth-child(4) ").css('text-decoration', 'line-through');
  }
  else
  {
      $(".nav-bar ul li:nth-child(4) ").css('text-decoration', 'none');

  }
});

/*mooth scroll*/
$('a[href*="#"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {

        });
      }
    }
  });
