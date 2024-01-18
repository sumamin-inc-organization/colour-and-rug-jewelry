import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  changeMobileLogoToBlack,
  changeMobileLogoToWhite,
} from "./changeLogoColor";
gsap.registerPlugin(ScrollTrigger);

export default function changeLogoColor(classname) {
  ScrollTrigger.create({
    trigger: classname,
    start: "-50px top",
    onEnter: changeMobileLogoToWhite,
    onLeave: changeMobileLogoToBlack,
    onEnterBack: changeMobileLogoToWhite,
    onLeaveBack: changeMobileLogoToBlack,
  });
}
