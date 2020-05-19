const $ = require('jquery');

const budNumb = Math.round(Math.random() * 10);

if (budNumb % 2 === 0) {
  $('.bud-link').attr('href', 'https://youtu.be/JJmqCKtJnxM');
} else {
  $('.bud-link').attr('href', 'https://youtu.be/qwA7_aawH5E');
}
