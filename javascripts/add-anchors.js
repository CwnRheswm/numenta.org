$(function() {

    window.NTA.addAnchors = function(selector) {
        var targets = selector || 'h2';

        $(targets).each(function() {
            var $header = $(this),
                id = $header.attr('id'),
                $a = $header.find('a'),
                text = $header.html();

            if (id) {
                $header.append('<span class="anchor"><a href="#' + id + '">∞</a></span>');
            }

        });
    
    };

});