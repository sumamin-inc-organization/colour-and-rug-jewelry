
import iconWhite from '../images/nav/icon_tel-white.svg';
import iconBlack from '../images/nav/icon_tel.svg';
import mainLogoBlack from '../images/nav/logo_main-blk.svg';
import mainLogoWhite from '../images/nav/logo_main.svg';
import { changeLogoAttribute } from './logoColorAttribute';
const logoimg = document.querySelector('.trigger-logo');
const logoMobile = document.querySelector('.mobile-logo');



//mobile


export function changeMobileLogoToWhite(){
    logoMobile.src = mainLogoWhite;
    changeLogoAttribute("white")
  }
  
export function changeMobileLogoToBlack(){
    logoMobile.src = mainLogoBlack;
    changeLogoAttribute("black");
  }


  //pc
  export function changeLogoToWhite(){
    logoimg.src = mainLogoWhite;
    changeLogoAttribute("white");
    
  }
  
  export function changeLogoToBlack(){
    logoimg.src = mainLogoBlack;
    changeLogoAttribute("black");
  }

  export function UpdateNavLogoWhite(){
    logoMobile.src = mainLogoWhite;
    logoimg.src = mainLogoWhite;
  }

