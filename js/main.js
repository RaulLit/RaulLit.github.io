if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoader', ready);
} else {
    ready();
}

function ready() {
    const mainNavContainer = document.querySelector('.nav-container');
    const sideNavContainer = document.querySelector('.sideNav-container');
    var sideNavOptions = {
        threshold: 0,
        rootMargin: "-5px"
    };
    const sideNavObserver = new IntersectionObserver(function (entries, sideNavObserver) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                sideNavContainer.classList.add("show-sideNav");
            } else {
                sideNavContainer.classList.remove("show-sideNav");
            }
        })
    }, sideNavOptions);
    sideNavObserver.observe(mainNavContainer);
}


// NAV DROPDOWN FUNCTIONALITY
function dropdownFunction(_dropdownContentContainer) {
    var container = document.getElementById(_dropdownContentContainer);
    if(container.classList.contains('show-nav-dropdown')) {
        hideDropdownContent(_dropdownContentContainer);
    } else{
        showDropdownContent(_dropdownContentContainer);
    }
}
function showContent(_content) {
    var container = document.getElementById(_content);
    container.classList.toggle('show');
}

function showDropdownContent(_content) {
    var container = document.getElementById(_content);
    container.classList.add('show-nav-dropdown');
}
function hideDropdownContent(_content){
    var container = document.getElementById(_content);
    container.classList.remove('show-nav-dropdown');
}

