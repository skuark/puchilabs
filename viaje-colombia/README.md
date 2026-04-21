# Gastos Colombia 2026

Registro rápido de gastos de viaje. Single-page app sin dependencias.

## Features

- Añadir gasto con importe, nota y categoría (comida, transporte, alojamiento, ocio, otro)
- Total acumulado visible en todo momento
- Subtotal por día
- Selector de moneda: COP / EUR / USD
- Agrupación por días con etiquetas "Hoy" / "Ayer"
- Persistencia en LocalStorage (los datos sobreviven al cierre del navegador)
- Eliminar gastos individuales o borrar todo

## Uso

Abre `index.html` directamente en el navegador o sirve la carpeta con cualquier servidor estático.

```bash
# Desde la raíz del repo (usa el servidor de desarrollo de puchilabs)
npm start
# Luego: http://localhost:3000/viaje-colombia/
```

## Stack

HTML · CSS · JavaScript vanilla · LocalStorage
