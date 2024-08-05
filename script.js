let aboutButton = document.getElementById("about");
let interestsButton = document.getElementById("interests");
let academicsButton = document.getElementById("academics");
let extraButton = document.getElementById("extra");
let moreButton = document.getElementById("more");
let topButton = document.getElementById("topbutton");

// --- hovers --- //

function aboutHover() {
    aboutButton.style.color = "white";
}

function interestsHover() {
    interestsButton.style.color = "white";
}

function academicsHover() {
    academicsButton.style.color = "white";
}

function extraHover() {
    extraButton.style.color = "white";
}

function topHover() {
    topButton.style.backgroundColor = "grey";
}

// --- hover end --- //

function aboutHoverEnd() {
    aboutButton.style.color = "royalblue";
}

function interestsHoverEnd() {
    interestsButton.style.color = "gold";
}

function academicsHoverEnd() {
    academicsButton.style.color = "limegreen";
}

function extraHoverEnd() {
    extraButton.style.color = "red";
}

function topHoverEnd() {
    topButton.style.backgroundColor = "black";
}

// --- top scrolling --- //

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";  
    }
    else {
        topButton.style.display = "none";
    }
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function() {scrollFunction()}

aboutButton.addEventListener("mouseover", aboutHover);
aboutButton.addEventListener("mouseout", aboutHoverEnd);

interestsButton.addEventListener("mouseover", interestsHover);
interestsButton.addEventListener("mouseout", interestsHoverEnd);

academicsButton.addEventListener("mouseover", academicsHover);
academicsButton.addEventListener("mouseout", academicsHoverEnd);

extraButton.addEventListener("mouseover", extraHover);
extraButton.addEventListener("mouseout", extraHoverEnd);

topButton.addEventListener("mouseover", topHover);
topButton.addEventListener("mouseout", topHoverEnd);