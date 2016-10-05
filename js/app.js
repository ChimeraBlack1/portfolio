x = "<div id='hamburger' class='hamburger' onclick='clickBurger()'>";
    x +="<div id='donutOne' class='donut'></div>";
    x += "<div id='donutTwo' class='donut'></div>";
    x += "<div id='donutThree' class='donut'></div>";
x += "</div>";
x += "<a href='https://www.facebook.com/christopher.parke.566' target='_blank'>";
    x += "<div class='social-icon facebook-icon'></div>";
x += "</a>";
x += "<a href='https://www.youtube.com/channel/UCux4O2wHEeE6IdaO3zVnJig' target='_blank'>";
    x += "<div class='social-icon youtube-icon'></div>";
x += "</a>";
x += "<a href='https://github.com/ChimeraBlack1' target='_blank'>";
    x += "<div class='social-icon github-icon'></div>";
x += "</a>";

document.getElementById('header').innerHTML = x;
//    "<div class='hamburger'><div id='donutOne' class='donut'></div><div id='donutTwo' class='donut'></div><div id='donutThree' class='donut'></div>";


var clickBurger = function() {
    // Check is Hamburger Menu is open
    if (!$('.hamburger > #donutOne').hasClass('open1')) {
        // open menu
            // hamburger mmenu Open animation
            $('.hamburger > #donutOne').addClass('open1');
            $('.hamburger > #donutTwo').addClass('open2');
            $('.hamburger > #donutThree').addClass('open3');
            
            // Nav Menu Open
            $('.nav').addClass('navOpen');
        
    } else {
        // close menu
            // Nav Menu Close
            $('.nav').removeClass('navOpen');
            // Hamburger menu Close animation
            $('.hamburger > #donutOne').removeClass('open1');
            $('.hamburger > #donutTwo').removeClass('open2');
            $('.hamburger > #donutThree').removeClass('open3');
            
            
    }
    
    if(document.body.scrollTop > 50 && $('.hamburger > #donutOne').hasClass('open1')) {
        $('.header').removeClass('zeroPadding');
        $('.social-icon').removeClass('zeroOpacity');
    }
    
    if(document.body.scrollTop > 50 && !$('.hamburger > #donutOne').hasClass('open1')) {
        $('.header').addClass('zeroPadding');
        $('.social-icon').addClass('zeroOpacity');
        
    }
}

//var opaqueHeader = function() {
//        $('.header').addClass('opaque');
//}

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
    }

}

