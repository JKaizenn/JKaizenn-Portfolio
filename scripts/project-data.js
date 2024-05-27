document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        { title: "Project 1", description: "This is a description of project 1." },
        { title: "Project 2", description: "This is a description of project 2." },
        { title: "Project 3", description: "This is a description of project 3." },
    ];

    const projectList = document.getElementById("project-list");

    projects.forEach((project) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${project.title}: ${project.description}`;
        projectList.appendChild(listItem);
    });

    localStorage.setItem("projects", JSON.stringify(projects));

    const storedProjects = JSON.parse(localStorage.getItem("projects"));
    console.log("Stored Projects:", storedProjects);
});
