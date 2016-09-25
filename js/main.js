require(
    [
        'js/factory/init', 
        'js/pubsub/init', 
        'js/strategy/init',
        'js/mediator/init',
    ], 
    function(factory, pubsub, strategy, mediator) {
        'use strict';

        var examples = {
            factory: factory,
            pubsub: pubsub, 
            strategy: strategy, 
            mediator: mediator
        };

        window.runExample = function(example) {
            examples[example].init();
        }
    }
)