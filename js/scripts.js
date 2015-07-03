/*var meny = Meny.create({
    // The element that will be animated in from off screen
    menuElement: document.querySelector( '.meny' ),

    // The contents that gets pushed aside while Meny is active
    contentsElement: document.querySelector( '.curtains' ),

    // The alignment of the menu (top/right/bottom/left)
    position: 'right',

    // The height of the menu (when using top/bottom position)
    height: 200,

    // The width of the menu (when using left/right position)
    width: 260;
});*/

















$(document).ready(function(){
   $('.curtains').curtain();
   
});

$(document).ready(function(){
   $('.curtains').curtain();
   
    var scrollorama = $.scrollorama({
        blocks:'.curtains'
    });
    
	scrollorama.animate('#intro h3',{
    	duration:20, property:'opacity', end: 0
    });


    scrollorama.animate('#intro h1',{
    	duration:200, property:'opacity', start: 0
    });

    scrollorama.animate('#intro h2',{
    	duration:20, property:'opacity', start: 5
    });


    scrollorama.animate('#two h1',{
    	delay: 600, duration:500, property:'opacity', start:0
    });  
   
    scrollorama.animate('#two h2',{
    	delay: 600, duration:500, property:'opacity', start:0
    }); 

    scrollorama.animate('#two h3',{
    	delay: 700, duration:400, property:'rotate', start:-20
    }); 



    scrollorama.animate('#three h2',{
    	delay: 1193, duration:1000, property:'top', start:630, pin:true
    }); 
    scrollorama.animate('#three h1',{
    	delay: 1450, duration:503, property:'left', start: 1230
    });  



   scrollorama.animate('#four h2',{
    	delay: 2299, duration:500, property:'rotate', start:480, pin:true
    });   
    scrollorama.animate('#four h1',{
    	delay:2599, duration:300, property:'opacity', start:0, pin:true
    });  
    scrollorama.animate('#four h5',{
    	delay: 2699, duration:300, property:'opacity', start:0, pin:true
    });  
    scrollorama.animate('#four h4',{
    	delay: 2700, duration:300, property:'opacity', start:0, pin:true
    }); 
    scrollorama.animate('#four h3',{
    	delay: 2700, duration:300, property:'opacity', start:0, pin:true
    }); 
    scrollorama.animate('#four h6',{
    	delay: 2599, duration:300, property:'opacity', start:0, pin:true
    });


    scrollorama.animate('#five h1',{
    	delay: 2999, duration:503, property:'left', start: 1230
    }); 
});