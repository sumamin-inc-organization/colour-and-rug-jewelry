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