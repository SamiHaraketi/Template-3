/*menu & animation*/
var $document = $(document);

var home=$(".home").offset();
var about=$(".about").offset();
var portfolio=$(".portfolio").offset();
var contact=$(".contact").offset();



$document.scroll(function() {


  /******start scroll*******/
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


  /*******home enter*********/
  if (($document.scrollTop() > home.top) && ($document.scrollTop() < about.top-100) || ($document.scrollTop() == 0))
  {
      $(".nav-bar ul li:nth-child(1) ").css('text-decoration', 'line-through');
  }
  else
  {
      $(".nav-bar ul li:nth-child(1) ").css('text-decoration', 'none');

  }

  /*******about enter*********/

  if (($document.scrollTop() > about.top-100) && ($document.scrollTop() < portfolio.top-100)  )
  {
      $(".nav-bar ul li:nth-child(2) ").css('text-decoration', 'line-through');

      $(".img-about ").css('top', '0px');
      $(".member ").css({ "opacity": "1", "bottom": "0px" }) ;
      $(".about-text ").css('opacity', '1');;


  }
  else
  {
      $(".nav-bar ul li:nth-child(2) ").css('text-decoration', 'none');

  }

    /*******porfolio enter*******/
  if (($document.scrollTop() > portfolio.top-100) && ($document.scrollTop() < contact.top-100) )
  {
      $(".nav-bar ul li:nth-child(3) ").css('text-decoration', 'line-through');

      $(".img-portfolio ").css({ "opacity": "1", "top": "0px" }) ;

  }
  else
  {
      $(".nav-bar ul li:nth-child(3) ").css('text-decoration', 'none');

  }

    /******contact enter*******/
  if (($document.scrollTop() > contact.top-100)  )
  {
      $(".nav-bar ul li:nth-child(4) ").css('text-decoration', 'line-through');
  }
  else
  {
      $(".nav-bar ul li:nth-child(4) ").css('text-decoration', 'none');

  }
});

/*********mooth scroll*********/
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



/*box img portfolio*/

$('#img1').click(function(){
      $("#box1").css('display', 'block');  
}
);

$('#img2').click(function(){
      $("#box2").css('display', 'block');  
}
);

$('#img3').click(function(){
      $("#box3").css('display', 'block');  
}
);

$('#img4').click(function(){
      $("#box4").css('display', 'block');  
}
);

$('#img5').click(function(){
      $("#box5").css('display', 'block');  
}
);

$('#img6').click(function(){
      $("#box6").css('display', 'block');  
}
);

$('.close').click(function(){
      $("#box1").css('display', 'none');  
      $("#box2").css('display', 'none');  
      $("#box3").css('display', 'none');  
      $("#box4").css('display', 'none');  
      $("#box6").css('display', 'none');  
      $("#box6").css('display', 'none');  

}
);