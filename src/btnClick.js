import { deselectAllBtn } from './func2';

import { selectElement } from './func3';

export function btnClick(e) {
    deselectAllBtn();
    selectElement(e.target);
};