function toggleContent1() {
    var content = document.getElementById("more-content1");
    var button = document.querySelector(".btn");

    if (content.style.display === "none") {
        content.style.display = "block";
        button.textContent = "Read Less";
    } else {
        content.style.display = "none";
        button.textContent = "Read More";
    }
}

function toggleContent2() {
    var content = document.getElementById("more-content2");
    var button = document.querySelector(".btn");

    if (content.style.display === "none") {
        content.style.display = "block";
        button.textContent = "Read Less";
    } else {
        content.style.display = "none";
        button.textContent = "Read More";
    }
}

function toggleContent() {
    var content = document.getElementById("more-content");
    var button = document.querySelector(".btn");

    if (content.style.display === "none") {
        content.style.display = "block";
        button.textContent = "Read Less";
    } else {
        content.style.display = "none";
        button.textContent = "Read More";
    }
}

function toggleContent_project1() {
    var content = document.getElementById("more-content4");
    var button = document.querySelector(".btn");

    if (content.style.display === "none") {
        content.style.display = "block";
        button.textContent = "Read Less";
    } else {
        content.style.display = "none";
        button.textContent = "Read More";
    }
}

function toggleParagraph() {
    var moreInfo = document.getElementById("more-info");
    var button = document.getElementById("readMoreBtn");

    if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block";
        button.innerHTML = "Read Less"; // Change button text when shown
    } else {
        moreInfo.style.display = "none";
        button.innerHTML = "Read More"; // Change button text when hidden
    }
}