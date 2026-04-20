// Script para filtrar imágenes en la galería
// Compatible con el componente Animation de Astro
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.gallery-filter-btn');

    // Buscar elementos que contengan gallery-item (incluye el wrapper Animation)
    const galleryItems = document.querySelectorAll('[class*="gallery-item"]');

    if (filterButtons.length === 0 || galleryItems.length === 0) return;

    // Configurar estado inicial - activar botón "Todos"
    const allButton = document.querySelector('[data-filter="all"]');
    if (allButton) {
        allButton.classList.add('active');
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Evitar clic en botón ya activo
            if (button.classList.contains('active')) return;

            const filter = button.dataset.filter;

            // Actualizar estado de botones
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                const textSpan = btn.querySelector('span.relative');
                const bgSpan = btn.querySelector('.absolute.inset-0');
                if (textSpan) {
                    textSpan.classList.remove('text-void-black');
                    textSpan.classList.add('text-text-secondary');
                }
                if (bgSpan) {
                    bgSpan.classList.remove('bg-neon-green/10');
                    bgSpan.classList.add('bg-surface');
                }
            });

            // Activar botón seleccionado
            button.classList.add('active');
            const activeTextSpan = button.querySelector('span.relative');
            const activeBgSpan = button.querySelector('.absolute.inset-0');
            if (activeTextSpan) {
                activeTextSpan.classList.add('text-void-black');
                activeTextSpan.classList.remove('text-text-secondary');
            }
            if (activeBgSpan) {
                activeBgSpan.classList.add('bg-neon-green/10');
                activeBgSpan.classList.remove('bg-surface');
            }

            // Filtrar elementos con animación suave
            galleryItems.forEach((item) => {
                // El elemento puede ser el div interno o el wrapper Animation
                const isVisible = filter === 'all' ||
                    (item.dataset.category === filter) ||
                    (item.querySelector('[data-category]')?.dataset.category === filter);

                if (isVisible) {
                    // Mostrar elemento
                    item.style.display = '';
                    item.style.visibility = '';
                    item.style.opacity = '';
                    item.classList.add('animate-fade-in');

                    // Reiniciar animación
                    item.style.animation = 'none';
                    item.offsetHeight; // Trigger reflow
                    item.style.animation = '';
                } else {
                    // Ocultar elemento con animación de salida
                    item.style.display = '';
                    item.style.visibility = '';
                    item.style.opacity = '';
                    item.classList.add('animate-fade-out');
                }
            });

            // Ocultar elementos después de la animación de salida
            setTimeout(() => {
                galleryItems.forEach(item => {
                    const shouldBeVisible = filter === 'all' ||
                        (item.dataset.category === filter) ||
                        (item.querySelector('[data-category]')?.dataset.category === filter);

                    if (!shouldBeVisible) {
                        item.style.display = 'none';
                        item.style.visibility = 'hidden';
                        item.style.opacity = '0';
                    }
                    item.classList.remove('animate-fade-out');
                });
            }, 300);
        });
    });
});
