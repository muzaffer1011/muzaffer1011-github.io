const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
// End Section
const section = document.querySelector('section');
const end = section.querySelector('h1');

// ScrollMagic
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration: 9000,
    triggerElemnt: intro,
    triggerHook: 0,
  })
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

// Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
  scrollpos = e.scrollPos / 1000;
  // console.log(e);
  // delay += (scrollpos - delay) * accelamount;
  // setTimeout(() => {
  //   video.currentTime = delay
  // }, 33.3)

})
let playint = setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay)
  video.currentTime = delay;
  // clearInt()
}, 33.33);

// function clearInt() {
//   setTimeout(() => {
//     clearInterval(playint);
//   }, 66.6)
// }