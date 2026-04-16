export default function renderProjectsPage(projects) {
  return `
  <section class="projects" id="projects">
    <h1 class="h1_project">Projects</h1>
    <div class="div_project"> 
      ${projects.map((p) => renderProject(p)).join("")}
    </div>
  </section> `;
}

function renderProject(project) {
  return `
  <a id=${project.id}>
    <i class="fa-solid ${project.cover}"></i>
    <h3>${project.title}</h3>
  </a>`;
}
