var sys = require('sys');
require('../strftime.js');
require('./lib/test-more.js');

var d = new Date(2011, 8, 1, 10, 4, 1);
is(d.strftime('%Y-%m-%d'), '2011-09-01');
is(d.strftime('%T'), '10:04:01');
is(d.strftime('%%'), '%');
is(d.strftime('%e'), ' 1');
is(d.strftime('%H'), '10');
is(d.strftime('%I'), '10');
is(d.strftime('%k'), '10');
is(d.strftime('%M'), '04', '%M');
is(d.strftime('%m'), '09');
is(d.strftime('%S'), '01');
is(d.strftime('%y'), '11');
is(d.strftime('%+'), 'Thu Sep 01 2011 10:04:01 GMT+0900 (JST)');
is(d.strftime('%h'), 'Sep');

is(d.strftime('%A'), 'Thursday');
is(d.strftime('%a'), 'Thu');
is(d.strftime('%B'), 'September');
is(d.strftime('%b'), 'Sep');
is(d.strftime('%d'), '01', '%d');

Date.prototype.strftime.locales['de'] = {
    B: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    b: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
    A: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],
    a: ["Mo\.", "Di\.", "Mi\.", "Do\.", "Fr\.", "Sa\.", "So\."]
};

is(d.strftime('%A', 'ja'), '木曜日');
is(d.strftime('%a', 'ja'), '木');
is(d.strftime('%B', 'ja'), ' 9月');
is(d.strftime('%b', 'ja'), ' 9月');

is(d.strftime('%A', 'de'), 'Freitag');
is(d.strftime('%a', 'de'), 'Fr.');
is(d.strftime('%B', 'de'), 'September');
is(d.strftime('%b', 'de'), 'Sep');

// custom formats
is(d.strftime('%z'), 'z');
Date.prototype.strftime.formats.z = function () { return '+0900' };
is(d.strftime('%z'), '+0900');

done_testing();

