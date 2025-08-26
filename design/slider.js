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
    
