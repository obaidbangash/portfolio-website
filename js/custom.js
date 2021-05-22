$(document).ready(function () {
    // Enter num from and to
    $({
        countNum: 0
    }).animate({
        countNum: 101
    }, {
        duration: 2000,
        easing: "linear",

        complete: function () {
            setTimeout(function () {
                $("#counter").fadeOut();
            }, 400)
        },
    });

    $(".main-ul li:first").addClass("active");

    var showSection = function showSection(section, isAnimate) {
        var direction = section.replace(/#/, ""),
            reqSection = $("section").filter(
                '[data-section="' + direction + '"]'
            ),
            reqSectionPos = reqSection.offset().top - 0;

        if (isAnimate) {
            $("body, html").animate({
                    scrollTop: reqSectionPos
                },
                800
            );
        } else {
            $("body, html").scrollTop(reqSectionPos);
        }
    };

    var checkSection = function checkSection() {
        $("section").each(function () {
            var $this = $(this),
                topEdge = $this.offset().top - 80,
                bottomEdge = topEdge + $this.height(),
                wScroll = $(window).scrollTop();
            if (topEdge < wScroll && bottomEdge > wScroll) {
                var currentId = $this.data("section"),
                    reqLink = $("a").filter("[href*=\\#" + currentId + "]");
                reqLink
                    .closest("li")
                    .addClass("active")
                    .siblings()
                    .removeClass("active");
            }
        });
    };

    $(".main-ul").on("click", "a", function (e) {
        e.preventDefault();
        showSection($(this).attr("href"), true);
    });

    $(window).scroll(function () {
        checkSection();
    });



    // for mobile 
    // $('.mobile-x').click(function () {
    //     $('.ul-wrapper').removeClass('collapse show')
    // })
});
// //   for isotopes
(function ($) {
    // Code Here

    /*----------------------------------------
        Isotope Masonry
    ------------------------------------------*/
    function isotopeMasonry() {
        $(".isotope-gutter").isotope({
            itemSelector: '.box',
            percentPosition: true
        });
        $(".isotope-no-gutter").isotope({
            itemSelector: '.box',
            percentPosition: true,
            masonry: {
                columnWidth: 1
            }
        });

        $(".filter a").on("click", function () {
            $(".filter a").removeClass("active");
            $(this).addClass("active");
            // portfolio fiter
            var selector = $(this).attr("data-filter");
            $(".isotope-gutter").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false
                }
            });
            return false;
        });
    }

    $(window).on("load", function () {
        isotopeMasonry();
    });
})(jQuery);