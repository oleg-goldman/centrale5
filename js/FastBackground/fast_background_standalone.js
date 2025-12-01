// Simplified FastBackground replacement for standalone deployment
(function () {
    'use strict';

    // Simple image lazy loading without PHP backend
    function initStaticBackgrounds() {
        const elements = document.querySelectorAll('.fast_background, .fast_background_animate');

        elements.forEach(element => {
            const dataUrl = element.getAttribute('data-url');
            const dataFileName = element.getAttribute('data-file-name');

            if (dataUrl) {
                // Set background image or src directly
                if (element.tagName === 'IMG') {
                    element.src = dataUrl;
                    element.classList.add('img_loaded');
                } else {
                    element.style.backgroundImage = `url(${dataUrl})`;
                    element.style.backgroundSize = 'cover';
                    element.style.backgroundPosition = 'center';
                    element.classList.add('img_loaded');
                }
            }
        });
    }

    // Intersection Observer for lazy loading
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const dataUrl = element.getAttribute('data-url');

                    if (dataUrl) {
                        if (element.tagName === 'IMG') {
                            element.src = dataUrl;
                        } else {
                            element.style.backgroundImage = `url(${dataUrl})`;
                            element.style.backgroundSize = 'cover';
                            element.style.backgroundPosition = 'center';
                        }
                        element.classList.add('img_loaded');
                        observer.unobserve(element);
                    }
                }
            });
        }, {
            rootMargin: '50px'
        });

        // Observe all lazy load elements
        document.addEventListener('DOMContentLoaded', () => {
            const lazyElements = document.querySelectorAll('.fast_background[data-url], .fast_background_animate[data-url]');
            lazyElements.forEach(el => imageObserver.observe(el));
        });
    } else {
        // Fallback for older browsers
        document.addEventListener('DOMContentLoaded', initStaticBackgrounds);
    }

    // Expose minimal API for compatibility
    window.fast_background = {
        update: function () {
            initStaticBackgrounds();
        },
        ajax_url: '',
        fast_cache: {}
    };
})();
