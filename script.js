/*========== menu icon navbar ==========*/
let mode = document.getElementById('mode');
let navbar = document.querySelector('.navbar');
let body = document.getElementById('bd');
mode.onclick = () => {
    if(body.className === "bright"){
        body.className = 'dark-mode';
        mode.src = "images/sun.png";
    }
  else{
        body.className = 'bright';
        mode.src = "images/moon.png";
    }
};


/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    /*========== sticky navbar ==========*/
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);


    /*========== remove menu icon navbar when click navbar link (scroll) ==========*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

