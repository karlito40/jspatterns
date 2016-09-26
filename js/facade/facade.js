define(function (require) {
    'use strict';

    var processor = require('facade/processor');

    return {
        processThing: function (thing) {
            switch (Object.prototype.toString.call(thing)) {
                case '[object String]':
                    return processor.processString(thing);
                case '[object Number]':
                    return processor.processNumber(thing);
                case '[object Boolean]':
                    return processor.processBoolean(thing);
                case '[object Array]':
                    return processor.processArray(thing);
                case '[object Object]':
                    return processor.processObject(thing);
                default:
                    return 'Unable to process the thing!';
            }
        }
    };
});