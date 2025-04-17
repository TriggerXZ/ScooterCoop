// Script para manejar el envío del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const statusMessage = document.getElementById('statusMessage');

  if (contactForm) {
    // Verificar si el navegador soporta fetch para usar el método AJAX
    if (window.fetch) {
      contactForm.addEventListener('submit', function(e) {
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
});