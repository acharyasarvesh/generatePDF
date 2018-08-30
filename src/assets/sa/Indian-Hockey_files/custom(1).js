jQuery(document).ready(function($) {

    //Slick slider initialize
    // $('.hero__body').slick({
   //   arrows:false, 
   //   dots: false, 
   //   infinite:true, 
   //   speed:500,
   //   autoplay:true, 
   //   autoplaySpeed: 3000, 
   //   slidesToShow:1, 
   //   slidesToScroll:1
    // });

    // $('.hero__nav > div').click(function() {
   //   $('.hero__body').slick('slickGoTo',$(this).index());
   //   $('.hero__body').slick('focusOnSelect',$(this).index());
    // })





    // Homepage Team list tabs
    $('.team__list--player:first-child').addClass('active');
    $('.team__list__content').hide();
    $('.team__list__content:first').show();

    // click function
    $('.team__list--player').click(function(){
      $('.team__list--player').removeClass('active');
      $(this).addClass('active');
      $('.team__list__content').hide();
      
      var activeTab = $(this).attr('href');
      $(activeTab).fadeIn();
      return false;
    });



    // Homepage Team list Verticle slider
    $('.team__list').slick({
      vertical: true,
      slidesToShow: 10,
      slidesToScroll: 5,
      verticalSwiping: true,
      infinite: false
    });


    // Homepage Hero Banner tabs
    $('.hero__body').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      speed: 300,
      asNavFor: '.hero__nav',
      autoplay: true
    });
    $('.hero__nav').slick({
      slidesToShow: 4,
      asNavFor: '.hero__body',
      focusOnSelect: true,
      speed: 300,
      draggable: false,
      variableWidth: true
    });

    $('a[data-slide]').click(function(e) {
      e.preventDefault();
      var slideno = $(this).data('slide');
      $('.hero__nav').slick('slickGoTo', slideno - 1);
    });



    // Homepage News Slider with Video
    $('.news_video__content').slick({
      slidesToShow: 1,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            variableWidth: false,
            centerMode: false
          }
        }
      ]
    });



    // Homepage News Image Video js
    $(document).on('click','.js-videoPoster',function(e) {
      e.preventDefault();
      var poster = $(this);
      var wrapper = poster.closest('.js-videoWrapper');
      videoPlay(wrapper);
    });

    function videoPlay(wrapper) {
      var iframe = wrapper.find('.js-videoIframe');
      var src = iframe.data('src');
      wrapper.addClass('videoWrapperActive');
      iframe.attr('src',src);
    }

    // Homepage News Slider
    $('.news__content__panel').slick({
      slidesToShow: 1,
      infinite: false
    });


    // Homepage Blog tabs js
    $('.featured-blog__tabs--action a:first-child').addClass('active');
    $('.featured-blog__content--innner').hide();
    $('.featured-blog__content--innner:first').show();

    // click function
    $('.featured-blog__tabs--action a').click(function(){
      $('.featured-blog__tabs--action a').removeClass('active');
      $(this).addClass('active');
      $('.featured-blog__content--innner').hide();
      
      var activeTab = $(this).attr('href');
      $(activeTab).fadeIn();
      return false;
    });

    $('.featured-blog__tabs--action:nth-child(1) a').on('click', function() {
      $(".featured-blog__content").css('background-image', 'url(http://www.indianhockey.net/wp-content/uploads/2018/07/Indian-Team-Pix.jpg)');
    })
    $('.featured-blog__tabs--action:nth-child(2) a').on('click', function() {
      $(".featured-blog__content").css('background-image', 'url(http://www.indianhockey.net/wp-content/uploads/2018/08/thumbnail_IMG-20180819-WA0048.jpg)');
    })
    $('.featured-blog__tabs--action:nth-child(3) a').on('click', function() {
      $(".featured-blog__content").css('background-image', 'url(http://www.indianhockey.net/wp-content/uploads/2018/07/Indian-Team-Pix.jpg)');
    })


    // Blog Page Hero Slider
    $('.blog__hero__slider').slick({
      slidesToShow: 1,
      infinite: true,
      fade: true,
      cssEase: 'linear'
    });


    // Team Page Slider
    $('.team__info__slider').slick({
      slidesToShow: 1,
      infinite: false,
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      speed: 500
    });



});





