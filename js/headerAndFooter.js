
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


const showHeader = async () => {
    try {
        const res = await fetch(BASE_URL + "layout/header.html");
        if (!res.ok) throw new Error("Không tải được header");

        const headerHtml = await res.text();
        const headerEl = document.querySelector(".showHeader");
        headerEl.innerHTML = headerHtml;

        fixLinks();

        // Đợi DOM update xong rồi gọi loadUserMenu
        setTimeout(() => {
            if (typeof loadUserMenu === "function") {
                loadUserMenu();
            } else {
                console.warn("Hàm loadUserMenu chưa sẵn sàng");
            }
        }, 0);

        const showCategoryEl = document.getElementById("showCategory");
        if (showCategoryEl) {
            showCategoryEl.innerHTML = await showMenuCategory();
        } else {
            console.warn("#showCategory không tồn tại trong header");
        }

    } catch (err) {
        console.error(err);
    }
};

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


document.addEventListener("DOMContentLoaded", () => {
    const scrollBtn = document.getElementById("scrollTopBtn");
    const contactBtns = document.getElementById("contactBtns");
    const header = document.querySelector(".showHeader");

    let lastScrollY = window.scrollY; // lưu vị trí scroll trước

    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;

        // Scroll down -> ẩn header, scroll-to-top hiện
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.style.transform = "translateY(-100%)"; // ẩn header
        }
        // Scroll up -> hiện header
        else if (currentScrollY < lastScrollY) {
            header.style.transform = "translateY(0)"; // hiện header
        }

        // Hiện/ẩn scroll-to-top
        if (currentScrollY > 400) {
            scrollBtn.classList.remove("opacity-0", "pointer-events-none");
            scrollBtn.classList.add("opacity-100");

            // Dịch container Phone/Zalo lên
            contactBtns.style.transform = "translateY(-50px)";
        } else {
            scrollBtn.classList.add("opacity-0", "pointer-events-none");
            scrollBtn.classList.remove("opacity-100");

            contactBtns.style.transform = "translateY(0)";
        }

        lastScrollY = currentScrollY; // cập nhật vị trí scroll trước
    });

    // Scroll to top
    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});





const showMenuCategory = async () => {
    const res = await fetch("http://localhost:3000/categories");
    const data = await res.json();
    return data.map(cat => `
        <li class="group text-black px-[20px] py-[10px] cursor-pointer transform transition-all ease-in-out duration-300 border-[2px] border-[#ffffff] hover:border-l-[2px] hover:border-l-[#FF782D] hover:bg-[#ffffff] hover:text-[#FF782D] hover:pl-[30px]">
            <a class="text-[16px] font-semibold" href="/page/user/courses-category.html">
                ${cat.cate_name}
            </a>
        </li>
    `).join("");
}



showHeader();
showFooter();