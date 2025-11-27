
// Hàm lấy base URL động (bao gồm origin và repo name nếu có)
const BASE_URL = (() => {
  const host = window.location.hostname;
  if (host === "localhost" || host === "127.0.0.1") return "/";
  return "/" + window.location.pathname.split("/")[1] + "/";
})();

export const handleClickCategory = (e) => {
    const id = e.currentTarget.dataset.id;
    localStorage.setItem("cate_id", id);
    window.location.href = `${BASE_URL}page/user/courses-category.html`;
};

export const handleClickCourse = (e) => {
    const id = e.currentTarget.dataset.id;
    localStorage.setItem("course_id", id);
    window.location.href = `${BASE_URL}page/user/courses-detail.html`;
};
