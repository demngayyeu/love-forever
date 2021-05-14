    if(typeof $pdj=='undefined'){
        var $pdj=jQuery.noConflict()
        }
        
    if(!image_urls){
        var image_urls=Array()
    }

    if(!flash_urls){
        var flash_urls=Array()
    }

    image_urls['rain']="heartr.png";

    $pdj(document).ready(function(){
        var c=$pdj(window).width();
        var d=$pdj(window).height();
        var e=function(a,b){
                return Math.round(a+(Math.random()*(b-a)))
                };
    var f=function(a){
            setTimeout(function(){
                a.css({
                        left:e(0,c)+'px',
                        top:'-30px',
                        display:'block',
                        opacity:'0.'+e(10,100)}).animate({top:(d-10)+'px'},
                        e(7500,8000),
                function(){
                        $pdj(this).fadeOut('slow',
                        function(){f(a)})})},e(1,8000))
                    };
                    $pdj('<div></div>').attr('id','rainDiv').css({position:'fixed',width:(c-20)+'px',height:'1px',left:'0px',top:'-5px',display:'block'}).appendTo('body');
                    
                    for(var i=1;i<=20;i++){
                        var g=$pdj('<img/>').attr('src',image_urls['rain']).css({position:'absolute',left:e(0,c)+'px',top:'-30px',display:'block',opacity:'0.'+e(10,100),'margin-left':0}).addClass('rainDrop').appendTo('#rainDiv');
                        f(g);
                        g=null
                    };
                    var h=0;
                    var j=0;
                    $pdj(window).resize(function () { c = $pdj(window).width(); d = $pdj(window).height() })
                });










            