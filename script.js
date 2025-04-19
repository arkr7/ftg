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
const navbarCollapse = document.getElementById("navbarNav");
const navbarToggler = document.querySelector(".navbar-toggler");

// Mbyll menynë kur klikon jashtë
document.addEventListener("click", function (event) {
  const isClickInside = navbarCollapse.contains(event.target) || navbarToggler.contains(event.target);
  if (!isClickInside && navbarCollapse.classList.contains("show")) {
    new bootstrap.Collapse(navbarCollapse).hide();
  }
});

// Mbyll menynë kur scroll
window.addEventListener("scroll", function () {
  if (navbarCollapse.classList.contains("show")) {
    new bootstrap.Collapse(navbarCollapse).hide();
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
  const albumContainer = document.querySelector("#albumGrid");

  const galleryImages = [
    "assets/images/01.jpeg",
    "assets/images/02.jpeg",
    "assets/images/03.jpeg",
    "assets/images/04.jpeg",
    "assets/images/05.jpeg"
  ];

  const albumImages = [];
  const maxImages = 250;

  function tryLoadMedia(src, callback) {
    const img = new Image();
    img.onload = () => callback(src);
    img.onerror = () => {
      // check for video
      fetch(src, { method: "HEAD" }).then(res => {
        if (res.ok) callback(src);
      });
    };
    img.src = src;
  }

  for (let i = 1; i <= maxImages; i++) {
    tryLoadMedia(`assets/album/P${i}.jpeg`, (valid) => albumImages.push(valid));
    tryLoadMedia(`assets/album/P${i}.png`, (valid) => albumImages.push(valid));
  }

  // Add video manually
  albumImages.push("assets/album/A9.mp4");
  albumImages.push("assets/album/P56.mp4");

  const images = [...galleryImages];

  setTimeout(() => {
    albumImages.forEach((src, i) => {
      const col = document.createElement("div");
      col.className = "col";

      if (src.endsWith(".mp4")) {
        const vid = document.createElement("video");
        vid.src = src;
        vid.className = "album-img";
        vid.dataset.index = i + galleryImages.length;
        vid.muted = true;
        vid.playsInline = true;
        vid.loop = true;
        vid.autoplay = true;
        col.appendChild(vid);
      } else {
        const img = document.createElement("img");
        img.src = src;
        img.className = "album-img";
        img.dataset.index = i + galleryImages.length;
        col.appendChild(img);
      }

      albumContainer.appendChild(col);
      images.push(src);
    });
  }, 400);

  let currentIndex = 0;

  function showImage(index) {
    if (!images[index]) return;
    modal.style.display = "block";

    const isVideo = images[index].endsWith(".mp4");
    const oldVideo = document.getElementById("modalVideo");
    if (oldVideo) oldVideo.remove();

    if (isVideo) {
      modalImg.style.display = "none";
      const video = document.createElement("video");
      video.src = images[index];
      video.controls = true;
      video.autoplay = true;
      video.id = "modalVideo";
      video.style.maxWidth = "100%";
      video.style.maxHeight = "80vh";
      modalImg.insertAdjacentElement("afterend", video);
    } else {
      modalImg.style.display = "block";
      modalImg.src = images[index];
    }

    imageCounter.textContent = `${index + 1} / ${images.length}`;
  }

  function closeModalFunc() {
    modal.style.display = "none";
    const oldVideo = document.getElementById("modalVideo");
    if (oldVideo) oldVideo.remove();
  }

  function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  closeModal.addEventListener("click", closeModalFunc);
  prevBtn.addEventListener("click", showPrevImage);
  nextBtn.addEventListener("click", showNextImage);

  document.querySelectorAll(".gallery-img").forEach((img, index) => {
    img.addEventListener("click", () => {
      currentIndex = index;
      showImage(currentIndex);
    });
  });

  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("album-img")) {
      const index = parseInt(e.target.dataset.index);
      if (!isNaN(index)) {
        currentIndex = index;
        showImage(currentIndex);
        const modalEl = document.getElementById("stackAlbumModal");
        if (modalEl) {
          modalEl.classList.remove("show");
          modalEl.style.display = "none";
          document.body.classList.remove("modal-open");
        }
      }
    }
  });

  const closeAlbumBtn = document.getElementById("closeAlbumBtn");
  if (closeAlbumBtn) {
    closeAlbumBtn.addEventListener("click", () => {
      const modalEl = document.getElementById("stackAlbumModal");
      modalEl.classList.remove("show");
      modalEl.style.display = "none";
      document.body.classList.remove("modal-open");
    });
  }

  document.getElementById("openStackModal").addEventListener("click", () => {
    const modalEl = document.getElementById("stackAlbumModal");
    modalEl.classList.add("show");
    modalEl.style.display = "block";
    document.body.classList.add("modal-open");
  });

  window.addEventListener("click", (e) => {
    const modalEl = document.getElementById("stackAlbumModal");
    if (e.target === modalEl) {
      modalEl.classList.remove("show");
      modalEl.style.display = "none";
      document.body.classList.remove("modal-open");
    }
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
