import { gsap } from "gsap";



document.querySelectorAll(".hamburger_line");


export function changeHamburgerToWhite(){
    gsap.set('.hamburger_line',{backgroundColor:"#FFF"})
}

export function changeHamburgerToBlack(){
    gsap.set('.hamburger_line',{backgroundColor:"#45484B"})
}