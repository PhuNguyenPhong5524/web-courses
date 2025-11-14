function getBasePath() {
    const path = window.location.pathname;
    const segments = path.split("/").filter(Boolean); // bỏ phần rỗng
    const depth = segments.length - 1; // bỏ tên file
    return depth === 0 ? "layout/" : "../".repeat(depth) + "layout/";
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