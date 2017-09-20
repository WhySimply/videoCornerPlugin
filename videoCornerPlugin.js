(function($) {
    $.fn.videoCornerPlugin=function() {
        var selectIframe = $('iframe');
        var result = $(this);
        var closeVideoBool = false;
        var originalAttributesWidth = selectIframe.attr('width');
        var originalAttributesHeight = selectIframe.attr('height');
        var scroll = 0;
        var offset = result.offset().top;
        setInterval(function () {
            scroll = $(window).scrollTop();
            if (scroll >= offset + 50) {
                if(!closeVideoBool){
                    setTimeout(function () {
                        $('iframe').attr({
                            "width": "300px", // Width of Iframe Youtube Video, change if you want
                            "height": "170px" // Height of Iframe Youtube Video, change if you want
                        });
                        result.css({
                            "top": "75px", // Position TOP, change if you want
                            "left": "25px", // Position LEFT, change if you want
                            "width": "320px", // Width of your video corner, change if you want but + 20px required in relation to width Iframe
                            "background-image": "url('https://www.healthlinkbc.ca/hlbc/themes/hlbc/assets/img/menu-close-x.png')", // IMG cross for close
                            "z-index": "20", // For the div to be in the foreground
                            "position": "fixed", // DON'T CHANGE THIS
                            "background-repeat": "no-repeat", // DON'T CHANGE THIS
                            "background-position": "top right", // DON'T CHANGE THIS
                            "margin": "0", // DON'T CHANGE THIS
                            "padding": "0", // DON'T CHANGE THIS
                            "background-color": "transparent" // DON'T CHANGE THIS
                        });
                    }, 0);
                }else{
                    result.hide();
                }
            } else {
                result.removeAttr('style');
                $('iframe').attr({
                    "width": originalAttributesWidth, // DON'T CHANGE THIS
                    "height": originalAttributesHeight // DON'T CHANGE THIS
                });
            }
        },0);
        result.click(function() {
            closeVideoBool = true;
            result.hide();
        });
    };
})(jQuery);