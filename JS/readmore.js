function toggleParagraph() {
    var moreInfo = document.getElementById("more-info");
    var button = document.querySelector(".btn");

    if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block";
        button.innerHTML = "Read Less"; // Change button text when shown
    } else {
        moreInfo.style.display = "none";
        button.innerHTML = "Read More"; // Change button text when hidden
    }
}
