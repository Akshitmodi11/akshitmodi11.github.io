function toggleContent(contentId, button) {
    var content = document.getElementById(contentId);
    if (content.style.display === "none" || content.style.display === "") {
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
function toggleExclusive(contentId, button) {
  const allContents = document.querySelectorAll("[id^='more-content']");
  const allButtons = document.querySelectorAll(".timeline-content .btn");

  allContents.forEach(content => {
    if (content.id !== contentId) {
      content.style.display = "none";
    }
  });

  allButtons.forEach(btn => {
    if (btn !== button) {
      btn.textContent = "Read More";
    }
  });

  const content = document.getElementById(contentId);
  const isVisible = content.style.display === "block";
  content.style.display = isVisible ? "none" : "block";
  button.textContent = isVisible ? "Read More" : "Read Less";
}