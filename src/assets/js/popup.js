const modal = document.querySelector('[data-story="1"]');


// function for closing the popup
// ポップアップを閉じるための関数

export function popupClose(btn){
    btn.addEventListener('click',(e)=>{
        modal.style.display = "none";
        document.body.style['overflow-y'] = 'visible';
        document.documentElement.style.overflow = 'auto';
        document.body.style['overflow-x'] = 'clip';
      })
}


export function openPopup(popupmodal){
    popupmodal.style.display = "block";
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
}