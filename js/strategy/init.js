define(function(require){
    'use strict';

    return {
        init: function() {
            var Strategy = require('js/strategy/strategy')
            , telValidator = require('js/strategy/telValidator')
            , emailValidator = require('js/strategy/emailValidator')
            , validator;  

            validator = new Strategy();
            console.log(
                validator.selectValidator(emailValidator)
                        .validate("toto@toto.com")
            ); 
        }
    }
})