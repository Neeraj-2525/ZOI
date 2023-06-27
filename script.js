// To change the background of navbar
window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar');
    let scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


  // ******* horizontal bar ********

  function slider(flag, numSlides) {
    let centerSlide = (flag % numSlides) + 1;
    let middleOfSlider = numSlides / 2;
    let xCoef = 300 * ((middleOfSlider - centerSlide) / middleOfSlider);
  
    if($(window).width()<=450){
      xCoef = 0;
    }
  
    $(".slide-indicator").removeClass("active");
    $(".indicator-" + centerSlide).addClass("active");
    $(".slide.card").removeClass("active");
    $("#side-" + centerSlide).addClass("active");
  
    $("#side-" + centerSlide).css("z-index", "999");
    centerSlide <= numSlides / 2
      ? $("#side-" + centerSlide).css(
          "transform",
          `translateX(${xCoef - 100}%) scale(1.5)`
        )
      : $("#side-" + centerSlide).css(
          "transform",
          `translateX(${xCoef - 100}%) scale(1.5)`
        );
  
    for (let i = 1; i <= numSlides; i++) {
      if (i == centerSlide) {
        continue;
      }
      $("#side-" + i).css("z-index", "9");
      if (i < centerSlide) {
        $("#side-" + i).css("transform", `translateX(${xCoef}%) scale(1)`);
        continue;
      }
      $("#side-" + i).css("transform", `translateX(${xCoef}%) scale(1)`);
    }
  }
  
  $(document).ready(function () {
    // get the nu,ber of slides
    let slideNum = $(".slide").length;
    let flag = 0;
  
    // Append the slide-indicators
    for (let i = 1; i <= slideNum; i++) {
      $(".slide-indicator-container").append(
        `<div id="indicator-${i}" class="slide-indicator indicator-${i}"></div>`
      );
    }
  
    // first slide active by default
    $(".indicator-1").addClass("active");
  
    // add event listeners to switch to the slide selected when clicking the slide or clicking the slide-indicator
    let addListeners = [
       ".slide-indicator-container",
      "#main-slider",
    ];
  
    addListeners.forEach((item) => {
       $(item).click((e) => {
        if(e.currentTarget.id == "main-slider"){
          flag = e.target.parentElement.id.split("-")[1] - 1;
        }else{
          flag = e.target.id.split("-")[1] - 1;
        }
        slider(flag, slideNum);
      });
    });
  
    // Add functionality to next and previous buttons
    $("#nex").click(function () {
      flag = (flag + 1) % slideNum;
      slider(flag, slideNum);
    });
    $("#pre").click(function () {
      flag = Math.abs(flag - 1 + slideNum) % slideNum;
      slider(flag, slideNum);
    });
  });