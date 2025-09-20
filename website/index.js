$(document).ready(function (e) {
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();
    toggle_onclick($win, $navbar, width);

    // resize event
    $win.resize(function () {
        toggle_onclick($win, $navbar, width);
    });

    $toggle.click(function (e) {
        $navbar.toggleClass("toggle-left");
    })

});

function toggle_onclick($win, $navbar, width) {
    if ($win.width() <= 768) {
        $navbar.css({ left: `-${width}px` });
    } else {
        $navbar.css({ left: '0px' });
    }
}

// 🔥 Typing effect for banner
var typed = new Typed('#typed', {
    strings: [
        'Software Engineer',
        'Backend Developer',
        'AI/ML Enthusiast',
        'Computer Vision Engineer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

// Optional: If you want About section also animated, 
// uncomment this and add <span id="typed_2"></span> in About section
/*
var typed_2 = new Typed('#typed_2', {
    strings: [
        'Problem Solver',
        'Team Player',
        'Innovator'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});
*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "https://lqkyapy3o4ujjz4co5f2gbg5440wocvh.lambda-url.ap-south-1.on.aws/"
    );
    let data = await response.json();
    counter.innerHTML = `👀 Views: ${data}`;
}
updateCounter();
