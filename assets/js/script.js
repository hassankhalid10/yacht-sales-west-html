$(document).ready(function () {

    // ============================================================
    // YACHT SALES WEST — HOME PAGE JS
    // ============================================================

    // --- Side menu toggle ---
    function openMenu() {
        $('.yswSideMenu, .yswMenuOverlay').addClass('yswMenuActive');
        $('body').css('overflow', 'hidden');
    }

    function closeMenu() {
        $('.yswSideMenu, .yswMenuOverlay').removeClass('yswMenuActive');
        $('body').css('overflow', '');
    }

    $('.yswHamburger').on('click', openMenu);
    $('.yswSideMenuClose, .yswMenuOverlay').on('click', closeMenu);
    $('.yswSideMenuList a').on('click', closeMenu);

    $(document).on('keyup', function (e) {
        if (e.key === 'Escape') closeMenu();
    });

    // --- Promo slider (Owl Carousel) ---
    if ($('.yswPromoCarousel').length) {
        $('.yswPromoCarousel').owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: true,
            navText: [
                '<i class="fa-solid fa-arrow-left"></i>',
                '<i class="fa-solid fa-arrow-right"></i>'
            ],
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: true,
            smartSpeed: 700
        });
    }

    // --- Recent Arrivals carousel (Owl Carousel) ---
    if ($('.yswArrivalsCarousel').length) {
        var arrivals = $('.yswArrivalsCarousel').owlCarousel({
            loop: false,
            dots: false,
            nav: false,
            margin: 24,
            smartSpeed: 600,
            responsive: {
                0: { items: 1.1 },
                576: { items: 2 },
                992: { items: 3 }
            }
        });

        $('.yswArrivalsPrev').on('click', function () {
            arrivals.trigger('prev.owl.carousel');
        });

        $('.yswArrivalsNext').on('click', function () {
            arrivals.trigger('next.owl.carousel');
        });
    }

    // --- Core Service Capabilities carousel (Owl Carousel) ---
    if ($('.svcCapCarousel').length) {
        var caps = $('.svcCapCarousel').owlCarousel({
            loop: false,
            dots: false,
            nav: false,
            margin: 32,
            smartSpeed: 600,
            responsive: {
                0: { items: 1.05 },
                576: { items: 1.4 },
                992: { items: 2.2 }
            }
        });

        $('.svcCapPrev').on('click', function () {
            caps.trigger('prev.owl.carousel');
        });

        $('.svcCapNext').on('click', function () {
            caps.trigger('next.owl.carousel');
        });
    }

    // --- Currency toggle ---
    $('.yswCurrencyBtn').on('click', function () {
        $('.yswCurrencyBtn').removeClass('active');
        $(this).addClass('active');
    });

});
