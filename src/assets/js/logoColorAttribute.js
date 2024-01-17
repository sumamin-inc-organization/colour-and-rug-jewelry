import { changeLogoToBlack, changeLogoToWhite, changeMobileLogoToBlack, changeMobileLogoToWhite } from "./changeLogoColor";


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

