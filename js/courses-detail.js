
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

