export const handleClickCategory = (e) => {
    const id = e.currentTarget.dataset.id;
    localStorage.setItem("cate_id", id);
    window.location.href = "page/user/courses-category.html";
}
export const handleClickCourse = (e) => {
    const id = e.currentTarget.dataset.id;
    localStorage.setItem("course_id", id);
    window.location.href = "page/user/courses-detail.html";
}


