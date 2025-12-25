/******/
(function(modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            i: moduleId,
            /******/
            l: false,
            /******/
            exports: {}
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/
    __webpack_require__.d = function(exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {
                /******/
                configurable: false,
                /******/
                enumerable: true,
                /******/
                get: getter
                /******/
            });
            /******/
        }
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function(module) {
        /******/
        var getter = module && module.__esModule ?
            /******/
            function getDefault() {
                return module['default'];
            } :
            /******/
            function getModuleExports() {
                return module;
            };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "/";
    /******/
    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = 0);
    /******/
})
/************************************************************************/
/******/
([
    /* 0 */
    /***/
    (function(module, exports, __webpack_require__) {

        __webpack_require__(1);
        module.exports = __webpack_require__(2);


        /***/
    }),
    /* 1 */
    /***/
    (function(module, exports) {


        /**
         * First we will load all of this project's JavaScript dependencies which
         * It is a great starting point when
         * building robust, powerful web applications using Laravel.
         */

        // require('./bootstrap');

        // window.Vue = require('vue');

        /**
         * Next, we will create a fresh Vue application instance and attach it to
         * the page. Then, you may begin adding components to this application
         * or customize the JavaScript scaffolding to fit your unique needs.
         */

        // Vue.component('example-component', require('./components/ExampleComponent.vue'));

        // const app = new Vue({
        //     el: '#app'
        // });
        $(document).ready(function() {

            // function getCategories(scriptName)
            // $.ajax({
            //     method: 'GET',
            //     url: "https://rebel-foods.tantra-gyan.com/api/v1/blogs/categories",
            // })
            // .then(function(response){

            //     source = $('#topic-categoty-list-script').html();
            //     template = Handlebars.compile(source);
            //     topicList.append(template(response.data));
            //     if(window.innerWidth > 992){
            //         topicList.slick({
            //             slidesToShow: 4,
            //             slidesToScroll: 1,
            //             autoplay: false,
            //             infinite: true,
            //             dots: false,
            //             arrows: true,
            //             prevArrow: '<i class="fa fa-angle-left slide-to-right" aria-hidden="true"></i>',
            //             nextArrow: '<i class="fa fa-angle-right slide-to-left" aria-hidden="true"></i>',
            //             responsive: [
            //                 {
            //                   breakpoint: 991,
            //                   settings: {
            //                     slidesToShow: 4,
            //                     slidesToScroll: 1,
            //                     infinite: true,
            //                     arrows:false,
            //                   }
            //                 }
            //             ],
            //         });

            //         if(window.location.hash == "#topic-list"){
            //             $('html,body').animate({scrollTop: $("#topic-list").offset().top-70}, 1000);
            //         }

            //         $('.topic-btn').click(function(){
            //             var $this = $(this)
            //             var topicName = $this.data('name');
            //             var topicUrl = $this.data('href');
            //             console.log($this);

            //             $this.addClass('active');
            //             $('.topic-list').find('.topic-btn').removeClass('active');

            //             if(window.innerWidth < 450){
            //                 categoryWiseTopic(topicUrl,3);
            //             }else{
            //                 categoryWiseTopic(topicUrl,6);
            //             }
            //             if(topicName){
            //                 $('.see-more-btn-container a').text('See all from '+topicName+' >').prop("href","/"+topicUrl);
            //             }else{
            //                 $('.see-more-btn-container a').text('See all >').prop("href","/all-topic");
            //             }

            //         })
            //     }

            // })
            // .catch(function(error){

            // });

            window.stripHtml = function(html) {
                var tmp = document.createElement("DIV");
                tmp.innerHTML = html;
                return tmp.textContent || tmp.innerText || "";
            };

            window.slideElem = function(sliderContainer, slidesToShow, slidesToScroll, autoplay, dots, arrows) {
                sliderContainer.slick({
                    slidesToShow: slidesToShow,
                    slidesToScroll: slidesToScroll,
                    autoplay: autoplay,
                    dots: dots,
                    arrows: arrows
                });
            };

            window.highlightErrorMessage = function(form, error) {
                error.responseJSON.errors && Object.keys(error.responseJSON.errors).map(function(value, index) {
                    console.log(value);
                    form.find('[name="' + value + '"]').after('<div class="invalid-feedback" style="display: inline-block">' + error.responseJSON.errors[value] + "</div>").css('border-color', "red");
                });
            };

            $('.scroll-to-topic').click(function() {
                if (window.location.pathname == "/") {
                    console.log(true);
                    $('html,body').animate({
                        scrollTop: $("#topic-list").offset().top - 70
                    }, 1000);
                } else {
                    window.location.href = '/#topic-list';
                }
            });

            var subscribeToLearningForm = $('.subscribe-to-learning-form');
            var subscribeToLearningButton = $('.subscribe-to-learning-btn');

            window.submitSubscribeForm = function(formName, btnName) {
                formName.on('submit', function(e) {
                    e.preventDefault();
                    var data = new FormData(formName[0]);
                    console.log(data);
                    formName.find(".invalid-feedback").remove();
                    btnName.html('<i class="fa fa-spinner" aria-hidden="true"></i>');
                    btnName.css('disabled', 'disabled');

                    $.ajax({
                        method: "POST",
                        url: apiUrl + "/api/v1/newsletters/subscribe",
                        processData: false,
                        contentType: false,
                        data: data
                    }).then(function(response) {
                        btnName.removeAttr("disabled");
                        btnName.text('Subscribe >');
                        formName.trigger('reset');
                    }).catch(function(error) {
                        btnName.removeAttr("disabled");
                        btnName.text('Subscribe >');
                        formName.trigger('reset');
                        highlightErrorMessage(formName, error);
                    });
                });
            };

            // Function for homepage subscriber form submit
            submitSubscribeForm(subscribeToLearningForm, subscribeToLearningButton);

            // Function for footer subscriber form submit
            submitSubscribeForm($(".subscribe-to-blog-form"), $(".subscribe-to-blog-btn"));

            // Navigation topic list
            $.ajax({
                method: 'GET',
                url: apiUrl + "/api/v1/blogs/categories"
            }).then(function(response) {

                source = $('#desktop-topic-list-script').html();
                template = Handlebars.compile(source);
                $('.topic-item-container').html(template(response.data));

                source = $('#mobile-topic-list-script').html();
                template = Handlebars.compile(source);
                $('.navbar-topic-list').html(template(response.data));
            }).catch(function(error) {});
        });

        /***/
    }),
    /* 2 */
    /***/
    (function(module, exports) {

        // removed by extract-text-webpack-plugin

        /***/
    })
    /******/
]);