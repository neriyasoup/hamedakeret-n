// Header slides up out of view while scrolling down, and back in on scrolling up.
// Near the top of the page it always shows. Styles: header.header-hidden in theme.css.
(function () {
    var header = document.querySelector('header.fixed');
    if (!header) return;

    var TOP = 80;   // always show the header this close to the top (px)
    var STEP = 6;   // ignore tiny scroll jitters smaller than this (px)
    var last = window.scrollY;

    function update() {
        var y = Math.max(0, window.scrollY);
        var delta = y - last;
        if (y < TOP) {
            header.classList.remove('header-hidden');
            last = y;
        } else if (delta > STEP) {
            header.classList.add('header-hidden');
            last = y;
        } else if (delta < -STEP) {
            header.classList.remove('header-hidden');
            last = y;
        }
    }

    window.addEventListener('scroll', update, { passive: true });
    // Keyboard users tabbing into the header should always see it
    header.addEventListener('focusin', function () {
        header.classList.remove('header-hidden');
    });
})();
