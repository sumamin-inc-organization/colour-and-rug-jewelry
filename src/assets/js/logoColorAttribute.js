import { changeLogoToBlack, changeLogoToWhite, changeMobileLogoToBlack, changeMobileLogoToWhite } from "./changeLogoColor";

//checks what the current color of the given element is
// 指定された要素の現在の色を確認する
export function CheckCurrentColor(element){
    const logoimg = document.querySelector('.trigger-logo');
    const logoMobile = document.querySelector('.mobile-logo'); 

    if(element === "logo"){
        if(logoimg.dataset.color === "white" || logoMobile.dataset.color === "white" ){
            return "white"
        }
        else if(logoimg.dataset.color === "black" || logoMobile.dataset.color === "black"){
            return "black";
        }
    }else if(element === "hamburger"){
        console.log("hamburger") //temp
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

//updates the color depending on what its color was before opeing the nav (white or black)
// ナビゲーションを開く前の色に基づいて色を更新します（白または黒）

export function updateColor(color,element){
console.log(color)
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

