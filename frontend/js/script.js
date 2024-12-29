document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menuToggle");
    const navWrap = document.getElementById("navWrap");

    menuToggle.addEventListener("click", function() {
        navWrap.classList.toggle("show");
    });

    // Optional: Close menu when clicking outside
    document.addEventListener("click", function(e) {
        if (!navWrap.contains(e.target) && !menuToggle.contains(e.target)) {
            navWrap.classList.remove("show");
        }
    });
});

//login page 

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Logging in...');
    
});

document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Subscribed to newsletter!');
    
});


//register page 

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Logging in...');
   
});

document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Subscribed to newsletter!');
 
});


//slider
let interval = setInterval(autoSlide, 3000);

function autoSlide() {
    document.getElementById('img' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}

// Pause on hover
document.querySelector('.slider').addEventListener('mouseover', () => {
    clearInterval(interval);
});

// Resume on mouse leave
document.querySelector('.slider').addEventListener('mouseleave', () => {
    interval = setInterval(autoSlide, 3000);
});

