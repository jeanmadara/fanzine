# Habilidad de Desarrollo: Arquitectura del Contenido (content_architecture)

Esta habilidad detalla los componentes semánticos y estructurales de contenido diseñados para sostener la narrativa fragmentada y de protesta poética de **"Geometrías Vivas"**. 

La arquitectura de este fanzine está diseñada para que el contenido literario y visual se integren íntimamente como recortes de papel en un lienzo físico.

---

## 1. Bloques Estructurales de Contenido

### A. Secciones Temáticas (`section`)
Cada sección actúa como una "página" física del fanzine, delimitada por un borde negro de 3px y configurada con posicionamiento relativo para albergar anotaciones marginales absolutas.
* **Sección Estándar**: Fondo beige (`--blanco`) y letras negras (`--negro`).
* **Sección Invertida (`.invertida`)**: Fondo negro (`--negro`), texto beige/blanco (`--blanco`) y acentos de color rojo vivo. Esto crea un quiebre visual que previene la fatiga de lectura.

### B. Etiquetas de Sello (`.stamp`)
Bloques decorativos tipográficos que simulan sellos de goma estampados a mano sobre el papel.
```html
<!-- Variación estándar (Rojo y borde rojo) -->
<div class="stamp">Origen</div>

<!-- Variación en fondo negro (Blanco y borde blanco) -->
<div class="stamp blanco">Contexto</div>
```
* **Diseño CSS**: Bordes de 3px de grosor, fuente `Bebas Neue`, padding corto, y una ligera rotación inicial de `-1deg` que GSAP anima elásticamente.

### C. Citas Destacadas (`.pullquote`)
Extractos poéticos de gran fuerza tipográfica que emulan el mecanografiado analógico mediante la fuente `Special Elite`.
* **Cita Lateral Estándar**:
  ```html
  <div class="pullquote slide-left">
    "el agotamiento físico, emocional y político"
  </div>
  ```
  Cuenta con un borde izquierdo rojo de 6px que crece dinámicamente mediante scroll.
* **Cita Central de Contraste (`.centro`)**:
  ```html
  <div class="pullquote centro">
    "transformar la precariedad en potencia creativa"
  </div>
  ```
  Elimina el borde izquierdo e introduce líneas gruesas rojas superior e inferior para encuadrar la frase en el centro de la columna.

### D. Notas Marginales y Metadatos (`.margen-nota`)
Anotaciones estéticas inspiradas en comentarios manuscritos al margen de las copias.
```html
<span class="margen-nota">Geometrías Vivas — Ecuador — 2024</span>
```
* **Diseño CSS**: Escritura en vertical (`writing-mode: vertical-rl`), rotada 180 grados para fluir de abajo hacia arriba en el borde izquierdo de la sección, con opacidad reducida (`0.6`) y tamaño de fuente micro (`0.55rem`).

### E. Espacios Gráficos Brutalistas (`.img-slot`)
Contenedores vacíos (que pueden albergar imágenes reales o mantenerse abstractos) diseñados para evocar el vaciado de las imprentas antes de la impresión definitiva:
* **Cruz Central (`.cruz`)**: Carácter en texto `✕` sobredimensionado y con opacidad reducida.
* **Clases de Altura Modulares**:
  * `.alto` (min-height: 260px)
  * `.medio` (min-height: 180px)
  * `.chico` (min-height: 120px)
  * `.full-w` (ancho 100%, min-height: 200px)

---

## 2. Líneas de Tensión y Paginación

Para guiar el flujo visual entre secciones, se utilizan elementos geométricos puros:
* **Línea Roja Estándar (`.linea-roja`)**: Bloque de color de 4px de alto. GSAP escala este elemento de izquierda a derecha (`scaleX: 1`) al entrar en pantalla.
* **Línea Doble Brutalista (`.linea-doble`)**: Dos bordes negros paralelos de diferente grosor (`3px` y `1px`), que imitan las guías de corte e imprenta.
* **Numerador de Página (`.pag-num`)**: Colocado en la esquina inferior derecha absoluta de cada sección, con opacidad reducida (`0.4`), usando la tipografía `Bebas Neue` y rodeado de guiones largos (ej. `— 02 —`).

---

## 3. Directrices Editoriales para el Agente Editor
Al redactar contenido nuevo:
1. **Fraccionar la Prosa**: Evita bloques continuos de más de 3 párrafos de cuerpo (`.cuerpo`). El texto en un fanzine debe respirar.
2. **Extraer la Esencia Poética**: Cada sección debe tener al menos una frase poderosa de 5 a 12 palabras que se convertirá en un `.pullquote` para capturar la atención rápida del lector.
3. **Respetar el Idioma**: Toda la narrativa original está escrita en un español expresivo, íntimo y reivindicativo de la cultura de danza en Ecuador. Las nuevas adiciones deben mantener este mismo espíritu y tono.
