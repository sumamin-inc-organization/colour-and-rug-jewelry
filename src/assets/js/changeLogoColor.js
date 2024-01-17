
import iconWhite from '../images/nav/icon_tel-white.svg';
import iconBlack from '../images/nav/icon_tel.svg';
import mainLogoBlack from '../images/nav/logo_main-blk.svg';
import mainLogoWhite from '../images/nav/logo_main.svg';
const logoimg = document.querySelector('.trigger-logo');
const logoMobile = document.querySelector('.mobile-logo');



//mobile


export function changeMobileLogoToWhite(){
    logoMobile.src = mainLogoWhite;
  }
  
export function changeMobileLogoToBlack(){
    logoMobile.src = mainLogoBlack;
  }


  //pc
  export function changeLogoToWhite(){
    logoimg.src = mainLogoWhite;
    
  }
  
  export function changeLogoToBlack(){
    logoimg.src = mainLogoBlack;
  }