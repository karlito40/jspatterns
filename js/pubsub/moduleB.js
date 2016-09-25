define(function(require) {

    var pubSub = require('js/pubsub/pubsub');
    
    return {
        publishEvent: function() {
            pubSub.publish('atopic', {
                something: 'some data'
            });
        }
    }
})