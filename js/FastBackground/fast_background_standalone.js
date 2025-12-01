// Simplified FastBackground replacement for standalone deployment
(function () {
    'use strict';

    // List of available webp images from fast_background folder
    const webpImages = [
        '/fast_background/0/02/024e6e4249ddcd55791c84127d7ef24d472bccbc_18_500.webp',
        '/fast_background/0/04/047edc902866fc89aaf02c9640de44c0c90cbeca_18_600.webp',
        '/fast_background/0/04/04d9bd0b003033e0196a4f0df70aa16fce5bd4b1_18_300.webp',
        '/fast_background/0/07/07909bf3c8d679ba5432dd1950ed2996a2135445_18_1100.webp',
        '/fast_background/1/10/108d168ddabcaf7fa360c62aa05831db0c6cb0b4_18_800.webp',
        '/fast_background/1/13/13fbcc9ec5f31786a4b8a63ca41405b79ac75909_18_500.webp',
        '/fast_background/2/21/21f3d696399b332a74040cad6360fc2cea08287d_18_700.webp',
        '/fast_background/2/2c/2c6f379d221efbdd49e112512972d6f600b96122_18_400.webp',
        '/fast_background/2/2c/2c6f379d221efbdd49e112512972d6f600b96122_18_500.webp',
        '/fast_background/2/2c/def_2c6f379d221efbdd49e112512972d6f600b96122_18_.webp',
        '/fast_background/2/2e/2e4afde0311f2ab115e43d97baf063233b693494_18_600.webp',
        '/fast_background/3/33/33d73f698dc69642d28a3defed7983dc83d970c4_18_700.webp',
        '/fast_background/3/3e/3e0525701b9af4c789813117d916d39927edab53_18_700.webp',
        '/fast_background/4/42/4263272fa5e0a6d005ec9d2186cb5f1814952e95_18_65.webp',
        '/fast_background/4/44/44c276b6616abe4cd21c5e4572b1c41f6531afd0_18_300.webp',
        '/fast_background/4/4e/4e486407aae746bf984c0df69ecabca536a6b9d8_18_700.webp',
        '/fast_background/5/50/5027ee42e00e9af0d0ec245f278f4416fc76c1d6_18_800.webp',
        '/fast_background/5/50/507a14a17c89819a477c4c9973cf2a16746e1ca7_18_500.webp',
        '/fast_background/5/51/51d6615cdae9c24e59cb8eafe1c800b5522882be_18_700.webp',
        '/fast_background/5/5c/5c260c77b14d99c607d7292e6143243587020834_18_464.webp',
        '/fast_background/5/5f/5f4933f9571f40688659528830cd3187a2016c3a_18_700.webp',
        '/fast_background/7/70/7006ba74d05179ed83e5c428d5eac4febb0371d4_18_700.webp',
        '/fast_background/7/77/7765e072c8c2b3a6fdc2566f2a5bf9b7ce28a4f3_18_600.webp',
        '/fast_background/7/78/789b89f6b06f78a110c957c6b6fb03ca725c4682_18_500.webp',
        '/fast_background/8/86/8648894d3d3f4b40ea50f8f28bdce4a45572a730_18_600.webp',
        '/fast_background/8/86/864bc505a8fc4c95d06465e06670cbfaad0a4d42_18_500.webp',
        '/fast_background/8/8b/8b6216a03e51b98bec591bcc2577179ee3203d0c_18_500.webp',
        '/fast_background/8/8c/8cb621fc5980241aca12fd9ed847fa553646fdf0_18_600.webp',
        '/fast_background/9/93/9350ea3c03a15acb09eedacffa2149bfbd9a2f93_18_500.webp',
        '/fast_background/9/93/9393c109a7b02c2ec446082dd0ffb88c1cc70d9c_18_500.webp',
        '/fast_background/9/9f/9f37adffb7e7d7aae697f93aa51f57f97b4f35f6_18_700.webp',
        '/fast_background/a/a0/a06be46b7fd9e7f3dad653901a76adf838a3d3d6_18_500.webp',
        '/fast_background/a/a9/a96d0dc926191d5c6dd57cec90ddf666229ea116_18_1400.webp',
        '/fast_background/a/ac/ac5760109aec757200122db060ff0aa5ff19b377_18_600.webp',
        '/fast_background/a/ad/ad7afedd41aa81a6057109fe964a6bb27437088f_18_700.webp',
        '/fast_background/a/ad/ad9793da2690c6c8686475236a02b4be572aeb50_18_500.webp',
        '/fast_background/b/b1/b11fe8a1768c579dae59bb91497a431a04b6e67b_18_300.webp',
        '/fast_background/b/b7/b74f690ff630df919809fc341719d41d94b12173_18_600.webp',
        '/fast_background/c/c6/c697f3e1ecd547c08fd7ce505e423bd2a3899e7b_18_900.webp',
        '/fast_background/c/c7/c7d240ea093c4231de87b12e80811e8c70064098_18_500.webp',
        '/fast_background/c/ca/ca3bbb5aa881b5092eb5b70c90b3858b6d391b53_18_500.webp',
        '/fast_background/d/d7/d7d3b8ff4be0e4c785964633daed6213fe0c95ee_18_500.webp',
        '/fast_background/d/de/dedbe5a4d3fff4097212d32fb772c7384e439c5b_18_700.webp',
        '/fast_background/d/df/dfa8ce7598f3b7b657466133ae23864760d11ba3_18_500.webp',
        '/fast_background/e/e7/e71ef0684d03359566025b322df3b48aaeedac8b_18_100.webp',
        '/fast_background/e/e7/e71ef0684d03359566025b322df3b48aaeedac8b_18_300.webp',
        '/fast_background/e/ea/eacdb825df92caa275ca47f7847f945d9fedf583_18_500.webp',
        '/fast_background/f/f1/f1b85f1f49b51ba59f23c6436bf117b919c92229_18_500.webp',
        '/fast_background/f/f4/f4beb943bbd1c1cbeb11a815e1f0d1ca626640b8_18_500.webp',
        '/fast_background/f/f8/f8422b45f49b85e91085ddb659d8d876e5c469e4_18_300.webp',
        '/fast_background/f/fa/fa31f6dd8a6415f828930396e84f5c2ef798f179_18_800.webp',
        '/fast_background/f/ff/fff6ff454fe0996e8064e2eb7ec8dc08d4c5513a_18_700.webp'
    ];

    let webpIndex = 0;

    // Simple image lazy loading without PHP backend
    function initStaticBackgrounds() {
        const elements = document.querySelectorAll('.fast_background, .fast_background_animate');

        elements.forEach(element => {
            let dataUrl = element.getAttribute('data-url');
            const dataFileName = element.getAttribute('data-file-name');

            // If no data-url or empty, use webp from fast_background
            if (!dataUrl || dataUrl === '') {
                if (webpImages.length > 0) {
                    dataUrl = webpImages[webpIndex % webpImages.length];
                    webpIndex++;
                    element.setAttribute('data-url', dataUrl);
                }
            }

            if (dataUrl && dataUrl !== '') {
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
                    let dataUrl = element.getAttribute('data-url');

                    // If no data-url or empty, use webp from fast_background
                    if (!dataUrl || dataUrl === '') {
                        if (webpImages.length > 0) {
                            dataUrl = webpImages[webpIndex % webpImages.length];
                            webpIndex++;
                            element.setAttribute('data-url', dataUrl);
                        }
                    }

                    if (dataUrl && dataUrl !== '') {
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
            const lazyElements = document.querySelectorAll('.fast_background, .fast_background_animate');
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
