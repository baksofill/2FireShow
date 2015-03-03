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
        anchors: ['main', 'programs', 'artistes', 'сalendar', 'feedback'],
        sectionsColor: ['#000', 'green', '#ee005a', '#39C', 'blue'],
        navigation: {
            'position': 'right',
            'tooltips': ['Винницкий Театр Огня', 'Программы', 'Артисты', 'Календарь', 'Отзывы']
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
        if ($('.media').hasClass('active')) {
            $('.media').removeClass('active');
            $('.description').addClass('active');
        } else {
            $('.media').addClass('active');
            $('.description').removeClass('active');
        }

    });


    /* -------------  Hiding ReadMore Text END -------------- */

    /* -------------  Parallax moving  -------------- */
    function paralax() {
        $('.clouds ul li:nth-child(1)').plaxmove({ratioH: 0.05, ratioV: 0.1, reversed: true, invertH: false});
        $('.clouds ul li:nth-child(2)').plaxmove({ratioH: 0.07, ratioV: 0.02, reversed: true, invertH: false});
        $('.clouds ul li:nth-child(3)').plaxmove({ratioH: 0.1, ratioV: 0.05, invertV: true});
        $('.clouds ul li:nth-child(4)').plaxmove({ratioH: 0.05, ratioV: 0.06, reversed: false, invertH: false});

    }
    paralax();
    /* -------------  Parallax moving END -------------- */

    /* -------------  Lightbox  -------------- */
    function LightBox() {
        $('.imgOM a').lightBox({fixedNavigation: true});
        $('.imgUA a').lightBox({fixedNavigation: true});
        $('.imgGAV a').lightBox({fixedNavigation: true});
    }

    LightBox();
    /* -------------  Lightbox END -------------- */

    /* -------------  Calendar -------------- */

    function cal() {
        var monthNames = ["Gener", "Февраль", "Март", "Апрель", "Май", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Dicembre"];

        var dayNames = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

        var events = [
            {
                date: "8/3/2015",
                title: 'SPORT & WELLNESS',
                link: 'http://bic.cat',
                linkTarget: '_blank',
                color: '',
                content: '<img src="http://gettingcontacts.com/upload/jornadas/sport-wellness_portada.png" ><br>06-11-2013 - 09:00 <br> Tecnocampus Mataró Auditori',
                class: '',
                displayMonthController: true,
                displayYearController: true,
                nMonths: 6
            }
        ];

        $('#calendari_lateral1').bic_calendar({
            //list of events in array
            events: events,
            //enable select
            enableSelect: true,
            //enable multi-select
            multiSelect: true,
            //set day names
            dayNames: dayNames,
            //set month names
            monthNames: monthNames,
            //show dayNames
            showDays: true,
            //show month controller
            displayMonthController: true,
            //show year controller
            displayYearController: true,
            //set ajax call
            reqAjax: {
                type: 'get',
                url: 'http://bic.cat/bic_calendar/index.php'
            }
        });
    }

    cal();

    /* -------------  Calendar END -------------- */


    function tabs() {
        var tabsNum = $(".tabs a").length;
        var tabHash = document.location.hash;
        if (tabHash === "") {
            tabHash = "#tab0"
        }
        ;
        var currentTab = parseInt(tabHash.slice(4));
        $(".tabs a[href='" + tabHash + "']").addClass("on");

        $(".tabs a").click(function () {
            $(".tabs a").removeClass("on");
            $(this).addClass("on");
            $(this).blur(0);
            tabHash = $(this).attr("href");
            currentTab = parseInt(tabHash.slice(4));
            setTabs();
        });

        function setTabs() {
            $("div.tab").hide();
            $("#tabCont" + currentTab).show();
        };
        setTabs();

        $('ul.tabs li').css('cursor', 'pointer');
        $('ul.tabs.tabs1 li').click(function () {
            var thisClass = this.className.slice(0, 2);
            $('div.t1').hide();
            $('div.t2').hide();
            $('div.t3').hide();
            $('div.t4').hide();
            $('div.' + thisClass).show();
            $('ul.tabs.tabs1 li').removeClass('tab-current');
            $(this).addClass('tab-current');
        });

    }

    tabs();

});




