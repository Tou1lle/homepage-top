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
  const workNameContainer = document.createElement("div");
  const workIconContainer = document.createElement("div");
  const workName = document.createElement("h3");
  const workIcon1 = document.createElement("img");
  const workIcon2 = document.createElement("img");
  const workDescription = document.createElement("p");
  
  //add text to elements
  if (!projectImage) workImage.textContent = "Project Screenshot"
  workName.textContent = projectName;
  workDescription.textContent = projectDescription;
  workIcon1.src = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg";
  workIcon2.src = "./assets/icons/open-in-new-black.svg";
  
  //add appropriate classes
  card.classList.add("work")
  workImage.classList.add("work-screenshot");
  workInfo.classList.add("work-info-container");
  workIcon1.classList.add("project-link-icon");
  workIcon2.classList.add("project-link-icon");

  //append all
  card.append(workImage, workInfo);
  workInfo.append(workNameContainer, workDescription);
  workNameContainer.append(workName, workIconContainer);
  workIconContainer.append(workIcon1, workIcon2);
  return card;
}