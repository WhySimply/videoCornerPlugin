(function($) {
    $.fn.videoCornerPlugin=function() {
        var selectIframe = $('iframe');
        var result = $(this);
        var closeVideoBool = false;
        var originalAttributesWidth = selectIframe.attr('width');
        var originalAttributesHeight = selectIframe.attr('height');
        var scroll = 0;
        setInterval(function () {
            scroll = $(window).scrollTop();
            if (scroll >= 75) {
                if(!closeVideoBool){
                    setTimeout(function () {
                        $('iframe').attr({
                            "width": "300px",
                            "height": "170px"
                        });
                        result.css({
                            "position": "fixed",
                            "top": "25px",
                            "left": "25px",
                            "width": "320px",
                            "background-image": "url('https://www.healthlinkbc.ca/hlbc/themes/hlbc/assets/img/menu-close-x.png')",
                            "background-repeat": "no-repeat",
                            "background-position": "top right",
                            "margin": "0",
                            "padding": "0",
                            "background-color": "transparent"
                        });
                    }, 0);
                }else{
                    result.hide();
                }
            } else {
                result.removeAttr('style');
                $('iframe').attr({
                    "width": originalAttributesWidth,
                    "height": originalAttributesHeight
                });
            }
        },0);
        result.click(function() {
            closeVideoBool = true;
            result.hide();
        });
    };
})(jQuery);