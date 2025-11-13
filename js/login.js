
const showPassword = document.getElementById('showPassword');
const passwordInput = document.getElementById('password');

showPassword.addEventListener('change', function() {
    if(this.checked){
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});

document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) return alert('Vui lòng nhập email và password!');

    try {
        const res = await fetch('http://localhost:3000/users');
        const users = await res.json();

        // Kiểm tra
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            window.location.href = './index.html';
        } else {
            alert('Email hoặc password không đúng!');
        }
    } catch (error) {
        console.error('Lỗi:', error);
        alert('Lỗi trong khi đăng nhập!');
    }
});


