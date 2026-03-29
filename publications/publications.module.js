// Define the `publications` module
// angular.module('publications', []);

function loadPublications(jsonFile, targetElementId) {
  fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById(targetElementId);

      data.forEach(pub => {
        const li = document.createElement("li");

        li.innerHTML = `
          <strong>${pub.title}</strong><br>
          ${pub.authors} (${pub.year})<br>
          <a href="${pub.link}" target="_blank">Link</a>
        `;

        container.appendChild(li);
      });
    })
    .catch(error => console.error("Error loading publications:", error));
}

// Load both columns
loadPublications("publications.json", "pubs-left");
loadPublications("publications_preprints.json", "pubs-right");
