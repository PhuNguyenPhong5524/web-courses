const courArr = [
    {id:1, title:"Create an LMS Website with ThimPress", img:"images/img_pro_cour_feat1.jpg", price:29.0},
    {id:2, title:"Create an LMS Website with ThimPress", img:"images/img_pro_cour_feat1.jpg", price:29.0},
    {id:3, title:"Create an LMS Website with ThimPress", img:"images/img_pro_cour_feat1.jpg", price:29.0},
    {id:4, title:"Create an LMS Website with ThimPress", img:"images/img_pro_cour_feat1.jpg", price:29.0},
    {id:5, title:"Create an LMS Website with ThimPress", img:"images/img_pro_cour_feat1.jpg", price:29.0},
    {id:6, title:"Create an LMS Website with ThimPress", img:"images/img_pro_cour_feat1.jpg", price:29.0},
];
const cateArr = [
    {id:1, cate_name:"Phát triển web", icon_name:"fa-solid fa-globe", quantity:38},
    {id:2, cate_name:"Khoa học dữ liệu", icon_name:"fa-solid fa-brain", quantity:38},
    {id:3, cate_name:"Ứng dụng di động", icon_name:"fa-solid fa-mobile-screen-button", quantity:38},
    {id:4, cate_name:"Ngôn ngữ lập trình", icon_name:"fa-solid fa-code", quantity:38},
    {id:5, cate_name:"Phát triển trò chơi", icon_name:"fa-solid fa-gamepad", quantity:38},
    {id:6, cate_name:"Thiết kế & cơ sở dữ liệu", icon_name:"fa-solid fa-palette", quantity:38},
    {id:7, cate_name:"Kiểm tra phần mềm", icon_name:"fa-solid fa-shield-halved", quantity:98},
    {id:8, cate_name:"Kỹ thuật mềm", icon_name:"fa-solid fa-users", quantity:38}
];


const showCourse = () => {
    let show = "";
    for (let id = 0; id < courArr.length; id++) {
        show += `
            <div 
                class="
                    flex flex-col justify-start group relative rounded-[22px]
                    w-[410px] h-auto boder border-[2px] border-[#EAEAEA]
                    transform transition-transform duration-300 ease-in-out
                    hover:shadow-2xl overflow-hidden 
                "
            >
                <!-- Image -->
                    <div class="relative overflow-hidden h-[250px]">
                        <img 
                            src="${courArr[id].img}" 
                            alt="img_category1" 
                            class="
                                w-full h-full object-cover transform transition-transform duration-300 
                                ease-in-out rounded-t-[20px] group-hover:scale-110
                            " 
                        >
                        <span 
                            class="
                                text-[14px] font-semibold text-[#ffffff] px-[10px] rounded-[8px] py-[5px] absolute top-4 left-4
                                bg-[#FF782D] z-[30]
                            "
                        >
                            Khóa học mới
                        </span>
                        <div 
                            class="
                                absolute w-full h-full top-0 left-0 z-[10] opacity-0 transform transition-opacity 
                                duration-300 ease-in-out group-hover:bg-black/50 group-hover:opacity-100
                            "
                        >
                            <a 
                                href="page/user/cart.html"
                                class="
                                    absolute top-[80%] right-1/2 translate-x-1/2 w-[50px] h-[50px] bg-[#FF782D]/70 opacity-0 rounded-full flex 
                                    justify-center items-center text-[#ffffff] transform transition-transform duration-400 ease-in-out 
                                    group-hover:opacity-100 group-hover:translate-y-[-150%] z-[30] cursor-pointer hover:scale-110 hover:bg-[#FF782D]
                                    group-hover:
                                ">
                                <i class="fa-solid fa-cart-plus text-[20px]"></i>
                            </a>
                        </div>
                    </div>
                <!-- Content -->
                    <div class="p-[20px] flex flex-col gap-[16px]">
                        <!-- Author -->
                            <p class="text-[16px] font-regular text-[#555555]">
                                by 
                                <span class="text-[#000000] font-regular">
                                    Determined-Poitras
                                </span>
                            </p>
                        <!-- Title -->
                            <h4 class="text-[20px] pr-[20px] leading-[24px] font-semibold text-[#000000] group-hover:text-[#FF782D] line-clamp-2">
                            <a 
                                href="page/user/courses-detail.html"
                                class="" 
                            >
                                ${courArr[id].title}
                            </a>
                            </h4>
                        <!-- Info -->
                            <div class="flex items-center gap-[30px]">
                                <div class="flex  items-center gap-2">
                                    <i class="fa-solid fa-clock text-[#FF782D]"></i>
                                    <p class="text-[16px] font-regular text-[#555555]">2 weeks</p>
                                </div>
                                <div class="flex items-center gap-2 relative">
                                    <div class="overflow-hidden">
                                        <i class="fa-solid fa-graduation-cap transform scale-x-[-1] text-[#FF782D]"></i>
                                    </div>
                                    <p class="text-[16px] font-regular text-[#555555]">156 Students</p>
                                </div>
                            </div>
                        <!-- Line -->
                            <hr class=" border-[1px] border-[#EAEAEA] w-full">
                        <!--  -->
                            <div class="flex items-center justify-between">
                                <div class="text-[18px]">
                                    <del class="text-[#9D9D9D] font-regular">$${courArr[id].price}</del> 
                                    <span class="text-[#55BE24] font-semibold">Free</span>
                                </div>
                                <div class="text-[16px] text-black/40 font-regular">
                                    <a class="text-[#000000] hover:text-[#FF782D] hover:underline" href="#">Chi tiết</a>
                                </div>
                            </div>
                    </div>
            </div>           
        `
    }
    document.getElementById("boxCourses").innerHTML = show;
}

showCourse();


// Promise.all([
//   fetch('http://localhost:3000/categories').then(r => r.json()),
//   fetch('http://localhost:3000/courses').then(r => r.json())
// ]).then(([categories, courses]) => {
//   const result = categories.map(cate => ({
//     ...cate,
//     courses: courses.filter(c => c.cate_id === cate.category_id)
//   }));

//   console.log(result);
// });



const showCategory = () => {
    let showCate = "";
    const sort = cateArr.sort((a,b) => b.quantity - a.quantity);
    sort.map((c)=>{
        
        showCate += `
            <div 
                class="
                    flex flex-col justify-center items-center gap-[12px] group
                    w-[234px] h-[243px] boder border-[2px] border-[#EAEAEA] rounded-[20px]
                    transform transition-transform duration-300 ease-in-out cursor-pointer
                    hover:shadow-2xl hover:translate-y-[-10px]
                "
            >
                <i 
                    class="
                        ${c.icon_name}
                        text-[30px] text-[#FF782D] transform transition-transform duration-300 
                        ease-in-out group-hover:scale-110
                    "
                ></i>
                <h4 class="text-[20px] font-semibold text-[#000000] group-hover:text-[#FF782D] text-center">${c.cate_name}</h4>
                <p class="text-[18px] font-regular text-[#555555]">${c.quantity} Courses</p>
            </div>
        `
    });
    document.getElementById("showCategory").innerHTML = showCate;
}

showCategory();


const renderSwiperCourses = () => {
  let showSwiper = "";
  for (let id = 0; id < courArr.length; id++) {
    showSwiper += `
        <div class="swiper-slide">
            <div 
                class="
                    flex flex-col justify-start group relative rounded-[22px]
                    w-full h-auto border border-[2px] border-[#EAEAEA]
                    transform transition-transform duration-300 ease-in-out
                    hover:shadow-2xl overflow-hidden 
                "
            >
                <!-- Image -->
                    <div class="relative overflow-hidden h-auto">
                        <img 
                            src="${courArr[id].img}" 
                            alt="img_category1" 
                            class="
                                w-full h-auto object-fit-cover transform transition-transform duration-300 
                                ease-in-out rounded-t-[10px] group-hover:scale-110
                            " 
                        >
                        <span 
                            class="
                                text-[14px] font-semibold text-[#ffffff] px-[10px] rounded-[8px] py-[5px] absolute top-4 left-4
                                bg-[#FF782D] z-[30]
                            "
                        >
                            Khóa học mới
                        </span>
                        <div 
                            class="
                                absolute w-full h-full top-0 left-0 z-[10] opacity-0 transform transition-opacity 
                                duration-300 ease-in-out group-hover:bg-black/50 group-hover:opacity-100
                            "
                        >
                            <a 
                                href="/page/user/cart.html"
                                class="
                                    absolute top-[80%] right-1/2 translate-x-1/2 w-[50px] h-[50px] bg-[#FF782D]/70 opacity-0 rounded-full flex 
                                    justify-center items-center text-[#ffffff] transform transition-transform duration-400 ease-in-out 
                                    group-hover:opacity-100 group-hover:translate-y-[-150%] z-[30] cursor-pointer hover:scale-110 hover:bg-[#FF782D]
                                    group-hover:
                                ">
                                <i class="fa-solid fa-cart-plus text-[20px]"></i>
                            </a>
                        </div>
                    </div>
                <!-- Content -->
                    <div class="p-[20px] flex flex-col gap-[16px]">
                        <!-- Author -->
                            <p class="text-[16px] font-regular text-[#555555]">
                                by 
                                <span class="text-[#000000] font-regular">
                                    Determined-Poitras
                                </span>
                            </p>
                        <!-- Title -->
                            <h4 class="text-[20px] pr-[20px] leading-[24px] font-semibold text-[#000000] group-hover:text-[#FF782D] line-clamp-2">
                            <a 
                                href="/page/user/courses-detail.html"
                                class="" 
                            >
                                ${courArr[id].title}
                            </a>
                            </h4>
                        <!-- Info -->
                            <div class="flex items-center gap-[30px]">
                                <div class="flex  items-center gap-2">
                                    <i class="fa-solid fa-clock text-[#FF782D]"></i>
                                    <p class="text-[16px] font-regular text-[#555555]">2 weeks</p>
                                </div>
                                <div class="flex items-center gap-2 relative">
                                    <div class="overflow-hidden">
                                        <i class="fa-solid fa-graduation-cap transform scale-x-[-1] text-[#FF782D]"></i>
                                    </div>
                                    <p class="text-[16px] font-regular text-[#555555]">156 Students</p>
                                </div>
                            </div>
                        <!-- Line -->
                            <hr class=" border-[1px] border-[#EAEAEA] w-full">
                        <!--  -->
                            <div class="flex items-center justify-between">
                                <div class="text-[18px]">
                                    <del class="text-[#9D9D9D] font-regular">$${courArr[id].price}</del> 
                                    <span class="text-[#55BE24] font-semibold">Free</span>
                                </div>
                                <div class="text-[16px] text-black/40 font-regular">
                                    <a class="text-[#000000] hover:text-[#FF782D] hover:underline" href="#">Chi tiết</a>
                                </div>
                            </div>
                    </div>
            </div>
        </div>
    `;
  }
  document.querySelector(".swiper-wrapper").innerHTML = showSwiper;
};

renderSwiperCourses();

// Section Swiper Courses
const showSwiperCourses = () => {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 4 },
    },
  });
};

document.addEventListener("DOMContentLoaded", showSwiperCourses);



