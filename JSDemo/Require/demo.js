require.config({
    baseUrl:'jquery',
    paths: {
        jquery: 'jquery-1.9.0.min'
    }
});

require(['jquery'], function () {
    $(document).ready(function () {
        alert('加载完毕...');
    });
});
