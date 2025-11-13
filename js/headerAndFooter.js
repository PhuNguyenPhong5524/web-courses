// Header
async function showHeader() {
    const res = await fetch("./layout/header.html");
    const headerHtml = await res.text();
    document.querySelector(".showHeader").innerHTML = headerHtml;
}
showHeader();

// Footer
async function showFooter() {
    const res = await fetch("./layout/footer.html");
    const footerHtml = await res.text();
    document.querySelector(".showFooter").innerHTML = footerHtml;
}
showFooter();
