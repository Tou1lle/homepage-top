const works = document.querySelector(".works-container")

for (let i = 0; i < 10; i++) {
  const projectCard = createProject("Project Name", "Short description of the project. Just a couple sentences will do");
  works.appendChild(projectCard);
}

function createProject(projectName, projectDescription, projectImage = "") {
  //create work elements
  const card = document.createElement("div")
  const workImage = document.createElement("div");
  const workInfo = document.createElement("div");
  
  //add text to elements
  if (!projectImage) workImage.textContent = "Project Screenshot"
  
  //add appropriate classes
  card.classList.add("work")
  workImage.classList.add("work-screenshot");
  workInfo.classList.add("work-info-container")
  card.append(workImage, workInfo);
  return card;
}