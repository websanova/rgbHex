function rgbHex(val) {
    var rgb, hex, temp, r, g, b, isRgb;
    
    val = val.replace(/\s/g, '');
    val = val.replace(/^#/, '');

    if (
        val.substr(0, 4) === 'rgb(' ||
        val.substr(0, 5) === 'rgba('
    ) {
        isRgb = true;
    }

    val = val.replace(/^rgb\(/i, '');
    val = val.replace(/^rgba\(/i, '');
    val = val.replace(/^\(/i, '');
    val = val.replace(/\)$/i, '');

    // Detect

    if (val.match(/^[0-9a-f]{1,2}$/i)) {
        hex = '#' + val + val + val;
    }

    else if (val.match(/^[0-9a-f]{3}$/i)) {
        hex = '#' + val + val;
    }
    else if (val.match(/^[0-9a-f]{6}$/i)) {
        hex = '#' + val;
    }

    else if (
        isRgb && val.match(/^[0-9]{1,3}$/i) ||
        val.match(/^[0-9]{3},$/i)
    ) {
        r = val.substr(0, 3);
        g = r;
        b = r;
    }
    else if (val.match(/^[0-9]{1,3},[0-9]{1,3},?$/i)) {
        temp = val.split(',');

        r = temp[0];
        g = temp[1];
        b = g;
    }
    else if (
        val.match(/^[0-9]{1,3},[0-9]{1,3},[0-9]{1,3},?$/i) ||
        val.match(/^[0-9]{1,3},[0-9]{1,3},[0-9]{1,3},[01]{1}$/i) ||
        val.match(/^[0-9]{1,3},[0-9]{1,3},[0-9]{1,3},[0-9]{1}\.[0-9]{1}$/i)
    ) {
        temp = val.split(',');

        r = temp[0];
        g = temp[1];
        b = temp[2];
    }

    // Convert

    if (
        r && r >= 0 && r <= 255 &&
        g && g >= 0 && g <= 255 &&
        b && b >= 0 && b <= 255
    ) {
        rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')';
        
        r = (parseInt(r)).toString(16);
        r = r.length === 1 ? '0' + r : r;

        g = (parseInt(g)).toString(16);
        g = g.length === 1 ? '0' + g : g;

        b = (parseInt(b)).toString(16);
        b = b.length === 1 ? '0' + b : b;

        hex = '#' + r + g + b;

    }
    else if (hex) {
        temp = hex.substr(1);
        temp = (temp.length === 3 ? temp + temp : temp);

        r = temp[0] + temp[1];
        g = temp[2] + temp[3];
        b = temp[4] + temp[5];

        rgb = 'rgb(' + parseInt(r, 16) + ', ' + parseInt(g, 16) + ', ' + parseInt(b, 16) + ')';
    }

    // Output

    return {
        rgb: rgb || null,
        hex: hex || null
    };
}