import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const headerTel = document.querySelector(".header-tel_img");
// import iconWhite from '../assets/images/nav/icon_tel-white.svg';
// import iconBlack from '../assets/images/nav/icon_tel.svg';

import iconWhite from "../images/nav/icon_tel-white.svg";
import iconBlack from "../images/nav/icon_tel.svg";
// dark backgrounds

export function changeTimeToWhite() {
  gsap.to(".time", { color: "white" });
}

export function changeTelToWhite() {
  gsap.to(".change", { color: "white" });
}

export function changeHeadDecorToWhite() {
  gsap.to(".header-decor", { backgroundColor: "white" });
}

// light backgrounds

export function changeTimeToBlack() {
  gsap.to(".time", { color: "#45484b" });
}

export function changeTelToBlack() {
  gsap.to(".change", { color: "#45484b" });
}

export function changeHeadDecorToBlack() {
  gsap.to(".header-decor", { backgroundColor: "#45484b" });
}

export function changeHeaderTelBlack() {
  headerTel.src = iconBlack;
}

export function changeHeaderTelWhite() {
  headerTel.src = iconWhite;
}
