import { deselectAllBtn } from '/func2.js';

import { selectElement } from '/func3.js';

export function btnClick(e) {
    deselectAllBtn();
    selectElement(e.target);
};