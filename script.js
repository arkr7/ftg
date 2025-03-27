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

document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-img');
    const albumItems = document.querySelectorAll('.album-img');
    const openStackModal = document.getElementById('openStackModal');
    const stackAlbumModal = new bootstrap.Modal(document.getElementById('stackAlbumModal'));
    const galleryModal = new bootstrap.Modal(document.getElementById('galleryModal'));
    const modalImage = document.getElementById('modalImage');
    const modalVideo = document.getElementById('modalVideo');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicatorContainer = document.getElementById('indicatorContainer');

    // Lista e fotove dhe videove (galeria + albumi)
    const media = [
        { type: 'image', src: 'assets/images/01.jpeg' },
        { type: 'image', src: 'assets/images/02.jpg' },
        { type: 'image', src: 'assets/images/03.jpg' },
        { type: 'image', src: 'https://i.ibb.co/HfQ2PDg8/Tea-Garden-Workers-640.jpg' },
        { type: 'image', src: 'https://i.ibb.co/HfQ2PDg8/Tea-Garden-Workers-640.jpg' },
        { type: 'image', src: 'https://i.ibb.co/mVdjS50w/istockphoto-1166203849-612x612.jpg' },
        { type: 'image', src: 'https://i.ibb.co/Mk3VYRvm/gettyimages-1440572041-612x612.jpg' },
        { type: 'image', src: 'https://i.ibb.co/mVdjS50w/istockphoto-1166203849-612x612.jpg' },
        { type: 'image', src: 'https://i.ibb.co/Mk3VYRvm/gettyimages-1440572041-612x612.jpg' },
        { type: 'image', src: 'https://i.ibb.co/mVdjS50w/istockphoto-1166203849-612x612.jpg' },
        { type: 'image', src: 'https://i.ibb.co/Mk3VYRvm/gettyimages-1440572041-612x612.jpg' },
    ];

    let currentIndex = 0;

    // Klikimi mbi një foto në galeri
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentIndex = index;
            openModal();
        });
    });

    // Klikimi mbi Stack hap albumin
    openStackModal.addEventListener('click', function() {
        stackAlbumModal.show();
    });

    // Klikimi mbi foto në album hap modalin e njëjtë
    albumItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentIndex = index + 5; // Albumi fillon nga fotoja e 6-të
            // ✅ Mbyll modalin e albumit para se të hapet modali i fotove
            stackAlbumModal.hide(); 

            setTimeout(() => {
                openModal();
            }, 300); // Shto një vonesë të vogël që modalet të ndryshojnë natyrshëm
        });
    });

    function openModal() {
        updateModalContent();
        galleryModal.show();
        updateIndicators();
    }

    function updateModalContent() {
        modalImage.classList.add('d-none');
        modalVideo.classList.add('d-none');

        const currentMedia = media[currentIndex];
        modalImage.src = currentMedia.src;
        modalImage.classList.remove('d-none');
    }

    function updateIndicators() {
        indicatorContainer.innerHTML = '';
        media.forEach((_, i) => {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            if (i === currentIndex) indicator.classList.add('active');
            indicatorContainer.appendChild(indicator);
        });
    }

    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : media.length - 1;
        openModal();
    });

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex < media.length - 1) ? currentIndex + 1 : 0;
        openModal();
    });
});

document.getElementById("about-img-1").addEventListener("click", function() {
    document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("about-img-2").addEventListener("click", function() {
    document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
});

// Ndrysho këtu linket kur të vendosësh profilet e tua reale
document.getElementById("instagram-link").href = "https://youtube.com"; // Vendos linkun e Instagramit tënd
document.getElementById("tiktok-link").href = "https://youtube.com"; // Vendos linkun e TikTok-ut tënd
document.getElementById("phone-link").href = "tel:123456789"; // Ndrysho numrin e telefonit nëse duhet


document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    const navItems = document.querySelectorAll(".nav-item");

    navbarToggler.addEventListener("click", function () {
        navbarCollapse.classList.toggle("show");

        // Shton një vonesë të vogël për secilin buton kur hapet menyja
        if (navbarCollapse.classList.contains("show")) {
            navItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = "1";
                    item.style.transform = "translateY(0)";
                }, index * 100); // Çdo buton del pas 100ms nga tjetri
            });
        } else {
            navItems.forEach((item) => {
                item.style.opacity = "0";
                item.style.transform = "translateY(-30px)"; // Butonat largohen lart
            });
        }
    });

    // Mbyll menynë kur klikon diku jashtë saj
    document.addEventListener("click", function (event) {
        if (!navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
            navbarCollapse.classList.remove("show");
        }
    });


    });
    /* ================== Mbyllja e menusë kur bëhet scroll ================== */
    document.addEventListener("scroll", function() {
        if (window.innerWidth <= 768) {
            let navbarCollapse = document.querySelector(".navbar-collapse");
            if (navbarCollapse.classList.contains("show")) {
                navbarCollapse.classList.remove("show");
            }
        }
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

