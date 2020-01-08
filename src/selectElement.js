//Nome file: selectElement
//Dipende da "operatorSelected", presente e definita in "init"

import{operatorSelected} from '/init';

export function selectElement(element) {
    element.classList.add('selected');
    operatorSelected = element.value;
}