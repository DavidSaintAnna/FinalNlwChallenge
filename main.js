window.addEventListener('scroll', onScroll)



function onScroll() {
    showNavOnScroll();
    showBackToTopButtonOnScroll()
}

function showNavOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}


function showBackToTopButtonOnScroll() {
    console.log(scrollY)
    if (scrollY > 200) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}
function openMenu() {
    document.body.classList.add('menu-expanded');
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}



ScrollReveal({
    origin: 'right',
    distance: '30px',
    duration: 700,
}).reveal(``);


