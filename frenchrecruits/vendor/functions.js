( function ( $ ) {
    'use strict';
 
        //***************************
        // FlexSlider Function
        //***************************
        $('.flexslider').flexslider({
            animation: "slide",
            prevText: "<em class='fa fa-angle-left'></em>",
            nextText: "<em class='fa fa-angle-right'></em>",
            start: function(slider) {
                $('body').removeClass('loading');
            }
        });

        //***************************
        // Sticky Header Function
        //***************************
      $(window).scroll(function() {
        'use strict';
          if ($(this).scrollTop() > 170){  
              $('body').addClass("ec-sticky");
          }
          else{
              $('body').removeClass("ec-sticky");
          }
      });

        //***************************
        // Click to Top Button
        //***************************
        $('.backtop-btn').on("click", function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        //***************************
        // Countdown Function
        //***************************
        $(function() {
            var austDay = new Date();
            austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
            $('#ec-Countdown').countdown({
                until: austDay
            });
            $('#year').text(austDay.getFullYear());
        });
        $(function() {
            var austDay = new Date();
            austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
            $('#ec-Countdowntwo').countdown({
                until: austDay
            });
            $('#year').text(austDay.getFullYear());
        });

        //***************************
        // PrettyPhoto Function
        //***************************
        $("area[data-rel^='prettyPhoto']").prettyPhoto();

        $(".gallery:first a[data-rel^='prettyPhoto']").prettyPhoto({
            animation_speed: 'normal',
            theme: 'pp_default',
            social_tools: '',
            slideshow: 3000,
            autoplay_slideshow: true
        });
        $(".gallery:gt(0) a[data-rel^='prettyPhoto']").prettyPhoto({
            animation_speed: 'fast',
            slideshow: 10000,
            hideflash: true
        });

        $("#custom_content a[data-rel^='prettyPhoto']:first").prettyPhoto({
            custom_markup: '<div id="map_canvas" style="width:260px; height:265px"></div>',
            changepicturecallback: function() {
                initialize();
            }
        });

        $("#custom_content a[data-rel^='prettyPhoto']:last").prettyPhoto({
            custom_markup: '<div id="bsap_1259344" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div><div id="bsap_1237859" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6" style="height:260px"></div><div id="bsap_1251710" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div>',
            changepicturecallback: function() {
                _bsap.exec();
            }
        });

        //***************************
        // Owl Carousel
        //***************************
        $('.owl-carousel').owlCarousel({
		    loop:true,
		    margin:11,
		    nav:true,
		    navText: [
                "<i class='fa fa-angle-double-left'></i>",
                "<i class='fa fa-angle-double-right'></i>"
            ],
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:6
		        }
		    }
		});
        $('.ec-sponsored').owlCarousel({
            loop:true,
            margin:11,
            nav:true,
            navText: [
                "<i class='fa fa-angle-double-left'></i>",
                "<i class='fa fa-angle-double-right'></i>"
            ],
            responsive:{
                0:{
                    items:3
                },
                600:{
                    items:4
                },
                1000:{
                    items:6
                }
            }
        });
		$('.ec-nextmatch').owlCarousel({
		    loop:false,
		    margin:0,
		    nav:true,
		    navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:1
		        }
		    }
		});
		$('.ec-gallery-slider').owlCarousel({
		    loop:true,
		    margin:15,
		    nav:true,
		    navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
		    responsive:{
		        0:{
		            items:3
		        },
		        600:{
		            items:4
		        },
		        1000:{
		            items:4
		        }
		    }
		});
		$('.ec-twitter-slider').owlCarousel({
		    loop:true,
		    margin:0,
		    nav:true,
		    navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:1
		        }
		    }
		});

        //***************************
        // SearchToggle Function
        //***************************
        $('.ec-search-popup-btn').on("click", function(){
            $('.ec-search-popup').fadeToggle('');
            return false;
        });
        //***************************
        // CartToggle Function
        //***************************
        $('a.ec-cartbtn').on("click", function(){
            $('.ec-cart-box').slideToggle('slow');
            return false;
        });
        $('html').on("click", function() { $(".ec-cart-box").fadeOut(); });
        $('.ec-navicons,.ec-cartsection').on("click", function(event){ event.stopPropagation(); });
        //***************************
        // LoginToggleClass Function
        //***************************
        $('.ec-modallogin-form p a').on("click", function(){
            $('.modal-body').toggleClass('ec-login-toggle');
            return false;
        });

        //***************************
        // Responsive Video Function
        //***************************
        $(".ec-main-content").fitVids();

        //***************************
        // Responsive Menu Function
        //***************************
        $(function() {
            $('#as-menu').asmenu();
        });

        //***************************
        // WordCounter Function
        //***************************
        $(".word-count").counterUp({
            delay: 10,
            time: 1000
        });

        //***************************
        // Skills Function
        //***************************
        $('.skillbar').each(function() {
            $(this).appear(function() {
                $(this).find('.count-bar').animate({
                    width:$(this).attr('data-percent')
                },3000);
                var percent = $(this).attr('data-percent');
                $(this).find('.count').html('<span>' + percent + '</span>');
            });
        }); 

} ( $ ) )


//***************************
// Parallax Function
//***************************
function fullscreenFix(){var a=$("body").height();$(".content-b").each(function(){$(this).innerHeight()<=a&&$(this).closest(".fullscreen").addClass("not-overflow")})}function backgroundResize(){var a=$(window).height();$(".background").each(function(){var i=$(this),t=i.width(),e=i.height(),s=i.attr("data-img-width"),o=i.attr("data-img-height"),n=s/o,r=parseFloat(i.attr("data-diff"));r=r?r:0;var c=0;if(i.hasClass("parallax")&&!$("html").hasClass("touch")){c=a-e}o=e+c+r,s=o*n,t>s&&(s=t,o=s/n),i.data("resized-imgW",s),i.data("resized-imgH",o),i.css("background-size",s+"px "+o+"px")})}function parallaxPosition(){var a=$(window).height(),i=$(window).scrollTop(),t=i+a,e=(i+t)/2;$(".parallax").each(function(){var s=$(this),o=s.height(),n=s.offset().top,r=n+o;if(t>n&&r>i){var c=(s.data("resized-imgW"),s.data("resized-imgH")),l=0,d=-c+a,h=a>o?c-o:c-a;n-=h,r+=h;var u=l+(d-l)*(e-n)/(r-n),g=s.attr("data-oriz-pos");g=g?g:"50%",$(this).css("background-position",g+" "+u+"px")}})}"ontouchstart"in window&&(document.documentElement.className=document.documentElement.className+" touch"),$("html").hasClass("touch")||$(".parallax").css("background-attachment","fixed"),$(window).resize(fullscreenFix),fullscreenFix(),$(window).resize(backgroundResize),$(window).focus(backgroundResize),backgroundResize(),$("html").hasClass("touch")||($(window).resize(parallaxPosition),$(window).scroll(parallaxPosition),parallaxPosition());
