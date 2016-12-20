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

        if (options.nocss === undefined) {
            nocss = false;
        } else {
            nocss = options.nocss;
        }

        parentwidth = target.width();

        containerwidth = parentwidth / amount;

        linewidth = containerwidth / 1.2;

        marginheight = target.height() / 2;

        for (i = 0; i < amount; i++) {
            $(target).append($('<span class="spectrum-line"></span>'));
        }

        var colors = multiColorFade([{
            r: 255,
            g: 0,
            b: 0
        }, {
            r: 255,
            g: 127,
            b: 0
        }, {
            r: 255,
            g: 255,
            b: 0
        }, {
            r: 0,
            g: 255,
            b: 0
        }, {
            r: 0,
            g: 0,
            b: 255
        }, {
            r: 75,
            g: 0,
            b: 130
        }, {
            r: 148,
            g: 0,
            b: 211
        }], options.amount);

        counteach = 0;

        $('.spectrum-line').each(function () {
            // CSS Setups 

            if (!nocss) {

                $(this).css('display', 'none');

                if (options.color === "rainbow") {

                    $(this).css('color', '#FFF');
                    $(this).css('background-color', 'rgb(' + Math.round(colors[counteach].r) + ', ' + Math.round(colors[counteach].g) + ', ' + Math.round(colors[counteach].b) + ')');

                } else {
                    $(this).css('background-color', color);
                }

                $(this).css('width', linewidth + 'px');

                $(this).css('position', 'absolute');
                $(this).css('bottom', '0');
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
            }
            counteach = counteach + 1;

        });



        setInterval(function () {
            count = 0;

            $('.spectrum-line').each(function () {
                $(this).css('left', containerwidth * count + 'px');
                $(this).css('display', 'inline-block');
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

                count = count + 1;
            });

        }, speed);



        return spectrum;

    };

    var multiColorFade = function (colors, length) {
        var colorIncr = (length - 1) / (colors.length - 1),
            ii,
            len = Math.min(colors.length - 1, length),
            startPos = 0,
            endPos = 1,
            retColors = [],
            tmpColors,
            dist;

        for (ii = 0; ii < len; ii++) {
            endPos = Math.max(startPos + 2, endPos + colorIncr);
            dist = Math.round(endPos) - Math.round(startPos);

            tmpColors = twoColorFade(colors[ii], colors[ii + 1], dist);
            retColors.pop(); // remove last color
            retColors = retColors.concat(tmpColors);

            startPos = Math.round(endPos) - 1;
        }
        return retColors;
    };
    var twoColorFade = function (color1, color2, length) {
        var rIncr = (color2.r - color1.r) / (length - 1),
            gIncr = (color2.g - color1.g) / (length - 1),
            bIncr = (color2.b - color1.b) / (length - 1),
            colors = [],
            r = color1.r,
            g = color1.g,
            b = color1.b,
            ii;

        for (ii = 0; ii < length; ii++) {
            colors.push({
                r: r,
                b: b,
                g: g
            });
            r = r + rIncr;
            g = g + gIncr;
            b = b + bIncr;
        }

        return colors;
    };

};



var spectrum = new spectrum_obj();
