import { gsap } from "gsap";
import { changeHamburgerAttribute } from "./logoColorAttribute";



document.querySelectorAll(".hamburger_line");


export function changeHamburgerToWhite(){
    gsap.set('.hamburger_line',{backgroundColor:"#FFF"})
    changeHamburgerAttribute("white")
}

export function changeHamburgerToBlack(){
    gsap.set('.hamburger_line',{backgroundColor:"#45484B"})
    changeHamburgerAttribute("black")
}