

var myElement = $('.js_my-element');

$(window).on('scroll', function() {
    var st = $(this).scrollTop();
    
    myElement.css({
    'opacity' : 1 - st/600
});
    
    
    var divElement = document.getElementById('viz1556547004082');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);
    
    
/* line graph */ 
    
