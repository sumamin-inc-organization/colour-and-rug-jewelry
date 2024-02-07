/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/css/common/btnhover.css":
/*!********************************************!*\
  !*** ./src/assets/css/common/btnhover.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/common/reset.css":
/*!*****************************************!*\
  !*** ./src/assets/css/common/reset.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/common/thanks.css":
/*!******************************************!*\
  !*** ./src/assets/css/common/thanks.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/common/typography.css":
/*!**********************************************!*\
  !*** ./src/assets/css/common/typography.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/common/utillity.css":
/*!********************************************!*\
  !*** ./src/assets/css/common/utillity.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/contact.css":
/*!************************************!*\
  !*** ./src/assets/css/contact.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/footer.css":
/*!***********************************!*\
  !*** ./src/assets/css/footer.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/header.css":
/*!***********************************!*\
  !*** ./src/assets/css/header.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/nav.css":
/*!********************************!*\
  !*** ./src/assets/css/nav.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/js/changeHamburgerColor.js":
/*!***********************************************!*\
  !*** ./src/assets/js/changeHamburgerColor.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeHamburgerToBlack: () => (/* binding */ changeHamburgerToBlack),
/* harmony export */   changeHamburgerToWhite: () => (/* binding */ changeHamburgerToWhite),
/* harmony export */   changeOnlyHamburgerToBlack: () => (/* binding */ changeOnlyHamburgerToBlack),
/* harmony export */   changeOnlyHamburgerToWhite: () => (/* binding */ changeOnlyHamburgerToWhite)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _logoColorAttribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logoColorAttribute */ "./src/assets/js/logoColorAttribute.js");



const one = document.querySelector(".one");
const middle = document.querySelector(".middlw-line");
const three = document.querySelector(".three");

function changeHamburgerToWhite() {
  gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set(".hamburger_line", { backgroundColor: "#FFF" });

  (0,_logoColorAttribute__WEBPACK_IMPORTED_MODULE_0__.changeHamburgerAttribute)("white");
}

function changeHamburgerToBlack() {
  gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set(".hamburger_line", { backgroundColor: "#45484B" });
  (0,_logoColorAttribute__WEBPACK_IMPORTED_MODULE_0__.changeHamburgerAttribute)("black");
}

function changeOnlyHamburgerToWhite() {
  gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set(".hamburger_line", { backgroundColor: "#FFF" });
  // changeHamburgerAttribute("white")
}

function changeOnlyHamburgerToBlack() {
  gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set(".hamburger_line", { backgroundColor: "#45484B" });
  // changeHamburgerAttribute("black")
}


/***/ }),

/***/ "./src/assets/js/changeLogoColor.js":
/*!******************************************!*\
  !*** ./src/assets/js/changeLogoColor.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdateNavLogoWhite: () => (/* binding */ UpdateNavLogoWhite),
/* harmony export */   changeLogoToBlack: () => (/* binding */ changeLogoToBlack),
/* harmony export */   changeLogoToWhite: () => (/* binding */ changeLogoToWhite),
/* harmony export */   changeMobileLogoToBlack: () => (/* binding */ changeMobileLogoToBlack),
/* harmony export */   changeMobileLogoToWhite: () => (/* binding */ changeMobileLogoToWhite)
/* harmony export */ });
/* harmony import */ var _images_nav_logo_main_blk_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/nav/logo_main-blk.svg */ "./src/assets/images/nav/logo_main-blk.svg");
/* harmony import */ var _images_nav_logo_main_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/nav/logo_main.svg */ "./src/assets/images/nav/logo_main.svg");
/* harmony import */ var _logoColorAttribute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logoColorAttribute */ "./src/assets/js/logoColorAttribute.js");



const logoimg = document.querySelector(".trigger-logo");
const logoMobile = document.querySelector(".mobile-logo");

// Changes the  Logo colors => Mobile
// ロゴの色を変更します => モバイル

function changeMobileLogoToWhite() {
  logoMobile.src = _images_nav_logo_main_svg__WEBPACK_IMPORTED_MODULE_1__;
  (0,_logoColorAttribute__WEBPACK_IMPORTED_MODULE_2__.changeLogoAttribute)("white");
}

function changeMobileLogoToBlack() {
  logoMobile.src = _images_nav_logo_main_blk_svg__WEBPACK_IMPORTED_MODULE_0__;
  (0,_logoColorAttribute__WEBPACK_IMPORTED_MODULE_2__.changeLogoAttribute)("black");
}

// Changes the  Logo colors => PC
// ロゴの色を変更します => PC

function changeLogoToWhite() {
  logoimg.src = _images_nav_logo_main_svg__WEBPACK_IMPORTED_MODULE_1__;
  (0,_logoColorAttribute__WEBPACK_IMPORTED_MODULE_2__.changeLogoAttribute)("white");
}

function changeLogoToBlack() {
  logoimg.src = _images_nav_logo_main_blk_svg__WEBPACK_IMPORTED_MODULE_0__;
  (0,_logoColorAttribute__WEBPACK_IMPORTED_MODULE_2__.changeLogoAttribute)("black");
}

//changes both mobile and pc logos without updating the attribute
//属性を更新せずに、モバイルとPCのロゴを両方変更します
function UpdateNavLogoWhite() {
  logoMobile.src = _images_nav_logo_main_svg__WEBPACK_IMPORTED_MODULE_1__;
  logoimg.src = _images_nav_logo_main_svg__WEBPACK_IMPORTED_MODULE_1__;
}


/***/ }),

/***/ "./src/assets/js/logoColorAttribute.js":
/*!*********************************************!*\
  !*** ./src/assets/js/logoColorAttribute.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckCurrentColor: () => (/* binding */ CheckCurrentColor),
/* harmony export */   changeHamburgerAttribute: () => (/* binding */ changeHamburgerAttribute),
/* harmony export */   changeLogoAttribute: () => (/* binding */ changeLogoAttribute),
/* harmony export */   updateColor: () => (/* binding */ updateColor)
/* harmony export */ });
/* harmony import */ var _changeLogoColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeLogoColor */ "./src/assets/js/changeLogoColor.js");


//checks what the current color of the given element is
// 指定された要素の現在の色を確認する
function CheckCurrentColor(element) {
  const logoimg = document.querySelector(".trigger-logo");
  const logoMobile = document.querySelector(".mobile-logo");
  const hamburgerContainer = document.querySelector(".container");

  if (element === "logo") {
    if (
      logoimg.dataset.color === "white" ||
      logoMobile.dataset.color === "white"
    ) {
      return "white";
    } else if (
      logoimg.dataset.color === "black" ||
      logoMobile.dataset.color === "black"
    ) {
      return "black";
    }
  } else if (element === "hamburger") {
    if (hamburgerContainer.dataset.color === "white") {
      return "white";
    } else if (hamburgerContainer.dataset.color === "black") {
      return "black";
    }
  }
}

//changes the data-color of the logos
// ロゴの data-color を変更する
function changeLogoAttribute(color) {
  const logoimg = document.querySelector(".trigger-logo");
  const logoMobile = document.querySelector(".mobile-logo");
  if (color === "white") {
    logoimg.dataset.color = "white";
    logoMobile.dataset.color = "white";
  } else if (color === "black") {
    logoimg.dataset.color = "black";
    logoMobile.dataset.color = "black";
  }
}

function changeHamburgerAttribute(color) {
  const hamburgerContainer = document.querySelector(".container");
  const line1 = document.querySelector(".one"); //top line
  const line2 = document.querySelector(".three"); //bottom line
  const line3 = document.querySelector(" .two .hamburger_line"); //middle line
  const lines = document.querySelectorAll(".hamburger_line");
  if (color === "white") {
    hamburgerContainer.dataset.color = "white";
    lines.forEach((line) => {
      line.dataset.color = "white";
    });
  } else if (color === "black") {
    hamburgerContainer.dataset.color = "black";
    lines.forEach((line) => {
      line.dataset.color = "black";
    });
  }
}
//updates the color depending on what its color was before opeing the nav (white or black)
// ナビゲーションを開く前の色に基づいて色を更新します（白または黒）

function updateColor(color, element) {
  if (element === "logo") {
    if (color === "white") {
      (0,_changeLogoColor__WEBPACK_IMPORTED_MODULE_0__.changeMobileLogoToWhite)();
      (0,_changeLogoColor__WEBPACK_IMPORTED_MODULE_0__.changeLogoToWhite)();
    } else if (color === "black") {
      (0,_changeLogoColor__WEBPACK_IMPORTED_MODULE_0__.changeMobileLogoToBlack)();
      (0,_changeLogoColor__WEBPACK_IMPORTED_MODULE_0__.changeLogoToBlack)();
    }
  } else if (element === "hamburger") {
    console.log("hamburger"); //temp
  }
}


/***/ }),

/***/ "./src/thanks.js":
/*!***********************!*\
  !*** ./src/thanks.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_common_thanks_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/common/thanks.css */ "./src/assets/css/common/thanks.css");
/* harmony import */ var _assets_css_common_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/common/reset.css */ "./src/assets/css/common/reset.css");
/* harmony import */ var _assets_css_common_utillity_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/css/common/utillity.css */ "./src/assets/css/common/utillity.css");
/* harmony import */ var _assets_css_common_typography_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/css/common/typography.css */ "./src/assets/css/common/typography.css");
/* harmony import */ var _assets_css_header_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/css/header.css */ "./src/assets/css/header.css");
/* harmony import */ var _assets_css_nav_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/css/nav.css */ "./src/assets/css/nav.css");
/* harmony import */ var _assets_css_contact_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/css/contact.css */ "./src/assets/css/contact.css");
/* harmony import */ var _assets_css_footer_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/css/footer.css */ "./src/assets/css/footer.css");
/* harmony import */ var _assets_css_common_btnhover_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/css/common/btnhover.css */ "./src/assets/css/common/btnhover.css");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _assets_js_logoColorAttribute__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/js/logoColorAttribute */ "./src/assets/js/logoColorAttribute.js");
/* harmony import */ var _assets_js_changeHamburgerColor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/js/changeHamburgerColor */ "./src/assets/js/changeHamburgerColor.js");
/* harmony import */ var _assets_js_changeLogoColor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/js/changeLogoColor */ "./src/assets/js/changeLogoColor.js");
// import "./assets/css/common/reset.css";
// import "./assets/css/common/utillity.css";
// import "./assets/css/common/typography.css";

















gsap__WEBPACK_IMPORTED_MODULE_12__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_13__.ScrollTrigger);


function horizontalLoop(items, config) {
    items = gsap__WEBPACK_IMPORTED_MODULE_12__.gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap__WEBPACK_IMPORTED_MODULE_12__.gsap.timeline({
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
      snap = config.snap === false ? (v) => v : gsap__WEBPACK_IMPORTED_MODULE_12__.gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
      totalWidth,
      curX,
      distanceToStart,
      distanceToLoop,
      item,
      i;
    gsap__WEBPACK_IMPORTED_MODULE_12__.gsap.set(items, {
      // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
      xPercent: (i, el) => {
        let w = (widths[i] = parseFloat(gsap__WEBPACK_IMPORTED_MODULE_12__.gsap.getProperty(el, "width", "px")));
        xPercents[i] = snap(
          (parseFloat(gsap__WEBPACK_IMPORTED_MODULE_12__.gsap.getProperty(el, "x", "px")) / w) * 100 +
            gsap__WEBPACK_IMPORTED_MODULE_12__.gsap.getProperty(el, "xPercent")
        );
        return xPercents[i];
      },
    });
    gsap__WEBPACK_IMPORTED_MODULE_12__.gsap.set(items, { x: 0 });
    totalWidth =
      items[length - 1].offsetLeft +
      (xPercents[length - 1] / 100) * widths[length - 1] -
      startX +
      items[length - 1].offsetWidth *
        gsap__WEBPACK_IMPORTED_MODULE_12__.gsap.getProperty(items[length - 1], "scaleX") +
      (parseFloat(config.paddingRight) || 0);
    for (i = 0; i < length; i++) {
      item = items[i];
      curX = (xPercents[i] / 100) * widths[i];
      distanceToStart = item.offsetLeft + curX - startX;
      distanceToLoop =
        distanceToStart + widths[i] * gsap__WEBPACK_IMPORTED_MODULE_12__.gsap.getProperty(item, "scaleX");
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
      let newIndex = gsap__WEBPACK_IMPORTED_MODULE_12__.gsap.utils.wrap(0, length, index),
        time = times[newIndex];
      if (time > tl.time() !== index > curIndex) {
        // if we're wrapping the timeline's playhead, make the proper adjustments
        vars.modifiers = { time: gsap__WEBPACK_IMPORTED_MODULE_12__.gsap.utils.wrap(0, tl.duration()) };
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
  
  
  const listItem = gsap__WEBPACK_IMPORTED_MODULE_12__.gsap.utils.toArray(".list__item");
  
  
  function flowText(scrollerClass,itemClass){
  
    gsap__WEBPACK_IMPORTED_MODULE_12__.gsap.utils.toArray(scrollerClass).forEach((line, i) => {
      const links = line.querySelectorAll(itemClass),
            tl = horizontalLoop(links, {
              repeat: -1, 
              speed: 1 + i * 0.5,
              reversed: i ? true : false,
              paddingRight: parseFloat(gsap__WEBPACK_IMPORTED_MODULE_12__.gsap.getProperty(links[0], "marginRight", "px")) // otherwise first element would be right up against the last when it loops. In this layout, the spacing is done with marginRight.
            });
    });
  }
  

  flowText(".scroller2",".list__item");

  // hamburger

let icon = document.querySelector(".menu_icon");
let headerBtn = document.querySelector('.header-btn');
const body = document.body;
const logoimg = document.querySelector('.trigger-logo');
const logomobile = document.querySelector('.mobile-logo');
const logoNav = document.querySelector('.nav-logo-img');
const isItSp = window.matchMedia("(max-width: 768px)");
const isItPc = window.matchMedia("(min-width: 769px)");
let currentLogoColor =  (0,_assets_js_logoColorAttribute__WEBPACK_IMPORTED_MODULE_9__.CheckCurrentColor)("logo")

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
  let currentIconColor = (0,_assets_js_logoColorAttribute__WEBPACK_IMPORTED_MODULE_9__.CheckCurrentColor)("hamburger");
  console.log(currentIconColor)
  icon.classList.toggle("clicked");
  if( icon.classList.contains("clicked")){
    icon.setAttribute('aria-expanded', 'true');
   if(currentIconColor === "black"){
    (0,_assets_js_changeHamburgerColor__WEBPACK_IMPORTED_MODULE_10__.changeOnlyHamburgerToWhite)();
    }
    openNav();
  }
  else{
    icon.setAttribute('aria-expanded', 'false'); 
    if(currentIconColor === "white"){
      (0,_assets_js_changeHamburgerColor__WEBPACK_IMPORTED_MODULE_10__.changeOnlyHamburgerToWhite)();
    }
    else if(currentIconColor === "black"){
      (0,_assets_js_changeHamburgerColor__WEBPACK_IMPORTED_MODULE_10__.changeOnlyHamburgerToBlack)();
    }
    closeNav()
  }
}



function openNav(){
  let openAnim = gsap__WEBPACK_IMPORTED_MODULE_12__.gsap.timeline()
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
  currentLogoColor =  (0,_assets_js_logoColorAttribute__WEBPACK_IMPORTED_MODULE_9__.CheckCurrentColor)("logo")

  ;(0,_assets_js_changeLogoColor__WEBPACK_IMPORTED_MODULE_11__.UpdateNavLogoWhite)();

}


function closeNav(){
  let openAnim = gsap__WEBPACK_IMPORTED_MODULE_12__.gsap.timeline()
  openAnim
  .to('.primary-nav',{opacity:0,duration:1,zIndex:"-1"})
  .fromTo(".header-info", { opacity: 0 }, { opacity: 1 },"<")
  .fromTo(".header-btn", { opacity: 0,pointerEvents:"none" }, { opacity: 1 ,pointerEvents:"auto"},"<")
  .fromTo(".header-tel_img", { opacity: 0 ,pointerEvents:"none"}, { opacity: 1 ,pointerEvents:"auto"},"<")
  .fromTo(".header-decor", { opacity: 0 ,pointerEvents:"none"}, { opacity: 1 ,pointerEvents:"auto"},"<")

  currentLogoColor =  (0,_assets_js_logoColorAttribute__WEBPACK_IMPORTED_MODULE_9__.CheckCurrentColor)("logo")
  ;(0,_assets_js_logoColorAttribute__WEBPACK_IMPORTED_MODULE_9__.updateColor)(currentLogoColor,"logo");
  (0,_assets_js_logoColorAttribute__WEBPACK_IMPORTED_MODULE_9__.updateColor)(currentLogoColor,"logo");

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



/***/ }),

/***/ "./src/assets/images/nav/logo_main-blk.svg":
/*!*************************************************!*\
  !*** ./src/assets/images/nav/logo_main-blk.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/logo_main-blk.svg";

/***/ }),

/***/ "./src/assets/images/nav/logo_main.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/nav/logo_main.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/logo_main.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"thanks": 0,
/******/ 			"src_assets_css_common_btnhover_css-src_assets_css_common_reset_css-src_assets_css_common_typo-77cd40": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcolour_and_rug_jewelry"] = self["webpackChunkcolour_and_rug_jewelry"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_gsap_ScrollTrigger_js-node_modules_gsap_index_js","src_assets_css_common_btnhover_css-src_assets_css_common_reset_css-src_assets_css_common_typo-77cd40"], () => (__webpack_require__("./src/thanks.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=thanks.0d7ebfe8048c175dfde6.js.map