
// Scroll price Courses

const scrollToCoursePrice = () => {
    const priceCard = document.getElementById("priceCard");
    const heroCard = document.getElementById("priceCardHero");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            heroCard.classList.add("opacity-0");
            heroCard.classList.remove("opacity-100");

            priceCard.classList.remove("pointer-events-none");
            priceCard.classList.add("opacity-100");
        } else {
            heroCard.classList.remove("opacity-0");
            heroCard.classList.add("opacity-100");

            priceCard.classList.remove("opacity-100");
            priceCard.classList.add("pointer-events-none");
        }
    });
}

scrollToCoursePrice();

const initTabs = () => {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    const resetTabs = () => {
        tabs.forEach(t => {
            t.classList.remove('text-[#FF782D]', 'bg-[#F5F5F5]');
            t.classList.add('text-black', 'bg-white', 'border', 'border-2', 'border-gray-200');
        });
    };

    const activateTab = (tab) => {
        tab.classList.remove('text-black', 'bg-white');
        tab.classList.add('text-[#FF782D]', 'bg-[#F5F5F5]', 'border', 'border-2', 'border-gray-200');
    };

    const showContent = (tab) => {
        contents.forEach(c => c.classList.add('hidden'));
        const target = document.querySelector(tab.dataset.target);
        target.classList.remove('hidden');
    };

    const addEvents = () => {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                resetTabs();
                activateTab(tab);
                showContent(tab);
            });
        });
    };

    // Initialize
    addEvents();
    tabs[0].click();
};

// GỌI HÀM
initTabs();

const courArr = [
    {id:1, title:"Create an LMS Website with ThimPress", img:"images/img_pro_cour_feat1.jpg", price:29.0, qua_student:158},
    {id:2, title:"Create an LMS Website with ThimPress", img:"images/img_pro_cour_feat1.jpg", price:29.0, qua_student:290},
    {id:3, title:"Create an LMS Website with ThimPress", img:"images/img_pro_cour_feat1.jpg", price:29.0, qua_student:432},
    {id:4, title:"Create an LMS Website with ThimPress", img:"images/img_pro_cour_feat1.jpg", price:29.0, qua_student:365},
    {id:5, title:"Create an LMS Website with ThimPress", img:"images/img_pro_cour_feat1.jpg", price:29.0, qua_student:150},
    {id:6, title:"Create an LMS Website with ThimPress", img:"images/img_pro_cour_feat1.jpg", price:29.0, qua_student:90},
];

// swiper khóa học liên quan

const showCoursesOfProvider = () => {
  let showCoPrv = "";
  const courFilter = courArr.sort((a, b) => b.qua_student - a.qua_student).slice(0, 3);
  courFilter.map((item)=>{
    showCoPrv += `
         <div 
                class="
                    flex flex-col justify-start group relative rounded-[15px]
                    w-full h-auto border border-[2px] border-[#EAEAEA]
                    transform transition-transform duration-300 ease-in-out
                    hover:shadow-2xl overflow-hidden 
                "
            >
                <!-- Image -->
                    <div class="relative overflow-hidden h-auto">
                        <img 
                            src="${item.img}" 
                            alt="img_category1" 
                            class="
                                w-full h-auto object-fit-cover transform transition-transform duration-300 
                                ease-in-out rounded-t-[10px] group-hover:scale-110
                            " 
                        >
                        <span 
                            class="
                                text-[12px] font-semibold text-[#ffffff] px-[10px] rounded-[8px] py-[5px] absolute top-4 left-4
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
                                    group-hover:opacity-100 group-hover:translate-y-[-120%] z-[30] cursor-pointer hover:scale-110 hover:bg-[#FF782D]
                                    group-hover:
                                ">
                                <i class="fa-solid fa-cart-plus text-[20px]"></i>
                            </a>
                        </div>
                    </div>
                <!-- Content -->
                    <div class="p-[10px] flex flex-col gap-[16px]">
                        <!-- Author -->
                            <p class="text-[16px] font-regular text-[#555555]">
                                by 
                                <span class="text-[#000000] font-regular">
                                    Determined-Poitras
                                </span>
                            </p>
                        <!-- Title -->
                            <h4 class="text-[20px] leading-[24px] font-semibold text-[#000000] group-hover:text-[#FF782D] line-clamp-2">
                            <a 
                                href="/page/user/courses-detail.html"
                                class="" 
                            >
                                ${item.title}
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
                                    <p class="text-[16px] font-regular text-[#555555]">${item.qua_student} Students</p>
                                </div>
                            </div>
                        <!-- Line -->
                            <hr class=" border-[1px] border-[#EAEAEA] w-full">
                        <!--  -->
                            <div class="flex items-center justify-between">
                                <div class="text-[18px]">
                                    <del class="text-[#9D9D9D] font-regular">$${item.price}</del> 
                                    <span class="text-[#55BE24] font-semibold">Free</span>
                                </div>
                                <div class="text-[16px] text-black/40 font-regular">
                                    <a class="text-[#000000] hover:text-[#FF782D] hover:underline" href="#">Chi tiết</a>
                                </div>
                            </div>
                    </div>
            </div>
    `;
  });
  
  document.querySelector(".showCourses").innerHTML = showCoPrv;
};

showCoursesOfProvider();