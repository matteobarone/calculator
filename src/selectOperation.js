import {deselectAllBtn} from './deselectAllBtn';
import {selectElement} from './init';

//Nome file: selectOperation
//Dipende da "deselectAllBtn" e "selectElement"
export function selectOperation(e) {
    deselectAllBtn();
    selectElement(e.target);
}