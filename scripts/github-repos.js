document.addEventListener("DOMContentLoaded", function () {
  const username = "Jkaizenn";
  const repoList = document.getElementById("repo-list");

  const pinnedRepos = ["repo1", "repo2", "repo3"];

  pinnedRepos.forEach((repo) => {
    fetch(`https://api.github.com/repos/${username}/${repo}`)
      .then((response) => response.json())
      .then((data) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
                    <h3><a href="${data.html_url}" target="_blank">${
          data.name
        }</a></h3>
                    <p>${data.description || "No description provided."}</p>
                `;
        repoList.appendChild(listItem);
      })
      .catch((error) => console.error("Error fetching repository:", error));
  });
});
