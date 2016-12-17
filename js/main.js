var spectrum_obj = function () {

    this.create = function (target, options) {
        // Set variables

        if (options.amount === undefined) {
            amount = 16;
        } else {
            amount = options.amount;
        }

        if (options.color === undefined) {
            color = '#1F1';
        } else {
            color = options.color;
        }

        if (options.height === undefined) {
            heightmult = 1;
        } else {
            heightmult = options.height;
        }

        if (options.speed === undefined) {
            speed = 400;
        } else {
            speed = options.speed;
        }

        if (options.mode === undefined) {
            mode = 'middle';
        } else {
            mode = options.mode;
        }


        console.log(mode);

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
            switch (mode) {
                case 'top':
                    {
                        $(this).css('margin-bottom', '0px');
                        break;
                    }
                case 'middle':
                    {
                        $(this).css('margin-bottom', marginheight + 'px');
                        break;
                    }
                case 'bottom':
                    {
                        $(this).css('margin-bottom', marginheight * 2 + 'px');
                        $(this).css('margin-bottom', '0px');
                        $(this).parent().css('-webkit-transform', 'scaleY(-1)');
                        $(this).parent().css('transform', 'scaleY(-1)');
                        break;
                    }
            }
        });



        setInterval(function () {
            count = 0;

            $('.spectrum-line').each(function () {
                $(this).css('left', containerwidth * count + 'px');
                var rand = Math.random();

                switch (mode) {
                    case 'top':
                        {
                            $(this).css('bottom', '0%');
                            $(this).css('height', rand * 100 * heightmult + '%');
                            break;
                        }
                    case 'middle':
                        {
                            $(this).css('bottom', '-' + rand * 100 * heightmult / 2 + '%');
                            $(this).css('height', rand * 100 * heightmult + '%');
                            break;
                        }
                    case 'bottom':
                        {
                            $(this).css('bottom', '0%');
                            $(this).css('height', rand * 100 * heightmult + '%');
                            break;
                        }
                }
                //$(this).css('bottom', '-' + rand * 100 * heightmult / 2 + '%');
                //$(this).css('height', rand * 100 * heightmult + '%');
                count = count + 1;
            });

        }, speed);


    };
    return spectrum;
};

function check(obj, name) {
    if (obj === undefined) {

    }
}

var spectrum = new spectrum_obj();
