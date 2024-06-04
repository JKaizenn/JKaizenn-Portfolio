document.addEventListener("DOMContentLoaded", function () {
  const username = "JKaizenn";
  const repoList = document.getElementById("repo-list");

  fetch(
    `https://api.github.com/users/${username}/repos?sort=created&per_page=3`
  )
    .then((response) => {
      console.log("API Response:", response); // Debugging line
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(
            `GitHub API error: ${response.status} ${response.statusText} - ${
              error.message || error
            }`
          );
        });
      }
      return response.json();
    })
    .then((data) => {
      console.log("API Data:", data); // Debugging line
      if (Array.isArray(data)) {
        data.forEach((repo) => {
          const listItem = document.createElement("li");
          listItem.innerHTML = `
                        <h3><a href="${repo.html_url}" target="_blank">${
            repo.name
          }</a></h3>

                    `;
          repoList.appendChild(listItem);
        });
      } else {
        repoList.innerHTML =
          "<li>Error: Unable to fetch repositories. Data is not an array.</li>";
      }
    })
    .catch((error) => {
      console.error("Error fetching repositories:", error);
      repoList.innerHTML = `<li>Error: Unable to fetch repositories. ${error.message}</li>`;
    });
});
