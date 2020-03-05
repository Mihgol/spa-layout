(() => {
    const hamburger = {
        navToggle: document.querySelector('.hamburger'),
        nav: document.querySelector('.nav'),

        doToggle: event => {
            console.log(event)
            event.preventDefault();
            hamburger.navToggle.classList.toggle('expanded');
            hamburger.nav.classList.toggle('expanded');
        }
    }

    hamburger.navToggle.addEventListener('click', event => hamburger.doToggle(event));
})();