async function fetchScratchData() {
    const projectId = document.getElementById("projectId").value;
    const url = `https://api.scratch.mit.edu/projects/${projectId}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("データの取得に失敗しました");
        }
        const data = await response.json();
        displayProjectInfo(data);
    } catch (error) {
        document.getElementById("projectInfo").innerHTML = `<p style="color:red;">${error.message}</p>`;
    }
}

function displayProjectInfo(data) {
    const infoDiv = document.getElementById("projectInfo");
    infoDiv.innerHTML = `
        <h2>${data.title}</h2>
        <p><strong>作成者:</strong> ${data.author.username}</p>
        <p><strong>ビュー数:</strong> ${data.stats.views}</p>
        <p><strong>愛され数:</strong> ${data.stats.loves}</p>
        <p><strong>リミックス数:</strong> ${data.stats.remixes}</p>
    `;
}