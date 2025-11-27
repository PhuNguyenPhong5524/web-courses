

// Lấy giỏ hàng
export const getCart = () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

// Thêm vào giỏ hàng
export const addToCart = (course) => {
    const cart = getCart();
    if (!cart.some(c => c.id === course.id)) {
        cart.push(course);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Đã thêm vào giỏ hàng!");
    } else {
        alert("Khóa học đã có trong giỏ hàng!");
    }
}

// Xóa khỏi giỏ hàng
export const removeCartItem = (id) => {
    let cart = getCart();
    cart = cart.filter(c => c.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Xóa sạch giỏ hàng
export const clearCart = () => {
    localStorage.removeItem("cart");
}
