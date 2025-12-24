! function(e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var r = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/", n(n.s = 0)
}({
    0: function(e, t, n) {
        n("sV/x"), e.exports = n("xZZD")
    },
    "sV/x": function(e, t) {
        $(document).ready(function() {
            window.slideElem = function(e, t, n, o, r, i) {
                e.slick({
                    slidesToShow: t,
                    slidesToScroll: n,
                    autoplay: o,
                    dots: r,
                    arrows: i
                })
            }, window.stripHtml = function(e) {
                var t = document.createElement("DIV");
                return t.innerHTML = e, t.textContent || t.innerText || ""
            }, window.highlightErrorMessage = function(e, t) {
                t.responseJSON.errors && Object.keys(t.responseJSON.errors).map(function(n, o) {
                    console.log(n), e.find('[name="' + n + '"]').after('<div class="invalid-feedback" style="display: inline-block"><img src="../images/error_img.svg" alt="error image" class="error-img">' + t.responseJSON.errors[n] + "</div>").css("border-color", "red")
                })
            }, window.templateRendering = function(e) {
                return source = $("#" + e).html(), Handlebars.compile(source)
            };
            $(".navbar"), $("body"), $(".close");
            var e = $("#navigation-modal"),
                t = $(".mobile-sub-nav-list"),
                n = ($(".sales-trends-navigation"), $(".navigation-sublist-container"));
            t.on("click", "a", function(e) {
                var t = $(this);
                t.data("target") && (e.preventDefault(), n.find("#" + t.data("target")).show(), n.addClass("show"))
            }), n.on("click", ".icon-button", function() {
                return n.removeClass("show"), n.find(".sublist-links").hide(), !1
            }), e.on("hidden.bs.modal", function() {
                n.removeClass("show"), n.find(".sublist-links").hide()
            });
            var o = $(".blog-footer-slider");
            o.length > 0 && $.ajax({
                method: "GET",
                url: "/api/v1/blogs",
                data: {
                    limit: 9,
                    page: 1,
                    tags: tags || ""
                }
            }).then(function(e) {
                o.html(templateRendering("footer-slider-template")(e.data)), o.slick({
                    infinite: !0,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: !0,
                    autoplaySpeed: 3e3,
                    nextArrow: ".next",
                    prevArrow: ".back",
                    responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }]
                })
            }).catch(function(e) {}), window.getFormattedDate = function(e) {
                var t = new Date;
                return String(t.getDate()).padStart(2, "0") + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + t.getFullYear()
            }
        })
    },
    xZZD: function(e, t) {}
});