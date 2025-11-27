
// swiper khóa học liên quan

const showCoursesCat = async () => {
  const res = await fetch("http://localhost:3000/courses");
  const data = await res.json();
  const categoryId = Number(localStorage.getItem("cate_id"));
  const list = data.filter(item => item.category_id === categoryId); 
  let showCoPrv = "";

  list.map((item)=>{
    showCoPrv += `
         <div 
                class="
                    boxContent
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
                            alt="img_category1" 
                            class="
                                imgCourses
                                w-full h-auto object-fit-cover transform transition-transform duration-300 
                                ease-in-out rounded-t-[10px] group-hover:scale-110
                            " 
                        >
                        <div 
                            class="
                                absolute w-full h-full top-0 left-0 z-[10] opacity-0 transform transition-opacity 
                                duration-300 ease-in-out group-hover:bg-black/50 group-hover:opacity-100
                            "
                        >
                            <a 
                                href="/page/user/cart.html"
                                class="
                                    absolute top-[75%] translate-y-[50%] right-1/2 translate-x-1/2 w-[50px] h-[50px] bg-[#FF782D]/70 opacity-0 rounded-full flex 
                                    justify-center items-center text-[#ffffff] transform transition-transform duration-400 ease-in-out 
                                    group-hover:opacity-100 group-hover:translate-y-[-120%] z-[30] cursor-pointer hover:scale-110 hover:bg-[#FF782D]
                                    group-hover:
                                ">
                                <i class="fa-solid fa-cart-plus text-[20px]"></i>
                            </a>
                        </div>
                    </div>
                <!-- Content -->
                    <div class="p-[10px] flex flex-col gap-[16px] w-full">
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
                                ${item.course_title}
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
                                <div class="text-[18px] text-[#FF782D] font-semibold">
                                     ${ item.price === 0 
                                            ? `<span class="text-green-400 font-semibold">Free</span>` 
                                            : `${Number(item.price).toLocaleString('vi-VN')} VND`
                                        }
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

showCoursesCat();

// Click hiển thị sản phẩm theo dạng danh sách và dạng grid


const btnListView = document.querySelector('.btnListView');
const btnGridView = document.querySelector('.btnGridView');
const showCourses = document.querySelector('.showCourses');
const boxContent = document.querySelectorAll('.boxContent');
const imgCourses = document.querySelectorAll('.imgCourses');

// Hàm đổi layout
function changeBtnLayout(type) {
  if (type === 'list') {
    showCourses.classList.remove('grid', 'grid-cols-3', 'gap-4');
    showCourses.classList.add('flex', 'flex-col', 'gap-4');
    
    // Từng card đổi sang dạng hàng ngang
        boxContent.forEach(item => {
            item.classList.remove('flex-col');
            item.classList.add('flex', 'flex-row', 'gap-0');
        });
    
    // thay đổi kích thước hình ảnh 
        imgCourses.forEach(item => {
            item.classList.remove('w-full', 'rounded-t-[10px]');
            item.classList.add('w-[500px]','rounded-tl-[10px]','rounded-bl-[10px]');
        });
    // Active nút List
    btnListView.classList.add('text-[#FF782D]', 'text-black');
    btnListView.classList.remove('text-black', 'text-black');

    // Reset nút Grid
    btnGridView.classList.add('text-black', 'text-black');
    btnGridView.classList.remove('text-[#FF782D]', 'text-black');
  } else {
    showCourses.classList.remove('flex', 'flex-col', 'gap-4');
    showCourses.classList.add('grid', 'grid-cols-3', 'gap-4');

    // Từng card đổi sang dạng ngang
        boxContent.forEach(item => {
            item.classList.remove('flex', 'flex-row', 'gap-0');
            item.classList.add('flex-col');
        });

    // thay đổi kích thước hình ảnh 
        imgCourses.forEach(item => {
            item.classList.remove('w-[400px]','rounded-tl-[10px]','rounded-bl-[10px]');
            item.classList.add('w-full', 'rounded-t-[10px]');
        });
        
    // Active nút Grid
    btnGridView.classList.add('text-[#FF782D]', 'text-black');
    btnGridView.classList.remove('text-black', 'text-black');

    // Reset nút List
    btnListView.classList.add('text-black', 'text-black');
    btnListView.classList.remove('text-[#FF782D]', 'text-black');
  }
}

// Gán sự kiện click
btnListView.addEventListener('click', () => changeBtnLayout('list'));
btnGridView.addEventListener('click', () => changeBtnLayout('grid'));

// Active mặc định: List View
changeBtnLayout('list');



