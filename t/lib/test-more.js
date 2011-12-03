(function () {

var global = this;
var sys = require('sys');

var n = 1;
global.ok = function ok(b, message) {
    var ret = (b ? 'ok' : 'not ok') + ' ' + n;
    if (typeof message !== 'undefined') {
        ret += ' # ' + message;
    }
    sys.puts(ret);
    n++;
    return b;
}
global.is = function is(got, expected, message) {
    if (ok(got === expected, message)) {
        return true;
    }
    sys.puts(" # Got      : " + got);
    sys.puts(" # Expected : " + expected);
    return false;
}
global.done_testing = function done_testing() {
    sys.puts('1..' + (n-1));
}

})();
