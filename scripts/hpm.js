$(document).ready(function() {
  var home = "../index.html"
  $("#logotype")
    .mouseover(function() {
      $(this).css({'cursor':'pointer'});
    })
    .click(function() {
      location.href = home;
    });
  /**
   * Planetary: Initial children planets position into orbit
   */
  var $oo = $(".outer-orbit"),
    $io = $(".inner-orbit"),
    $ipt = $(".inner-planet-top"),
    $ipb = $(".inner-planet-bottom"),
    $opl = $(".outer-planet-left"),
    $opr = $(".outer-planet-right");

  var planetPosition = function(orbit) {
    var radius = orbit[0].offsetWidth / 2,
      children = orbit[0].children,
      tHeight = orbit[0].offsetHeight,
      tWidth = orbit[0].offsetWidth,
      $props = new Array();

    for (var planet of children) {
      if (planet.id == "planet" && planet.className.includes("planet")) {
        let item = new Object();
        item.class = `.${planet.className}`;
        item.height = planet.offsetHeight;
        item.width = planet.offsetWidth;
        item.radius = planet.offsetHeight / 2;
        $props.push(item);
      }
    }
    for (let item of $props) {
      if (item.class.includes("left")) {
        let distance = tWidth / 2 - radius - item.radius;
        $opl.css({ left: `${distance}px` });
      } else if (item.class.includes("right")) {
        let distance = tWidth / 2 - radius - item.radius;
        $opr.css({ right: `${distance}px` });
      } else if (item.class.includes("top")) {
        let distance = tWidth / 2 - radius - item.radius;
        $ipt.css({ top: `${distance}px` });
      } else if (item.class.includes("bottom")) {
        let distance = tWidth / 2 - radius - item.radius;
        $ipb.css({ bottom: `${distance}px` });
      }
    }
  };

  planetPosition($oo);
  planetPosition($io);
  /**
   * 360º infinite rotation / translation
   */
  /* var r1 = new TimelineMax(),
      r2 = new TimelineMax();
  r1.to($oo, 300, { rotation: 360, repeat: -1, ease: "linear" });
  r2.to($io, 300, { rotation: 360, repeat: -1, ease: "linear" });
  var t1 = new TimelineMax(),
    t2 = new TimelineMax(),
    t3 = new TimelineMax(),
    t4 = new TimelineMax();
  t1.to($opl, 300, { rotation: -360, repeat: -1, ease: "linear" });
  t2.to($opr, 300, { rotation: -360, repeat: -1, ease: "linear" });
  t3.to($ipt, 300, { rotation: -360, repeat: -1, ease: "linear" });
  t4.to($ipb, 300, { rotation: -360, repeat: -1, ease: "linear" }); */

  /**
   * Paused on 30
   */
  var r1 = new TimelineMax(),
    r2 = new TimelineMax();
  r1.from($oo, 10, { rotation: 30 }).pause();
  r2.from($io, 10, { rotation: 50 }).pause();
  var t1 = new TimelineMax();
  var t2 = new TimelineMax();
  var t3 = new TimelineMax();
  var t4 = new TimelineMax();
  t1.from($opl, 10, { rotation: -30 }).pause();
  t2.from($opr, 10, { rotation: -30 }).pause();
  t3.from($ipt, 10, { rotation: -50 }).pause();
  t4.from($ipb, 10, { rotation: -50 }).pause();
  $(window).resize(function() {
    planetPosition($oo);
    planetPosition($io);
  });
});
