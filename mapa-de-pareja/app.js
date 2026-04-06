// Coordenadas de Jaén
const jaen = [37.7796, -3.7849];

// Inicializar el mapa centrado en Jaén 
const map = L.map('map').setView(jaen, 13);

fetch('/api/photos')
    .then(response => response.json())
    .then(photos => {
        
        photos.forEach(photo => {
            
            if (photo.lat !== null && photo.lng !== null) {
                
                
                const marker = L.marker([photo.lat, photo.lng]).addTo(map);

                
                marker.bindPopup(photo.caption || 'Sin descripción');
            }
        });
    })
    .catch(error => {
        console.error('Error al cargar las fotos:', error);
    });

// capa de tiles (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);