"use strict"

const feels = {
  happy: 0 // start unhappy
};

function play() {
  feels.happy = 100;
}

function adjustThings() {
  feels.happy = Math.max(0, --feels.happy);
  adjustImage();
}

function adjustImage() {
  const leftarm = document.querySelector("#leftarm");
  const rightarm = document.querySelector("#rightarm");
  leftarm.setAttribute("transform", `translate(60,-170) rotate(${-feels.happy+50})`);
  rightarm.setAttribute("transform", `translate(-60,-170) rotate(${feels.happy-50})`);
}

function init() {
  window.setInterval(adjustThings, 100);
  document.querySelector("#play").addEventListener('click', play);
}

window.addEventListener('load', init);
