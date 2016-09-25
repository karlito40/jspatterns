define(function(require) {

    var pubSub = require('js/pubsub/pubsub')
    , subscription;

    subscription = pubSub.subscribe('atopic', function(data) {
        console.log('atopic was published', data);
        subscription.dispose();
    })
})