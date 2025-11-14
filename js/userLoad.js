function loadUserMenu() {
  const avatar = document.getElementById("avatar");
  const userMenu = document.getElementById("userMenu");
  const user = JSON.parse(localStorage.getItem("user"));

  if (!avatar || !userMenu) return;   
  const menuItemClass = `
      text-black px-3 py-2 border-l-2 border-l-[#ffffff] cursor-pointer
      transition-all duration-300 ease-in-out
      hover:border-[#FFAC2D] hover:bg-white hover:text-[#FF782D] hover:pl-5
      text-[16px] font-semibold
      whitespace-nowrap overflow-hidden
  `;


  avatar.innerHTML = "";
  userMenu.innerHTML = "";

  // Nếu đã đăng nhập
  if (user?.id) {
    avatar.innerHTML = `
      <img src="/images/avatar.jpg" 
           class="w-[30px] h-[30px] rounded-full object-cover" />
    `;

    userMenu.innerHTML = `
      <li class="${menuItemClass}">
        <a><i class="fa-regular fa-user"></i> ${user.name}</a>
      </li>

      <li class="${menuItemClass}">
        <a><i class="fa-solid fa-key"></i> Đổi mật khẩu</a>
      </li>

      <li class="${menuItemClass}">
        <a><i class="fa-solid fa-bell"></i> Thông báo</a>
      </li>

      <li class="my-1"><div class="h-[1px] bg-[#EAEAEA]"></div></li>

      <li id="logout" class="${menuItemClass}">
        <i class="fa-solid fa-right-from-bracket"></i> Đăng xuất
      </li>
    `;

    document.querySelector("#logout")?.addEventListener("click", () => {
      localStorage.removeItem("user");
      location.reload();
    });
  }

  // Nếu chưa đăng nhập
  else {
    avatar.innerHTML = `<i class="fa-solid fa-user"></i>`;

    userMenu.innerHTML = `
      <li class="${menuItemClass}">
        <a href="./login.html">Đăng nhập</a>
      </li>

      <li class="${menuItemClass}">
        <a href="#">Đăng ký</a>
      </li>
    `;
  }
}
