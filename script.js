const searchInput = document.querySelector(".search-input");
const boxes = document.querySelectorAll(".box");

searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();

    boxes.forEach(box => {
        const title = box.querySelector("h2").textContent.toLowerCase();

        if (title.includes(searchText)) {
            box.style.display = "";
        } else {
            box.style.display = "none";
        }
    });
});

// Back To Top
const backToTop = document.querySelector(".foot-panel1");

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Amazon India Link
const amazonIndiaLink = document.querySelector(".hero-message a");

amazonIndiaLink.addEventListener("click", () => {
    window.open("https://www.amazon.in", "_blank");
});

// Cart Click
const cart = document.querySelector(".nav-cart");

cart.addEventListener("click", () => {
    alert("Your cart is empty.");
});

// Product Click
boxes.forEach(box => {
    box.addEventListener("click", () => {
        const productName = box.querySelector("h2").textContent;
        alert(productName + " selected");
    });
});