const imageSources = [
  'images/dipshit-1.png',
  'images/dipshit-2.png',
  'images/dipshit-3.png',
  'images/dipshit-4.png',
  'images/dipshit-5.png',
  'images/dipshit-6.png',
  'images/dipshit-8.png'];

let index = 0;
setInterval(() => {
  if (index === imageSources.length) {
    index = 0;
  }
  document.getElementById('image').src = imageSources[index];
  index += 1;
}, 2000);
