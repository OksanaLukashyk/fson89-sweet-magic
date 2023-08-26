import { modal } from "../modal/modal.js";
export function onEscapeClose(evt){
    if (evt.code!=='Escape')return;
    modal.close()
  }
  