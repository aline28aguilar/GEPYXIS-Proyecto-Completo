import React, { useEffect, useState } from 'react';

const slides = [
  {
    eyebrow: 'GEPYXIS · TECNOLOGÍA PARA TI',
    title: 'Encuentra tu próximo equipo',
    description: 'Descubre laptops y equipos de cómputo para estudiar, trabajar y crear.',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1800&q=85'
  },
  {
    eyebrow: 'ACCESORIOS Y PERIFÉRICOS',
    title: 'Equipa tu espacio tecnológico',
    description: 'Conoce nuestra selección de accesorios y periféricos para complementar tus equipos.',
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1800&q=85'
  },
  {
    eyebrow: 'COMPONENTES Y HARDWARE',
    title: 'Tecnología para llevar tus ideas más lejos',
    description: 'Explora componentes y productos tecnológicos para tus proyectos.',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=1800&q=85'
  }
];

export default function CatalogBanner(): React.ReactElement {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  const previousSlide = () =>
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);

  const nextSlide = () =>
    setActiveSlide((current) => (current + 1) % slides.length);

  return (
    <section className="gepyxis-catalog-banner" aria-label="Promociones">
      <style>{`
        .gepyxis-catalog-banner{position:relative;overflow:hidden;margin:12px 0 28px;border-radius:16px;background:#082b67;box-shadow:0 8px 25px rgba(9,48,112,.10)}
        .gepyxis-catalog-slide{position:relative;display:flex;align-items:center;min-height:300px;padding:42px 9%;background-position:center;background-size:cover;color:#fff;isolation:isolate}
        .gepyxis-catalog-slide[hidden]{display:none}
        .gepyxis-catalog-slide:before{position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,rgba(3,23,55,.91),rgba(3,35,78,.68) 55%,rgba(3,35,78,.12));content:''}
        .gepyxis-catalog-copy{max-width:570px}
        .gepyxis-catalog-eyebrow{display:block;margin-bottom:12px;color:#c9e2ff;font-size:12px;font-weight:800;letter-spacing:1.4px}
        .gepyxis-catalog-copy h2{margin:0 0 14px;color:#fff;font-size:clamp(28px,4vw,44px);font-weight:850;line-height:1.1}
        .gepyxis-catalog-copy p{max-width:500px;margin:0 0 22px;color:#eef5ff;font-size:15px;line-height:1.6}
        .gepyxis-catalog-cta{display:inline-flex;padding:12px 22px;border-radius:30px;background:#fff;color:#073fae;font-size:14px;font-weight:800;text-decoration:none}
        .gepyxis-catalog-arrow{position:absolute;z-index:2;top:50%;display:grid;place-items:center;width:40px;height:40px;border:1px solid rgba(255,255,255,.7);border-radius:50%;background:rgba(7,43,103,.72);color:#fff;font-size:25px;cursor:pointer;transform:translateY(-50%)}
        .gepyxis-catalog-arrow--prev{left:16px}
        .gepyxis-catalog-arrow--next{right:16px}
        .gepyxis-catalog-dots{position:absolute;z-index:2;bottom:15px;left:50%;display:flex;gap:9px;transform:translateX(-50%)}
        .gepyxis-catalog-dot{width:10px;height:10px;padding:0;border:0;border-radius:50%;background:rgba(255,255,255,.65);cursor:pointer}
        .gepyxis-catalog-dot.is-active{width:25px;border-radius:8px;background:#fff}
        @media(max-width:650px){.gepyxis-catalog-slide{min-height:300px;padding:35px 45px}.gepyxis-catalog-copy h2{font-size:28px}.gepyxis-catalog-copy p{font-size:13px}.gepyxis-catalog-arrow{width:32px;height:32px;font-size:19px}.gepyxis-catalog-arrow--prev{left:8px}.gepyxis-catalog-arrow--next{right:8px}}
        @media(prefers-reduced-motion:reduce){.gepyxis-catalog-banner *{transition:none!important}}
      `}</style>

      {slides.map((slide, index) => (
        <div
          key={slide.title}
          className="gepyxis-catalog-slide"
          hidden={activeSlide !== index}
          aria-hidden={activeSlide !== index}
          style={{ backgroundImage: `url("${slide.image}")` }}
        >
          <div className="gepyxis-catalog-copy">
            <span className="gepyxis-catalog-eyebrow">{slide.eyebrow}</span>
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
            <a className="gepyxis-catalog-cta" href="/products">
              Explorar productos →
            </a>
          </div>
        </div>
      ))}

      <button
        className="gepyxis-catalog-arrow gepyxis-catalog-arrow--prev"
        type="button"
        onClick={previousSlide}
        aria-label="Banner anterior"
      >
        ‹
      </button>

      <button
        className="gepyxis-catalog-arrow gepyxis-catalog-arrow--next"
        type="button"
        onClick={nextSlide}
        aria-label="Banner siguiente"
      >
        ›
      </button>

      <div className="gepyxis-catalog-dots" aria-label="Seleccionar banner">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            className={`gepyxis-catalog-dot ${activeSlide === index ? 'is-active' : ''}`}
            onClick={() => setActiveSlide(index)}
            aria-label={`Mostrar banner ${index + 1}`}
            aria-current={activeSlide === index ? 'true' : undefined}
          />
        ))}
      </div>
    </section>
  );
}

export const layout = {
  areaId: 'productListingPageTop',
  sortOrder: 5
};
