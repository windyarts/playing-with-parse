require.config({
    baseUrl: 'javascripts',
    paths: {
        // cdn hosts resources
        'jquery': 'http://cdnjs.cloudflare.com/ajax/libs/jquery/1.7.2/jquery.min',
        'underscore': 'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.3.3/underscore-min',
        'underscore.string': 'http://cdnjs.cloudflare.com/ajax/libs/underscore.string/2.0.0/underscore.string.min',
        // self hosts vendor resources
        'vendor': '../vendor/js'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'underscore': {
            exports: '_'
        },
        'underscore.string': {
            deps: ['underscore'],
            exports: function(_) {
                this._.mixin(this._.string.exports());
                return this._.string;
            }
        },
        'vendor/bootstrap': ['jquery']
    }
});

require(['app'], function(App) {
    new App().run();
});