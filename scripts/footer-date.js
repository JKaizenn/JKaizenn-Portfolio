document.addEventListener("DOMContentLoaded", function () {
    const lastUpdated = document.getElementById("last-updated");
    const lastModified = document.getElementById("last-modified");

    const now = new Date();
    lastUpdated.textContent = now.toDateString();

    const lastMod = new Date(document.lastModified);
    lastModified.textContent = lastMod.toDateString();
});
