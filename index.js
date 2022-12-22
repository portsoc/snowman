import * as mouse from "./lib/mouse.mjs";
import * as snowman from "./lib/snowman.mjs";

function init() {
    snowman.init();
    mouse.init();
}

window.addEventListener('load',init);
