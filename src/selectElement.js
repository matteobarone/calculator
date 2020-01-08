//Nome file: selectElement
//Dipende da "operatorSelected", presente e definita in "init"
export let operatorSelected;

export function selectElement(element) {
    element.classList.add('selected');
    operatorSelected = element.value;
}