const feels = {
  happy: 0 // start unhappy
};

function play() {
  feels.happy = 100;
}

function adjustThings() {
  feels.happy = Math.max(0, --feels.happy);
  adjustImage();
  adjustMeters();
}

function adjustImage() {
  const leftarm = document.querySelector("#leftarm");
  const rightarm = document.querySelector("#rightarm");
  leftarm.setAttribute("transform", `translate(60,-120) rotate(${-feels.happy+50})`);
  rightarm.setAttribute("transform", `translate(-60,-135) rotate(${feels.happy-60})`);
}

function adjustMeters() {
  document.querySelector("#feelshappy").value = feels.happy;
}

export function init() {
  window.setInterval(adjustThings, 100);
  document.querySelector("#play").addEventListener('click', play);
}
