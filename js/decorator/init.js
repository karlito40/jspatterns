define(function (require) {
    'use strict';

    return {
        init: function () {

            var user1, user2,
                User = require('js/decorator/user'),
                execDecorator = require('js/decorator/decorators/exec'),
                adminDecorator = require('js/decorator/decorators/admin');

            user1 = new User('user1');
            user1.decoratePermissions(execDecorator);

            user2 = new User('user2');
            user2.decoratePermissions(adminDecorator);

            console.log(user1.id, user1.getPermissions());
            console.log(user2.id, user2.getPermissions());
        }

    };

});