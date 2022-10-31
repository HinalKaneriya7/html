! function(e) {
    e(document).ready((function() {
        "use strict";
        var a = setInterval((function() {
            var s = document.getElementById("percentage"),
                t = parseInt(s.innerHTML);
            document.getElementById("loader-progress");
            s.innerHTML = ++t, 100 === t && (clearInterval(a), e("body").toggleClass("page-loaded"))
        }), 0);
        document.getElementById("hamburger-menu").addEventListener("click", (function(e) {
            document.getElementById("hamburger-hover").play()
        })), e("body").addClass("v-add"), e(".navbar").addClass("w-text"), e(window).scroll((function() {
            e(this).scrollTop() > 400 ? (e(".gotop").fadeIn(), e(".video").fadeOut(), e("body").removeClass("v-add")) : (e(".gotop").fadeOut(), e(".video").fadeIn(), e("body").addClass("v-add"))
        })), e(window).load((function() {
            e("body").hasClass("v-add") ? e(".navbar").addClass("w-text") : e(".navbar").removeClass("w-text")
        })), e(".gotop").on("click", (function(a) {
            return e("html, body").animate({
                scrollTop: 0
            }, 600), !1
        })), e(window).on("scroll touchmove", (function() {
            e(".logo").toggleClass("sticky", e(document).scrollTop() > 300)
        })), e(window).on("scroll touchmove", (function() {
            e(".navbar").toggleClass("hide", e(document).scrollTop() > 30)
        })), e((function() {
            var a = e(".burger"),
                s = (e(".burger-svg__bars"), e(".burger-svg__bar"), e(".burger-svg__bar-1")),
                t = e(".burger-svg__bar-2"),
                o = e(".burger-svg__bar-3"),
                n = !1,
                i = !1,
                l = new TimelineMax;
            a.on("click", (function(a) {
                e("html").toggleClass("overflow"), e(".navigation-menu").toggleClass("active"), e(".navbar").toggleClass("light"), n || (n = !0, i ? (l.clear(), l.to(s, .3, {
                    scaleX: 0,
                    ease: Back.easeIn
                }).to(o, .3, {
                    scaleX: 0,
                    ease: Back.easeIn
                }, "-=0.3").set(s, {
                    rotation: 0,
                    y: 0
                }).set(t, {
                    scaleX: 0,
                    opacity: 1
                }).set(o, {
                    rotation: 0,
                    y: 0
                }).to(t, .5, {
                    scaleX: 1,
                    ease: Elastic.easeOut
                }).to(s, .5, {
                    scaleX: 1,
                    ease: Elastic.easeOut
                }, "-=0.4").to(o, .5, {
                    scaleX: 1,
                    ease: Elastic.easeOut,
                    onComplete: function() {
                        n = !1, i = !1
                    }
                }, "-=0.5")) : (l.clear(), l.to(s, .3, {
                    y: 6,
                    ease: Power4.easeIn
                }).to(t, .3, {
                    scaleX: 1,
                    ease: Power4.easeIn
                }, "-=0.3").to(o, .3, {
                    y: -6,
                    ease: Power4.easeIn
                }, "-=0.3").to(s, .5, {
                    rotation: 45,
                    ease: Elastic.easeOut,
                    transformOrigin: "50% 50%"
                }).set(t, {
                    opacity: 0,
                    immediateRender: !1
                }, "-=0.5").to(o, .5, {
                    rotation: -45,
                    ease: Elastic.easeOut,
                    transformOrigin: "50% 50%",
                    onComplete: function() {
                        n = !1, i = !0
                    }
                }, "-=0.5")))
            })), a.hover((function() {
                n || (l.clear(), i ? l.to(s, .5, {
                    scaleX: 1.2,
                    ease: Elastic.easeOut
                }).to(o, .5, {
                    scaleX: 1.2,
                    ease: Elastic.easeOut
                }, "-=0.5") : l.to(s, .5, {
                    y: -2,
                    ease: Elastic.easeOut
                }).to(t, .5, {
                    scaleX: .6,
                    ease: Elastic.easeOut,
                    transformOrigin: "50% 50%"
                }, "-=0.5").to(o, .5, {
                    y: 2,
                    ease: Elastic.easeOut
                }, "-=0.5"))
            }), (function() {
                n || (l.clear(), i ? l.to(s, .5, {
                    scaleX: 1,
                    ease: Elastic.easeOut
                }).to(o, .5, {
                    scaleX: 1,
                    ease: Elastic.easeOut
                }, "-=0.5") : l.to(s, .5, {
                    y: 0,
                    ease: Elastic.easeOut
                }).to(t, .5, {
                    scaleX: 1,
                    ease: Elastic.easeOut,
                    transformOrigin: "50% 50%"
                }, "-=0.5").to(o, .5, {
                    y: 0,
                    ease: Elastic.easeOut
                }, "-=0.5"))
            }))
        }));
        var s = e(".works ul").imagesLoaded((function() {
            s.isotope({
                itemSelector: ".works ul li",
                layoutMode: "masonry"
            })
        }))
    })), e(".burger").click((function(a) {
        a.preventDefault(), e(".navigation-menu").hasClass("active") ? (e(".navigation-menu .inner .side-menu ul li").css({
            opacity: "0",
            "-webkit-transform": "translateX(100px) skewX(5deg) translateZ(0px)"
        }), e(".nav__bg").css("-webkit-transform", "translateX(8px) translateY(-13px) scaleX(0) scaleY(0) translateZ(0px)"), e(".side-menu").css("opacity", "0"), e(".sides").css("opacity", "0")) : (e(".nav__bg").css("-webkit-transform", "none"), e(".navigation-menu .inner .side-menu ul li").css({
            opacity: "1",
            "-webkit-transform": "none"
        }), e(".side-menu").css("opacity", "1"), e(".sides").css("opacity", "1"))
    })), e(window).scroll((function() {
        var a = e(window),
            s = e("body"),
            t = e("section, footer, header"),
            o = a.scrollTop() + a.height() / 2;
        t.each((function() {
            var a = e(this);
            a.position().top <= o && a.position().top + a.height() > o && (s.removeClass((function(e, a) {
                return (a.match(/(^|\s)color-\S+/g) || []).join(" ")
            })), s.addClass("color-" + e(this).data("color")))
        }))
    })).scroll(), e((function() {
        for (i = 1; i <= 4; i++) e(".circle").eq(i - 1).width(i / 4 * 300);
        e(window).scroll((function() {
            var a = e(window).scrollTop() / 10;
            e(".circle").css({
                transform: "rotate(" + a + "deg)"
            })
        }))
    })), wow = new WOW({
        animateClass: "animated",
        offset: 50
    }), wow.init(), document.getElementById("copyrightYear").innerHTML = (new Date).getFullYear(), e(".side-menu ul li").hover((function() {
        e(".side-menu ul li").removeClass("focused"), e(".side-menu ul li").addClass("focused-out"), e(this).closest(".side-menu ul li").addClass("focused")
    }), (function() {
        e(".side-menu ul li").removeClass("focused"), e(".side-menu ul li").removeClass("focused focused-out")
    }));

    
    new Swiper(".career-slider-wrap", {
        loop: !0,
        spaceBetween: 10,
        speed: 900,
        allowTouchMove: !1,
        autoplay: {
            delay: 4e3,
            disableOnInteraction: !1
        },
        centeredSlides: !1,
        slidesPerView: "auto"
    }), new Swiper(".mod-bottom", {
        loop: !0,
        spaceBetween: 10,
        speed: 900,
        allowTouchMove: !1,
        autoplay: {
            delay: 4e3,
            disableOnInteraction: !0
        },
        slidesPerView: "auto"
    }), new Swiper(".testimonial-swiper", {
        spaceBetween: 30,
        slidesPerView: 1,
        loop: !0,
        speed: 500,
        autoplay: {
            delay: 8e3,
            disableOnInteraction: !0
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
     
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
    gsap.utils.toArray(".horizontal-slider").forEach((function(e, a) {
        var s = e.querySelector(".pin-wrap"),
            t = s.querySelector(".camp-slider"),
            o = () => -(t.scrollWidth - window.innerWidth);
        gsap.fromTo(t, {
            x: () => t.classList.contains("camp-slider") ? 0 : o()
        }, {
            x: () => t.classList.contains("camp-slider") ? o() : 0,
            ease: "none",
            scrollTrigger: {
                trigger: e,
                start: "top top",
                end: () => "+=" + t.scrollWidth,
                pin: s,
                invalidateOnRefresh: !0,
                scrub: !0
            }
        })
    }))
}(jQuery);