import{ operatorSelected } from './init';

export function selectElement(element) {
    element.classList.add('selected');
    operatorSelected = element.value;
};