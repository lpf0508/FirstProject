require.config({
    paths: {
        jquery: '../jquery/jquery-1.9.0.min'
    }
});

require(['jquery'], function ($) {
    alert($().jquery);
});