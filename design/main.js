 let currentSlide = 0;
    const images = [
      "../images/image-product-1.jpg",
      "../images/image-product-2.jpg",
      "../images/image-product-3.jpg",
      "../images/image-product-4.jpg"
    ];

  

    function changeSlide(n) {
      currentSlide = (currentSlide + n + images.length) % images.length;
      showSlide(currentSlide);
    }

    function setSlide(n) {
      currentSlide = n;
      showSlide(currentSlide);
    }

    function showSlide(n) {
      document.getElementById("mainImage").src = images[n];
      document.querySelectorAll(".thumbnails img").forEach((thumb, i) => {
        thumb.classList.toggle("active", i === n);
      });
}
    
let cartCount = 0;
const cartCountEl = document.getElementById("cartCount");
const quantityInput = document.getElementById("quantity");
const cartItemsEl = document.getElementById("cartItems");

// Cart box elements
const cartBtn = document.getElementById("cartBtn");
const cartBox = document.getElementById("cartBox");
const clseBtn = document.querySelector(".close");

// Store cart items
let cartItems = [];

// Increment quantity
document.getElementById("increment").addEventListener("click", () => {
  let value = parseInt(quantityInput.value);
  quantityInput.value = value + 1;
});

// Decrement quantity
document.getElementById("decrement").addEventListener("click", () => {
  let value = parseInt(quantityInput.value);
  if (value > 1) {
    quantityInput.value = value - 1;
  }
});

// Add to Cart
document.getElementById("addToCart").addEventListener("click", () => {
  let value = parseInt(quantityInput.value);
  cartCount += value;
  cartCountEl.textContent = cartCount;

  // Add item to cart list
  cartItems.push({ name: "Cool Product", qty: value });
  renderCart();

  quantityInput.value = 1; // reset
});

// Render Cart Items
function renderCart() {
  cartItemsEl.innerHTML = "";
  cartItems.forEach((item, index) => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - Qty: ${item.qty}`;
    cartItemsEl.appendChild(li);
  });
}

// Open cart box
cartBtn.addEventListener("click", () => {
  cartBox.style.display = "flex";
});

// Close cart box
clseBtn.addEventListener("click", () => {
  cartBox.style.display = "none";
});

// Close when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === cartBox) {
    cartBox.style.display = "none";
  }
});



const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  sidebar.classList.add("show");
  overlay.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show");
  overlay.classList.remove("show");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("show");
  overlay.classList.remove("show");
});
