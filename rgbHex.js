window.rgbHex = (function() {
    function isNumeric(arg) {
      return !isNaN(parseFloat(arg)) && isFinite(arg);
    }

    function trim(arg) {
        return arg.replace(/^\s*/, "").replace(/\s*$/, "");
    }

    function isRgb(arg) {
        arg = trim(arg);
        return isNumeric(arg) && arg >= 0 && arg <= 255;
    }
    
    function isHex(arg) {
        arg = trim(arg);
        return (arg.length === 3 || arg.length === 6) && /^[0-9a-fA-F]+$/.test(arg);
    }

    function rgbToHex(arg) {
        arg = parseInt(arg, 10).toString(16);
        return arg.length === 1 ? '0' + arg : arg; 
    }

    function hexToRgb(arg) {
        return parseInt(arg, 16).toString();
    }

    function processRgb(arg) {
        arg = arg.split(',');

        if ( (arg.length === 3 || arg.length === 4) && isRgb(arg[0]) && isRgb(arg[1]) && isRgb(arg[2]) ) {
            if(arg.length === 4 && !isNumeric(arg[3])) { return null; }
            return '#' + rgbToHex(arg[0]).toUpperCase() + rgbToHex(arg[1]).toUpperCase() + rgbToHex(arg[2]).toUpperCase();
        }
        else {
            return null;
        }
    }

    function processHex(arg) {
        if(!isHex(arg)) { return null; }
        else {
            if(arg.length === 3) { arg = arg + arg; }

            return 'rgb(' + hexToRgb(arg.substring(0,2)) + ',' + hexToRgb(arg.substring(2,4)) + ',' + hexToRgb(arg.substring(4,6)) + ')';
        }
    }

    return function(arg) {        
        if(!arg) { return null; }

        var code = null;
        arg = trim(arg.toString());

        if(arg.substring(0,3) === 'rgb') {
            if (arg.substring(0,4) === 'rgb(') { code = arg.split('rgb(')[1]; }
            else if (arg.substring(0,5) === 'rgba(') { code = arg.split('rgba(')[1]; }

            // make sure it's complete rgb() format to not give any unwanted side effects
            if (code.slice(-1) === ')' || code.slice(-2) === ');') { return processRgb(code.split(')')[0]); }
            else { return null; }
        }
        else if (arg.substring(0,1) === '#') {
            code = arg.split('#');
            
            if(code.length !== 2) { return null; }
            else { return processHex(code[1]); }
        }
        //try to parse the string without rgb or #
        else {
            code = arg.split(',');

            if (code.length === 1) { return processHex(arg); }
            else if (code.length === 3 || code.length === 4) { return processRgb(arg); }
        }
    };
})();

if(jQuery) {
    jQuery.extend({
        rgbHex: function(arg) { return window.rgbHex(arg); }
    });
}