// Toggle password
document.getElementById("togglePass").addEventListener("click", () => {
    const pass = document.getElementById("password");
    pass.type = pass.type === "password" ? "text" : "password";
});

// Toggle confirm password
document.getElementById("toggleConfirmPass").addEventListener("click", () => {
    const pass = document.getElementById("confirm_password");
    pass.type = pass.type === "password" ? "text" : "password";
});


// Register
document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
        const email = document.getElementById("email").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const confirm = document.getElementById("confirm_password").value;

        if (password !== confirm) {
            alert("Mật khẩu xác nhận không khớp!");
            return;
        }

        // Lấy tất cả user hiện có
        const res = await fetch("http://localhost:3000/users");
        if (!res.ok) throw new Error("Không lấy được danh sách người dùng");
        const users = await res.json();

        // Tạo ID tự tăng an toàn
        const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;

        const newUser = {
            id: newId,
            email,
            username,
            password,
            role: "customer"
        };

        // Thêm user mới
        const response = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser)
        });

        if (response.ok) {
            // Lưu thông báo vào localStorage
                localStorage.setItem("showToast", "true");

            // Chuyển sang trang login
                window.location.href = "login.html";
        } else {
            alert("Đăng ký thất bại! Vui lòng thử lại.");
        }
        

    } catch (error) {
        console.error(error);
        alert(error.message);
    }
});

