var QUnit = require('./qunit').QUnit,
    qunitTap = require('qunit-tap').qunitTap,
    sys = require('sys'),
    fs = require('fs');

qunitTap(QUnit, sys.puts, {noPlan: true});

QUnit.init();
QUnit.config.updateRate = 0;

require('../strftime');
with ({is: QUnit.equal, subtest: QUnit.test}) {
    var content = fs.readFileSync('t/01_strftime.js', 'utf-8');
    subtest('strftime', function () {
        eval(content);
    });
}

QUnit.start();
