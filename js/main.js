

$(document).ready(function(){


    /*$.when($.getJSON('./js/errors_en.json'), $.getJSON('./js/game_en.json'), $.getJSON('./js/messagesCore_ru.json'))
        .done(function (dataErrors, dataGame, dataCommon) {
            var messege = {};

            messege = $.extend(true, dataErrors[0], dataGame[0],  dataCommon[0]);

            console.log(messege);

        });*/

    /*
     * Plugin intialization
     */
    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['main', 'programs', 'artistes', 'blog'],
        sectionsColor: ['#000', 'green', '#ee005a', '#39C'],
        navigation: {
            'position': 'right',
            'tooltips': ['Винницкий Театр Огня', 'Программы', 'Артисты', 'Блог']
        },
        afterRender: function(){
            $('#pp-nav').addClass('custom');
        },
        afterLoad: function(anchorLink, index){
            //using index
            if(index == 3){
                //console.error("Section 3 ended loading");
            }

            //using anchorLink
            if(anchorLink == 'Блог'){
                //console.error("Section 2 ended loading");
            }
        }

    });




});


