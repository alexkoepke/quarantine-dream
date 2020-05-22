const $ = require('jquery');

const budLink = () => {
  const budNumb = Math.round(Math.random() * 30);

  if (budNumb >= 0 && budNumb <= 9) {
    $('.bud-link').attr('href', 'https://youtu.be/JJmqCKtJnxM');
  } else if (budNumb >= 10 && budNumb <= 19) {
    $('.bud-link').attr('href', 'https://youtu.be/qwA7_aawH5E');
  } else {
    $('.bud-link').attr('href', 'https://d3qvyul2tp4j8.cloudfront.net/i/WwlzCMhZDu.jpg');
  }
};

budLink();

let index = 0;
setInterval(() => {
  if (index === 3) {
    index = 0;
  }
  budLink();
  index += 1;
}, 2000);
