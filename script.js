document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle for Council Site Header
    const councilHeader = document.querySelector('.council-site-header');
    if (councilHeader) {
        let councilToggle = councilHeader.querySelector('.council-mobile-toggle');
        const headerInner = councilHeader.querySelector('.council-header-inner');
        
        // Auto-inject hamburger button if not present in markup
        if (!councilToggle && headerInner) {
            councilToggle = document.createElement('button');
            councilToggle.className = 'council-mobile-toggle';
            councilToggle.setAttribute('aria-label', 'Toggle Navigation Menu');
            councilToggle.innerHTML = '<i class="ph ph-list"></i>';
            headerInner.appendChild(councilToggle);
        }

        if (councilToggle) {
            councilToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                councilHeader.classList.toggle('menu-open');
                const icon = councilToggle.querySelector('i');
                if (icon) {
                    if (councilHeader.classList.contains('menu-open')) {
                        icon.className = 'ph ph-x';
                    } else {
                        icon.className = 'ph ph-list';
                    }
                }
            });

            // Close menu when clicking any nav link
            councilHeader.querySelectorAll('.council-nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    councilHeader.classList.remove('menu-open');
                    const icon = councilToggle.querySelector('i');
                    if (icon) icon.className = 'ph ph-list';
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!councilHeader.contains(e.target)) {
                    councilHeader.classList.remove('menu-open');
                    const icon = councilToggle.querySelector('i');
                    if (icon) icon.className = 'ph ph-list';
                }
            });
        }
    }

    // Legacy Mobile Menu Toggle (fallback)
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            if (mainNav.style.display === 'block') {
                mainNav.style.display = 'none';
            } else {
                mainNav.style.display = 'block';
                mainNav.style.position = 'absolute';
                mainNav.style.top = '86px';
                mainNav.style.left = '0';
                mainNav.style.width = '100%';
                mainNav.style.backgroundColor = '#ffffff';
                mainNav.style.padding = '20px';
                mainNav.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                
                const ul = mainNav.querySelector('ul');
                if (ul) {
                    ul.style.flexDirection = 'column';
                    ul.style.gap = '15px';
                }
            }
        });
    }

    // 2. Header Scroll Effect
    const header = document.querySelector('.site-header');
    let lastScroll = 0;

    if (header) {
        header.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= 0) {
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.04)';
                return;
            }
            
            if (currentScroll > lastScroll && currentScroll > 100) {
                // Scroll down - hide header smoothly
                header.style.transform = 'translateY(-100%)';
            } else {
                // Scroll up - show header
                header.style.transform = 'translateY(0)';
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
            }
            
            lastScroll = currentScroll;
        });
    }

    // 3. Scroll Animations
    const animatedElements = document.querySelectorAll('.action-card, .issue-card, .article-card, .resource-card');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // 4. Hero 7-Image Slider (Cycles every 5 seconds)
    const slides = document.querySelectorAll('.council-slide, .fp-slide');
    const dots = document.querySelectorAll('.council-slider-dots .dot, .fp-slider-dots .dot');

    if (slides.length > 0) {
        let currentSlide = 0;
        let slideInterval = null;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            currentSlide = index;
        }

        function nextSlide() {
            const next = (currentSlide + 1) % slides.length;
            showSlide(next);
        }

        function startAutoSlide() {
            if (slideInterval) clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 5000); // 5 seconds interval
        }

        // Allow manual dot clicks to jump to any slide
        dots.forEach((dot, idx) => {
            dot.addEventListener('click', () => {
                showSlide(idx);
                startAutoSlide(); // Reset 5s timer after manual click
            });
        });

        // Initialize first slide and start 5s timer
        showSlide(0);
        startAutoSlide();
    }

    // 5. Toggle All Issues Drawer
    const toggleBtn = document.getElementById('toggleAllIssuesBtn');
    const drawer = document.getElementById('allIssuesDrawer');
    const btnText = document.getElementById('issuesBtnText');
    const btnIcon = document.getElementById('issuesBtnIcon');

    if (toggleBtn && drawer) {
        toggleBtn.addEventListener('click', () => {
            const isHidden = drawer.style.display === 'none';
            if (isHidden) {
                drawer.style.display = 'block';
                if (btnText) btnText.textContent = 'CLOSE ISSUES GRID';
                if (btnIcon) btnIcon.className = 'ph ph-caret-up';
                drawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                drawer.style.display = 'none';
                if (btnText) btnText.textContent = 'VIEW ALL ISSUES';
                if (btnIcon) btnIcon.className = 'ph ph-caret-down';
            }
        });
    }

    // 6. Make entire issue cards, rows, and resource mosaic blocks clickable
    document.querySelectorAll('.issue-directory-card, .fp-issue-row, .fp-res-block:not(.res-intro-block)').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('a')) return;
            const link = card.querySelector('a');
            if (link && link.href) {
                window.location.href = link.href;
            }
        });
    });
});
