const navSlide = () => {
    //Toggle Nav
    document.querySelector('.burger').addEventListener('click', () => {
        document.querySelector('.navLinks').classList.toggle('navActive');

        //Animate Links
        document.querySelectorAll('.navLinks li').forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animate = link.style.animation = `navLinkFade 0.5s ease forwards ${index / 10 + 0.4}s`
            }
        });
        
        //Burger Animate
        document.querySelector('.burger').classList.toggle('toggle');
    });
}

navSlide();



