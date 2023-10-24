const burgerMenu = document.querySelector(".burger_menu")
const mobileMenu = document.querySelector("#mobile_menu_window")
const mobileMenuCloseButton = document.querySelector(".menu__close_button")
const body = document.querySelector("body")

const mobileMenuActive = "mobile_menu_window_active"

burgerMenu.addEventListener("click", () => {
  mobileMenu.classList.add(mobileMenuActive)
  if(mobileMenu.classList.contains(mobileMenuActive)){
    body.style.overflow = "hidden"
  }
})

mobileMenuCloseButton.addEventListener("click", () => {
  mobileMenu.classList.remove(mobileMenuActive)
  body.style.overflow = "scroll"
})

