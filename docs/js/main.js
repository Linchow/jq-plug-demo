
requirejs.config({
    paths:{
        jquery: ['lib/jquery.min'],
        highlight: ['lib/highlight.pack'],
        layer:['lib/layer'],
        template:['lib/template'],
        datepickr:['lib/datepicker.min'],
        page:['lib/page'],
        scroll:["lib/yi-scroll"],
        qtip:["lib/jquery.qtip.min"],
        form:['lib/jquery.form'],
    },
    urlArgs: "version=" +  (new Date()).getTime()
})

require(['jquery'],function(){
  
    init();

    function init(){
        var routeId = $('.js-route-flag'); // 唯一标示

        if(routeId.hasClass("js-demo1")){
            require(["../js/demo1"],function(demo){
                demo.init();
            })
        }
        if(routeId.hasClass("js-demo2")){
            require(["../js/demo2"],function(demo){
                demo.init();
            })
        }
        if(routeId.hasClass("js-demo3")){
            require(["../js/demo3"],function(demo){
                demo.init();
            })
        }
        if(routeId.hasClass("js-demo4")){
            require(["../js/demo4"],function(demo){
                demo.init();
            })
        }
        if(routeId.hasClass("js-demo5")){
            require(["../js/demo5"],function(demo){
                demo.init();
            })
        }
        if(routeId.hasClass("js-demo6")){
            require(["../js/demo6"],function(demo){
                demo.init();
            })
        }
        if(routeId.hasClass("js-demo7")){
            require(["../js/demo7"],function(demo){
                demo.init();
            })
        }
    }
})