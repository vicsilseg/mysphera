$(document).ready(function() {
  /**/

  /* OBJECT DEFINITION */
  var spheres =
    '<div id="spheres"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -6 27 18"><defs><style>.first-sphere{fill:#2293bc;}.second-sphere{fill:#2293bc;}.third-sphere{fill:#25adbc;}</style></defs><title>spheras</title><g id="spheres-container" data-name="spheres container"><circle class="first-sphere" cx="3" cy="3" r="3"/><circle class="second-sphere" cx="13.5" cy="3" r="3"/><circle class="third-sphere" cx="24" cy="3" r="3"/></g></svg></div>';

  /* $('<img/>').attr('src', '../assets/img/Home_background.jpg').on('load', function() {
    $('body').addClass('overlay-active');
    setTimeout(function(){
        $('#load-overlay').removeClass('is-active');
        setTimeout(function(){
            $('#load-overlay').remove();
            $('body').removeClass('overlay-active');
          },3000)
      },3000)
   $(this).remove(); // prevent memory leaks as @benweet suggested
   $("#home-background").css('background-image', 'url(../assets/img/Home_background.jpg)');
}); */

  /* FUNCTION DEFINITION */

  /**
   * Function that turn on page sub-object
   */
  var overlayOn = function() {
    $(".page-item").mouseenter(function(e) {
      var $overlay = $(this).children(".overlay");
      var $text = $(this).children("h3");
      var $label = $(this).children(".page-item-label");
      $overlay.toggleClass("is-active");
      $text.toggleClass("is-active");
      $label.toggleClass("is-active");
    });
  };

  /**
   * Function that turn off page sub-object
   */
  var overlayOff = function() {
    $(".page-item").mouseleave(function(e) {
      var $overlay = $(this).children(".overlay");
      var $text = $(this).children("h3");
      var $label = $(this).children(".page-item-label");
      $overlay.toggleClass("is-active");
      $text.toggleClass("is-active");
      $label.toggleClass("is-active");
    });
  };

  /**
   * Function that turns on button by mouse enter
   */
  var enterButton = function() {
    $(".iot-button").mouseenter(function() {
      var $fill = $(this)
        .children("#button-svg")
        .children(".path");
      var $text = $(this).children(".button-text");
      $(this).addClass("button-hover");
      $fill.addClass("button-animated");
      $text.addClass("button-active");
    });
  };

  /**
   * Function that turns on button by mouse leave
   */
  var leaveButton = function() {
    $(".iot-button").mouseleave(function() {
      var $fill = $(this)
        .children("#button-svg")
        .children(".path");
      var $text = $(this).children(".button-text");
      $(this).removeClass("button-hover");
      $fill.removeClass("button-animated");
      $text.removeClass("button-active");
    });
  };

  /**
   * Function that Makes active / disabled h3 element of "Main Features" section
   */
  var clickOnMainFeatures = function() {
    $(".feature-title").click(function(e) {
      var $this = $(this); //TODO: checkpoint for avoiding over clicking
      var colors = ['#3680AD21','#E7DFC621','#E9F1F781','#63D2FF81','#2081C381','#9FFFCB81','#B24C6381','#D3658281']
      var c1 = Math.floor(Math.random() * (colors.length - 1)) + 1;
      var c2 = Math.floor(Math.random() * (colors.length - 1)) + 1;  
      var c3 = Math.floor(Math.random() * (colors.length - 1)) + 1;  
      var c4 = Math.floor(Math.random() * (colors.length - 1)) + 1;  
      var r1 = Math.floor(Math.random() * 970) + 960;
      var r2 = Math.floor(Math.random() * 522) + 512;
      changeBackground(`https://picsum.photos/${r1}/540/?random`,`https://picsum.photos/${r2}/384/?random`,colors[c1],colors[c2],colors[c3],colors[c4]);
      // changeBackground(colors[random1],colors[random2]);
      for (let children of e.target.parentElement.children) {
        if (children == this) {
          if (!$this.hasClass("is-active")) {
            $this.prepend(spheres).addClass("is-active");
            setTimeout(function() {
              $("#spheres").addClass("is-active");
              $(".first-sphere").addClass("animated");
              $(".second-sphere").addClass("animated");
              $(".third-sphere").addClass("animated");
              $this.next().addClass("is-active");
            }, 0);
          } else {
            $("#spheres").removeClass("is-active");
            $this.removeClass("is-active");
            setTimeout(function() {
              $("#spheres").remove();
            }, 700);
            $(children)
              .parent()
              .children("p.is-active")
              .removeClass("is-active");
          }
        } else {
          if ($(children).hasClass("feature-title")) {
            if ($(children).hasClass("is-active")) {
              $(children)
                .children("#spheres")
                .remove();
              $(children).removeClass("is-active");
              $(children)
                .parent()
                .children("p.is-active")
                .removeClass("is-active");
            }
          }
        }
      }
    });
  };

  /**
   * Function that Changes the background of main component devices
   */
  var changeBackground = function(tablet,mobile,c1,c2,c3,c4) {
    var $tablet = $("#tablet");
    var $mobile = $("#mobile");
    $mobile.css({'background': `linear-gradient(${c1},${c2}), url(${mobile})`,'background-size':'cover'})
    $tablet.css({'background': `linear-gradient(${c3},${c4}), url(${tablet})`,'background-size':'cover'})
  };
  overlayOn();
  overlayOff();
  enterButton();
  leaveButton();
  clickOnMainFeatures();
});
