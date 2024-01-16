import "./assets/css/common/reset.css";
import "./assets/css/common/utillity.css";
import "./assets/css/common/typography.css";
import "./assets/css/header.css";
import "./assets/css/nav.css";
import "./assets/css/keyvisual.css";
import "./assets/css/service.css";
import "./assets/css/recommended.css";
import "./assets/css/inspiration.css";
import "./assets/css/advantage.css";
import "./assets/css/consultancy.css";
import "./assets/css/item.css";
import "./assets/css/plan.css";
import "./assets/css/flow.css";
import "./assets/css/gallery.css";
import "./assets/css/faq.css";
import "./assets/css/consultancy.css";
import "./assets/css/contact.css";
import "./assets/css/form.css";
import "./assets/css/footer.css";
import "./assets/css/common/banner.css";
import "./assets/css/animations.css";
import "./assets/css/common/btnhover.css";


import iconWhite from './assets/images/nav/icon_tel-white.svg';
import iconBlack from './assets/images/nav/icon_tel.svg';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import changeLogoColor from "./assets/js/mobileLogoTrigger";
import { changeLogoToBlack, changeLogoToWhite, changeMobileLogoToBlack, changeMobileLogoToWhite } from "./assets/js/changeLogoColor";
import { openPopup, popupClose } from "./assets/js/popup";


gsap.registerPlugin(ScrollTrigger);

/*----------------------------
    Slider
    スライダー
----------------------------*/

$(document).ready(function () {
  var $slider = $(".insp-slider");
  var $indicators = $(".indicators .indicator");

  $slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: document.getElementById("slider-next"),
    prevArrow: document.getElementById("slider-prev"),
  });

  // Click event for indicators
  // インジケータのクリックイベント

  $(".indicators .indicator").on("click", function () {
    var slideIndex = $(this).data("slide-index");
    $slider.slick("slickGoTo", parseInt(slideIndex));
  });

  // Click events for navigation buttons
  // ナビゲーションボタンのクリックイベント

  $slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    $indicators.removeClass("active");
    $indicators.eq(nextSlide).addClass("active");
  });
});

/*----------------------------
    FAQ
  ----------------------------*/

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", (e) => {
    faq.classList.toggle("active");
  });
});

/*----------------------------
    Company Name Animations
    Company Name  アニメーション
----------------------------*/

const scrollers = document.querySelectorAll(".scroller"); //target the scrollers

// if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//   //check if user prefers reduced motion.( but inthis case it doesnt matter because its jus the logo)
//   addAnimation();
// }

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", "true");

    const scrollerInner = scroller.querySelector(".scroller-inner"); //the ul
    const scrollerContent = Array.from(scrollerInner.children); //get an array out of it all

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true); //clone the children
      duplicatedItem.setAttribute("aria-hidden", true); //add aria hidden attribute for screen readers
      scrollerInner.appendChild(duplicatedItem); //append
    });
  });
}
addAnimation();
/*----------------------------
    RECOMMENDED Animations
    RECOMMENDED  アニメーション
----------------------------*/
let recommendedtl = gsap.timeline({
  scrollTrigger: {
    trigger: "#recommended",
    start: "-=500px",
    scrub: false,
  },
});

recommendedtl
  .from(".recommended-eng", { x: 50, opacity: 0, duration: 2 })
  .from(".recommended-jp", { x: -50, opacity: 0, duration: 1 }, "-=1.8");

/*----------------------------
    Inspiration Animations
    Inspiration  アニメーション
----------------------------*/

let inspirationtl = gsap.timeline({
  scrollTrigger: {
    trigger: "#inspiration",
    start: "-=500px",
    scrub: false,
  },
});

inspirationtl
  .from(".inspiration-eng", { x: -50, opacity: 0, duration: 1 })
  .from(".inspiration-jp", { x: 50, opacity: 0, duration: 1 }, "-=0.8");

/*----------------------------
    Advantage Animations
    Advantage  アニメーション
----------------------------*/

let advantagetl = gsap.timeline({
  scrollTrigger: {
    trigger: "#advantage",
    start: "-=500px",
    scrub: false,
  },
});

advantagetl
  .from(".advantage-eng", { x: 50, opacity: 0, duration: 1 })
  .from(".advantage-jp", { x: -50, opacity: 0, duration: 1 }, "-=0.8");

/*----------------------------
    Consultancy Animations
    Consultancy  アニメーション
----------------------------*/

let consultancytl = gsap.timeline({
  scrollTrigger: {
    trigger: "#consultancy",
    start: "-=500px",
    scrub: false,
  },
});

consultancytl
  .from(".consultancy-eng", { x: -50, opacity: 0, duration: 1 })
  .from(".consultancy-jp", { x: 50, opacity: 0, duration: 1 }, "-=0.8");

/*----------------------------
    Item Animations
    Item アニメーション
----------------------------*/

let itemtl = gsap.timeline({
  scrollTrigger: {
    trigger: "#item",
    start: "-=500px",
    scrub: false,
  },
});

itemtl
  .from(".item-eng", { x: 50, opacity: 0, duration: 1 })
  .from(".item-jp", { x: -50, opacity: 0, duration: 1 }, "-=0.8");


  /*----------------------------
    Plan Animations
    Plan アニメーション
----------------------------*/
let plantl = gsap.timeline({
  scrollTrigger: {
    trigger: "#plan",
    start: "-=500px",
    scrub: false,
  },
});

plantl
  .from(".plan-eng", { x: -50, opacity: 0, duration: 1 })
  .from(".plan-jp", { x: 50, opacity: 0, duration: 1 }, "-=0.8");


/*----------------------------
    Flow Animations
    Flow アニメーション
----------------------------*/

let flowtl = gsap.timeline({
  scrollTrigger: {
    trigger: "#flow",
    start: "-=500px",
    scrub: false,
  },
});

flowtl
  .from(".flow-eng", { x: 50, opacity: 0, duration: 1 })
  .from(".flow-jp", { x: -50, opacity: 0, duration: 1 }, "-=0.8");

/*----------------------------
    Gallary Animations
    Gallary アニメーション
----------------------------*/

let gallerytl = gsap.timeline({
  scrollTrigger: {
    trigger: "#gallery",
    start: "-=500px",
    scrub: false,
  },
});

gallerytl
  .from(".gallery-eng", { x: -50, opacity: 0, duration: 1 })
  .from(".gallery-jp", { x: 50, opacity: 0, duration: 1 }, "-=0.8");

/*----------------------------
    FAQ Animations
    FAQ アニメーション
----------------------------*/

let faqtl = gsap.timeline({
  scrollTrigger: {
    trigger: "#faq",
    start: "-=500px",
    scrub: false,
  },
});

faqtl
  .from(".faq-eng", { x: 50, opacity: 0, duration: 1 })
  .from(".faq-jp", { x: -50, opacity: 0, duration: 1 }, "-=0.8")
  .to(".faq", { "--beforeAnimation": "100%", duration: 2.5 });

/*----------------------------
    CONTACT Animations
    CONTACT アニメーション
----------------------------*/

let conttl = gsap.timeline({
  scrollTrigger: {
    trigger: "#contact",
    start: "-=500px",
    scrub: false,
  },
});

conttl
  .from(".contact-eng", { x: -50, opacity: 0, duration: 1 })
  .from(".contact-jp", { x: 50, opacity: 0, duration: 1 }, "-=0.8");


  /*----------------------------
    NAV Animations
    Nav アニメーション
----------------------------*/

// hamburger

let icon = document.querySelector(".menu_icon");
let headerBtn = document.querySelector('.header-btn');
const body = document.body;
const logoimg = document.querySelector('.trigger-logo');
const logoNav = document.querySelector('.nav-logo-img');
const logoMobile = document.querySelector('.mobile-logo');
const isItSp = window.matchMedia("(max-width: 768px)");
const isItPc = window.matchMedia("(min-width: 769px)");

// if(isItSp.matches){
//   console.log("mobile")
// }else if (isItPc.matches){
//   console.log("pc")
// }

icon.addEventListener("click", () => {
  animateHamburger()
  console.log('clicked')
});


function animateHamburger(){
  icon.classList.toggle("clicked");
  if( icon.classList.contains("clicked")){
    icon.setAttribute('aria-expanded', 'true');
    openNav();
  }
  else{
    icon.setAttribute('aria-expanded', 'false'); 
    closeNav()
  }
}



function openNav(){
  let openAnim = gsap.timeline()
  openAnim
  // .to(body,{position:"fixed"})
  .to('.primary-nav',{opacity:1,duration:1,zIndex:7999})
  .fromTo(".header-btn", { opacity: 1 }, { opacity: 0 ,pointerEvents:"none"},"<")
  .fromTo(".header-info", { opacity: 1 }, { opacity: 0 ,pointerEvents:"none"},"<")
  .fromTo(".header-tel_img", { opacity: 1 }, { opacity: 0 ,pointerEvents:"none"},"<")
  .fromTo(".header-decor", { opacity: 1 }, { opacity: 0,pointerEvents:"none" },"<");

  //deals with scroll being shown in the nav
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';

  //changes logo form the main page logo to nav logo
  logoNav.style.display = "block"
  logoimg.style.display = "none"
  logoMobile.style.display = "none"
  // changeLogoToWhite()

}


function closeNav(){
  let openAnim = gsap.timeline()
  openAnim
  .to('.primary-nav',{opacity:0,duration:1,zIndex:"-1"})
  .fromTo(".header-info", { opacity: 0 }, { opacity: 1 },"<")
  .fromTo(".header-btn", { opacity: 0,pointerEvents:"none" }, { opacity: 1 ,pointerEvents:"auto"},"<")
  .fromTo(".header-tel_img", { opacity: 0 ,pointerEvents:"none"}, { opacity: 1 ,pointerEvents:"auto"},"<")
  .fromTo(".header-decor", { opacity: 0 ,pointerEvents:"none"}, { opacity: 1 ,pointerEvents:"auto"},"<")
  // .to(body,{position:"relative"})

  //deals with position sticky not working after closing nav
  document.body.style['overflow-y'] = 'visible';
  document.documentElement.style.overflow = 'auto';
  document.body.style['overflow-x'] = 'clip';

    //changes logo form the main page logo to nav logo depening on device vw
  logoNav.style.display = "none"
  if(isItSp.matches){
    logoMobile.style.display = "block"
  }else if (isItPc.matches){
    logoimg.style.display = "block"
  }
}


const navLinks = document.querySelectorAll('.nav-link');
const salon = document.querySelector('.location');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default behavior of the anchor tag
    const targetSectionId = link.getAttribute('data-prime-link');
    scrollToSection(targetSectionId);
    animateHamburger();
    closeNav();
  });
});

salon.addEventListener('click', (e) => {
  animateHamburger();
  closeNav();
});

function scrollToSection(sectionId) {
  const targetSection = document.querySelector(sectionId);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
}


  /*----------------------------
   Page Loader
  ページローダー
----------------------------*/

 document.addEventListener('DOMContentLoaded',(e)=>{
  let intro = gsap.timeline()

  intro
.to('.transition-item',{y:'0',delay:2})
.to('.transition-item-white',{y:'0'})
.set('.transition-item',{y:'-100%'})
.set('.transition-img',{opacity:0})
.set('.transition-img',{x:"100%" ,})
.to('.transition-item-white',{y:'-100%'})
.to('.transition-item-white',{display:"none"})
// .to('.kv_title',{"--anim-width":0})
.from('.kv_title',{y:50,opacity:0,duration:1.5},"-=1")


if(isItSp.matches){
  
  
  intro
    .from(".kv-eng", { x: 50, opacity: 0, duration: 1 },"<")
    .from(".kv-jp", { x: -50, opacity: 0, duration: 1 }, "-=0.8");
  
}

})



/*----------------------------
  Pop Up Modal
  ポップアップモーダル
----------------------------*/

const inspirationBtn = document.querySelector('[data-insp="1"]');
const modal = document.querySelector('[data-story="1"]');
const closeBtn =document.querySelector('.close-popup-btn');
const closeBtnSp = document.querySelector('.close-popup-btn_sp');

inspirationBtn.addEventListener('click',(e)=>{
  e.preventDefault;
  openPopup(modal);
  animateleft();
})



popupClose(closeBtn);
popupClose(closeBtnSp);


function animateleft(){
  let popimage =  gsap.timeline();
  popimage
  .from(".popup",{opacity:0,duration:0.5})
  // .from(".story",{x:"100%"})
  // .from(".animate-text",{opacity:0});
}

const closeBtn_sp =document.querySelector('.close-popup-btn_sp');

closeBtn_sp.addEventListener('click',(e)=>{
  modal.style.display = "none";
})

const headerTel = document.querySelector('.header-tel_img');

const header = document.getElementById('header');
const newplan = document.querySelectorAll('#newplan');
const kv = document.querySelector('.kv-trigger');
const inspBanner = document.querySelector('.insp-banner-trigger');
const itemBanner =document.querySelector('.item-banner-trigger');
const advantageTrigger = document.querySelector('.advantage-trigger');
const consultancyTrigger = document.querySelector('.consultancy-trigger');


// dark backgrounds
function changeTimeToWhite(){
  gsap.to('.time',{color:"white"});
}
function changeTelToWhite(){
  gsap.to('.change',{color:"white"});
}
function changeHeadDecorToWhite(){
  gsap.to('.header-decor',{backgroundColor:"white"});
}

function changeToWhite(){
  headerTel.src = iconWhite;
  changeTimeToWhite();
  changeTelToWhite();
  changeHeadDecorToWhite();
  changeLogoToWhite();
}

// light backgrounds

function changeTimeToBlack(){
  gsap.to('.time',{color:"#45484b"});
}
function changeTelToBlack(){
  gsap.to('.change',{color:"#45484b"});
}
function changeHeadDecorToBlack(){
  gsap.to('.header-decor',{backgroundColor:"#45484b"});
}

function changeToBlack(){
  headerTel.src = iconBlack;
  changeTimeToBlack();
  changeTelToBlack();
  changeHeadDecorToBlack();
  changeLogoToBlack();
}

function onlyRightToWhite(){
  headerTel.src = iconWhite;
  changeTimeToWhite();
  changeTelToWhite();
  changeHeadDecorToWhite();
}
function onlyRightToBlack(){
  headerTel.src = iconBlack;
  changeTimeToBlack();
  changeTelToBlack();
  changeHeadDecorToBlack();
}

//changes both the mobile version and the desktop version of the logo to black
function changeBothLogoVerToBlack(){
  changeLogoToBlack();
  changeMobileLogoToBlack();
}

//changes both the mobile version and the desktop version of the logo to white
function changeBothLogoVerToWhite(){
  changeLogoToWhite();
  changeMobileLogoToWhite();
}

function newplanAnim(){
  changeBothLogoVerToWhite()
  changeToWhite();
}

function NewplanColorToBlack(){
  changeBothLogoVerToBlack();
  changeToBlack();
}

function NewplanColorToWhite(){
  changeBothLogoVerToWhite();
  changeToWhite();
}

//when both the mobile version and desktop are the same

function changeToWhiteSpandPc(){
  changeToWhite()
  changeMobileLogoToWhite()
}


function changeToBlackSpandPc(){
  changeToBlack()
  changeMobileLogoToBlack()
}

//when only the right side and the mobile logo changes

function onlyRightandMobileToWhite(){
  onlyRightToWhite();
  changeMobileLogoToWhite();
}

function onlyRightandMobileToBlack(){
  onlyRightToBlack();
  changeMobileLogoToBlack();
}

// triggers

//trigger for logo when it htis the end of the kv
ScrollTrigger.create({
  trigger: kv,
  start: "bottom top",
  // end:".service-container",
  onEnter: changeBothLogoVerToBlack,
  // onLeave: changeLogoToWhite,
  onEnterBack: changeBothLogoVerToBlack,
  onLeaveBack:changeBothLogoVerToWhite
});


// newplan trigger
ScrollTrigger.create({
  trigger: newplan,
  start: "-50px top",
  onEnter: newplanAnim,
  onLeave: NewplanColorToBlack,
  onEnterBack: NewplanColorToWhite,
  onLeaveBack:NewplanColorToBlack
});

// banner trigger inspiration banner
ScrollTrigger.create({
  trigger: inspBanner,
  start: "-100px top",
  onEnter: changeToWhiteSpandPc,
  onLeave: changeToBlackSpandPc,
  onEnterBack: changeToWhiteSpandPc,
  onLeaveBack:changeToBlackSpandPc
});

// banner trigger item banner
ScrollTrigger.create({
  trigger: itemBanner,
  start: "-100px top",
  onEnter: changeToWhiteSpandPc,
  onLeave: changeToBlackSpandPc,
  onEnterBack: changeToWhiteSpandPc,
  onLeaveBack:changeToBlackSpandPc
});

// advantage image trigger for only  the right side 
ScrollTrigger.create({
  trigger: advantageTrigger,
  start: "-50px top",
  onEnter: onlyRightToWhite,
  onLeave: onlyRightToBlack,
  onEnterBack: onlyRightToWhite,
  onLeaveBack:onlyRightToBlack
});

// color consultancy image trigger for only right side of the nav
ScrollTrigger.create({
  trigger: consultancyTrigger,
  start: "-50px top",
  onEnter: onlyRightToWhite,
  onLeave: onlyRightToBlack,
  onEnterBack: onlyRightToWhite,
  onLeaveBack:onlyRightToBlack
});

//  // plan trigger 
 ScrollTrigger.create({
  trigger: ".slide_show",
  start: "-10px top",
  onEnter: changeLogoToWhite,
  onLeave: changeToBlack,
  onEnterBack: changeToWhite,
  onLeaveBack:changeToBlack
});

 // flow trigger 
ScrollTrigger.create({
  trigger: "#flow",
  start: "-50px top",
  onEnter: changeToBlack,
  // onLeaveBack:changeToWhite
});


 /*----------------------------
    KV Animations
    KV アニメーション
----------------------------*/

function runKvAnimations(){
  let kvtl = gsap.timeline({
    scrollTrigger: {
      trigger: ".kv_bottom",
      start: "-=200px",
      scrub: false,
    },
  });
  
  kvtl
    .from(".kv-eng", { x: 50, opacity: 0, duration: 1 })
    .from(".kv-jp", { x: -50, opacity: 0, duration: 1 }, "-=0.8");
  
  
}

if(isItPc.matches){
  runKvAnimations();
}



/* ------------------------------------------- */
/*        MOBILE SPECIFIC LOGO ANIMATIONS           */
/* ------------------------------------------- */

/*-----------------------------------------
    Recommended Section Animations - Mobile
    Recommended アニメーション - SP
--------------------------------------------*/
changeLogoColor(".sp-rc_img");
/*-----------------------------------------
Inspiration Section Animations - Mobile
Inspiration アニメーション - SP
--------------------------------------------*/
// changeLogoColor(".insp-slider");
/*-----------------------------------------
Advantage Section Animations - Mobile
Advantage アニメーション - SP
--------------------------------------------*/
changeLogoColor(".advantage-trigger-mobile");
changeLogoColor(".adv-trigger-colorscheme");
changeLogoColor(".adv-trigger-colorscheme2");
/*-----------------------------------------
Color Consultancy Section Animations - Mobile
Color Consultancy アニメーション - SP
--------------------------------------------*/
changeLogoColor(".consultancy-trigger-mobile");
/*-----------------------------------------
Item Section Animations - Mobile
Item アニメーション - SP
--------------------------------------------*/
changeLogoColor(".item-trigger_top");
changeLogoColor(".item-trigger_bottom");
/*-----------------------------------------
Plan Section Animations - Mobile
Plan アニメーション - SP
--------------------------------------------*/
changeLogoColor(".plan-mobile-trigger");
/*-----------------------------------------
Gallary Section Animations - Mobile
Gallary アニメーション - SP
--------------------------------------------*/
changeLogoColor(".gallary-mobile-trigger");
/*-----------------------------------------
Contact Section Animations - Mobile
Contact アニメーション - SP
--------------------------------------------*/
changeLogoColor(".contact-mobile-tirgger");



 /*----------------------------
    Service Animations
    Service アニメーション
----------------------------*/
let servicetl = gsap.timeline({
  scrollTrigger: {
    // trigger: ".service_content",
    trigger:".service-title-trigger",
    start: "top top",
    scrub: false,
  },
});

servicetl
  .from(".service-item-topimg", { scale:0, opacity: 0, duration: 0.7 })
  .from(".service_think", { x:-100, opacity: 0, duration: 0.7 },"=-0.5")
  .from(".think-text-anim", { opacity: 0, duration: 0.7 },"=-0.3")
  .from(".service-arrow-anime", { y:-50,opacity: 0, duration: 0.7 },"=-0.3")
  .from(".service-item1_img", { x:-50,opacity: 0, duration: 0.7},"=-0.3")
  .from(".service_inner-anime_1", { x:-50,opacity: 0, duration: 0.7 },"=-0.5")
  .from(".service-item1_txt", { opacity: 0, duration: 0.7 },"=-0.5")
  .from(".plus-anime_1", {opacity:0, y:-100 ,duration: 0.7},"=-0.8")
  .from(".plus-anime_1", { "--rotate":0 ,duration: 0.5},"=-1")
  .from(".service-item2_img", { x:-50,opacity: 0, duration: 0.7},"=-0.3")
  .from(".service_inner-anime_2", { x:-50,opacity: 0, duration: 0.7 },"=-0.5")
  .from(".service-item2_txt", { opacity: 0, duration: 0.7},"=-0.5")
  .from(".plus-anime_2", {opacity:0, y:-100 ,duration: 0.7},"=-0.8")
  .from(".plus-anime_2", { "--rotate":0 ,duration: 0.7},"=-1")
  .from(".service-item3_img", { x:-50,opacity: 0, duration: 0.7 },"=-0.3")
  .from(".service_inner-anime_3", { x:-50,opacity: 0, duration: 0.7},"=-0.5")
  .from(".service-item3_txt", { opacity: 0, duration: 0.7},"=-0.5")
  

/*----------------------------
    Reccomended Animations
    Reccomended アニメーション
----------------------------*/

  
  let reccomendtl = gsap.timeline({
    scrollTrigger: {
      trigger: "#recommended",
      start: "-=200px",
      scrub: false,
    },
  });
  
  reccomendtl
  .from(".rc-anime",{x:100,opacity:0,duration:1})
  .from(".rc_list",{x:-100,opacity:0,duration:1},"<")
  .from(".rec-li_anime1", {
    duration: 0.3,
    opacity:0,
    y: 50,
    ease: "power4.out",
    skewY: 7,
  })
  .from(".rec-li_anime2", {
    duration: 0.3,
    opacity:0,
    y: 50,
    ease: "power4.out",
    skewY: 7,
  })
  .from(".rec-li_anime3", {
    duration: 0.3,
    opacity:0,
    y: 50,
    ease: "power4.out",
    skewY: 7,
  })
  .from(".rec-li_anime4", {
    duration: 0.3,
    opacity:0,
    y: 50,
    ease: "power4.out",
    skewY: 7,
  })
  .from(".rec-li_anime5", {
    duration: 0.3,
    opacity:0,
    y: 50,
    ease: "power4.out",
    skewY: 7,
  })
  .from(".rec-li_anime6", {
    duration: 0.3,
    opacity:0,
    y: 50,
    ease: "power4.out",
    skewY: 7,
  })
  

/*----------------------------
    Plan Animations
    Plan アニメーション
----------------------------*/
  

let planAnitl = gsap.timeline({
  scrollTrigger: {
    trigger: "#plan",
    start: "-100px top",
    scrub: false,
  },
});

planAnitl
  .from(".plan_line",{width:0,duration:1})  
  .from(".plan_text_number-anime1",{scale:0,duration:0.5},"0.5")
  .from(".plan-txt-title_anime1",{opacity:0,x:-10})
  .from(".plan-txt_anime1",{opacity:0})
  .from(".plan_text_number-anime2",{scale:0,duration:0.5})
  .from(".plan-txt-title_anime2",{opacity:0,x:-10})
  .from(".plan-txt_anime2",{opacity:0})
  .from(".plan_text_number-anime3",{scale:0,duration:0.5})
  .from(".plan-txt-title_anime3",{opacity:0,x:-10})

 

  let newplanAnitl = gsap.timeline({
    scrollTrigger: {
      trigger: newplan,
      start: "-250px top",
      scrub: false,
      // markers:true
    },
  });

 newplanAnitl


  .fromTo(".newplan-anime_3",{ y:0,duration:1.5},{y:"100%"},)
  .fromTo(".newplan-anime_2",{ y:0,duration:1.5},{y:"-100%"},"-=0.3")
  .fromTo(".newplan-anime_4",{ y:0,duration:1.5},{y:"-100%"},"<")
  .fromTo(".newplan-anime_1",{ y:0,duration:1.5},{y:"100%"},"-=0.3")
  .fromTo(".newplan-anime_5",{ y:0,duration:1.5},{y:"100%"},"<")
  .from(".newplan-anim-txt",{ y:100,opacity: 0,duration:1.5})