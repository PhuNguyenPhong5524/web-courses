

window.onload = () => {
  const avatar = document.getElementById("avatar");
  const userMenu = document.getElementById("userMenu");
  const user = JSON.parse(localStorage.getItem("user"));

  // Reset avatar and user menu   
  avatar.innerHTML = "";
  userMenu.innerHTML = "";

  if (user && user.id) {

    avatar.innerHTML = `
      <img class="w-[30px] h-[30px] rounded-full" src="./images/avatar.jpg" alt="" />
    `;

    userMenu.innerHTML = `
      <li class="text-black px-[10px] py-[10px] border-l-[2px] hover:border-[#FFAC2D] hover:bg-[#fff] hover:text-[#FF782D] hover:pl-[20px] cursor-pointer">
        <a class="text-[16px] font-semibold"><i class="fa-regular fa-user"></i> <span>${user.name}</span></a>
      </li>
      <li class="text-black px-[10px] py-[10px] border-l-[2px] hover:border-[#FFAC2D] hover:bg-[#fff] hover:text-[#FF782D] hover:pl-[20px] cursor-pointer">
        <a class="text-[16px] font-semibold"><i class="fa-solid fa-key"></i> Đổi mật khẩu</a>
      </li>
      <li class="text-black px-[10px] py-[10px] border-l-[2px] hover:border-[#FFAC2D] hover:bg-[#fff] hover:text-[#FF782D] hover:pl-[20px] cursor-pointer">
        <a class="text-[16px] font-semibold"><i class="fa-solid fa-bell"></i> Thông báo</a>
      </li>
      <li class="px-[10px] py-[10px]"><div class="h-[1px] bg-[#EAEAEA]"></div></li>
      <li id="logout" class="text-black px-[10px] py-[10px] border-l-[2px] hover:border-[#FFAC2D] hover:bg-[#fff] hover:text-[#FF782D] hover:pl-[20px] text-[16px] font-semibold cursor-pointer">
        <i class="fa-solid fa-right-from-bracket"></i> Đăng xuất
      </li>
    `;

    // Đăng xuất 
    const logout = document.getElementById("logout");
    logout.addEventListener("click", () => {
      localStorage.removeItem("user");
      location.reload(); // reload nhanh 
    });

  } else {
    // Chưa đăng nhập
    avatar.innerHTML = `
      <i class="fa-solid fa-user"></i>
    `;

    userMenu.innerHTML = `
      <li class="text-black px-[20px] py-[10px] border-l-[2px] hover:border-[#FFAC2D] hover:bg-[#fff] hover:text-[#FF782D] hover:pl-[30px]">
        <a class="text-[16px] font-semibold" href="./login.html">Đăng Nhập</a>
      </li>
      <li class="text-black px-[20px] py-[10px] border-l-[2px] hover:border-[#FFAC2D] hover:bg-[#fff] hover:text-[#FF782D] hover:pl-[30px]">
        <a class="text-[16px] font-semibold" href="#">Đăng Ký</a>
      </li>
    `;
  }
};


