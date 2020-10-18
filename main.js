$(document).ready(function(){
    $('.menu-toggler').on("click", function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on("click", function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on("click", function(){
        $('html, body').animate({
            scrollTop:$($(this).attr('href')).offset().top - 100
        },2000); 
    });
    $('#up').on("click", function(){
        $('html, body').animate({
            scrollTop:0
        },2000);
    });

    // init controller
    var controller = new ScrollMagic.Controller();

    // create a scene
    let profileScene = new ScrollMagic.Scene({
        triggerElement: '.profile-img',
       
    }).setClassToggle('.profile-img', 'fade-left').addTo(controller);

    let aboutDetailsScene = new ScrollMagic.Scene({
        triggerElement: '.about-details',
        
    }).setClassToggle('.about-details', 'fade-right').addTo(controller);

    let skills = document.querySelectorAll(".skill");

    skills.forEach((skill, index) => {
        let skillScene = new ScrollMagic.Scene({
            triggerElement: skill,
            offset: 50 + (index * 50),
        }).setClassToggle(skill, 'show-skill').addTo(controller);
    });

    let projectImgScene = new ScrollMagic.Scene({
        triggerElement: '.projects-img',
    }).setClassToggle('.projects-img', 'fade-left').addTo(controller);

    let projectDesScene = new ScrollMagic.Scene({
        triggerElement: '.project-description',
    }).setClassToggle('.project-description', 'fade-left').addTo(controller);

    let projectMidImgScene = new ScrollMagic.Scene({
        triggerElement: '.projects-img-mid',
    }).setClassToggle('.projects-img-mid', 'fade-right').addTo(controller);

    let projectMidDesScene = new ScrollMagic.Scene({
        triggerElement: '.project-description-mid',
    }).setClassToggle('.project-description-mid', 'fade-right').addTo(controller);

    let projectLastImgScene = new ScrollMagic.Scene({
        triggerElement: '.projects-img-last',
    }).setClassToggle('.projects-img-last', 'fade-left').addTo(controller);

    let projectLastDesScene = new ScrollMagic.Scene({
        triggerElement: '.project-description-last',
    }).setClassToggle('.project-description-last', 'fade-left').addTo(controller);


});