$(document).ready(function(){
    var readMoreFlag = 0;


    /*$.when($.getJSON('./js/errors_en.json'), $.getJSON('./js/game_en.json'), $.getJSON('./js/messagesCore_ru.json'))
        .done(function (dataErrors, dataGame, dataCommon) {
            var messege = {};

            messege = $.extend(true, dataErrors[0], dataGame[0],  dataCommon[0]);

            console.log(messege);

        });*/

    /*
     * Plugin intialization
     */
    /* -------------  Loader  -------------- */
    $(window).load(function () {
        $('.loader').delay(1000).fadeOut(600);
    });
    /* -------------  Loader END -------------- */


    /* -------------  Slider For Programs  -------------- */
    $('.bxslider').bxSlider({
        mode: 'horizontal',
        useCSS: false,
        //infiniteLoop: false,
        //hideControlOnEnd: true,
        easing: 'easeOutElastic',
        speed: 2000
    });
    /* -------------  Slider For Programs END -------------- */

    /* -------------  Main Vertical Slider for navigation -------------- */
    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['main', 'programs', 'artistes', 'blog'],
        sectionsColor: ['#000', 'green', '#ee005a', '#39C'],
        navigation: {
            'position': 'right',
            'tooltips': ['Винницкий Театр Огня', 'Программы', 'Артисты', 'Блог']
        },
        afterRender: function () {
            $('#pp-nav').addClass('custom');
        },
        afterLoad: function (anchorLink, index) {
            //using index
            if (index == 0) {
                //$('.loader').hide(1000);
                //console.error("Section 3 ended loading");
            }

            //using anchorLink
            if (anchorLink == 'main') {
                //console.error("Section 2 ended loading");
            }
        }

    });
    /* -------------  Main Vertical Slider for navigation END -------------- */


    /* -------------  Hiding ReadMore Text -------------- */
    $('.buttonReadMore').click(function () {
        if (readMoreFlag == 0) {
            $('.media').hide();
            $('.description').show();
            readMoreFlag = 1;
        } else {
            $('.media').show();
            $('.description').hide();
            readMoreFlag = 0;
        }

    });
    /* -------------  Hiding ReadMore Text END -------------- */

    /* -------------  Parallax moving  -------------- */
    $('.clouds ul li:nth-child(1)').plaxmove({ratioH: 0.05, ratioV: 0.1, reversed: true, invertH: false});
    $('.clouds ul li:nth-child(2)').plaxmove({ratioH: 0.07, ratioV: 0.02, reversed: true, invertH: false});
    $('.clouds ul li:nth-child(3)').plaxmove({ratioH: 0.1, ratioV: 0.05, invertV: true});
    $('.clouds ul li:nth-child(4)').plaxmove({ratioH: 0.05, ratioV: 0.06, reversed: false, invertH: false});
    //$('.clouds ul li:nth-child(5)').plaxmove({ratioH:0.09,ratioV:0.1,invertV:true});
    /* -------------  Parallax moving END -------------- */



});


