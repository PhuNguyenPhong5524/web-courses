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
  if (user && user.id !== undefined && user.id !== null) {
    avatar.innerHTML = `
      <img src="https://i.pinimg.com/1200x/b3/c2/77/b3c2779d6b6195793b72bf73e284b3e8.jpg" 
           class="w-[30px] h-[30px] rounded-full" 
      />
    `;

    userMenu.innerHTML = `
      <li 
        class="
          text-black px-3 py-2 cursor-pointer
          transition-all duration-300 ease-in-out group
          text-[16px] font-semibold 
        "
      >
        <a 
          href="/page/user/profile.html"
          class="flex items-center gap-2"
        >
          <div class="flex items-center gap-2 pt-1">
            <img src="https://i.pinimg.com/1200x/b3/c2/77/b3c2779d6b6195793b72bf73e284b3e8.jpg" 
                 class="w-[30px] h-[30px] rounded-full object-cover" 
            />
          </div>
          <div class="flex flex-col leading-[20px]">
            <span class="text-[#000000] transform transition duration-300 ease-in-out hover:text-[#FF782D] text-[16px] font-semibold">${user.name}</span>
            <span class="text-gray-300 text-[12px] font-regular ">${user.email}</span>
          </div>
        </a>
      </li>
      <li class="my-1"><div class="h-[1px] bg-[#EAEAEA]"></div></li>
      <li class="${menuItemClass}">
        <a><i class="fa-solid fa-key"></i> Đổi mật khẩu</a>
      </li>

      <li class="${menuItemClass}">
        <div class="flex items-center justify-between gap-2">
          <a><i class="fa-solid fa-bell"></i> Thông báo</a>
          <span class="bg-red-500 w-[20px] h-[20px] rounded-full flex items-center justify-center text-white text-[12px]">0</span>
        </div>
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
        <a href="./register.html">Đăng ký</a>
      </li>
    `;
  }
}

loadUserMenu();