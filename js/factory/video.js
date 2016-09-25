define(function(){
    var Video = function(attributes) {
        this.length = attributes.length || 0;
        this.name = attributes.name || '';
    }

    return Video;
})