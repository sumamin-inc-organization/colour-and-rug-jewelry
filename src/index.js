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

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// gsap.registerPlugin(ScrollTrigger);

// let images = gsap.utils.toArray(".parallax");

// images.forEach((image) => {
//   gsap.to(image, {
//     yPercent: -100 * image.dataset.speed,
//     ease: "none",
//     scrollTrigger: {
//       scrub: image.dataset.speed,
//     },
//   });
// });

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

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  //check if user prefers reduced motion.( but inthis case it doesnt matter because its jus the logo)
  addAnimation();
}

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
/*----------------------------
    RECOMMENDED Animations
    RECOMMENDED  アニメーション
----------------------------*/
let recommendedtl = gsap.timeline({
  scrollTrigger: {
    trigger: "#recommended",
    start: "-=500px",
    scrub: false,
    // markers:true
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
    // markers:true
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
    // markers:true
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
    // markers:true
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
    // markers:true
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
    // markers:true
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
    // markers:true
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
    // markers:true
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
    // markers:true
  },
});

faqtl
  .from(".faq-eng", { x: 50, opacity: 0, duration: 1 })
  .from(".faq-jp", { x: -50, opacity: 0, duration: 1 }, "-=0.8")
  .to(".faq", { "--beforeAnimation": "100%", duration: 5 });

/*----------------------------
    CONTACT Animations
    CONTACT アニメーション
----------------------------*/

let conttl = gsap.timeline({
  scrollTrigger: {
    trigger: "#contact",
    start: "-=500px",
    scrub: false,
    // markers:true
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
console.log(body)

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
  .fromTo(".header-btn", { opacity: 1 }, { opacity: 0 },"<")
  .fromTo(".header-info", { opacity: 1 }, { opacity: 0 },"<")
  .fromTo(".header-tel_img", { opacity: 1 }, { opacity: 0 },"<");

  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
  
  

}


function closeNav(){
  let openAnim = gsap.timeline()
  openAnim
  .to('.primary-nav',{opacity:0,duration:1,zIndex:"-1"})
  .fromTo(".header-info", { opacity: 0 }, { opacity: 1 },"<")
  .fromTo(".header-btn", { opacity: 0 }, { opacity: 1 },"<")
  .fromTo(".header-tel_img", { opacity: 0 }, { opacity: 1 },"<")
  // .to(body,{position:"relative"})

  document.body.style.overflow = 'auto';
  document.documentElement.style.overflow = 'auto';
  
}


 const navLinks = document.querySelectorAll('.nav-link');


 navLinks.forEach(link =>{
  link.addEventListener('click',(e)=>{
    animateHamburger()
    closeNav()
  })
 })



  /*----------------------------
   Page Loader
  ページローダー
----------------------------*/

 document.addEventListener('DOMContentLoaded',(e)=>{
  let intro = gsap.timeline()

  intro
.to('.transition-item',{y:'0',delay:2})
.to('.transition-item-white',{y:'0'})
.set('.transition-item',{y:'100%'})
.set('.transition-img',{opacity:0})
.set('.transition-img',{x:"100%"})
.to('.transition-item-white',{y:'-100%'})
})



/*----------------------------
  Pop Up Modal
  ポップアップモーダル
----------------------------*/

const inspirationBtn = document.querySelector('[data-insp="1"]');
const modal = document.querySelector('[data-story="1"]');
const closeBtn =document.querySelector('.close-popup-btn');

inspirationBtn.addEventListener('click',(e)=>{
  e.preventDefault;
  modal.style.display = "block";
  animateleft()
})
closeBtn.addEventListener('click',(e)=>{
  modal.style.display = "none";
})

function animateleft(){
  let popimage =  gsap.timeline();
  popimage
  .from(".popup",{opacity:0,duration:0.5})
  // .from(".story",{x:"100%"})
  // .from(".animate-text",{opacity:0});
}


