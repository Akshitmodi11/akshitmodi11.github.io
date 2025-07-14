function toggleParagraph() {
    var moreInfo = document.getElementById("more-info");
    var button = document.querySelector("readMoreBtn");

    if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block";
        button.innerHTML = "Read Less"; // Change button text when shown
    } else {
        moreInfo.style.display = "none";
        button.innerHTML = "Read More"; // Change button text when hidden
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