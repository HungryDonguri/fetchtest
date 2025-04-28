const projectId = "1167158373"
const apiUrl = `https://trampoline.turbowarp.org/proxy/projects/${projectId}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const titleDiv = document.getElementById("title");
        titleDiv.textContent = `Title: ${data.title}`;
    })
    .catch(error => console.error("Error fetching data:", error));