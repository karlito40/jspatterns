define(function(){
    return {
        validate: function(value) {
            return value.indexOf('@') != -1;
        }
    }
})