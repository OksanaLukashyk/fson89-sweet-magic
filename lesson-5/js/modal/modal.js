import { onCrossClose } from "../helpers/onCrossClose.js"
import { onEscapeClose } from "../helpers/onEscapeClose.js"
export const modal = basicLightbox.create(
    `<div class="modal">
    <button type="button" class="close-btn js-modal-close">
      X
    </button>
  
    <form class="login-form js-modal__form">
      <label>
        Name
        <input type="text" name="name" placeholder="enter your name" />
      </label>
      <label>
        Email
        <input type="email" name="email" placeholder="enter your email" />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          placeholder="enter your password"
        />
      </label>
      <button class="login-btn" type="submit">
        Login
      </button>
    </form>
  </div>`,
  {
    onShow:()=> {
      document.body.style.overflow = 'hidden'
      document.addEventListener("keydown",onEscapeClose)
      
    },
    onClose:()=> {
      document.body.style.overflow = 'visible'
      document.removeEventListener("keydown",onEscapeClose)
      document.querySelector('.js-modal-close').removeEventListener('click',onCrossClose)
    }
  }
  )