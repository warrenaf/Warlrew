export default function renderProjectDetails(project) {
  return `<section class="project_details">
    <button class="backButton" id="backButton"><i class="fa-solid fa-arrow-left"></i></button>
    <div class="project_title">
    <h1>${project.title}</h1><hr> </div>
    <div class="project_description">
    <p>${
      project.bullets.find((bullet) => bullet.description)?.description || ""
    }</p> </div><hr>
    <div class="project_info">
    <p><strong>By: </strong>${project.by}</p>
    <p><strong>Date: </strong>${project.date}</p>
    <p><strong>Type: </strong>${project.type}</p>
    <p><strong>Skills: </strong>${project.skills}</p>
    <a href= ${project.link}><strong>Link to Project <i class="fa-solid fa-link"></i></strong></a> 
    </div> <hr>
    <div class="project_photos">
      ${project.vimages
        .map(
          (image) =>
            `<img src="${image}" class="project-img" alt="Project Image">`
        )
        .join("")}
      ${project.himages
         .map(
          (image) =>
            `<img src="${image}" class="horizontal-project-img" alt="Project Image">`
       )
        .join("")}
    </div>
    <hr>
    <div class="project_info">
    <p>${project.bullets.find((bullet) => bullet.info)?.info || ""}</p>
    </div>
    </section>`;
}
