function foo () {

    var delay = 50,
        i = 0,
        startTimer = function (pixels) {

            var elem = document.getElementById('circle'),
                bottom = elem.offsetTop;

            if ((pixels > 0 && bottom > 250) || (pixels < 0 && bottom < 50)) {
                clearInterval(timer);

                timer = setInterval(function () {
                    startTimer(pixels * -1);
                }, delay);

            }

            elem.style.top = bottom + pixels +'px';
            i++;

        };

    var timer = setInterval(function () {
        startTimer(20);
    }, delay);

}

foo ();