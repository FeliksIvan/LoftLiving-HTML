document.querySelectorAll('.accordion-title').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = 0;
        }
    });
});

$(document).ready(function(){
    
    $('.social_content1 ul li button').click(function() {
        $('.social_content1 ul li button').removeClass('active');
        $(this).addClass('active');
        $('.sc_tab_content').removeClass('active');
        var dataId = $(this).data('id');
        $('#' + dataId).addClass('active');
    });

    $('.wc_element').hover(function(){
        $('.wc_element').removeClass('active');
        $(this).addClass('active');
    })

    $('.ns_item').hover(function(){
        $('.ns_item').removeClass('active');
        $(this).addClass('active');
    })

    $('[data-fancybox="detail"]').fancybox({
        /*thumbs: {
            autoStart: true
        },*/
        loop: true,
        buttons: [
            'download',
            "close",
            "zoom",
            "share",
            "slideShow",
            "fullScreen",
            "thumbs",
        ],
        i18n: {
            en: {
                CLOSE: "Kapat",
                NEXT: "Sonraki",
                PREV: "Önceki",
                ERROR: "Fotoğraf yüklenemedi. <br/> Lütfen daha sonra tekrar deneyin.",
                PLAY_START: "Slayt'ı başlat",
                PLAY_STOP: "Slayt'ı durdur",
                FULL_SCREEN: "Tam ekran",
                THUMBS: "Küçük resimler",
                DOWNLOAD: "İndir",
                SHARE: "Paylaş",
                ZOOM: "Yakınlaştır"
            }
        },
    });
    
    $('.has-submenu').click(function(e){
        if ($(window).width() <= 1200) {
            e.preventDefault();
            $(this).parent().find('ul').slideToggle(300);
        }
    });

    $('.menu_trigger').click(function(){
        $('.hm_inner > ul').slideToggle(300);
    })

    $('.src_trigger').click(function() {
        $(this).toggleClass('active');
        $('.header_menu .src_overlay').toggleClass('active');
        $('.header_menu .src_overlay input').focus();
        $('.header_menu .row>div').toggleClass('active');
        if ($('.hm_inner > ul').css('display') === 'block') {
            $('.hm_inner > ul').slideToggle(300);
        }
    });
     

    $('.src_overlay button').click(function() {
        $('.src_overlay').removeClass('active');
        $('.header_menu .row>div').removeClass('active');
    });    

    var mainSwiper = new Swiper('.mainSwiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: '#mainPagination',
            clickable:true
        },
        loop:false,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.wf_next',
            prevEl: '.wf_prev',
        }
    });

    var ss_thumbs = new Swiper(".ss_thumbs .swiper-container", {
        slidesPerView: 5,
        spaceBetween: 25,
        watchSlidesProgress: false,
        watchSlidesVisibility: false,   
        threshold: 10,
        breakpoints: {
            768: {
                slidesPerView: 5,
                spaceBetween: 25 
            },
            0: {
                slidesPerView: 3.5,
                spaceBetween: 15 
            },
        }
    });
    
    var ss_swiper = new Swiper(".ss_swiper", {
        allowTouchMove: true,
        touchRatio: 1,
        slidesPerView: 1,
        spaceBetween: 0,
        thumbs: {
            swiper: mainSwiper,
        },
    });


});