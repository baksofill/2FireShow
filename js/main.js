$(document).ready(function(){

    /*$.when($.getJSON('./js/errors_en.json'), $.getJSON('./js/game_en.json'), $.getJSON('./js/messagesCore_ru.json'))
        .done(function (dataErrors, dataGame, dataCommon) {
            var messege = {};

            messege = $.extend(true, dataErrors[0], dataGame[0],  dataCommon[0]);

            console.log(messege);

        });*/

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
        anchors: ['main', 'programs', 'artistes', 'calendar', 'feedback'],
        sectionsColor: ['#000', 'green', '#ee005a', '#39C', 'blue'],
        normalScrollElements: '.scrolable',
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

    /* -------------  Hiding END -------------- */


    /* -------------  flipBTN Text -------------- */
    $('.artistCard > .artistBtn').click(function () {
        if ($(".card").hasClass('flip')) {
            $(".card").removeClass('flip');
        } else {
            $(".card").addClass('flip');

        }

    });

    /* -------------  flipBTN  END -------------- */

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
                date: "8/3/2013",
                title: 'Двойной заказ',
                link: '',
                linkTarget: '_blank',
                color: '',
                //content: 'Два заказа, один на выезде, другой в городе ',
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


    function showSecret() {
        if ($('.popover-content').css('display') == 'none') {
            $('.popover-content').show();
            $('.dopLink').removeClass('visible');
            $('.dopLink').addClass('visible');

        } else {
            $('.popover-content').hide();
            $('.dopLink').removeClass('visible');
            //document.cookie="apanel=0; expires=Mon, 01-Jan-2021 00:00:00 GMT";
        }
    }

    var isShift = false;

    $(document).keyup(function (e) {
        if (e.which == 16) isShift = false;
    }).keydown(function (e) {
        if (e.which == 16) {
            showSecret();
            return false;
        }
    });
    //$('.popover').on( "taphold",  showSecret() );

   /* $( "#foo" ).bind( "click", function() {
        alert( "The quick brown fox jumps over the lazy dog." );
    });*/

    /* -------------  Calendar END -------------- */

    /* -------------  Tabs -------------- */
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
    /* -------------  Tabs END -------------- */

    /* -------------  opening sidebar  -------------- */
    $('.mainCallButton, .kontakts ').click(function () {
        $('.callMe').toggleClass('touched');
    });
    /* -------------  opening sidebar END -------------- */


    /* -------------  Animations  -------------- */
    $('.social>li').mouseover(function(){
        $(this).toggleClass('swing animated');
        $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){
            $(e.target).removeClass('swing animated');
        });

    });
    $('.kontakts').mouseover(function () {
        $("#phone").toggleClass('tada animated');
        $("#phone").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {
            $(e.target).removeClass('tada animated');
        });

    });
    /*$('button').click(function () {
        $(this).html('Кнопа не работает :( ').css('background-color', 'grey');
    });*/
    setTimeout(function(){ $('.navHelp').addClass('animationHelp') }, 20000);


    /* -------------  Animations END -------------- */


    /* -------------  Date for modals     -------------- */
    $( "#customerDateFire" ).dateDropper({ animation: 'dropdown', format: 'd-m-y', lang:'ru' });
    $( "#anotherDaySun" ).dateDropper({ animation: 'dropdown', format: 'd,m,y', lang:'ru' });
    /* -------------  Date for modals END -------------- */


// temp for sunSet time calculations
    var vinnGeo = {'latitude':49.233705, 'longitude': 28.466359};
//  new Date(2015, 3/*Апрель*/, 25/*24е число*/ );
    var currentSunSet = SunCalc.getTimes(new Date(), vinnGeo['latitude'], vinnGeo['longitude']);
    $(".todaySun").html(currentSunSet.sunset.getHours() + ':' + currentSunSet.sunset.getMinutes());


    $("#ajaxform").submit(function(){ // перехватываем все при событии отправки
        var form = $(this); // запишем форму, чтобы потом не было проблем с this
        var error = false; // предварительно ошибок нет
        form.find('input, textarea').each( function(){ // пробежим по каждому полю в форме
            if ($(this).val() == '') { // если находим пустое
                alert('Заполните поле "'+$(this).attr('placeholder')+'"!'); // говорим заполняй!
                error = true; // ошибка
            }
        });
        if (!error) { // если ошибки нет
            var data = form.serialize(); // подготавливаем данные
            $.ajax({ // инициализируем ajax запрос
                type: 'POST', // отправляем в POST формате, можно GET
                url: 'backCallMail.php', // путь до обработчика, у нас он лежит в той же папке
                dataType: 'json', // ответ ждем в json формате
                data: data, // данные для отправки
                beforeSend: function(data) { // событие до отправки
                    form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
                },
                success: function(data){ // событие после удачного обращения к серверу и получения ответа
                    if (data['error']) { // если обработчик вернул ошибку
                        alert(data['error']); // покажем её текст
                    } else { // если все прошло ок
                        form.html('Спасибо за Ваше письмо :) ');
                        //alert('Письмо отвравлено! Спасибо что написали! =)'); // пишем что все ок
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
                    alert(xhr.status); // покажем ответ сервера
                    alert(thrownError); // и текст ошибки
                },
                complete: function(data) { // событие после любого исхода
                    form.find('input[type="submit"]').prop('disabled', false); // в любом случае включим кнопку обратно
                }

            });
        }
        return false; // вырубаем стандартную отправку формы
    });



    $('.dd_submit').click(function () {
        var anotherDate = $("#anotherDaySun").val().split(',');
        var anotherSunSet = SunCalc.getTimes(new Date(anotherDate[2], anotherDate[1]-1, parseFloat(anotherDate[0])+1 ), vinnGeo['latitude'], vinnGeo['longitude']);
        console.log(anotherSunSet.sunset.getHours() + ':' + anotherSunSet.sunset.getMinutes());
       var customMinut = anotherSunSet.sunset.getMinutes();
        if(customMinut < 9){
            customMinut = '0' + customMinut;
        }
        $(".anotherSunResult").html($("#anotherDaySun").val() + ' солнце зайдет в <span>' +anotherSunSet.sunset.getHours() + ':' + customMinut+ '</span>');

    });

});




