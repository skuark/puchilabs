# El cuaderno de Puchita


## Conceptos que ya manejo

- Qué es un commit y para qué sirve?
  Un commit es cuando genero codigo y lo guardo, y a medida que realizo un cambio o modificacion va quedando un historial de ese codigo con todas las
  modificaciones y cambios que le he realizado. El archivo se guarda solo (con Ctrl+S) y no pasa automatico yo decido cuando hacerlo.
- HTML es la estructura de la página (y por eso los textos de los botones están ahí)
- app.js contiene la lógica del juego,he podido localizar la función mostrarCarta revisando y leyendo el   codigo.

- Qué son las variables CSS en :root y para qué sirven
  Es donde guardamos valores reutilizables del proyecto, como la paleta de colores, tamaños o fuentes.
- Cómo funciona git pull --rebase y cuándo usarlo
  Trae lo nuevo y luego añade lo mío encima, --rebase se usa cuando quiero que todo se vea ordenado y cuando aun no he subido mis cambios (push)
- Qué significa un error de "divergent branches"
  Quiere decir que tengo cosas nuevas, el servidor tambien y git quiere saber como quiero juntarlo.

- Cómo funciona una animación de volteo en CSS con rotateY y preserve-3d: rotateY = gira la tarjeta, preserve-3d = permite que el  giro sea realista en 3D.
- Que transition necesita estar en la clase base para que la animación funcione en ambos sentidos? transition: transform 0.6s;
- CSS define el aspecto de la animación y JavaScript decide cuándo ocurre
- usar setTimeout() para hacer que algo ocurra después de un tiempo determinado en (milisegundos)
- translateY(-valor) → mueve el elemento hacia arriba
- translateY(valor) → mueve el elemento hacia abajo

- Qué es un CDN y para qué sirve — Un CDN (Content Delivery Network) es una red de servidores en internet que almacena archivos (como librerías de JavaScript o CSS). Sirve para usar librerías externas sin descargarlas en mi proyecto. En lugar de guardarlas, las cargo con un enlace.
- Cómo inicializar un mapa con Leaflet (L.map(), setView(), L.tileLayer()) 
  1.Crear el mapa:L.map(), 
  2.Establecer la vista (coordenadas y zoom):setView(), 
  3.Añadir el mapa base (tiles):L.tileLayer().
- Qué es fetch y cómo usarlo para pedir datos a un servidor - fetch es una función de JavaScript que sirve para pedir datos a un servidor (por ejemplo, una API).
- Qué es una promesa y cómo encadenar .then() para trabajar con el resultado - Una promesa es un objeto que representa un resultado que llegará en el futuro (por ejemplo, datos de una API) .then() se usa para trabajar con ese resultado cuando ya está disponible.
- .forEach() sirve para ejecutar una función por cada elemento del array.
- Cómo añadir marcadores en un mapa con L.marker() y un popup con bindPopup() 
  L.marker() → crea el marcador 
  [latitud, longitud] → dónde lo quiero poner
  .addTo(map) → lo añade al mapa que ya cree


## Mi glosario

- Commit — Es un registro de cambios guardado en un sistema de control de versiones.
- Issue — Es un registro de un problema, tarea o mejora dentro de un proyecto.
- gh — Es la herramienta de línea de comandos de GitHub CLI, creada por GitHub. Permite usar muchas funciones de GitHub directamente desde la terminal, sin tener que entrar al sitio web.
- transform — propiedad CSS que permite mover, rotar o escalar un elemento
- rotateY() — función de transform que gira un elemento en el eje Y, como una página de libro
- translateY() — función de transform que mueve un elemento hacia arriba o abajo
- preserve-3d — valor de transform-style que hace que el navegador trate los elementos como si estuvieran en un espacio tridimensional real
- setTimeout() — función de JavaScript que ejecuta código después de un tiempo de espera en milisegundos

- fetch — función de JavaScript que hace peticiones HTTP al servidor desde el navegador
- Promesa — objeto que representa una operación que aún no ha terminado; se usa con .then() para actuar cuando llega el resultado
- .forEach() — método de los arrays que ejecuta una función por cada elemento
- CDN — servidor externo que sirve ficheros públicos como librerías; se carga desde una URL sin instalar nada
- Leaflet — librería de JavaScript para mostrar mapas interactivos en el navegador
- L.marker() — función de Leaflet que añade un pin en el mapa en unas coordenadas dadas


## Cosas que quiero entender mejor


## Sesiones
En la sesion primera sesion, he desarrollado el primer Issue el cual consistia en explorar los diferentes ficheros que componen el proyecto, revisarlos uno a uno comprendiendo los conceptos y funcionalidades de cada uno, asi como aprender a navegar por la plataforma de Github.
