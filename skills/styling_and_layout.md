# Habilidad de Desarrollo: Estilos y Maquetación Brutalista (styling_and_layout)

Esta habilidad cubre los principios estéticos y las técnicas CSS implementadas en **"Geometrías Vivas"** para lograr un fanzine digital de alta gama con estética analógica brutalista y diseño asimétrico.

---

## 1. El Sistema de Diseño Brutalista

La estética brutalista simula un fanzine físico impreso en fotocopiadora. Sus pilares principales en este código son:

### Paleta de Colores (Variables CSS)
Los colores están centralizados en la pseudo-clase `:root`:
```css
:root {
  --negro: #0a0a0a;       /* Negro profundo de tinta de fotocopia */
  --blanco: #f2ede6;      /* Blanco hueso/papel antiguo */
  --rojo: #d10000;        /* Rojo vivo para acentos políticos y viscerales */
  --gris: #2a2a2a;        /* Gris oscuro de contraste */
  --gris-claro: #b0a89a;  /* Gris papel/metadatos de bajo contraste */
}
```

### Tipografía
Utiliza tres familias tipográficas de Google Fonts con propósitos muy claros:
* **`Bebas Neue`** (`sans-serif`): Títulos masivos, números de portada y pie de página. Aporta peso visual y verticalidad.
* **`IBM Plex Mono`** (`monospace`): Texto de lectura, metadatos e información secundaria. Genera un aspecto técnico, preciso y de catálogo analógico.
* **`Special Elite`** (`serif`): Citas destacadas (`.pullquote`). Simula el golpe físico de una máquina de escribir antigua.

### Superposición de Ruido (Noise Overlay)
Para romper la limpieza estéril del render digital, se aplica un patrón de ruido fractal SVG infinito y fijo sobre todo el cuerpo:
```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 9999;
  opacity: 0.6;
}
```
* **Nota técnica**: Esta técnica no consume ancho de banda y proporciona textura granulada orgánica instantánea.

---

## 2. Rejillas de Collage Asimétricas (`.collage-grid`)

El fanzine abandona el flujo vertical convencional en favor de rejillas modulares inspiradas en recortes de prensa:

### Estructura Base
```css
.collage-grid {
  display: grid;
  gap: 0; /* Brutalismo: Los elementos a menudo se tocan directamente */
}
```

### Layout de Sección 1 (Texto / Imagen Dividida)
Usa una proporción asimétrica de $3:2$ donde el texto domina y está separado por una línea divisoria de 3px.
```css
.s1-layout {
  grid-template-columns: 3fr 2fr;
  grid-template-rows: auto;
  align-items: start;
}
```

### Layout de Sección 2 (Pantalla Completa a Dos Columnas)
Combina un slot de imagen gigante y luego subdivide el texto en dos columnas independientes para simular prensa libre.
```css
.s2-layout {
  grid-template-columns: 1fr;
}
```

### Layout de Sección 3 (Tres Columnas)
Divide el lienzo en $2:1:2$ columnas. La del centro sirve como ancla visual con imágenes pequeñas y bordes de contraste `#333`.
```css
.s3-layout {
  grid-template-columns: 2fr 1fr 2fr;
  gap: 0;
}
```

---

## 3. Comportamiento Responsivo (`@media`)

En pantallas menores a `680px`, las grillas se colapsan a una sola columna para garantizar la legibilidad en smartphones:
* Las proporciones asimétricas cambian a `1fr`.
* Las líneas divisorias verticales cambian de dirección a bordes inferiores (`border-bottom`) para delimitar las transiciones de contenido.
* El elemento `.margen-nota` (anotación vertical lateral) se oculta (`display: none`) para liberar espacio horizontal de pantalla.

---

## 4. Guías para Nuevos Diseños

Al crear una nueva sección del fanzine, sigue estas pautas para no romper la estética:
1. **Contraste Invertido**: Alterna secciones de fondo blanco (`--blanco`) con secciones invertidas de fondo negro (`--negro`). Esto mantiene dinámica la navegación.
2. **Bordes Gruesos**: Utiliza bordes sólidos de `3px solid var(--negro)` o `3px solid var(--rojo)` para divisiones temáticas.
3. **No uses Placeholders**: Para nuevos slots de imagen brutalistas, utiliza la clase `.img-slot` con la aspa brutalista en texto `✕` (`.cruz`) combinada con un patrón lineal repetitivo en el fondo:
   ```css
   background: repeating-linear-gradient(
     45deg,
     transparent,
     transparent 4px,
     rgba(128,128,128,0.07) 4px,
     rgba(128,128,128,0.07) 5px
   );
   ```
