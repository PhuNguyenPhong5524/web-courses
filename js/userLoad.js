

window.onload = () => {
  const avatar = document.getElementById("avatar");
  const userMenu = document.getElementById("userMenu");
  const user = JSON.parse(localStorage.getItem("user"));

  // Nếu có user => đã đăng nhập
  if (user && user.id) {
    avatar.innerHTML =`
        <img class="w-[30px] h-[30px] rounded-full" src="images/avatar.jpg" alt="" />
    `
    userMenu.innerHTML += `
        <li 
            class="
            text-black px-[10px] py-[10px] transform transition-all ease-in-out duration-300 
            border-l-[2px] border-[#ffffff] hover:border-l-[2px] hover:border-[#FFAC2D] 
            hover:bg-[#ffffff] hover:text-[#FF782D] hover:pl-[20px] cursor-pointer
        ">
            <a class="text-[16px] font-semibold line-clamp-1" href="#">
                <i class="fa-regular fa-user"></i> <span class="userName">${user.name}</span>
            </a>
        </li>
        <li 
            class="
            text-black px-[10px] py-[10px] transform transition-all ease-in-out duration-300 
            border-l-[2px] border-[#ffffff] hover:border-l-[2px] hover:border-[#FFAC2D] 
            hover:bg-[#ffffff] hover:text-[#FF782D] hover:pl-[20px] cursor-pointer
        ">
            <a class="text-[16px] font-semibold" href="#">
                <i class="fa-solid fa-key"></i> Đổi mật khẩu
            </a>
        </li>
        <li 
            class="
            text-black px-[10px] py-[10px] transform transition-all ease-in-out duration-300 
            border-l-[2px] border-[#ffffff] hover:border-l-[2px] hover:border-[#FFAC2D] 
            hover:bg-[#ffffff] hover:text-[#FF782D] hover:pl-[20px] cursor-pointer
        ">
            <a class="text-[16px] font-semibold" href="#">
                <i class="fa-solid fa-bell"></i> Thống báo
            </a>
        </li>
        <li 
            class="
            text-black px-[10px] py-[10px]
        ">
            <div class="h-[1px] bg-[#EAEAEA]"></div>
        </li>
        <li 
            id="logout"
            class="
            text-black px-[10px] py-[10px] transform transition-all ease-in-out duration-300 
            border-l-[2px] border-[#ffffff] hover:border-l-[2px] hover:border-[#FFAC2D] 
            hover:bg-[#ffffff] hover:bg-[#ffffff] hover:text-[#FF782D] hover:pl-[20px] text-[16px] font-semibold
        ">
            
            <i class="fa-solid fa-right-from-bracket"></i> Đăng xuất
        </li>
    `;

    // Gán sự kiện đăng xuất
    const logout = document.getElementById("logout");
        if (logout) {
        logout.addEventListener("click", () => {
            localStorage.removeItem("user");
            location.reload();
        });
    }

  } else {
    avatar.innerHTML +=`
        <i class="fa-solid fa-user"></i>
    `
    userMenu.innerHTML += `
        <li 
            class="
            text-black px-[20px] py-[10px] transform transition-all ease-in-out duration-300 
            border-l-[2px] border-[#ffffff] hover:border-l-[2px] hover:border-[#FFAC2D] 
            hover:bg-[#ffffff] hover:text-[#FF782D] hover:pl-[30px]
        ">
            <a class="text-[16px] font-semibold " href="/login.html">
                Đăng Nhập
            </a>
        </li>
        <li 
            class="
            text-black px-[20px] py-[10px] transform transition-all ease-in-out duration-300 
            border-l-[2px] border-[#ffffff] hover:border-l-[2px] hover:border-[#FFAC2D] 
            hover:bg-[#ffffff] hover:text-[#FF782D] hover:pl-[30px]
        ">
            <a class="text-[16px] font-semibold " href="#">
                Đăng Ký
            </a>
        </li>
    `;
  }
};


