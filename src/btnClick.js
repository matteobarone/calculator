import {deselectAllBtn} from 'deselectAllBtn';
import {selectElement} from 'selectElement';

//Nome file: btnClick
//Dipende da "deselectAllBtn" e "selectElement"
export function btnClick(e) {
    deselectAllBtn();
    selectElement(e.target);
}