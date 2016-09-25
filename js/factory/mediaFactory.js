define(function(require){

    var media = {
        Video: require('js/factory/video'),
        Image: require('js/factory/image')
    }

    return {
        createMedia: function(type, attributes) {
            
            var MediaType = media[type];
            return new MediaType(attributes);
        }
    }
});