
const cateArrr = [
    {id:1, cate_name:"Phát triển web", icon_name:"fa-solid fa-globe", quantity:38},
    {id:2, cate_name:"Khoa học dữ liệu", icon_name:"fa-solid fa-brain", quantity:38},
    {id:3, cate_name:"Ứng dụng di động", icon_name:"fa-solid fa-mobile-screen-button", quantity:38},
    {id:4, cate_name:"Ngôn ngữ lập trình", icon_name:"fa-solid fa-code", quantity:38},
    {id:5, cate_name:"Phát triển trò chơi", icon_name:"fa-solid fa-gamepad", quantity:38},
    {id:6, cate_name:"Thiết kế & cơ sở dữ liệu", icon_name:"fa-solid fa-palette", quantity:38},
    {id:7, cate_name:"Kiểm tra phần mềm", icon_name:"fa-solid fa-shield-halved", quantity:98},
    {id:8, cate_name:"Kỹ thuật mềm", icon_name:"fa-solid fa-users", quantity:38} 
];

// Tính BASE_URL
const BASE_URL = (() => {
  const host = window.location.hostname;
  if (host === "localhost" || host === "127.0.0.1") return "/";
  return "/" + window.location.pathname.split("/")[1] + "/";
})();

// Hàm fix link cho bất kỳ thẻ nào có attribute 'src' hoặc 'href'
function fixLinks() {
  const ATTRS = ["href", "src"];
  ATTRS.forEach(attr => {
    document.querySelectorAll(`[${attr}]`).forEach(el => {
      const val = el.getAttribute(attr);
      if (val && !val.startsWith("http") && !val.startsWith("#") && !val.startsWith(BASE_URL)) {
        el.setAttribute(attr, BASE_URL + val.replace(/^\/?/, ""));
      }
    });
  });
}

// Load Header
async function showHeader() {
    try {
        const res = await fetch(BASE_URL + "layout/header.html");
        if (!res.ok) throw new Error("Không tải được header");
        const headerHtml = await res.text();
        document.querySelector(".showHeader").innerHTML = headerHtml;
        if (typeof loadUserMenu === "function") {
            loadUserMenu();
        }
        fixLinks();
        // ---- Gọi showMenuCategory sau khi #showCategory đã tồn tại ----
        if(document.getElementById("showCategory")) {
            document.getElementById("showCategory").innerHTML = showMenuCategory();
        }
    } catch (err) {
        console.error(err);
    }
}

// Load Footer
async function showFooter() {
    try {
        const res = await fetch(BASE_URL + "layout/footer.html");
        if (!res.ok) throw new Error("Không tải được footer");
        const footerHtml = await res.text();
        document.querySelector(".showFooter").innerHTML = footerHtml;
        fixLinks();
    } catch (err) {
        console.error(err);
    }
}



const showMenuCategory = () => {
    return cateArrr.map(cat => `
        <li class="group text-black px-[20px] py-[10px] cursor-pointer transform transition-all ease-in-out duration-300 border-[2px] border-[#ffffff] hover:border-l-[2px] hover:border-l-[#FF782D] hover:bg-[#ffffff] hover:text-[#FF782D] hover:pl-[30px]">
            <a class="text-[16px] font-semibold" href="${getBaseURL()}page/user/courses-category.html">
                ${cat.cate_name}
            </a>
        </li>
    `).join("");
}


showHeader();
showFooter();