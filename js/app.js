// **** HTML *** 

// Hamburger menu HTML for injection
x = "<div id='hamburger' class='hamburger' onclick='clickBurger()'>";
    x +="<div id='donutOne' class='donut'></div>";
    x += "<div id='donutTwo' class='donut'></div>";
    x += "<div id='donutThree' class='donut'></div>";
    x += "<div id='donutFour' class='x1'></div>";
    x += "<div id='donutFive' class='x2'></div>";
x += "</div>";

// Social icon HTML for injection
x += "<a href='https://www.facebook.com/christopher.parke.566' target='_blank'>";
    x += "<div class='social-icon facebook-icon'></div>";
x += "</a>";
x += "<a href='https://www.youtube.com/channel/UCux4O2wHEeE6IdaO3zVnJig' target='_blank'>";
    x += "<div class='social-icon youtube-icon'></div>";
x += "</a>";
x += "<a href='https://github.com/ChimeraBlack1' target='_blank'>";
    x += "<div class='social-icon github-icon'></div>";
x += "</a>";

// inject Hamburger menu and Social icons into Header Element
document.getElementById('header').innerHTML = x;



// **** OBJECTS *****
var resume = {
    open: function() {
        var x = "<h4><a onclick='footerTab()'>X</a></h4>";
            x += "<h6><a href='../docs/christopherparke.pdf'>Download PDF</a></h6>";
        return x;
    },
    
    close: function() {
        var x = "<h3><a onclick='footerTab()'>Resume</a></h3>";
        return x;
    }
}

// **** FUNCTION DECLARATIONS *** 




var clickBurger = function() {
    // Check if Hamburger Menu is open
    if (!$('.hamburger > #donutOne').hasClass('open1')) {
        // open menu
            // hamburger menu Open animation
            $('.hamburger > #donutOne').addClass('open1');
            $('.hamburger > #donutTwo').addClass('open2');
            $('.hamburger > #donutThree').addClass('open3');

            // Nav Menu Open
            $('.nav').addClass('navOpen');
        
            // X animation in
            $('.hamburger > #donutFour').addClass('x1open');
            $('.hamburger > #donutFive').addClass('x2open');
        
    } else {
        
         // X animation out
            $('.hamburger > #donutFour').removeClass('x1open');
            $('.hamburger > #donutFive').removeClass('x2open');
        
        // close menu
            // Nav Menu Close
            $('.nav').removeClass('navOpen');
        
        
        // Hamburger menu Close animation
            $('.hamburger > #donutOne').removeClass('open1');
            $('.hamburger > #donutTwo').removeClass('open2');
            $('.hamburger > #donutThree').removeClass('open3');
            
            
    }
    
    // if document is scrolled down and the hamburger's first donut has the class 'open1'...
    if(document.body.scrollTop > 50 && $('.hamburger > #donutOne').hasClass('open1')) {
        
        // ...add the padding back in on the header to squeeze the hamburger back in
        $('.header').removeClass('zeroPadding');
        // ...bring the social icons back into visibilty.
        $('.social-icon').removeClass('zeroOpacity');
        // ...remove the border radius class from the hamburger.
         $('.hamburger').removeClass('rounded');
    }
    // if the document is scrolled down and the hambruger's first donut DOES NOT have the open1 class...
    if(document.body.scrollTop > 50 && !$('.hamburger > #donutOne').hasClass('open1')) {
        
        // ...take the padding off of the header to push the hamburger into the corner.
        $('.header').addClass('zeroPadding');
        // ...make the social icons invisible.
        $('.social-icon').addClass('zeroOpacity');
        // ...add the border radius for the Hamburger in
        $('.hamburger').addClass('rounded');
        
    }
}


var noHeader = function() {

    if(document.body.scrollTop > 50){
        $('.header').addClass('transparent');
        $('.hamburger').addClass('opaque');

    } else if (document.body.scrollTop < 50){
        $('.header').removeClass('transparent');
        $('.hamburger').removeClass('opaque');
        $('.header').removeClass('zeroPadding');
        $('.social-icon').removeClass('zeroOpacity');
        
    }
    
    if(document.body.scrollTop > 50 && !$('.hamburger > #donutOne').hasClass('open1')){
        $('.header').addClass('zeroPadding');
        $('.social-icon').addClass('zeroOpacity');
        $('.hamburger').addClass('rounded');
        
    } 
    
    if (!$('.header').hasClass('transparent')){
        $('.hamburger').removeClass('rounded');
    }
    
    if(document.body.scrollTOp > 50 && $('.hamburger > #donutOne').hasClass('open1')){
        $('.hamburger').removeClass('rounded');
    }
}


var footerTab = function() {
    // if tab is CLOSED... 
    if (!$('.resume').hasClass('resume-tab-open')) {
        // ...open it...
        $('.resume').addClass('resume-tab-open');
        // ... and change the text to an x
        document.getElementById('resume').innerHTML = resume.open();
        
        
    // if tab is OPEN...   
    } else if ($('.resume').hasClass('resume-tab-open')) {
        // ...close it
        $('.resume').removeClass('resume-tab-open');
        // ...and change the text back to resume
        document.getElementById('resume').innerHTML = resume.close();
    }
}