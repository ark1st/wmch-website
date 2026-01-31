// ==========================================
// WMCH Website - Modern JavaScript
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // === MOBILE MENU TOGGLE ===
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Animate hamburger icon (optional)
            const icon = mobileMenuBtn.querySelector('svg');
            if (icon) {
                icon.classList.toggle('rotate-90');
            }
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
    
    // === SMOOTH SCROLL FOR ANCHOR LINKS ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // === FLOATING HEADER ON SCROLL ===
    const header = document.getElementById('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add scrolled class when scrolling down
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // === INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS ===
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                // Add staggered animation to children
                const children = entry.target.querySelectorAll('.stagger-children > *');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('fade-in');
                    }, index * 100);
                });
                
                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // === PARALLAX EFFECT (LIGHT) ===
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax-element');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // === YOUTUBE VIDEO LAZY LOADING ===
    const youtubeIframes = document.querySelectorAll('iframe[src*="youtube.com"]');
    youtubeIframes.forEach(iframe => {
        const src = iframe.getAttribute('src');
        iframe.setAttribute('data-src', src);
        iframe.removeAttribute('src');
        
        // Load when in viewport
        const iframeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const dataSrc = entry.target.getAttribute('data-src');
                    entry.target.setAttribute('src', dataSrc);
                    iframeObserver.unobserve(entry.target);
                }
            });
        });
        
        iframeObserver.observe(iframe);
    });
    
    // === SCROLL PROGRESS INDICATOR (OPTIONAL) ===
    function updateScrollProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        // Update progress bar if it exists
        const progressBar = document.getElementById('scroll-progress');
        if (progressBar) {
            progressBar.style.width = scrollPercent + '%';
        }
    }
    
    window.addEventListener('scroll', updateScrollProgress);
    
    // === BUTTON RIPPLE EFFECT ===
    const buttons = document.querySelectorAll('.ripple');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple-effect');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // === CARD HOVER TILT EFFECT (3D) ===
    const cards = document.querySelectorAll('.card-3d');
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
    
    // === ACCESSIBILITY: KEYBOARD NAVIGATION ===
    document.addEventListener('keydown', function(e) {
        // ESC to close mobile menu
        if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
    
    // === PERFORMANCE: DEBOUNCE SCROLL EVENTS ===
    function debounce(func, wait = 10, immediate = true) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
    
    // Use debounce for scroll-heavy operations
    window.addEventListener('scroll', debounce(function() {
        // Heavy scroll operations here
    }, 20));
    
    // === PRELOAD CRITICAL IMAGES ===
    const criticalImages = document.querySelectorAll('img[data-preload]');
    criticalImages.forEach(img => {
        const src = img.getAttribute('data-src');
        if (src) {
            const preloadImg = new Image();
            preloadImg.src = src;
            preloadImg.onload = () => {
                img.src = src;
                img.classList.add('loaded');
            };
        }
    });
    
    // === ANIMATE ON SCROLL (REVEAL) ===
    function reveal() {
        const reveals = document.querySelectorAll('.reveal');
        
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', reveal);
    reveal(); // Initial check
    
    // === LOADING ANIMATION (OPTIONAL) ===
    window.addEventListener('load', function() {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.classList.add('fade-out');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
        
        // Trigger initial animations
        document.body.classList.add('loaded');
    });
    
    // === CONSOLE MESSAGE ===
    console.log('%c세계선교교회 Website', 'color: #2563eb; font-size: 20px; font-weight: bold;');
    console.log('%c하나님 나라의 망대', 'color: #4f46e5; font-size: 14px;');
    
});

// === YOUTUBE API INTEGRATION (OPTIONAL) ===
// Uncomment to dynamically load latest videos

/*
const YOUTUBE_CHANNEL_ID = 'UCxxxxxxxxxxxxxx'; // Replace with actual channel ID
const YOUTUBE_API_KEY = 'YOUR_API_KEY_HERE';   // Add your YouTube API key

async function loadLatestVideos(maxResults = 3) {
    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=${maxResults}&type=video`
        );
        
        if (!response.ok) throw new Error('Failed to fetch videos');
        
        const data = await response.json();
        
        // Process and display videos
        const videoContainer = document.getElementById('latest-videos');
        if (videoContainer && data.items) {
            videoContainer.innerHTML = data.items.map(item => `
                <div class="video-card">
                    <a href="https://www.youtube.com/watch?v=${item.id.videoId}" target="_blank">
                        <img src="${item.snippet.thumbnails.medium.url}" alt="${item.snippet.title}">
                        <h3>${item.snippet.title}</h3>
                        <p>${new Date(item.snippet.publishedAt).toLocaleDateString('ko-KR')}</p>
                    </a>
                </div>
            `).join('');
        }
        
        console.log('Latest videos loaded:', data.items);
    } catch (error) {
        console.error('Error loading YouTube videos:', error);
    }
}

// Call the function when needed
// loadLatestVideos();
*/

// === UTILITY FUNCTIONS ===

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copied to clipboard:', text);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// Format date in Korean
function formatDateKorean(date) {
    return new Intl.DateTimeFormat('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    }).format(new Date(date));
}

// === EXPORT FOR MODULE USE (IF NEEDED) ===
// export { scrollToTop, copyToClipboard, formatDateKorean };
