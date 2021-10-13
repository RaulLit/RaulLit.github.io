if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoader', ready());
} else {
    ready();
}

function ready() {
    const staticNavWrapper = document.querySelector('.static-nav-wrapper');
    const popNavWrapper = document.querySelector('.pop-nav-wrapper');
    // SCROLL NAV POP FUNCTIONALITY
    window.addEventListener('scroll', function() {
        if(window.scrollY >= 40) {
            staticNavWrapper.style.visibility = "hidden";
            staticNavWrapper.style.opacity = "0";
            popNavWrapper.style.visibility = "visible";
            popNavWrapper.style.opacity = "1";
            popNavWrapper.classList.remove('preposition');
        } else {
            staticNavWrapper.style.visibility = "visible";
            staticNavWrapper.style.opacity = "1";
            popNavWrapper.style.visibility = "hidden";
            popNavWrapper.style.opacity = "0";
            popNavWrapper.classList.add('preposition');
        }
    });

    
    // const navOptions = {
    //     threshold: 0, 
    //     rootMargin: '-20px'
    // }
    // const navOberserver = new IntersectionObserver(function (entries, navOberserver) {
    //     entries.forEach(entry => {
    //         console.log(entry.isIntersecting);
    //     });
    // }, navOptions);

    // navOberserver.observe(navWrapper);
}