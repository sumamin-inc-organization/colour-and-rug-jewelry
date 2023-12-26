import "./assets/css/common/reset.css";
import "./assets/css/common/utillity.css";
import "./assets/css/common/typography.css";
import "./assets/css/header.css";
import "./assets/css/nav.css";
import "./assets/css/keyvisual.css";
import "./assets/css/newplan.css";
import "./assets/css/service.css";
import "./assets/css/recommended.css";
import "./assets/css/inspiration.css";
import "./assets/css/advantage.css";
import "./assets/css/consultancy.css";
import "./assets/css/item.css";
import "./assets/css/flow.css";
import "./assets/css/gallery.css";
import "./assets/css/faq.css";
import "./assets/css/consultancy.css";
import "./assets/css/contact.css";
import "./assets/css/form.css";
import "./assets/css/footer.css";
import "./assets/css/common/banner.css";


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

$(document).ready(function() {
    var $slider = $('.insp-slider');
    var $indicators = $('.indicators .indicator');
  
    $slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      nextArrow: document.getElementById('slider-next'),
      prevArrow: document.getElementById('slider-prev'),
    });
  
    // Click event for indicators
    // インジケータのクリックイベント
  
    $('.indicators .indicator').on('click', function() {
      var slideIndex = $(this).data('slide-index');
      $slider.slick('slickGoTo', parseInt(slideIndex));
    });
  
    // Click events for navigation buttons
    // ナビゲーションボタンのクリックイベント
    
    $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      $indicators.removeClass('active');
      $indicators.eq(nextSlide).addClass('active');
    });
  });

  /*----------------------------
    FAQ
  ----------------------------*/


  const faqs = document.querySelectorAll('.faq');
  

  faqs.forEach(faq =>{
    faq.addEventListener('click',(e)=>{
      faq.classList.toggle('active')
    })
  })
  

  /*----------------------------
    FAQ Animations
    FAQ アニメーション
----------------------------*/
gsap.registerPlugin(ScrollTrigger);
let faqtl = gsap.timeline({
  scrollTrigger: {
    trigger: "#faq",
    start: "-=300px",
    scrub: false,
  },
});

faqtl
  .to(".faq", { "--beforeAnimation": "100%", duration: 5 });


  /*----------------------------
    Company Name Animations
    Company Name  アニメーション
----------------------------*/

const scrollers = document.querySelectorAll('.scroller'); //target the scrollers

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){ //check if user prefers reduced motion.( but inthis case it doesnt matter because its jus the logo)
  addAnimation();
} 

function addAnimation(){
  scrollers.forEach(scroller =>{
    scroller.setAttribute('data-animated','true');

    const scrollerInner = scroller.querySelector(".scroller-inner"); //the ul
    const scrollerContent = Array.from(scrollerInner.children); //get an array out of it all

    scrollerContent.forEach(item => {
      const duplicatedItem = item.cloneNode(true); //clone the children
      duplicatedItem.setAttribute('aria-hidden',true); //add aria hidden attribute for screen readers
      scrollerInner.appendChild(duplicatedItem);  //append
    })
  })
}

