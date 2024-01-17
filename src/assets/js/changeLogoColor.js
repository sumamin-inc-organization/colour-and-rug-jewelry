import mainLogoBlack from '../images/nav/logo_main-blk.svg';
import mainLogoWhite from '../images/nav/logo_main.svg';
import { changeLogoAttribute } from './logoColorAttribute';
const logoimg = document.querySelector('.trigger-logo');
const logoMobile = document.querySelector('.mobile-logo');


// Changes the  Logo colors => Mobile
// ロゴの色を変更します => モバイル

export function changeMobileLogoToWhite(){
    logoMobile.src = mainLogoWhite;
    changeLogoAttribute("white")
  }
  
export function changeMobileLogoToBlack(){
    logoMobile.src = mainLogoBlack;
    changeLogoAttribute("black");
  }


  // Changes the  Logo colors => PC
  // ロゴの色を変更します => PC

  export function changeLogoToWhite(){
    logoimg.src = mainLogoWhite;
    changeLogoAttribute("white");
    
  }
  
  export function changeLogoToBlack(){
    logoimg.src = mainLogoBlack;
    changeLogoAttribute("black");
  }


//changes both mobile and pc logos without updating the attribute
//属性を更新せずに、モバイルとPCのロゴを両方変更します
  export function UpdateNavLogoWhite(){
    logoMobile.src = mainLogoWhite;
    logoimg.src = mainLogoWhite;
  }

