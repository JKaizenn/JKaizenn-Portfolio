document.addEventListener("DOMContentLoaded", function () {
  const lastUpdated = document.getElementById("last-updated");
  const lastModified = document.getElementById("last-modified");

  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(document.lastModified);

  if (lastUpdated) {
    lastUpdated.textContent = date.toLocaleDateString("en-US", options);
  }
  if (lastModified) {
    lastModified.textContent = date.toLocaleDateString("en-US", options);
  }
});
