const api = "http://localhost:3000/providers";
const user = "http://localhost:3000/users";
const registerProvi = async (e) =>{
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const career = document.getElementById("career").value.trim();
    const email = document.getElementById("email").value.trim();
    const imageFiles = document.getElementById("image").files;
    const imagePaths = Array.from(imageFiles).map(f => `images/${f.name}`);
    const res = await fetch(api);
    const data = await res.json();
    const newID = data.length? data[data.length - 1].id + 1 : 0;
    const user = JSON.parse(localStorage.getItem("user"));
    // ⚡ Dữ liệu gửi lên
    const newProvider = {
        id: newID,
        user_id: Number(user.id),
        provider_name: name,
        career,
        email,
        images: imagePaths,
        status: "pending"  // 
    };

    // Gửi dữ liệu lên JSON Server
    const postRes = await fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProvider)
    });
    document.getElementById("mss").textContent = postRes.ok ? "✅ Đăng ký thành công!" : "❌ Lỗi!";
    
    e.target.reset();
    showProviders();
}

document.getElementById("providerForm").addEventListener("submit", registerProvi);  

const providerList = document.getElementById("providerList");
const showProviders = async () => {
    const res = await fetch(api);
    const data = await res.json();
    providerList.innerHTML = "";

    data.slice(0,2).map(provider => {
        providerList.innerHTML += `
            <div class="provider">
                ${provider.images.map(img => `
                    <img src="${img}" alt="${provider.name}" />
                `).join("")}
                <h3>${provider.provider_name}</h3>
                <p>${provider.career}</p>
                <p>${provider.email}</p>
                <p>${provider.status}</p>
            </div>
        `
    })
}

showProviders();