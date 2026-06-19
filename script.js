gsap.registerPlugin(ScrollTrigger);

// ── Barra de progreso ──
gsap.to("#progressBar", {
  scaleX: 1,
  ease: "none",
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
  transformOrigin: "left center",
  scaleX: 0,
});

// Inicio (barra parte de 0)
gsap.set("#progressBar", { scaleX: 0 });

ScrollTrigger.create({
  trigger: "body",
  start: "top top",
  end: "bottom bottom",
  scrub: 0.3,
  onUpdate: (self) => {
    gsap.set("#progressBar", { scaleX: self.progress });
  }
});

// ── Portada: entrada ──
const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
tl.fromTo(".portada-numero", { x: -80, opacity: 0 }, { x: 0, opacity: 1, duration: 1 })
  .fromTo(".portada-meta", { opacity: 0 }, { opacity: 1, duration: 0.6 }, "-=0.4")
  .fromTo(".portada-imagen-slot", { x: 60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7 }, "-=0.3")
  .fromTo(".portada-titulo", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.4");

// ── Scroll reveals ──
gsap.utils.toArray(".reveal:not(#portada .reveal)").forEach(el => {
  gsap.fromTo(el,
    { opacity: 0, y: 24 },
    {
      opacity: 1, y: 0, duration: 0.75, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play reverse play reverse" }
    }
  );
});

gsap.utils.toArray(".slide-left").forEach(el => {
  gsap.fromTo(el,
    { opacity: 0, x: -50 },
    {
      opacity: 1, x: 0, duration: 0.8, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play reverse play reverse" }
    }
  );
});

gsap.utils.toArray(".slide-right:not(#portada .slide-right)").forEach(el => {
  gsap.fromTo(el,
    { opacity: 0, x: 50 },
    {
      opacity: 1, x: 0, duration: 0.8, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play reverse play reverse" }
    }
  );
});

gsap.utils.toArray(".slide-up:not(#portada .slide-up)").forEach(el => {
  gsap.fromTo(el,
    { opacity: 0, y: 40 },
    {
      opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play reverse play reverse" }
    }
  );
});

gsap.utils.toArray(".scale-in").forEach(el => {
  gsap.fromTo(el,
    { opacity: 0, scale: 0.88 },
    {
      opacity: 1, scale: 1, duration: 0.9, ease: "back.out(1.4)",
      scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play reverse play reverse" }
    }
  );
});

// ── Pull quotes: línea izquierda crece ──
gsap.utils.toArray(".pullquote").forEach(el => {
  gsap.fromTo(el,
    { borderLeftWidth: el.classList.contains("centro") ? undefined : "0px", opacity: 0 },
    {
      borderLeftWidth: el.classList.contains("centro") ? undefined : "6px",
      opacity: 1, duration: 0.7, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play reverse play reverse" }
    }
  );
});

// ── Stamps: tambaleo ──
gsap.utils.toArray(".stamp:not(#portada .stamp)").forEach((el, i) => {
  gsap.fromTo(el,
    { rotation: -6, opacity: 0, scale: 0.7 },
    {
      rotation: i % 2 === 0 ? -1 : 1,
      opacity: 1, scale: 1, duration: 0.5, ease: "back.out(2)",
      scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play reverse play reverse" }
    }
  );
});

// ── Cierre: letras separadas ──
const cierreH2 = document.querySelector("#cierre h2");
if (cierreH2) {
  gsap.fromTo(cierreH2,
    { letterSpacing: "20px", opacity: 0 },
    {
      letterSpacing: "4px", opacity: 1, duration: 1.2, ease: "power3.out",
      scrollTrigger: { trigger: cierreH2, start: "top 85%", toggleActions: "play reverse play reverse" }
    }
  );
}

// ── Líneas rojas: crecer ──
gsap.utils.toArray(".linea-roja").forEach(el => {
  gsap.fromTo(el,
    { scaleX: 0, transformOrigin: "left" },
    {
      scaleX: 1, duration: 0.8, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play reverse play reverse" }
    }
  );
});

// ── Parallax sutil en slots de imagen ──
gsap.utils.toArray(".img-slot").forEach(el => {
  gsap.to(el, {
    y: -20,
    ease: "none",
    scrollTrigger: {
      trigger: el,
      start: "top bottom",
      end: "bottom top",
      scrub: 1.5
    }
  });
});
