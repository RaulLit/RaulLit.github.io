if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoader', ready);
} else {
    ready();
}

function ready() {
    const navContainer = document.querySelector('.nav-container');
    const sideNavContainer = document.querySelector('.sideNav-container');
    var sideNavOptions = {
        threshold: 0,
        rootMargin: "-5px"
    };
    const sideNavObserver = new IntersectionObserver(function (entries, sideNavObserver) {
        entries.forEach(entry => {
            console.log(entry.isIntersecting);
            if(!entry.isIntersecting) {
                sideNavContainer.classList.add("show-sideNav");
            } else {
                sideNavContainer.classList.remove("show-sideNav");
            }
        })
    }, sideNavOptions);
    sideNavObserver.observe(navContainer);
}

// NAV FUNCTIONALITY
function showNavContent(_content) {
    var container = document.getElementById(_content);
    container.classList.toggle('nav-dropdown-show');
}
function removeDropdownContent(_content){
    var container = document.getElementById(_content);
    container.classList.remove('nav-dropdown-show');
}

