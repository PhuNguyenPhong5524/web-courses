// function getBasePath() {
//     const pathParts = window.location.pathname.split("/");
//     const repoName = pathParts[1]; // tên repo
//     return `/${repoName}/layout/`;
// }

// async function showHeader() {
//     const res = await fetch(getBasePath() + "header.html");
//     const headerHtml = await res.text();
//     document.querySelector(".showHeader").innerHTML = headerHtml;
// }

// async function showFooter() {
//     const res = await fetch(getBasePath() + "footer.html");
//     const footerHtml = await res.text();
//     document.querySelector(".showFooter").innerHTML = footerHtml;
// }

// showHeader();
// showFooter();




function getBaseURL() {
    const hostname = window.location.hostname;

    // Nếu chạy local (127.0.0.1 hoặc localhost)
    if (hostname === "127.0.0.1" || hostname === "localhost") {
        return "/"; // Gốc là root của Live Server
    }

    // Nếu chạy GitHub Pages
    const repoName = window.location.pathname.split("/")[1]; // lấy tên repo
    return "/" + repoName + "/";
}

const BASE_URL = getBaseURL();


// Hàm sửa tất cả link trong header/footer
    function fixLinks() {
        document.querySelectorAll("a").forEach(link => {
            const href = link.getAttribute("href");
            if (href && !href.startsWith("http") && !href.startsWith("#")) {
                link.setAttribute("href", BASE_URL + href.replace(/^\//, ""));
            }
        });
    }


async function showHeader() {
    try {
        const res = await fetch(BASE_URL + "layout/header.html");
        if (!res.ok) throw new Error("Không tải được header");
        const headerHtml = await res.text();
        document.querySelector(".showHeader").innerHTML = headerHtml;
        fixLinks(); // Sửa tất cả link sau khi tải header
    } catch (err) {
        console.error(err);
    }
}

async function showFooter() {
    try {
        const res = await fetch(BASE_URL + "layout/footer.html");
        if (!res.ok) throw new Error("Không tải được footer");
        const footerHtml = await res.text();
        document.querySelector(".showFooter").innerHTML = footerHtml;
        fixLinks(); // Sửa tất cả link sau khi tải footer   
    } catch (err) {
        console.error(err);
    }
}

showHeader();
showFooter();