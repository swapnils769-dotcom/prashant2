document.addEventListener('DOMContentLoaded', () => {

    // --- Sticky Header Behavior ---
    const header = document.getElementById('siteHeader');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Handle initial state if page is loaded scrolled down
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    }

    // --- Mobile Menu Toggle ---
    const hamburgerBtn = document.getElementById('hamburgerMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    let menuOpen = false;

    hamburgerBtn.addEventListener('click', () => {
        menuOpen = !menuOpen;
        if (menuOpen) {
            mobileMenu.classList.add('active');
            hamburgerBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        } else {
            mobileMenu.classList.remove('active');
            hamburgerBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
    });

    // Close mobile menu on link click
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuOpen = false;
            mobileMenu.classList.remove('active');
            hamburgerBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
    });

    // --- Slider Functionality ---
    // Helper function for horizontal scroll
    const setupSlider = (sliderId, prevBtnId, nextBtnId) => {
        const slider = document.getElementById(sliderId);
        const prevBtn = document.getElementById(prevBtnId);
        const nextBtn = document.getElementById(nextBtnId);

        if (!slider || !prevBtn || !nextBtn) return;

        // Calculate card width dynamically + gap
        const getScrollAmount = () => {
            const firstChild = slider.children[0];
            if (!firstChild) return 400; // default fallback
            // width + gap (approx 30px from css)
            return firstChild.offsetWidth + 30;
        };

        nextBtn.addEventListener('click', () => {
            slider.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            slider.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
        });
    };

    // Initialize Villas Slider
    setupSlider('villasSlider', 'villasPrev', 'villasNext');

    // Initialize Collection Slider
    setupSlider('colSlider', 'colPrev', 'colNext');

    // --- Scroll to Top Behaviors ---
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --- Mobile Contact Dropdown ---
    const mobileGetInTouch = document.getElementById('mobileGetInTouch');
    const mobileContactDropdown = document.getElementById('mobileContactDropdown');

    if (mobileGetInTouch && mobileContactDropdown) {
        mobileGetInTouch.addEventListener('click', (e) => {
            e.preventDefault();
            mobileContactDropdown.classList.toggle('show');
            const icon = mobileGetInTouch.querySelector('i');
            if (mobileContactDropdown.classList.contains('show')) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    }

});
