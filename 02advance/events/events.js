// Event listener for clicks inside the image list (bubbling phase)
document.getElementById("imageList").addEventListener(
  "click",
  function (event) {
    console.log("Click inside the image list");
  },
  false // Bubbling phase
);

// Event listener for clicks on the owl image (bubbling phase)
document.getElementById("owlImage").addEventListener(
  "click",
  function (event) {
    console.log("Click on the owl image");
    event.stopPropagation(); // Stop event from bubbling up
  },
  false // Bubbling phase
);

// Event listener for clicks inside the image list (capturing phase)
document.getElementById("imageList").addEventListener(
  "click",
  function (event) {
    console.log("Click inside the image list (capturing phase)");
  },
  true // Capturing phase
);

// Event listener for clicks on the owl image (capturing phase)
document.getElementById("owlImage").addEventListener(
  "click",
  function (event) {
    console.log("Click on the owl image (capturing phase)");
  },
  true // Capturing phase
);
