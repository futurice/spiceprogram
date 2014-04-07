var viewportWidth = window.innerWidth;

window.onload = function() {
    var menu = document.getElementById("menu");
    var body = document.body;
    var menuContent = document.getElementById("menu-content");
    var close = document.getElementById("close");

    menu.onclick = function(e) {
        body.style.position = "relative";
        classie.toggle( this, 'active' );
        classie.toggle( body, 'cbp-spmenu-push-toleft' );
        classie.toggle( menuContent, 'cbp-spmenu-open' );
        e.preventDefault();
    };

    close.onclick = function(e) {
        body.style.position = "relative";
        classie.toggle( this, 'active' );
        classie.toggle( body, 'cbp-spmenu-push-toleft' );
        classie.toggle( menuContent, 'cbp-spmenu-open' );
        e.preventDefault();
    };

    var sticky = document.getElementById("sticky-list");
    var blurred = document.getElementById("blurred");
    if (blurred) {
        window.onscroll = function() {
            var s = window.pageYOffset;
            var opacityVal = (s / 200.0);
            document.getElementById("blurred").style.opacity = opacityVal;
            console.log(opacityVal);
        };
    }
    if (sticky) {
        var stickyHeaderTop = sticky.offsetTop;

        window.onscroll = function() {
            if (window.pageYOffset > stickyHeaderTop && viewportWidth > 767) {
                var offset = window.pageYOffset - stickyHeaderTop;
                sticky.style.top = offset + "px";
            } else {
                sticky.style.top = 0;
            }
        };
    }
};

window.onresize = function() {
    viewportWidth = window.innerWidth;
}