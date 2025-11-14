function getBasePath() {
    const path = window.location.pathname;
    if (path.includes("/page/")) {
        return "/layout/";
    }
    return "layout/";
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
