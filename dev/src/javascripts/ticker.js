// const $ = require('jquery');
//
// function autoScrollDown() { // eslint-disable-line no-unused-vars
//   $('.inner').css({ top: -$('.outer').outerHeight() }) // jump back
//     .animate({ top: 0 }, 150000, 'linear', autoScrollDown); // and animate
// }
// function autoScrollUp() { // eslint-disable-line no-unused-vars
//   $('.inner').css({ top: 0 }) // jump back
//     .animate({ top: -$('.outer').outerHeight() }, 150000, 'linear', autoScrollUp); // and animate
// }
// // fix hight of outer:
// $('.outer').css({ maxHeight: $('.inner').height() });
// // duplicate content of inner:
// $('.inner').html($('.inner').html() + $('.inner').html());
// autoScrollUp();
