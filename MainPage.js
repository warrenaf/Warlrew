import { renderSelfDescription, renderAbout } from "./About.js";
import { renderNews, renderAllNews } from "./News.js";
import renderProjectsPage from "./Projects.js";
import renderProjectDetails from "./ProjectDetails.js";
import renderIntro from "./Intro.js";

let inProjectDetails = false;

export default function renderMainPage(data) {
  const main = document.querySelector("main");
  main.className = "container";
  main.innerHTML = renderIntro(data.about);
  const aboutBtn = document.getElementById("aboutBtn");
  const newsBtn = document.getElementById("newsBtn");
  const projectBtn = document.getElementById("projectBtn");
  // const bio = document.getElementById("bio");
  aboutBtn.addEventListener("click", () => {
    aboutBtn.classList.toggle("open");
    if (aboutBtn.classList.contains("open")) {
      aboutBtn.innerHTML = renderAbout(data.about);
      const aboutMore = document.getElementById("about_description");
      aboutMore.addEventListener("click", (event) => {
        event.stopPropagation();
        aboutBtn.innerHTML = renderSelfDescription(data.about);
      });
    } else {
      aboutBtn.innerHTML = "ABOUT";
    }
  });
  projectBtn.addEventListener("click", () => {
    projectBtn.classList.toggle("open");
    if (projectBtn.classList.contains("open") && !inProjectDetails) {
      setTimeout(() => {
        projectBtn.innerHTML = renderProjectsPage(data.projects);
        data.projects.forEach((project) => {
          const projectElement = document.getElementById(project.id);
          projectElement.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent closing the projectBtn
            projectBtn.innerHTML = renderProjectDetails(project);
          });
        });
      }, 800);
    } 
    else {
      projectBtn.innerHTML = "PROJECTS";
    }
  });
  newsBtn.addEventListener("click", () => {
    newsBtn.classList.toggle("open");
    if (newsBtn.classList.contains("open")) {
      newsBtn.innerHTML = renderAllNews(data.news);
      const searchBar = document.getElementById("newsSearch");
      searchBar.addEventListener("click", (event) => {
        event.stopPropagation();
      });
    } else {
      newsBtn.innerHTML = "NEWS";
    }
  });

  const search = document.querySelector(".search");
  search.addEventListener("input", (e) => {
    const filtered = data.news.filter((newsitem) =>
      newsitem.title.toLowerCase().includes(e.target.value.toLowerCase())
    );

    const list = document.querySelector(".newsList");
    list.innerHTML = filtered.map((newsitem) => renderNews(newsitem)).join("");
  });
}
