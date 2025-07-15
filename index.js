import renderNavbar from "./components/NavBar.js";
import renderMainPage from "./components/MainPage.js";
import renderProjectDetails from "./components/ProjectDetails.js";
import { renderAbout } from "./components/About.js";
import renderProjectsPage from "./components/Projects.js";

fetch("data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get("project");
    const page =
      urlParams.get("page") || (projectId ? "project-detail" : "main");
    renderMainPage(data);
    window.addEventListener("resize", function () {
      let viewportHeight = window.innerHeight;

      if (viewportHeight < 800) {
        // Apply specific changes if the height is smaller (bookmarks bar is likely visible)
        document.body.classList.add("bookmarks-bar-visible");
      } else {
        // Revert changes if the height is larger (bookmarks bar is likely hidden)
        document.body.classList.remove("bookmarks-bar-visible");
      }
    });
     const gif = document.getElementById('gif');
    let isMouseDown = false;

    // Listen for mouse down to start moving the gif
    document.addEventListener('mousedown', (e) => {
      isMouseDown = true;
      moveGif(e);
    });

    // Listen for mouse move to continue moving the gif
    document.addEventListener('mousemove', (e) => {
      if (isMouseDown) {
        moveGif(e);
      }
    });

    // Listen for mouse up to stop moving the gif
    document.addEventListener('mouseup', () => {
      isMouseDown = false;
    });

    // Move the gif towards the mouse cursor
   function moveGif(event) {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const gifRect = gif.getBoundingClientRect();
      const gifX = gifRect.left + gifRect.width / 2;
      const gifY = gifRect.top + gifRect.height / 2;

      const deltaX = mouseX - gifX;
      const deltaY = mouseY - gifY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      if (distance > 1) {
        const moveX = deltaX / distance * 5;  // Adjust speed (higher number = faster)
        const moveY = deltaY / distance * 5;  // Adjust speed

        // Update the GIF's position
        gif.style.left = `${gif.offsetLeft + moveX}px`;
        gif.style.top = `${gif.offsetTop + moveY}px`;
      }
    }
  });
