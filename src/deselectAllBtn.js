import{btns} from 'init';

//Nome file: deselectAllBtn
//Dipende solo da "btns"
export  function deselectAllBtn() {
    btns.forEach((btn) => btn.classList.remove('selected'));
}