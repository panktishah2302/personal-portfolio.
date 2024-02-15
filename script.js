document.addEventListener("DOMContentLoaded", function () {
    var paragraphs = document.querySelectorAll('.about-container p');
    paragraphs.forEach(function (paragraph, index) {
        paragraph.style.animationDelay = index * 0.5 + "s";
    });
});


function toggleDarkMode() {
    const body = document.body;
    const darkModeSwitch = document.querySelector('.dark-mode-switch i');

    body.classList.toggle("dark-mode");
    const isDarkMode = body.classList.contains("dark-mode");

    // Toggle between fa-toggle-off and fa-toggle-on based on dark mode status
    darkModeSwitch.className = isDarkMode ? 'fa-solid fa-toggle-on' : 'fa-solid fa-toggle-off';
}

