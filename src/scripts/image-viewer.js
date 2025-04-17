// Script para permitir zoom y desplazamiento en imágenes de mapas
document.addEventListener('DOMContentLoaded', function() {
  // Seleccionar todas las imágenes de mapas en las páginas de ubicación y contacto
  const mapImages = document.querySelectorAll('.map-container img');
  
  // Añadir clase para mejorar la interacción en móviles
  document.querySelectorAll('.map-container').forEach(container => {
    container.classList.add('interactive-map');
  });
  
  mapImages.forEach(img => {
    // Crear el contenedor para el visor interactivo
    const container = img.parentElement;
    container.style.position = 'relative';
    container.style.overflow = 'hidden';
    
    // Configuración inicial
    let scale = 1;
    let panning = false;
    let pointX = 0;
    let pointY = 0;
    let start = { x: 0, y: 0 };
    
    // Asegurar que la imagen se cargue completamente
    img.onload = function() {
      // Establecer el tamaño inicial para asegurar que toda la imagen sea accesible
      img.style.width = '100%';
      img.style.height = 'auto';
      img.style.maxWidth = 'none'; // Permitir que la imagen crezca más allá del contenedor cuando hay zoom
      updateImageTransform();
    };
    
    // Aplicar estilos inmediatamente en caso de que la imagen ya esté cargada
    if (img.complete) {
      img.style.width = '100%';
      img.style.height = 'auto';
      img.style.maxWidth = 'none';
      updateImageTransform();
    }
    
    // Función para actualizar la transformación de la imagen
    function updateImageTransform() {
      img.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
    }
    
    // Configurar la imagen para interacción
    img.style.transformOrigin = '0 0';
    img.style.cursor = 'move';
    
    // Eventos táctiles para dispositivos móviles
    container.addEventListener('touchstart', function(e) {
      // No prevenir el comportamiento predeterminado para permitir el desplazamiento nativo
      panning = true;
      start.x = e.touches[0].clientX - pointX;
      start.y = e.touches[0].clientY - pointY;
    });
    
    container.addEventListener('touchmove', function(e) {
      // No prevenir el comportamiento predeterminado para permitir el desplazamiento nativo
      if (!panning) return;
      
      // Calcular la nueva posición
      pointX = e.touches[0].clientX - start.x;
      pointY = e.touches[0].clientY - start.y;
      
      // Permitir desplazamiento completo de la imagen
      // Calculamos el tamaño real de la imagen escalada
      const scaledWidth = img.width * scale;
      const scaledHeight = img.height * scale;
      
      // Calculamos los límites máximos de desplazamiento para permitir ver toda la imagen
      const maxX = Math.max(scaledWidth - container.clientWidth, 0);
      const maxY = Math.max(scaledHeight - container.clientHeight, 0);
      
      // Permitimos desplazamiento completo en ambas direcciones sin restricciones
      // para dispositivos móviles
      if (scale > 1) {
        // Solo aplicamos límites cuando hay zoom
        pointX = Math.min(Math.max(pointX, -maxX), 0);
        pointY = Math.min(Math.max(pointY, -maxY), 0);
      }
      
      updateImageTransform();
    });
    
    
    container.addEventListener('touchend', function(e) {
      panning = false;
    });
    
    // Evento de doble toque para zoom
    let lastTap = 0;
    container.addEventListener('touchend', function(e) {
      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTap;
      
      if (tapLength < 300 && tapLength > 0) {
        e.preventDefault(); // Prevenir comportamiento predeterminado solo para doble toque
        
        // Doble toque detectado - alternar entre zoom y vista normal
        if (scale === 1) {
          scale = 2; // Zoom in
          
          // Centrar el zoom en el punto tocado
          const touch = e.changedTouches[0];
          const rect = container.getBoundingClientRect();
          const touchX = touch.clientX - rect.left;
          const touchY = touch.clientY - rect.top;
          
          pointX = -touchX * scale + touchX;
          pointY = -touchY * scale + touchY;
        } else {
          // Volver a la vista normal
          scale = 1;
          pointX = 0;
          pointY = 0;
        }
        
        updateImageTransform();
      }
      
      lastTap = currentTime;
    });
    
    // Eventos de rueda para zoom en desktop
    container.addEventListener('wheel', function(e) {
      e.preventDefault();
      
      // Determinar la dirección del zoom
      const delta = e.deltaY > 0 ? -0.2 : 0.2;
      const newScale = Math.min(Math.max(scale + delta, 1), 3); // Limitar el zoom entre 1x y 3x
      
      if (newScale !== scale) {
        // Calcular el punto donde se aplica el zoom (posición del cursor)
        const rect = container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        // Ajustar la posición para mantener el punto bajo el cursor
        const scaleChange = newScale - scale;
        pointX -= mouseX * scaleChange;
        pointY -= mouseY * scaleChange;
        
        scale = newScale;
        
        // Permitir desplazamiento completo
        const scaledWidth = img.width * scale;
        const scaledHeight = img.height * scale;
        
        // Calculamos los límites máximos de desplazamiento
        const maxX = Math.max(scaledWidth - container.clientWidth, 0);
        const maxY = Math.max(scaledHeight - container.clientHeight, 0);
        
        // Permitimos desplazamiento completo en ambas direcciones
        pointX = Math.min(Math.max(pointX, -maxX), 0);
        pointY = Math.min(Math.max(pointY, -maxY), 0);
        
        updateImageTransform();
      }
    });
    
    // Eventos de mouse para arrastrar en desktop
    container.addEventListener('mousedown', function(e) {
      e.preventDefault();
      panning = true;
      start.x = e.clientX - pointX;
      start.y = e.clientY - pointY;
      container.style.cursor = 'grabbing';
    });
    
    container.addEventListener('mousemove', function(e) {
      if (!panning) return;
      
      pointX = e.clientX - start.x;
      pointY = e.clientY - start.y;
      
      // Permitir desplazamiento completo
      const scaledWidth = img.width * scale;
      const scaledHeight = img.height * scale;
      
      // Calculamos los límites máximos de desplazamiento
      const maxX = Math.max(scaledWidth - container.clientWidth, 0);
      const maxY = Math.max(scaledHeight - container.clientHeight, 0);
      
      // Permitimos desplazamiento completo en ambas direcciones
      pointX = Math.min(Math.max(pointX, -maxX), 0);
      pointY = Math.min(Math.max(pointY, -maxY), 0);
      
      updateImageTransform();
    });
    
    container.addEventListener('mouseup', function(e) {
      panning = false;
      container.style.cursor = 'move';
    });
    
    container.addEventListener('mouseleave', function(e) {
      panning = false;
      container.style.cursor = 'move';
    });
    
    // Añadir instrucciones para dispositivos móviles
    const instructions = document.createElement('div');
    instructions.className = 'map-instructions';
    instructions.innerHTML = '<p>Toca dos veces para zoom • Desliza para mover</p>';
    instructions.style.position = 'absolute';
    instructions.style.bottom = '10px';
    instructions.style.left = '0';
    instructions.style.right = '0';
    instructions.style.textAlign = 'center';
    instructions.style.backgroundColor = 'rgba(0,0,0,0.5)';
    instructions.style.color = 'white';
    instructions.style.padding = '5px';
    instructions.style.fontSize = '12px';
    instructions.style.borderRadius = '4px';
    instructions.style.margin = '0 auto';
    instructions.style.width = 'fit-content';
    
    container.appendChild(instructions);
    
    // Ocultar instrucciones después de 5 segundos
    setTimeout(() => {
      instructions.style.opacity = '0';
      instructions.style.transition = 'opacity 1s';
    }, 5000);
  });
});