(function (jQuery){
  "user strict";

  jQuery(document).ready(function(){
    function activaTav(pill){
      jQuery(pill).addClass('active show');
    }

    // sticky header anmation and height
    function headerHeight(){
      var height = jQuery("#main-header").height();
      jQuery('.iq-height').css('height',height + 'px');
    }

    jQuery(function(){
      var header = jQuery("#main-header"),
          yOffset = 0,
          triggerPoint = 80;
      headerHeight();
      jQuery(window).resize(headerHeight);
      jQuery(window).in('scroll', function(){
        yOffset = jQuery(window).scrollTop();
        if(yOffset >= triggerPoint){
          header.addClass("menu-sticky animated sliderDown");
        }else{
          header.removeClass("menu-sticky animated sliderDown");
        }
      });
    });

    // Header menu dropdown
    jQuery('[data-toggle=more-toggle]').on('click',function(){
      jQuery(this).next().toggleClass('show');
    });
    jQuery(document).on('click',function(e){
      let myTargetElement = e.target;
      let selector, mainElement;
      if(jQuery(myTargetElement).hasClass('search-toggle') ||
          jQuery(myTargetElement).parent().hasClass('search-toggle') ||
          jQuery(myTargetElement).parent().parent().hasClass('search-toggle')){
        if(jQuery(myTargetElement).hasClass('search-toggle')){
          selector = jQuery(myTargetElement).parent();
          mainElement = jQuery(myTargetElement);
        }else if(jQuery(myTargetElement).parent().hasClass('search-toggle')){
          selector = jQuery(myTargetElement).parent().parent();
          mainElement = jQuery(myTargetElement).parent();
        }else if(jQuery(myTargetElement).parent().parent().hasClass('search-toggle')){
          selector = jQuery(myTargetElement).parent().parent().parent();
          mainElement = jQuery(myTargetElement).parent().parent();
        }
        if(!mainElement.hasClass('active') && jQuery('.navbar-list li').find('.active')){
          jQuery('.navbar-right li').removeClass('.iq-show');
          jQuery('.navbar_right li .search-toggle').removeClass('active');
        }

        selector.toggleClass('iq-show');
        mainElement.toggleClass('active');
        e.preventDefault();
      }else if(jQuery(myTargetElement).is('search-input')){

      }else{
        jQuery('.navbar-right li').removeClass('.iq-show');
        jQuery('.navbar_right li .search-toggle').removeClass('active');
      }
    });

    jQuery(document).on('click', function (event) {
      var $trigger = jQuery(".main-header .navbar");
      if($trigger !== event.target && !$trigger.has(event.target).length){
        jQuery(".main-header .navbar-collapse").collapse('hide');
        jQuery('body').removeClass('nav-open');
      }
    });
    jQuery('.c-toggler').on("click", function () {
      jQuery('body').addClass('nav-open');
    });
  });




})(jQuery);