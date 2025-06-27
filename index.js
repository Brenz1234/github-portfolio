const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    var modal = document.getElementById("imageModal");

    // Get the image element inside the modal
    var modalImage = document.getElementById("modalImage");
    // Get the caption element inside the modal
    var captionText = document.getElementById("caption");

    // Get all images that should open the modal
    var clickableImages = document.querySelectorAll(".clickable-image");

    // Loop through each clickable image and attach an onclick event
    clickableImages.forEach(function(img) {
        img.onclick = function() {
            modal.style.display = "block"; // Show the modal
            modalImage.src = this.dataset.fullsrc; // Set the source of the modal image to the full-size path
            captionText.innerHTML = this.alt; // Set the caption to the alt text of the clicked image
        }
    });

    // Get the <span> element that closes the modal (the 'x' button)
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal content, close the modal
    modal.onclick = function(event) {
        if (event.target == modal) { // Check if the click was directly on the modal background
            modal.style.display = "none";
        }
    }
});


  // When image is clicked
  document.querySelectorAll('.clickable-image').forEach(img => {
    img.addEventListener('click', function() {
      const fullSrc = this.dataset.fullsrc;
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightbox-img');
      lightbox.style.display = 'block';
      lightboxImg.src = fullSrc;
    });
  });

  // When close (×) is clicked
  document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('lightbox').style.display = 'none';
  });

  // Close if clicked outside the image
  document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
      this.style.display = 'none';
    }
  });

