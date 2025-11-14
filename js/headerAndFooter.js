function getBasePath() {
    const pathParts = window.location.pathname.split("/");
    const repoName = pathParts[1]; // tên repo
    return `/${repoName}/layout/`;
}

async function showHeader() {
    const res = await fetch(getBasePath() + "header.html");
    const headerHtml = await res.text();
    document.querySelector(".showHeader").innerHTML = headerHtml;
}

async function showFooter() {
    const res = await fetch(getBasePath() + "footer.html");
    const footerHtml = await res.text();
    document.querySelector(".showFooter").innerHTML = footerHtml;
}

showHeader();
showFooter();