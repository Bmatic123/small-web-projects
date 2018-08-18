// Landing SLideup

$(document).ready(function(){
	$(".fa-angle-down").on("click", function(){
		$("body").css("overflow","visible");
		$(".landing-container").slideUp(1500, "easeInOutQuart");
	});
});

// Smooth Scroll
 $("nav a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    }
  });

// About Carousel

var slideIndex = 0;
var images = document.querySelectorAll(".slideshow-container-1 img");
setInterval(carousel, 5000);

function carousel() {    
    for(var i = 0; i < images.length; i++) {
      images[i].style.opacity = 0; 
    }
    slideIndex++;
    if (slideIndex > images.length) {
    	slideIndex = 1
    } 
    images[slideIndex-1].style.opacity = 1; 

}

// Manual Slideshow

var offset          = "100%",
    animationSpeed  = 1500,
    $slideHolder    = $("#slider .slides"),
    $slides         = $("#slider .my-slide"),
    currentSlide    = 1;

function plus()
{
    $slideHolder.animate({"margin-left": "-="+offset}, animationSpeed, function(){ 
        currentSlide++;
        if(currentSlide === $slides.length)
        {
           currentSlide = 1;
            $slideHolder.css({"margin-left": 0});
        }
    });
}

function minus()
{
    // disableButtons();
    if(currentSlide === 1)
    {
        currentSlide = $slides.length;
        $slideHolder.css({"margin-left": "-900%"});
    }
    currentSlide--;
    $slideHolder.animate({"margin-left": "+="+offset}, animationSpeed);
}


// Youtube Section

function getYoutubeID(url) {
  var id= url.substr(32);
  return id;
};

$(".commercials .row a").each(function(){

  var id = getYoutubeID($(this).attr("href"));
  var thumburl = "https://i.ytimg.com/vi/"+id+"/mqdefault.jpg";
  $(this).find("img").attr("src",thumburl)
});

