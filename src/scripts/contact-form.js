// Script para manejar el envío del formulario de contacto
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  const statusMessage = document.getElementById('statusMessage');

  if (contactForm) {
    // Verificar si el navegador soporta fetch para usar el método AJAX
    if (window.fetch) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Mostrar mensaje de carga
        statusMessage.textContent = 'Enviando mensaje...';
        statusMessage.className = 'p-4 bg-blue-100 text-blue-700 rounded-lg text-center';
        statusMessage.style.display = 'block';

        // Recopilar datos del formulario
        const formData = new FormData(contactForm);

        // Usar FormSubmit como servicio de correo sin dependencias
        // Esto enviará el correo a la dirección especificada
        fetch('https://formsubmit.co/ajax/kaminatrigger@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            nombre: formData.get('nombre'),
            apellido: formData.get('apellido'),
            email: formData.get('email'),
            telefono: formData.get('telefono'),
            servicio: formData.get('servicio'),
            ubicacion: formData.get('ubicacion'),
            cantidad: formData.get('cantidad'),
            mensaje: formData.get('mensaje')
          })
        })
          .then(response => response.json())
          .then(data => {
            // Mostrar mensaje de éxito
            statusMessage.textContent = '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.';
            statusMessage.className = 'p-4 bg-green-100 text-green-700 rounded-lg text-center font-medium';

            // Limpiar el formulario
            contactForm.reset();
          })
          .catch(error => {
            console.error('Error:', error);
            statusMessage.textContent = 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.';
            statusMessage.className = 'p-4 bg-red-100 text-red-700 rounded-lg text-center font-medium';
          });
      });
    }
    // Si fetch no está disponible, el formulario se enviará de manera tradicional
    // FormSubmit procesará el formulario y redirigirá al usuario
  }

  // Lógica de cálculo de precios
  const servicioSelect = document.getElementById('servicio');
  const cantidadInput = document.getElementById('cantidad');
  const totalContainer = document.getElementById('totalContainer');
  const totalPriceElement = document.getElementById('totalPrice');
  const totalNoteElement = document.getElementById('totalNote');

  if (servicioSelect && cantidadInput && totalContainer && totalPriceElement) {
    const precios = {
      '30min': 25000,
      '40min': 30000,
      '60min': 40000,
      'grupo': 40000, // Por persona
      'evento': 0 // A cotizar
    };

    function calcularTotal() {
      const servicio = servicioSelect.value;
      const cantidad = parseInt(cantidadInput.value) || 0;

      if (!servicio || servicio === '') {
        totalContainer.classList.add('hidden');
        return;
      }

      totalContainer.classList.remove('hidden');

      if (servicio === 'evento') {
        totalPriceElement.textContent = 'A cotizar';
        totalPriceElement.className = 'text-2xl font-bold text-accent';
        totalNoteElement.textContent = 'Nos pondremos en contacto para un presupuesto personalizado.';
        return;
      }

      const precioUnitario = precios[servicio] || 0;
      const total = precioUnitario * cantidad;

      // Formatear moneda
      const formatter = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });

      totalPriceElement.textContent = formatter.format(total);
      totalPriceElement.className = 'text-2xl font-bold text-primary';

      if (servicio === 'grupo') {
        if (cantidad < 5) {
          totalNoteElement.textContent = '* Mínimo 5 personas para tarifa grupal';
          totalNoteElement.className = 'text-xs text-yellow-500 mt-1 text-right';
        } else {
          totalNoteElement.textContent = 'Tarifa por persona aplicada';
          totalNoteElement.className = 'text-xs text-gray-500 mt-1 text-right';
        }
      } else {
        totalNoteElement.textContent = '';
      }
    }

    servicioSelect.addEventListener('change', calcularTotal);
    cantidadInput.addEventListener('input', calcularTotal);
  }
});