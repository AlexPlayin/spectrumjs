var spectrum_obj = function (ss) {

    this.create = function (target, options) {
        console.log('go called');

        // Set variables

        amount = 16 || options.amount;
        color = '#1F1' || options.color;
        heightmult = 1 || options.height;
        speed = 300 || options.speed;

        console.log(color);

        parentwidth = target.width();

        containerwidth = parentwidth / amount;

        linewidth = containerwidth / 1.2;

        marginheight = target.height() / 2;

        for (i = 0; i < amount; i++) {
            $(target).append($('<span class="spectrum-line"></span>'));
        }

        $('.spectrum-line').each(function () {
            // CSS Setups 
            $(this).css('background-color', color);
            $(this).css('width', linewidth + 'px');
            $(this).css('position', 'absolute');
            $(this).css('bottom', '0');
            $(this).css('display', 'inline-block');
            $(this).css('height', '100%');
            $(this).css('transition', '0.3s ease');
            $(this).css('vertical-align', 'bottom');
            $(this).css('margin-bottom', marginheight + 'px');
        });



        setInterval(function () {
            count = 0;

            $('.spectrum-line').each(function () {
                $(this).css('left', containerwidth * count + 'px');
                var rand = Math.random();
                $(this).css('bottom', '-' + rand * 100 * heightmult / 2 + '%');
                $(this).css('height', rand * 100 * heightmult + '%');
                count = count + 1;
            });

        }, speed);


    };
    return spectrum;
};

/*if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = spectrum_obj;
} else {
    window.spectrum = spectrum_obj;
}
//module.exports = spectrum; */
var spectrum = new spectrum_obj(0);
