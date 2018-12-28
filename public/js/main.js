
requirejs.config({
    paths:{
        jquery:['lib/jquery.min'],
    },
    urlArgs: "version=" +  (new Date()).getTime()
})

require(['jquery'],function(){
  
    init();

    function init(){
        var routeId = $('.js-route-flag'); // 唯一标示

        // 登录
        if(routeId.hasClass("js-login")){
            require(["../../static/js/login/login.js"],function(login){
                login.init();
            })
        }
    }
})