var StickyElement = function(node) {
    var doc = $(document),
    fixed = false,
    anchor = node.find('.sticky-anchor'),
    content = node.find('.sticky-content');
    var onScroll = function(e){
        var docTop = doc.scrollTop(),
        anchorTop = anchor.offset().top;
        if(docTop > anchorTop){
            if(!fixed){
                anchor.height(content.outerHeight());
                content.addClass('fixed');       
                fixed = true;
            }
            } else {
            if(fixed){
                anchor.height(0);
                content.removeClass('fixed');
                fixed = false;
            }
        }
    };
    $(window).on('scroll', onScroll);
};
var sticky = new StickyElement($('.sticky-element'));
