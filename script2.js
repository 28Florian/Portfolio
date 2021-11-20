$(document).ready(function(){
    $(window).scroll(function(){
        // Barre de navigation
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // Faire apparaitre le bouton qui fait monter
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Bouton qui monte
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    // Animation du menu
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('#b1').click(function(){
    $('#rea1').show();
    });

    $('#b2').click(function(){
    $('#rea2').show();
    });
    
    $('#b3').click(function(){
    $('#rea3').show();
    });

    $('#b4').click(function(){
    $('#rea4').show();
    });

    $('#b5').click(function(){
    $('#rea5').show();
    });

    $('#b6').click(function(){
    $('#rea6').show();
    });


    $('i').click(function(){
    $('.contenu').hide();
    });

});