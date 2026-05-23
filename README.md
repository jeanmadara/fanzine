# Geometrear la Resistencia: "GEOMETRÍAS VIVAS" 01

Este repositorio contiene la primera edición interactiva del fanzine **"Geometrías Vivas"** (`fanClaude.html`), una pieza de arte digital y pedagogía nacida del cansancio físico, político e institucional de los cuerpos creadores de danza contemporánea en Ecuador (2024).

---

## 🎨 Características del Fanzine

El fanzine combina una estética analógica brutalista y técnicas modernas de animación interactiva:
- **Estética Impresa (Papel)**: Textura granulada (ruido fractal SVG), tipografías suizas pesadas (`Bebas Neue`), citas mecanografiadas (`Special Elite`) y etiquetas de corte/sello (`.stamp`).
- **Interactividad Premium**: Construido con **GSAP** y **ScrollTrigger**. Al deslizar la página, las secciones cobran vida mediante desvanecimientos, desplazamientos controlados, efectos parallax y barras dinámicas de progreso.
- **Grillas Asimétricas**: Estructura fluida y responsiva que simula un colaje físico de recortes.

---

## 📦 Estructura de Archivos del Proyecto

El código está organizado de manera modular en los siguientes archivos:
* **[fanClaude.html](file:///c:/Users/jean/Desktop/code/html/fanzine/fanClaude.html)**: Estructura HTML5 semántica y cargadores de dependencias externas (GSAP y fuentes web).
* **[styles.css](file:///c:/Users/jean/Desktop/code/html/fanzine/styles.css)**: Hoja de estilos CSS brutalistas con variables, rejillas asimétricas de collage, efectos glitch y consultas de medios responsivos.
* **[script.js](file:///c:/Users/jean/Desktop/code/html/fanzine/script.js)**: Lógica interactiva con registros de ScrollTrigger de GSAP, líneas de tiempo de carga inicial y parallax dinámicos en slots de imágenes.

---

## 📂 Estructura de la Documentación

Hemos documentado a fondo la arquitectura de código y diseño del fanzine para permitir a desarrolladores y agentes de Inteligencia Artificial mantenerlo y expandirlo sin perder su esencia original.

### [🤖 Agentes de IA Especializados (agents.md)](file:///c:/Users/jean/Desktop/code/html/fanzine/agents.md)
Detalla los roles y promts de sistema para el equipo autónomo de desarrollo:
* **Diseñador Brutalista** (`BrutalistDesigner`)
* **Animador Interactivo GSAP** (`GSAPAnimator`)
* **Editor de Contenido Poético** (`ContentEditor`)
* **Integrador de Sistemas** (`SystemIntegrator`)

### [⚡ Habilidades y Manuales Técnicos (skills/)](file:///c:/Users/jean/Desktop/code/html/fanzine/skills/)
1. **[Estilos y Maquetación Brutalista](file:///c:/Users/jean/Desktop/code/html/fanzine/skills/styling_and_layout.md)**: Variables de color, tipografía web, patrón de ruido y diseño asimétrico de colajes responsivos.
2. **[Core de Animaciones GSAP](file:///c:/Users/jean/Desktop/code/html/fanzine/skills/gsap_animations.md)**: Líneas de tiempo, triggers de scroll fluidos, parallax en slots y optimización de rendimiento gráfico.
3. **[Arquitectura de Contenidos](file:///c:/Users/jean/Desktop/code/html/fanzine/skills/content_architecture.md)**: Estructuración poética de textos, maquetado de citas marginales, notas verticales y slots para imágenes.

---

## 🚀 Cómo Visualizarlo y Editarlo

1. **Visualización Directa**:
   Abre [fanClaude.html](file:///c:/Users/jean/Desktop/code/html/fanzine/fanClaude.html) directamente en cualquier navegador moderno.
   
2. **Modo Desarrollo (Recomendado)**:
   Si deseas realizar modificaciones visuales o de contenido, te recomendamos ejecutar un servidor de desarrollo local ligero para disfrutar de refresco en vivo (Live Reload) sin problemas de políticas CORS al cargar archivos o recursos complementarios.
   Puedes usar comandos sencillos de terminal en esta carpeta:
   - Con Python: `python -m http.server 8000` (y abre `http://localhost:8000/fanClaude.html`)
   - Con Node.js/NPX: `npx live-server` o `npx serve`

---

## ✊ Créditos y Filosofía

**Geometrías Vivas** no es solo un portafolio técnico; es un **documento vivo**. Plantea que la energía no es un recurso infinito enfocado en la productividad corporativa, sino un flujo sensible y colectivo que conecta territorio, memoria y presente.
