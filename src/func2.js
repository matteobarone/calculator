import { btns } from './init';

export function deselectAllBtn() {
    btns.forEach((btn) => btn.classList.remove('selected'));
};