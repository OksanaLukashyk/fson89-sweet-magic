import { modal } from "../modal/modal.js"
import { onCrossClose } from "./onCrossClose.js"
export function onModalOpenClick(evt){
    modal.show()
    document.querySelector('.js-modal-close').addEventListener('click',onCrossClose)
    }