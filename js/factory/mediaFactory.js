define(function(require){

    var media = {
        Video: require('js/factory/video'),
        Image: require('js/factory/image')
    }

    return {
        createMedia: function(type, attributes) {
            
            return new media[type](attributes);
        }
    }
});