import { btns } from '/init.js';

export function deselectAllBtn() {
    btns.forEach((btn) => btn.classList.remove('selected'));
};