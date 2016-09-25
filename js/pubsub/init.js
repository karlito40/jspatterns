define(function(require){
    'use strict';

    return {
        init: function() {
            
            var moduleA = require('js/pubsub/moduleA')
            , moduleB = require('js/pubsub/moduleB');

            moduleB.publishEvent();
            moduleB.publishEvent();
        }
    }
})