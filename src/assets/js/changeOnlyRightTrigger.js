import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onlyRightToBlack, onlyRightToWhite } from "./onlyRightColorChange";

gsap.registerPlugin(ScrollTrigger);


export function changeOnlyRight(classname){
    ScrollTrigger.create({
        trigger: classname,
        start: "-50px top",
        onEnter: onlyRightToWhite,
        onLeave: onlyRightToBlack,
        onEnterBack: onlyRightToWhite,
        onLeaveBack:onlyRightToBlack
      });
}