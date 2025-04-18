// Smooth scrolling for navbar links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});
// Nav-bar Transparent
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});





document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("customModal");
    const modalImg = document.getElementById("modalImage");
    const closeModal = document.getElementById("closeModal");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const imageCounter = document.getElementById("imageCounter");
  
    // Mer fotot nga galeria + albumi
    const images = [
      "assets/icons/fatilogo1.png",
      "assets/images/01.jpeg",
      "assets/images/02.jpeg",
      "assets/images/03.jpeg",
      "assets/images/04.jpeg",
      "assets/images/05.jpeg",
      "assets/images/P1.jpeg",
      "assets/images/P2.jpeg",
      "assets/images/P3.jpeg",
      "assets/images/P4.jpeg",
      "assets/images/P5.jpeg",
      "assets/images/P6.jpeg",
      "assets/images/P7.jpeg",
      "assets/images/P8.jpeg",
      "assets/images/P9.jpeg",
      "assets/images/P10.jpeg",
      "assets/images/P11.jpeg",
      "assets/images/P12.jpeg",
      "assets/images/P13.jpeg",
      "assets/images/P14.jpeg",
      "assets/images/P15.png",
      "assets/images/P16.png",
      "assets/images/P17.png"
      // Shto këtu edhe më shumë nëse do
    ];
  
    let currentIndex = 0;
  
    function showImage(index) {
      modal.style.display = "block";
      modalImg.src = images[index];
      imageCounter.textContent = `${index + 1} / ${images.length}`;
    }
  
    function closeModalFunc() {
      modal.style.display = "none";
    }
  
    function showPrevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }
  
    function showNextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }
  
    // EVENTET
    closeModal.addEventListener("click", closeModalFunc);
    prevBtn.addEventListener("click", showPrevImage);
    nextBtn.addEventListener("click", showNextImage);
  
    // Kliko mbi fotot në galeri
    document.querySelectorAll(".gallery-img").forEach((img, index) => {
      img.addEventListener("click", () => {
        currentIndex = index;
        showImage(currentIndex);
      });
    });
  
    // Kliko mbi fotot në album (stack)
    document.querySelectorAll(".album-img").forEach((img, index) => {
      img.addEventListener("click", () => {
        currentIndex = index + 5; // sepse galeria ka 5 foto
        showImage(currentIndex);
      });
    });
  
});

// Kur klikoj mbi stack-un, hapet albumi në modal (jo direkt modal i madh)
document.getElementById("openStackModal").addEventListener("click", () => {
    const modalEl = document.getElementById("stackAlbumModal");
    modalEl.classList.add("show");
    modalEl.style.display = "block";
    document.body.classList.add("modal-open"); // Parandalon scroll nën modal
  });
  
  // Kur klikon jashtë modalit të albumit => mbylle
  window.addEventListener("click", (e) => {
    const modalEl = document.getElementById("stackAlbumModal");
    if (e.target === modalEl) {
      modalEl.classList.remove("show");
      modalEl.style.display = "none";
      document.body.classList.remove("modal-open");
    }
  });
  
  // Kur klikoj mbi foto të albumit => hapet modal i madh për foto
  document.querySelectorAll(".album-img").forEach((img, index) => {
    img.addEventListener("click", () => {
      currentIndex = index + 5; // Pjesa e dytë e fotove
      showImage(currentIndex);
      // mbyll albumin
      const modalEl = document.getElementById("stackAlbumModal");
      modalEl.classList.remove("show");
      modalEl.style.display = "none";
      document.body.classList.remove("modal-open");
    });
    // Butoni për mbylljen e modalit të albumit (stack)
document.getElementById("closeAlbumBtn").addEventListener("click", () => {
    const modalEl = document.getElementById("stackAlbumModal");
    modalEl.classList.remove("show");
    modalEl.style.display = "none";
    document.body.classList.remove("modal-open");
  });
  });











// Ndrysho këtu linket kur të vendosësh profilet e tua reale
document.getElementById("instagram-link").href = "https://youtube.com"; // Vendos linkun e Instagramit tënd
document.getElementById("tiktok-link").href = "https://youtube.com"; // Vendos linkun e TikTok-ut tënd
document.getElementById("phone-link").href = "tel:123456789"; // Ndrysho numrin e telefonit nëse duhet



    


document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelectorAll(".nav-link");
  
    // Hap/mbyll menynë
    hamburgerBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("show");
    });
  
    // Mbyll menynë kur klikohet linku
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("show");
      });
    });
  
    // Mbyll kur klikon jashtë
    document.addEventListener("click", (e) => {
      if (!mobileMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        mobileMenu.classList.remove("show");
      }
    });
  
    // Mbyll kur bëhet scroll
    window.addEventListener("scroll", () => {
      mobileMenu.classList.remove("show");
    });
});






document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("contactForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Parandalon rifreskimin e faqes
    
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("message").value;
    
            // Ndërto emailin për të dërguar
            let mailtoLink = `mailto:contact@fatigarden.com?subject=New Inquiry from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
    
            window.location.href = mailtoLink; // Hap emailin në mënyrë automatike
        });
});