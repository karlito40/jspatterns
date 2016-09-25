define(function(require){
    'use strict';

    return {
        init: function() {
            
            var myVideo, myImage, 
            mediaFactory = require('js/factory/mediaFactory');

            myVideo = mediaFactory.createMedia('Video', {
                length: 3.5,
                name: 'My video'
            });

            myImage = mediaFactory.createMedia('Image', {
                width: 100,
                height: 100,
                name: 'My Image'
            }) 

            console.log(myVideo, myImage)
        }
    }
})