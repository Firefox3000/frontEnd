
function setup() {
    for (let i = 0; i < document.querySelectorAll('.hart').length; i++) {
        document.querySelectorAll('.hart')[i].addEventListener('click', hartCol);
    }
}

setup();


const navSlide = () => {
    //Toggle Nav
    document.querySelector('.burger').addEventListener('click', () => {
        document.querySelector('.navLinks').classList.toggle('navActive');

        //Animate Links
        document.querySelectorAll('.navLinks li').forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animate = link.style.animation = `navLinkFade 0.5s ease forwards ${index / 10 + 0.2}s`
            }
        });
        
        //Burger Animate
        document.querySelector('.burger').classList.toggle('toggle');
    });
}

navSlide();

function hartCol(e){
    e.currentTarget.classList.toggle('hartActive');
}




