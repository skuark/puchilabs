# Baraja de pareja

Una baraja de cartas con preguntas para que parejas conversen.

## Qué hace

- Muestra una baraja de cartas apiladas.
- El botón **Sacar carta** extrae una carta al azar con una pregunta. Las cartas ya sacadas no se repiten en la misma sesión.
- El botón **Barajar** mezcla todas las cartas (las restantes y las ya sacadas) en un nuevo orden aleatorio.
- Cuando se agotan todas las cartas, aparece un mensaje y la baraja se restaura en el orden en que fueron saliendo.

## Estructura

```
baraja-de-pareja/
├── index.html      — estructura de la página
├── style.css       — estilos visuales
├── preguntas.js    — catálogo de preguntas (fácil de ampliar)
└── app.js          — lógica principal
```

## Cómo añadir preguntas

Abre `preguntas.js` y añade un objeto al array `PREGUNTAS` siguiendo el formato existente:

```js
{ id: 21, texto: "¿Tu pregunta aquí?" },
```

El `id` debe ser un número único.

## Stack

HTML, CSS y JavaScript vanilla. Sin dependencias.
