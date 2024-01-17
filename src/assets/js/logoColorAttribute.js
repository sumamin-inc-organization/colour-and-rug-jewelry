import { changeLogoToBlack, changeLogoToWhite, changeMobileLogoToBlack, changeMobileLogoToWhite } from "./changeLogoColor";

//checks what the current color of the given element is
// 指定された要素の現在の色を確認する
export function CheckCurrentColor(element){
    const logoimg = document.querySelector('.trigger-logo');
    const logoMobile = document.querySelector('.mobile-logo'); 
    const hamburgerContainer = document.querySelector('.container'); 
    
    if(element === "logo"){
        if(logoimg.dataset.color === "white" || logoMobile.dataset.color === "white" ){
            return "white"
        }
        else if(logoimg.dataset.color === "black" || logoMobile.dataset.color === "black"){
            return "black";
        }
    }else if(element === "hamburger"){
        if( hamburgerContainer.dataset.color === "white" ){
            return "white"
        }
        else if(hamburgerContainer.dataset.color === "black"){
            return "black";
        }
    }

}

//changes the data-color of the logos
// ロゴの data-color を変更する
export function changeLogoAttribute(color){
    const logoimg = document.querySelector('.trigger-logo');
    const logoMobile = document.querySelector('.mobile-logo'); 
    if(color === "white"){
        logoimg.dataset.color = "white"
        logoMobile.dataset.color = "white"
    } else if(color === "black"){
        logoimg.dataset.color = "black"
        logoMobile.dataset.color = "black"
    }
}

export function changeHamburgerAttribute(color){
    const hamburgerContainer = document.querySelector('.container'); 
    const line1 = document.querySelector('.one');  //top line
    const line2 = document.querySelector('.three'); //bottom line
    const line3 = document.querySelector(' .two .hamburger_line');  //middle line
    const lines = document.querySelectorAll('.hamburger_line');
    if(color === "white"){
        hamburgerContainer.dataset.color = "white"
        lines.forEach(line => {
            line.dataset.color = "white";
        })
    } else if(color === "black"){
        hamburgerContainer.dataset.color = "black"
        lines.forEach(line => {
            line.dataset.color = "black";
        })
    }
}
//updates the color depending on what its color was before opeing the nav (white or black)
// ナビゲーションを開く前の色に基づいて色を更新します（白または黒）

export function updateColor(color,element){
    if(element === "logo"){
        if(color === "white"){
            changeMobileLogoToWhite();
            changeLogoToWhite();
        }
        else if(color === "black"){
            changeMobileLogoToBlack();
            changeLogoToBlack();
        }
    }else if(element === "hamburger"){
        console.log("hamburger") //temp
    }
}

