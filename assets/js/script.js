$(document).ready(function () {

    // ============================================================
    // YACHT SALES WEST — HOME PAGE JS
    // ============================================================
    // location toggle
    // Open / Close dropdown
    $('.yswHeaderContact .yswLocationSelect').on('click', function (e) {
        e.stopPropagation();
        $('.yswHeaderContactSecondary').slideToggle(200);
    });

    // Swap content
    $('.yswHeaderContactSecondary').on('click', function () {

        // Current top data
        let currentLocation = $('.yswHeaderContact .yswLocationSelect')
            .clone()
            .children()
            .remove()
            .end()
            .text()
            .trim();

        let currentPhone = $('.yswHeaderContact .yswHeaderPhone').attr('href');
        let currentPhoneText = $('.yswHeaderContact .yswHeaderPhone').text();

        // Dropdown data
        let newLocation = $(this).find('.yswLocationSelect').text().trim();

        let newPhoneHref = $(this).find('.yswHeaderPhone').attr('href');
        let newPhoneText = $(this).find('.yswHeaderPhone').text();

        // Update top section
        $('.yswHeaderContact .yswLocationSelect').html(
            `${newLocation} <i class="fa-solid fa-chevron-down"></i>`
        );

        $('.yswHeaderContact .yswHeaderPhone')
            .attr('href', newPhoneHref)
            .text(newPhoneText);

        // Update dropdown with previous selected data
        $('.yswHeaderContactSecondary .yswLocationSelect').text(currentLocation);

        $('.yswHeaderContactSecondary .yswHeaderPhone')
            .attr('href', currentPhone)
            .text(currentPhoneText);

        // Hide dropdown
        $('.yswHeaderContactSecondary').slideUp(200);
    });

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
                '<img src="./assets/images/home/left-nav.png" alt="arrow">',
                '<img src="./assets/images/home/right-nav.png" alt="arrow">'
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
