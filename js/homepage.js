

import { handleClickCourse } from "./handleClick.js";

const showCourse = async () => {
    const [providers, courses] = await Promise.all(
        [
            fetch("http://localhost:3000/providers").then((res) => res.json()), 
            fetch("http://localhost:3000/courses").then((res) => res.json())
        ]
    );
    let show = "";
    const stCoursesHot = courses.sort((a,b) => b.students - a.students);
    stCoursesHot.slice(0,6).map((item)=>{
        const provider = providers.find((p) => p.id == item.provider_id);
        show += `
            <div 
                class="
                    flex flex-col justify-start group relative rounded-[22px]
                    w-[410px] h-auto boder border-[2px] border-[#EAEAEA]
                    transform transition-transform duration-300 ease-in-out
                    hover:shadow-2xl hover:translate-y-[-15px] overflow-hidden
                "
            >
                <!-- Image -->
                    <div class="relative overflow-hidden h-[250px]">
                        <img 
                            src="${item.image_url}" 
                            alt="${item.title}" 
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
                            Khóa học nổi bật
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
                            <p class="text-[14px] font-medium text-gray-400">
                                 ${provider.provider_name}
                            </p>
                        <!-- Title -->
                            <h4 class="text-[20px] pr-[20px] h-[48px] leading-[24px] font-semibold text-[#000000] group-hover:text-[#FF782D] cursor-pointer line-clamp-2">
                            <a 
                                class="btnCourseDetail"
                                data-id="${item.id}"
                            >
                                ${item.course_title}
                            </a>
                            </h4>
                        <!-- Info -->
                            <div class="flex items-center gap-[30px]">
                                <div class="flex  items-center gap-2">
                                    <i class="fa-solid fa-clock text-[#FF782D]"></i>
                                    <p class="text-[16px] font-regular text-[#555555]">${item.duration}</p>
                                </div>
                                <div class="flex items-center gap-2 relative">
                                    <div class="overflow-hidden">
                                        <i class="fa-solid fa-graduation-cap transform scale-x-[-1] text-[#FF782D]"></i>
                                    </div>
                                    <p class="text-[16px] font-regular text-[#555555]">${item.students} Học viên</p>
                                </div>
                            </div>
                        <!-- Line -->
                            <hr class=" border-[1px] border-[#EAEAEA] w-full">
                        <!--  -->
                            <div class="flex items-center justify-between">
                                <div class="text-[18px]">
                                    <span class="text-[#FF782D] font-semibold">
                                        ${ item.price === 0 
                                            ? `<span class="text-green-400 font-semibold">Free</span>` 
                                            : `${Number(item.price).toLocaleString('vi-VN')} VND`
                                        }

                                    </span>
                                </div>
                                <div class="text-[16px] text-black/40 font-regular">
                                    <a  class="btnCourseDetail text-[#000000] hover:text-[#FF782D] hover:underline cursor-pointer" data-id="${item.id}">Chi tiết</a>
                                </div>
                            </div>
                    </div>
            </div>   
        `
    }).join("");
    document.getElementById("boxCourses").innerHTML = show;

    const btnDetail = document.querySelectorAll(".btnCourseDetail");
    btnDetail.forEach(btn => btn.addEventListener("click", handleClickCourse));
}

showCourse();


const apiCategories = "http://localhost:3000/categories";

// Hàm xử lý click riêng
import { handleClickCategory } from "./handleClick.js";


const showCategory = async () => {
    const res = await fetch(apiCategories);
    const data = await res.json();
    const container = document.getElementById("showCate");

    const sort = data.sort((a, b) => b.quantity - a.quantity);

    // Render HTML với data-id
    container.innerHTML = sort.map(c => `
        <button 
            class="cate-btn flex flex-col justify-center items-center gap-[12px] group
            w-[234px] h-[243px] border border-[2px] border-[#EAEAEA] rounded-[20px]
            transform transition-transform duration-300 ease-in-out cursor-pointer
            hover:shadow-2xl hover:translate-y-[-10px]"
            data-id="${c.id}"
        >
            <i class="${c.icon_name} text-[30px] text-[#FF782D] group-hover:scale-110"></i>
            <h4 class="text-[20px] font-semibold text-[#000000] group-hover:text-[#FF782D] text-center">${c.cate_name}</h4>
            <p class="text-[18px] text-[#555555]">${c.quantity} Courses</p>
        </button>
    `).join("");
    // Gắn sự kiện cho tất cả button sau khi render
    document.querySelectorAll(".cate-btn").forEach(btn => {
        btn.addEventListener("click", handleClickCategory);
    });
};

showCategory();


const renderSwiperCourses = async () => {
    const [providers, courses] = await Promise.all(
        [
            fetch("http://localhost:3000/providers").then((res) => res.json()), 
            fetch("http://localhost:3000/courses").then((res) => res.json()),
        ]
    );
    let showSwiper = "";
    const courArr = courses.filter((c) => c.category_id == 1);
    courArr.map((it)=>{
        const provider = providers.find((pv) => Number(pv.id) === Number(it.provider_id));
        showSwiper += `
            <div class="swiper-slide pb-[30px]">
                <div 
                    class="
                        flex flex-col justify-start group relative rounded-[22px]
                        w-full h-auto border border-[2px] border-[#EAEAEA]
                        transform transition-transform duration-300 ease-in-out 
                        hover:border-gray-300 overflow-hidden 
                    "
                >
                    <!-- Image -->
                        <div class="relative overflow-hidden h-auto">
                            <img 
                                src="${it.image_url}" 
                                alt="${it.course_name}" 
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
                                Khóa học web
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
                                        absolute top-[85%] right-1/2 translate-x-1/2 w-[50px] h-[50px] bg-[#FF782D]/70 opacity-0 rounded-full flex 
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
                                <p class="text-[14px] font-medium text-gray-400">
                                    <span class="">${provider ? provider.provider_name : "Không rõ NCC"}</span>
                                </p>
                            <!-- Title -->
                                <h4 class="text-[20px] pr-[20px] leading-[24px] font-semibold text-[#000000] group-hover:text-[#FF782D] line-clamp-2 cursor-pointer">
                                    <a 
                                        class="btnCourseDetail"
                                        data-id="${it.id}"
                                    >
                                        ${it.course_title}
                                    </a>
                                </h4>
                            <!-- Info -->
                                <div class="flex items-center justify-between">
                                    <div class="flex  items-center gap-2">
                                        <i class="fa-solid fa-clock text-[#FF782D]"></i>
                                        <p class="text-[14px] font-regular text-[#555555]">${it.duration}</p>
                                    </div>
                                    <div class="flex items-center gap-2 relative">
                                        <div class="overflow-hidden">
                                            <i class="fa-solid fa-graduation-cap transform scale-x-[-1] text-[#FF782D]"></i>
                                        </div>
                                        <p class="text-[14px] font-regular text-[#555555]">${it.students} Học viên</p>
                                    </div>
                                </div>
                            <!-- Line -->
                                <hr class=" border-[1px] border-[#EAEAEA] w-full">
                            <!--  -->
                                <div class="flex items-center justify-between">
                                    <div class="text-[18px]">
                                        <span class="text-[#FF782D] font-semibold">
                                            ${ it.price === 0 
                                                ? `<span class="text-green-400 font-semibold">Free</span>` 
                                                : `${Number(it.price).toLocaleString('vi-VN')} VND`
                                            }
                                        </span>
                                    </div>
                                    <div class="text-[16px] text-black/40 font-regular">
                                        <a  class="btnCourseDetail text-[#000000] hover:text-[#FF782D] hover:underline cursor-pointer" data-id="${it.id}">Chi tiết</a>
                                    </div>
                                </div>
                        </div>
                </div>
            </div>
        `;
    });
    document.querySelector(".swiper-wrapper").innerHTML = showSwiper;
    const btnDetail = document.querySelectorAll(".btnCourseDetail");
    btnDetail.forEach(btn => btn.addEventListener("click", handleClickCourse));
};

renderSwiperCourses();

// Section Swiper Courses

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    rewind: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".btnNext",
      prevEl: ".btnPrev",
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
    // Fix lỗi prev khi loop
    on: {
      init() {
        console.log("Swiper initialized");
      },
      slideChange() {
        console.log("Slide changed");
      }
    }
  });

  swiper.update();
});


