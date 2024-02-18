document.addEventListener("DOMContentLoaded", function () {
    var paragraphs = document.querySelectorAll('.about-container p');
    paragraphs.forEach(function (paragraph, index) {
        paragraph.style.animationDelay = index * 0.5 + "s";
    });
});



