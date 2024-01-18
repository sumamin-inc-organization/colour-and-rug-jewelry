import { gsap } from "gsap";
import { changeHamburgerAttribute } from "./logoColorAttribute";

const one = document.querySelector(".one");
const middle = document.querySelector(".middlw-line");
const three = document.querySelector(".three");

export function changeHamburgerToWhite() {
  gsap.set(".hamburger_line", { backgroundColor: "#FFF" });

  changeHamburgerAttribute("white");
}

export function changeHamburgerToBlack() {
  gsap.set(".hamburger_line", { backgroundColor: "#45484B" });
  changeHamburgerAttribute("black");
}

export function changeOnlyHamburgerToWhite() {
  gsap.set(".hamburger_line", { backgroundColor: "#FFF" });
  // changeHamburgerAttribute("white")
}

export function changeOnlyHamburgerToBlack() {
  gsap.set(".hamburger_line", { backgroundColor: "#45484B" });
  // changeHamburgerAttribute("black")
}
