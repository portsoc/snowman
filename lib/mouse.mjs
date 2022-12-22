let root = document.documentElement;

function updateFocus(e) {
  const vw = Math.floor(e.pageX / document.documentElement.scrollWidth * 100);
  const vh = Math.floor(e.pageY / document.documentElement.scrollHeight * 100);

  root.style.setProperty('--mouse-vw', vw);
  root.style.setProperty('--mouse-vh', vh);
  root.style.setProperty('--mouse-x', e.clientX + "px");
  root.style.setProperty('--mouse-y', e.clientY + "px");
  root.style.setProperty('--lean', -(50-vw)/5 + "deg" );
}

function clearFocus(e) {
  root.style.setProperty('--lean', "0deg" );
}


export function init() {
  document.addEventListener('mousemove', updateFocus);
  document.addEventListener('mouseout', clearFocus);
}
