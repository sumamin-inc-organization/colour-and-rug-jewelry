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
import { UpdateNavLogoWhite, changeLogoToBlack, changeLogoToWhite, changeMobileLogoToBlack, changeMobileLogoToWhite } from "./assets/js/changeLogoColor";
import { openPopup, popupClose } from "./assets/js/popup";
import { CheckCurrentColor, changeLogoAttribute, updateColor } from "./assets/js/logoColorAttribute";
import { changeHamburgerToBlack, changeHamburgerToWhite, changeOnlyHamburgerToBlack, changeOnlyHamburgerToWhite } from "./assets/js/changeHamburgerColor";
import { changeOnlyRight } from "./assets/js/changeOnlyRightTrigger";
import { changeHeadDecorToBlack, changeHeadDecorToWhite, changeTelToBlack, changeTelToWhite, changeTimeToBlack, changeTimeToWhite } from "./assets/js/otherColorCanges";


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
    Company Name アニメーション
----------------------------*/


function horizontalLoop(items, config) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
    }),
    length = items.length,
    startX = items[0].offsetLeft,
    times = [],
    widths = [],
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
    totalWidth,
    curX,
    distanceToStart,
    distanceToLoop,
    item,
    i;
  gsap.set(items, {
    // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
    xPercent: (i, el) => {
      let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
          gsap.getProperty(el, "xPercent")
      );
      return xPercents[i];
    },
  });
  gsap.set(items, { x: 0 });
  totalWidth =
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1].offsetWidth *
      gsap.getProperty(items[length - 1], "scaleX") +
    (parseFloat(config.paddingRight) || 0);
  for (i = 0; i < length; i++) {
    item = items[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop =
      distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    )
      .fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
          ),
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond
      )
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }
  function toIndex(index, vars) {
    vars = vars || {};
    Math.abs(index - curIndex) > length / 2 &&
      (index += index > curIndex ? -length : length); // always go in the shortest direction
    let newIndex = gsap.utils.wrap(0, length, index),
      time = times[newIndex];
    if (time > tl.time() !== index > curIndex) {
      // if we're wrapping the timeline's playhead, make the proper adjustments
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }
  tl.next = (vars) => toIndex(curIndex + 1, vars);
  tl.previous = (vars) => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.times = times;
  tl.progress(1, true).progress(0, true); // pre-render for performance
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
  return tl;
}


const listItem = gsap.utils.toArray(".list__item");


function flowText(scrollerClass,itemClass){

  gsap.utils.toArray(scrollerClass).forEach((line, i) => {
    const links = line.querySelectorAll(itemClass),
          tl = horizontalLoop(links, {
            repeat: -1, 
            speed: 1 + i * 0.5,
            reversed: i ? true : false,
            paddingRight: parseFloat(gsap.getProperty(links[0], "marginRight", "px")) // otherwise first element would be right up against the last when it loops. In this layout, the spacing is done with marginRight.
          });
  });
}

flowText('.scroller1',".list__item");
flowText(".scroller2",".list__item");


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
  .to(".faq", { "--beforeAnimation": "100%", duration: 1.5 },"<");

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
const logomobile = document.querySelector('.mobile-logo');
const logoNav = document.querySelector('.nav-logo-img');
const isItSp = window.matchMedia("(max-width: 768px)");
const isItPc = window.matchMedia("(min-width: 769px)");
let currentLogoColor =  CheckCurrentColor("logo")

icon.addEventListener("click", () => {
  // let currentIconColor = CheckCurrentColor("hamburger");
  // if(currentIconColor === "white"){
  //   changeHamburgerToWhite();
  // }
  // else if(currentIconColor === "black"){
  //   changeHamburgerToBlack();
  // }
  animateHamburger()
});


function animateHamburger(){
  let currentIconColor = CheckCurrentColor("hamburger");
  console.log(currentIconColor)
  icon.classList.toggle("clicked");
  if( icon.classList.contains("clicked")){
    icon.setAttribute('aria-expanded', 'true');
   if(currentIconColor === "black"){
    changeOnlyHamburgerToWhite();
    }
    openNav();
  }
  else{
    icon.setAttribute('aria-expanded', 'false'); 
    if(currentIconColor === "white"){
      changeOnlyHamburgerToWhite();
    }
    else if(currentIconColor === "black"){
      changeOnlyHamburgerToBlack();
    }
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
  currentLogoColor =  CheckCurrentColor("logo")

  UpdateNavLogoWhite();

}


function closeNav(){
  let openAnim = gsap.timeline()
  openAnim
  .to('.primary-nav',{opacity:0,duration:1,zIndex:"-1"})
  .fromTo(".header-info", { opacity: 0 }, { opacity: 1 },"<")
  .fromTo(".header-btn", { opacity: 0,pointerEvents:"none" }, { opacity: 1 ,pointerEvents:"auto"},"<")
  .fromTo(".header-tel_img", { opacity: 0 ,pointerEvents:"none"}, { opacity: 1 ,pointerEvents:"auto"},"<")
  .fromTo(".header-decor", { opacity: 0 ,pointerEvents:"none"}, { opacity: 1 ,pointerEvents:"auto"},"<")

  currentLogoColor =  CheckCurrentColor("logo")
  updateColor(currentLogoColor,"logo");
  updateColor(currentLogoColor,"logo");

  //deals with position sticky not working after closing nav
  document.body.style['overflow-y'] = 'visible';
  document.documentElement.style.overflow = 'auto';
  document.body.style['overflow-x'] = 'clip';

    //changes logo form the main page logo to nav logo depening on device vw
}


const navLinks = document.querySelectorAll('.nav-link');
const salon = document.querySelector('.location');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    // e.preventDefault(); 

    const targetSectionId = link.getAttribute('data-prime-link');
    console.log(targetSectionId);
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


function changeToWhite(){
  headerTel.src = iconWhite;
  changeTimeToWhite();
  changeTelToWhite();
  changeHeadDecorToWhite();
  changeLogoToWhite();
  changeHamburgerToWhite();
}

function changeToBlack(){
  headerTel.src = iconBlack;
  changeTimeToBlack();
  changeTelToBlack();
  changeHeadDecorToBlack();
  changeLogoToBlack();
  changeHamburgerToBlack();
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

//trigger for when the right side hits the kv bottom image

if(isItPc.matches){
  changeOnlyRight(".kv_02");
}

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

if(isItPc.matches){
  changeOnlyRight(".advantage-trigger");
}
else{
  changeOnlyRight(".advantage-trigger-mobile");
}



// color consultancy image trigger for only right side of the nav
if(isItPc.matches){
  changeOnlyRight(".consultancy-trigger");
}
else{
  changeOnlyRight(".consultancy-trigger-mobile");
}



//  // plan trigger 
 ScrollTrigger.create({
  trigger: ".slide_show",
  start: "-10px top",
  onEnter: changeLogoToWhite,
  onLeave: changeToBlack,
  onEnterBack: changeLogoToWhite,
  onLeaveBack:changeToBlack
});

changeOnlyRight(".advantage-trigger-mobile");

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

if(isItSp.matches){
  changeLogoColor(".item-trigger_top");
  changeLogoColor(".item-trigger_bottom");
  changeOnlyRight(".item-trigger_top");
  // changeOnlyRight(".item-trigger_bottom"); //commented out beacuse the image area is light 
}
/*-----------------------------------------
Plan Section Animations - Mobile
Plan アニメーション - SP
--------------------------------------------*/

if(isItSp.matches){
  changeOnlyRight(".plan-mobile-trigger");
  changeLogoColor(".plan-mobile-trigger");
}
/*-----------------------------------------
Gallary Section Animations - Mobile
Gallary アニメーション - SP
--------------------------------------------*/

if(isItSp.matches){
  changeLogoColor(".gallary-mobile-trigger");
  changeOnlyRight(".gallary-mobile-trigger");
}
/*-----------------------------------------
Contact Section Animations - Mobile
Contact アニメーション - SP
--------------------------------------------*/

if(isItSp.matches){
  changeLogoColor(".contact-mobile-tirgger");
  changeOnlyRight(".contact-mobile-tirgger");
}

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
//sp
// servicetl
//   .from(".service-item-topimg", { scale:0, opacity: 0, duration: 0.7 })
//   .from(".service_think", { x:-100, opacity: 0, duration: 0.7 },"=-0.5")
//   .from(".think-text-anim", { opacity: 0, duration: 0.7 },"=-0.3")
//   .from(".service-arrow-anime", { y:-50,opacity: 0, duration: 0.7 },"=-0.3")
//   .from(".service-item1_img", { x:-50,opacity: 0, duration: 0.7},"=-0.3")
//   .from(".service_inner-anime_1", { x:-50,opacity: 0, duration: 0.7 },"=-0.5")
//   .from(".service-item1_txt", { opacity: 0, duration: 0.7 },"=-0.5")
//   .from(".plus-anime_1", {opacity:0, y:-100 ,duration: 0.7},"=-0.8")
//   .from(".plus-anime_1", { "--rotate":0 ,duration: 0.5},"=-1")
//   .from(".service-item2_img", { x:-50,opacity: 0, duration: 0.7},"=-0.3")
//   .from(".service_inner-anime_2", { x:-50,opacity: 0, duration: 0.7 },"=-0.5")
//   .from(".service-item2_txt", { opacity: 0, duration: 0.7},"=-0.5")
//   .from(".plus-anime_2", {opacity:0, y:-100 ,duration: 0.7},"=-0.8")
//   .from(".plus-anime_2", { "--rotate":0 ,duration: 0.7},"=-1")
//   .from(".service-item3_img", { x:-50,opacity: 0, duration: 0.7 },"=-0.3")
//   .from(".service_inner-anime_3", { x:-50,opacity: 0, duration: 0.7},"=-0.5")
//   .from(".service-item3_txt", { opacity: 0, duration: 0.7},"=-0.5")
  
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

 


  /*----------------------------
    NEW PLAN Animations
     NEW PLAN アニメーション
----------------------------*/

  let newplanAnitl = gsap.timeline({
    scrollTrigger: {
      trigger: newplan,
      start: "-250px top",
      scrub: false,
    },
  });

 newplanAnitl
  .fromTo(".newplan-anime_3",{ y:0,duration:1.5},{y:"100%"},)
  .fromTo(".newplan-anime_2",{ y:0,duration:1.5},{y:"-100%"},"-=0.3")
  .fromTo(".newplan-anime_4",{ y:0,duration:1.5},{y:"-100%"},"<")
  .fromTo(".newplan-anime_1",{ y:0,duration:1.5},{y:"100%"},"-=0.3")
  .fromTo(".newplan-anime_5",{ y:0,duration:1.5},{y:"100%"},"<")
  .from(".newplan-anim-txt",{ y:100,opacity: 0,duration:1.5});

