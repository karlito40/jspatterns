require(
    ['js/factory/init', 'js/pubsub/init', 'js/strategy/init'], 
    function(factory, pubsub, strategy) {
        'use strict';

        var examples = {
            factory: factory,
            pubsub: pubsub, 
            strategy: strategy
        };

        window.runExample = function(example) {
            examples[example].init();
        }
    }
)