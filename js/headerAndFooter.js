function getBasePath() {
    // Lấy base URL của site (bao gồm repo-name nếu có)
    const base = window.location.origin + "/" + window.location.pathname.split("/")[1] + "/";
    return base + "../layout/";
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