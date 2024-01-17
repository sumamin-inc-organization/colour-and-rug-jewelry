import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { changeHeadDecorToBlack, changeHeadDecorToWhite, changeHeaderTelBlack, changeHeaderTelWhite, changeTelToBlack, changeTelToWhite, changeTimeToBlack, changeTimeToWhite } from "./otherColorCanges";
import { changeHamburgerToBlack, changeHamburgerToWhite } from "./changeHamburgerColor";

export function onlyRightToWhite(){
    changeHeaderTelWhite();
    changeTimeToWhite();
    changeTelToWhite();
    changeHeadDecorToWhite();
    changeHamburgerToWhite()
  }

export function onlyRightToBlack(){
    changeHeaderTelBlack()
    changeTimeToBlack();
    changeTelToBlack();
    changeHeadDecorToBlack();
    changeHamburgerToBlack()
  }