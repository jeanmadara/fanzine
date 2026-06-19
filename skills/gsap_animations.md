# Habilidad de Desarrollo: Core de Animaciones GSAP (gsap_animations)

Esta habilidad documenta y especifica el funcionamiento del motor de animaciones interactivas en **"Geometrías Vivas"**, el cual utiliza **GSAP (GreenSock Animation Platform)** y su plugin **ScrollTrigger** para crear una experiencia inmersiva premium al hacer scroll.

---

## 1. Configuración de Plugins e Inicialización

El proyecto requiere cargar GSAP y ScrollTrigger mediante CDNs robustos antes del cierre del `body`. Posteriormente, se registra el plugin:
```javascript
gsap.registerPlugin(ScrollTrigger);
```

---

## 2. Barra de Progreso Superior (`#progressBar`)

La delgada barra roja de 4px fijada en la parte superior se escala horizontalmente según el porcentaje de lectura de la página:
```javascript
// Asegura que inicie en 0
gsap.set("#progressBar", { scaleX: 0 });

ScrollTrigger.create({
  trigger: "body",
  start: "top top",
  end: "bottom bottom",
  scrub: 0.3, // Añade un ligero retraso de suavizado
  onUpdate: (self) => {
    gsap.set("#progressBar", { scaleX: self.progress });
  }
});
```

---

## 3. Timeline de Carga Inicial (Intro Portada)

Para causar un gran impacto al abrir el fanzine, se utiliza una línea de tiempo secuencial (`gsap.timeline`) que orquesta la entrada de la portada con suavidad y retrasos relativos (`"-=0.X"`):
```javascript
const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

tl.fromTo(".portada-numero", { x: -80, opacity: 0 }, { x: 0, opacity: 1, duration: 1 })
  .fromTo(".portada-meta", { opacity: 0 }, { opacity: 1, duration: 0.6 }, "-=0.4")
  .fromTo(".portada-imagen-slot", { x: 60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7 }, "-=0.3")
  .fromTo(".portada-titulo", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.4");
```

---

## 4. Revelaciones al Hacer Scroll (Scroll Reveals Colectivos)

Para optimizar el rendimiento y automatizar la interacción de múltiples elementos al navegar, se transforman colecciones de selectores en arrays y se les asocia un `ScrollTrigger` dinámico:

### A. Desvanecimiento y Elevación (`.reveal`)
```javascript
gsap.utils.toArray(".reveal:not(#portada .reveal)").forEach(el => {
  gsap.fromTo(el,
    { opacity: 0, y: 24 },
    {
      opacity: 1, y: 0, duration: 0.75, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play reverse play reverse" }
    }
  );
});
```

> [!IMPORTANT]
> **Evitar Conflictos de Animación en la Portada**
> Los elementos ubicados dentro de la portada (`#portada`) se animan al cargar la página mediante una línea de tiempo secuencial dedicada (`tl`). 
> Para evitar condiciones de carrera donde `ScrollTrigger` inicialice estos mismos elementos con `opacity: 0` al estar en el viewport inicial, **siempre debemos excluirlos** de los disparadores generales usando la pseudo-clase CSS `:not(#portada .nombre-de-clase)`.
> Esto aplica a selectores como `.reveal`, `.slide-right`, `.slide-up` y `.stamp`.


### B. Desplazamientos Direccionales (`.slide-left` y `.slide-right`)
* `.slide-left`: Inicia con `x: -50` y se desplaza hacia su posición original.
* `.slide-right`: Inicia con `x: 50` y se desplaza hacia su posición original.
* Estos efectos son perfectos para flujos de collage donde los elementos visuales parecen encajarse desde los costados.

### C. Escalado Elástico (`.scale-in`)
Utilizado en slots pequeños y contenedores multimedia para simular una expansión elástica al entrar en el viewport:
```javascript
ease: "back.out(1.4)"
```

---

## 5. Efectos Especiales Avanzados

### Parallax Físico Suave en Slots (`.img-slot`)
Para dar tridimensionalidad al fanzine analógico, todas las cajas de imagen (`.img-slot`) se desplazan verticalmente a una velocidad distinta a la del scroll nativo:
```javascript
gsap.utils.toArray(".img-slot").forEach(el => {
  gsap.to(el, {
    y: -20,
    ease: "none",
    scrollTrigger: {
      trigger: el,
      start: "top bottom",
      end: "bottom top",
      scrub: 1.5 // El retraso físico que crea la sensación de flotación pesada
    }
  });
});
```

### Tambaleo de Sellos Brutalistas (`.stamp`)
Los sellos tienen una rotación por defecto de `-1deg`. Cuando el usuario hace scroll y entran en escena, tienen un rebote rotacional elástico dinámico:
```javascript
gsap.utils.toArray(".stamp:not(#portada .stamp)").forEach((el, i) => {
  gsap.fromTo(el,
    { rotation: -6, opacity: 0, scale: 0.7 },
    {
      rotation: i % 2 === 0 ? -1 : 1, // Alterna la inclinación según el índice
      opacity: 1, scale: 1, duration: 0.5, ease: "back.out(2)",
      scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play reverse play reverse" }
    }
  );
});
```

---

## 6. Pautas de Optimización

Al añadir nuevas animaciones en scroll:
1. **Evita animar propiedades costosas**: Modifica únicamente `transform` (`x`, `y`, `scale`, `rotation`) y `opacity`. Nunca animes márgenes, anchos, altos o propiedades de color en triggers continuos (`scrub`), ya que provocará caídas de frames (jank).
2. **Usa `toggleActions` correctamente**: Para disparadores de una sola vía (como textos que aparecen y se quedan fijos), usa `"play none none none"` para evitar cálculos redundantes de scroll inverso.
3. **Controla el `scrub`**: Un `scrub: true` se ata directamente al pixel del scroll. Un valor numérico como `scrub: 1.5` amortigua la velocidad de frenado, proporcionando mayor suavidad interactiva.
