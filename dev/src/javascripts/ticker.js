import 'jquery';

const $ = require('jquery');

// ticker (settings) => {}
// () => {
$.fn.liScroll = (settings) => {
  settings = $.extend({
    travelocity: 0.03,
  }, settings);
  return this.each(() => {
    const $strip = $(this);
    $strip.addClass('newsticker');
    let stripHeight = 1;
    $strip.find('li').each((i) => {
      stripHeight += $(this, i).outerHeight(true);
    });
    const $mask = $strip.wrap("<div class='mask'></div>");
    const $tickercontainer = $strip.parent().wrap("<div class='tickercontainer'></div>");
    const containerHeight = $strip.parent().parent().height(); // a.k.a. 'mask' width
    $strip.height(stripHeight);
    const totalTravel = stripHeight;
    const defTiming = totalTravel / settings.travelocity; // thanks to Scott Waye
    function scrollnews(spazio, tempo) {
      $strip.animate({ top: '-=' + spazio }, tempo, 'linear', () => {
        $strip.css('top', containerHeight); scrollnews(totalTravel, defTiming);
      });
    }
    scrollnews(totalTravel, defTiming);
    $strip.hover(() => {
      $(this).stop();
    },
    () => {
      const offset = $(this).offset();
      const residualSpace = offset.top + stripHeight;
      const residualTime = residualSpace / settings.travelocity;
      scrollnews(residualSpace, residualTime);
    });
  });
};

$(() => {
  $('ul#ticker01').liScroll();
});
