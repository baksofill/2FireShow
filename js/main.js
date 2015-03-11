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
            'position': 'left',
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
        $('.clouds ul li:nth-child(1)').plaxmove({ratioH: 0.01, ratioV: 0.05, reversed: true, invertH: false});
        $('.clouds ul li:nth-child(2)').plaxmove({ratioH: 0.01, ratioV: 0.05, reversed: false, invertH: false});
        $('.clouds ul li:nth-child(3)').plaxmove({ratioH: 0.03, ratioV: 0.09, invertV: true});
        $('.clouds ul li:nth-child(4)').plaxmove({ratioH: 0.06, ratioV: 0.15, reversed: false, invertH: false});

    }
    paralax();
    /* -------------  Parallax moving END -------------- */


    /* -------------  Calendar -------------- */

    function calendar() {
        var monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

        var dayNames = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

        var events = [
            {
                date: "8/3/2015",
                title: 'SPORT & WELLNESS',
                link: '',
                linkTarget: '_blank',
                color: '',
                content: 'Два заказа, один на выезде, другой в городе ',
                class: 'tripleOutdore',
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
            multiSelect: false,
            //set day names
            dayNames: dayNames,
            //set month names
            monthNames: monthNames,
            //show dayNames
            showDays: true,
            //show month controller
            displayMonthController: true,
            //show year controller
            displayYearController: false,
            //set ajax call
            reqAjax: {
                type: 'get',
                url: './js/someJSON/events.json'  // /js/someJSON/events.json   //http://bic.cat/bic_calendar/index.php
            }
        });
    }

    calendar();

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




