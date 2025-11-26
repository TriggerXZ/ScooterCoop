document.addEventListener('DOMContentLoaded', () => {
    // Create Lightbox Elements
    const lightbox = document.createElement('div');
    lightbox.id = 'gallery-lightbox';
    lightbox.className = 'fixed inset-0 z-50 hidden flex items-center justify-center bg-dark/90 backdrop-blur-xl opacity-0 transition-opacity duration-300';

    const lightboxContent = document.createElement('div');
    lightboxContent.className = 'relative max-w-7xl max-h-[90vh] p-2';

    const lightboxImage = document.createElement('img');
    lightboxImage.className = 'max-h-[85vh] max-w-full rounded-lg shadow-[0_0_50px_rgba(0,240,255,0.3)] border border-primary/30';

    const closeButton = document.createElement('button');
    closeButton.className = 'absolute -top-12 right-0 text-white hover:text-primary transition-colors text-4xl';
    closeButton.innerHTML = '<i class="bx bx-x"></i>';

    const caption = document.createElement('div');
    caption.className = 'absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-md p-4 text-white text-center transform translate-y-full transition-transform duration-300';

    // HUD Elements for Lightbox
    const hudTopLeft = document.createElement('div');
    hudTopLeft.className = 'absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-primary/50';
    const hudTopRight = document.createElement('div');
    hudTopRight.className = 'absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-primary/50';
    const hudBottomLeft = document.createElement('div');
    hudBottomLeft.className = 'absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-primary/50';
    const hudBottomRight = document.createElement('div');
    hudBottomRight.className = 'absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-primary/50';

    lightboxContent.appendChild(lightboxImage);
    lightboxContent.appendChild(closeButton);
    lightboxContent.appendChild(caption);
    lightboxContent.appendChild(hudTopLeft);
    lightboxContent.appendChild(hudTopRight);
    lightboxContent.appendChild(hudBottomLeft);
    lightboxContent.appendChild(hudBottomRight);
    lightbox.appendChild(lightboxContent);
    document.body.appendChild(lightbox);

    // Open Lightbox
    const galleryImages = document.querySelectorAll('.gallery-image');
    galleryImages.forEach(img => {
        img.addEventListener('click', (e) => {
            e.preventDefault();
            const src = img.getAttribute('src');
            const alt = img.getAttribute('alt');
            const title = img.dataset.title;
            const desc = img.dataset.desc;

            lightboxImage.src = src;
            caption.innerHTML = `<h3 class="text-xl font-bold text-primary mb-1">${title}</h3><p class="text-sm text-gray-300">${desc}</p>`;

            lightbox.classList.remove('hidden');
            // Small delay to allow display:block to apply before opacity transition
            setTimeout(() => {
                lightbox.classList.remove('opacity-0');
                lightboxImage.classList.add('scale-100');
                lightboxImage.classList.remove('scale-95');
            }, 10);
        });
    });

    // Close Lightbox
    const closeLightbox = () => {
        lightbox.classList.add('opacity-0');
        lightboxImage.classList.add('scale-95');
        lightboxImage.classList.remove('scale-100');
        setTimeout(() => {
            lightbox.classList.add('hidden');
            lightboxImage.src = '';
        }, 300);
    };

    closeButton.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Keyboard Close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
            closeLightbox();
        }
    });
});
