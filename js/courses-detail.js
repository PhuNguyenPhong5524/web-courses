
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

// Stop video when change click

const modal = document.getElementById('default-modal');
const iframe = modal.querySelector('iframe');

document.addEventListener('click', (e) => {
    // Nếu click ra ngoài modal hoặc nút đóng
    if (e.target === modal) {
        modal.classList.add('hidden'); // Ẩn modal
        iframe.src = iframe.src; // Reset src => dừng video
    }
});


const showCourseDetail = async () => {
    const res = await fetch("http://localhost:3000/courses");
    const data = await res.json();
    const coursesId = localStorage.getItem("course_id");
    return data.find((item) => item.id == coursesId); // trả về 1 object 
}

// Hiển thị đường dẫn 
const showPath = async () => {
    const res = await fetch("http://localhost:3000/categories");
    const data = await res.json();
    const course = await showCourseDetail(); // đổi tên để tránh trùng

    // Tìm category của course
    const currentCate = data.find((cate) => cate.id === Number(course.category_id));

    if(currentCate){
    document.querySelector(".currentCate").innerHTML = currentCate.cate_name;
    } else {
        document.querySelector(".currentCate").innerHTML = "Không tìm thấy danh mục";
    }

    document.querySelector(".currentTitle").innerHTML = course.course_title || "Chưa có tiêu đề";

}

showPath();

// Hiển thị tab Tổng quan bài học
const showTabOverView = async () => {
    const listCourses = await showCourseDetail();
    let tabOverView = "";
    listCourses.overview.map((ov)=>{
        tabOverView += `
            <p class="py-1 flex gap-2">
                <i class="fa-solid fa-check text-gray-400 pr-2 mt-[10px]"></i> 
                <span>${ov.overview_name}</span> 
            </p>
        `;
    });
    document.querySelector(".showOverView").innerHTML = tabOverView;
}

showTabOverView();

// Hiển thị tab Mô tả 

const showTabDescription = async () => {
    const item = await showCourseDetail();
    document.getElementById("description").innerHTML = `
        <p class="py-1 flex gap-2">
            - <span>${item.description}</span> 
        </p>
    `;
        
     
}
showTabDescription();

// Hiển thị tab Yêu cầu học viên
const showTabRequest = async () => {
    const listCourses = await showCourseDetail();
    let tabReQuest = "";
    listCourses.request.map((rq)=>{
        tabReQuest += `
            <li>
                <span>${rq.request_name}.</span>
            </li>
        `;
    });
    document.querySelector(".showReQuest").innerHTML = tabReQuest;
}

showTabRequest();



const showCoursesOfProvider = async () => {
  const [providers, courses] = await Promise.all(
    [
        fetch("http://localhost:3000/providers").then((res) => res.json()), 
        fetch("http://localhost:3000/courses").then((res) => res.json())
    ]
  );
  const currentCourses = await showCourseDetail();
  // Lây ra nhà cung cấp của khóa học   
  const provider = providers.find((item) => item.id == currentCourses.provider_id);
  if(provider){
    document.querySelector(".nameProvider").innerHTML = provider.provider_name + ".";
  }
  let showCoPrv = "";

  const courFilter = courses.
        filter((item) => item.provider_id == currentCourses.provider_id && item.id != currentCourses.id).
        sort((a, b) => b.students - a.students).
        slice(0, 4);
  if(courFilter.length == 0){
    document.querySelector(".textContent").innerHTML = `
        <p class="text-center text-[16px] font-semibold text-gray-300 py-[50px] border border-dashed border-gray-300 rounded-[10px]">Chưa có khóa học liên quan</p>
    `
  }
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
                            src="${item.image_url}" 
                            alt="${item.title}" 
                            class="
                                w-full h-auto object-fit-cover transform transition-transform duration-300 
                                ease-in-out rounded-t-[10px] group-hover:scale-110
                            " 
                        >
                        <span 
                            class="
                                text-[10px] font-semibold text-[#ffffff] px-[10px] rounded-[8px] py-[5px] absolute top-3 left-2
                                bg-[#FF782D] z-[30]
                            "
                        >
                            Khóa học liên quan
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
                            <p class="text-[14px] font-medium text-gray-400">
                                 ${provider.provider_name}
                            </p>
                        <!-- Title -->
                            <h4 class="text-[20px] h-[48px] leading-[24px] font-semibold text-[#000000] group-hover:text-[#FF782D] line-clamp-2">
                            <a 
                                href="/page/user/courses-detail.html"
                                class="" 
                            >
                                ${item.course_title}
                            </a>
                            </h4>
                        <!-- Info -->
                            <div class="flex items-center justify-between ">
                                <div class="flex  items-center gap-2">
                                    <i class="fa-solid fa-clock text-[#FF782D]"></i>
                                    <p class="text-[14px] font-regular text-[#555555]">2 weeks</p>
                                </div>
                                <div class="flex items-center gap-2 relative">
                                    <div class="overflow-hidden">
                                        <i class="fa-solid fa-graduation-cap transform scale-x-[-1] text-[#FF782D]"></i>
                                    </div>
                                    <p class="text-[14px] font-regular text-[#555555]">${item.students} Students</p>
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