// Building the go to the top button:
// Getting Help from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
mybutton = document.getElementById('myBtn');

// When the user scrolls down 40px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// call the function When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

// build the nav
const menu = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

// building the navbar
function buildMenuBar() {
    let navList = '';
    sections.forEach((section) => {
        const secid = section.getAttribute('id');
        const secDataNav = section.getAttribute('data-nav');
        navList += `<li><a href='#${secid}' class='menu__link' data-id='${secid}'>${secDataNav}</a></li>`;
        menu.innerHTML = navList;
    });
};
buildMenuBar();

// Add ActiveClass to sections and navbar
const changeActiveSec = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const activeNav = document.querySelector(`.menu__link[data-id='${entry.target.id}']`);
            document.querySelectorAll('.menu__link').forEach(nav => {
                nav.classList.remove('active');
            });
            activeNav.classList.add('active');
            document.querySelectorAll('section').forEach(sec => {
                sec.classList.remove('your-active-class');
            });
            entry.target.classList.add('your-active-class');
        }
    });
}

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver(changeActiveSec, options);

sections.forEach((section) => {
    observer.observe(section);
});    
