import React, { useEffect, useState } from 'react';

interface Product {
  productId: number;
  name: string;
  sku: string;
  price?: {
    regular?: { text?: string };
    special?: { text?: string };
  };
  inventory?: { isInStock?: boolean };
  image?: { alt?: string; url?: string };
  url: string;
}

interface GepyxisProps {
  collection?: {
    name?: string;
    products?: { items?: Product[] };
  };
}

const categories = [
  { name: 'Laptops', description: 'Equipos para trabajar y estudiar', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85' },
  { name: 'Computadoras', description: 'Tecnología para cada espacio', image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=900&q=85' },
  { name: 'Componentes', description: 'Mejora y personaliza tus equipos', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85' },
  { name: 'Redes', description: 'Conectividad y comunicación', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85' },
  { name: 'Almacenamiento', description: 'Espacio para tu información', image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=900&q=85' },
  { name: 'Accesorios', description: 'Complementos para tu tecnología', image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=900&q=85' }
];

const services = [
  { icon: '⚒', title: 'Soporte técnico', description: 'Atención y asistencia para tus equipos tecnológicos.' },
  { icon: '⌘', title: 'Instalación y configuración', description: 'Apoyo para poner en funcionamiento tus soluciones.' },
  { icon: '✦', title: 'Soluciones digitales', description: 'Alternativas tecnológicas para las necesidades de tu negocio.' }
];

const brands = [
  { name: 'Dell', style: 'dell', logo: 'https://cdn.simpleicons.org/dell/007DB8' },
  { name: 'Logitech', style: 'logitech', logo: 'https://cdn.simpleicons.org/logitech/00B8FC' },
  { name: 'Apple', style: 'apple', logo: 'https://cdn.simpleicons.org/apple/000000' },
  { name: 'Hikvision', style: 'hikvision', logo: 'https://cdn.simpleicons.org/hikvision/CC0000' },
  { name: 'HPE', style: 'hpe', logo: 'https://cdn.simpleicons.org/hpe/01A982' },
  { name: 'MSI', style: 'msi', logo: 'https://cdn.simpleicons.org/msi/FF0000' }
];

const slides = [
  {
    eyebrow: 'GEPYXIS · TECNOLOGÍA PARA TU NEGOCIO',
    title: 'Tecnología que impulsa tu empresa',
    description: 'Equipos, soluciones y soporte para llevar tus proyectos al siguiente nivel.',
    style: 'photo',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1800&q=85'
  },
  {
    eyebrow: 'EQUIPA TU ESPACIO',
    title: 'La tecnología que necesitas, en un solo lugar',
    description: 'Encuentra equipos y accesorios para trabajar, crear y conectar.',
    style: 'blue',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=85'
  },
  {
    eyebrow: 'SOLUCIONES PARA EMPRESAS',
    title: 'Más que productos, soluciones tecnológicas',
    description: 'Te acompañamos con asesoría, instalación y soporte especializado.',
    style: 'navy',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=85'
  }
];

const Gepyxis: React.FC<GepyxisProps> = ({ collection }) => {
  const products = collection?.products?.items ?? [];
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeBrand, setActiveBrand] = useState(0);
  const visibleBrands = 3;
  const previousBrands = () => setActiveBrand((current) => (current - 1 + brands.length) % brands.length);
  const nextBrands = () => setActiveBrand((current) => (current + 1) % brands.length);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  const previousSlide = () => setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  const nextSlide = () => setActiveSlide((current) => (current + 1) % slides.length);

  return (
    <main className="gepyxis-home">
      <style>{`
        .gepyxis-home{--blue:#073fae;--navy:#082b67;--ink:#102b55;--muted:#65748b;color:var(--ink);background:#fff;font-family:inherit}
        .gepyxis-home *{box-sizing:border-box}
        body:has(.gepyxis-home) footer:not(.gepyxis-footer),
        body:has(.gepyxis-home) .footer:not(.gepyxis-footer),
        body:has(.gepyxis-home) [class*="footer-bottom"]:not(.gepyxis-footer-bottom){display:none!important}
        .gepyxis-container{width:min(1440px,calc(100% - 64px));margin:0 auto}
        .gepyxis-hero{padding:10px 0 0}
        .gepyxis-slider{position:relative;overflow:hidden;min-height:300px;border-radius:15px;background:#eaf1ff;box-shadow:0 8px 25px rgba(9,48,112,.10)}
        .gepyxis-slide{position:relative;display:flex;align-items:center;min-height:300px;padding:42px 8%;isolation:isolate}
        .gepyxis-slide[hidden]{display:none}
        .gepyxis-slide--photo,.gepyxis-slide--blue,.gepyxis-slide--navy{color:#fff;background-position:center;background-size:cover;background-repeat:no-repeat}
        .gepyxis-slide--photo:before,.gepyxis-slide--blue:before,.gepyxis-slide--navy:before{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,rgba(3,23,55,.88),rgba(3,35,78,.66) 52%,rgba(3,35,78,.12))}
        .gepyxis-slide--photo{background-image:var(--slide-image)}.gepyxis-slide--blue{background-image:var(--slide-image)}.gepyxis-slide--navy{background-image:var(--slide-image)}
        .gepyxis-slide-copy{max-width:570px}
        .gepyxis-slide-eyebrow{display:block;margin-bottom:12px;color:#c9e2ff;font-size:12px;font-weight:800;letter-spacing:1.4px}
        .gepyxis-slide h1{margin:0 0 14px;color:#fff;font-size:clamp(30px,4vw,48px);font-weight:850;line-height:1.08}
        .gepyxis-slide p{max-width:510px;margin:0 0 23px;color:#eef5ff;font-size:16px;line-height:1.6}
        .gepyxis-hero-cta{display:inline-flex;gap:10px;padding:12px 21px;border-radius:30px;background:var(--blue);color:#fff;font-size:14px;font-weight:750;text-decoration:none}
        .gepyxis-slide--blue .gepyxis-hero-cta,.gepyxis-slide--navy .gepyxis-hero-cta{background:#fff;color:var(--blue)}
        .gepyxis-slider-arrow{position:absolute;z-index:2;top:50%;display:grid;place-items:center;width:42px;height:42px;border:1px solid rgba(255,255,255,.75);border-radius:50%;background:rgba(7,43,103,.72);color:#fff;font-size:25px;cursor:pointer;transform:translateY(-50%)}
        .gepyxis-slider-arrow--prev{left:16px}.gepyxis-slider-arrow--next{right:16px}
        .gepyxis-dots{position:absolute;z-index:2;bottom:15px;left:50%;display:flex;gap:9px;transform:translateX(-50%)}
        .gepyxis-dot{width:10px;height:10px;padding:0;border:0;border-radius:50%;background:rgba(255,255,255,.65);cursor:pointer}
        .gepyxis-dot.is-active{width:25px;border-radius:8px;background:#fff}
        .gepyxis-brands{display:grid;grid-template-columns:205px 1fr;align-items:center;gap:20px;margin:24px 0 8px;padding:15px 18px;border:1px solid #e1e9f8;border-radius:14px;background:#fff}
        .gepyxis-brands-title{color:var(--blue);font-size:19px;font-weight:850;line-height:1.2}
        .gepyxis-brand-carousel{display:grid;grid-template-columns:34px 1fr 34px;align-items:center;gap:10px;min-width:0}
        .gepyxis-brand-list{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;min-width:0}
        .gepyxis-brand{display:grid;place-items:center;min-height:65px;padding:12px;border:1px solid #edf1f8;border-radius:10px;background:#fff;min-width:0}
        .gepyxis-brand img{display:block;max-width:100%;width:auto;height:auto;max-height:42px;object-fit:contain}
        .gepyxis-brand-name{color:#26364d;font-size:13px;font-weight:800;text-align:center}
        .gepyxis-brand-arrow{display:grid;place-items:center;width:32px;height:32px;border:1px solid #dce6f5;border-radius:50%;background:#f7faff;color:var(--blue);font-size:20px;cursor:pointer}
        .gepyxis-section{padding:45px 0}.gepyxis-section--soft{background:#f5f8ff}
        .gepyxis-section-heading{display:flex;align-items:end;justify-content:space-between;gap:20px;margin-bottom:24px}
        .gepyxis-eyebrow{display:block;margin-bottom:7px;color:#1260cf;font-size:11px;font-weight:850;letter-spacing:1.3px;text-transform:uppercase}
        .gepyxis-section-heading h2{margin:0;color:var(--ink);font-size:clamp(23px,3vw,31px);font-weight:850}
        .gepyxis-section-heading p{margin:7px 0 0;color:var(--muted);font-size:14px}
        .gepyxis-text-link{color:var(--blue);font-size:14px;font-weight:750;text-decoration:none;white-space:nowrap}
        .gepyxis-products{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}
        .gepyxis-product{overflow:hidden;border:1px solid #e4eaf4;border-radius:15px;background:#fff;box-shadow:0 4px 14px rgba(16,43,85,.045);transition:transform .2s,box-shadow .2s}
        .gepyxis-product:hover{transform:translateY(-4px);box-shadow:0 12px 25px rgba(16,43,85,.11)}
        .gepyxis-product-image{display:flex;align-items:center;justify-content:center;height:205px;padding:17px;background:linear-gradient(180deg,#fff,#f8faff)}
        .gepyxis-product-image img{width:100%;height:100%;object-fit:contain}
        .gepyxis-product-info{padding:16px;border-top:1px solid #edf1f7}
        .gepyxis-product-info h3{display:-webkit-box;overflow:hidden;min-height:42px;margin:0 0 10px;color:#26364d;font-size:14px;font-weight:650;line-height:1.5;-webkit-box-orient:vertical;-webkit-line-clamp:2}
        .gepyxis-product-price{margin:0 0 13px;color:var(--blue);font-size:19px;font-weight:850}
        .gepyxis-product-button{display:block;padding:11px 14px;border-radius:9px;background:var(--blue);color:#fff;font-size:13px;font-weight:750;text-align:center;text-decoration:none}
        .gepyxis-product-button:hover{background:#062f83;color:#fff}
        .gepyxis-empty-products{grid-column:1/-1;padding:35px;border:1px dashed #cbd5e1;border-radius:12px;color:var(--muted);text-align:center}
        .gepyxis-categories{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
        .gepyxis-category{display:block;overflow:hidden;border:1px solid #e3eaf6;border-radius:14px;background:#fff;text-decoration:none;box-shadow:0 4px 13px rgba(16,43,85,.05);transition:transform .2s,border-color .2s}
        .gepyxis-category:hover{transform:translateY(-4px);border-color:#9bbcff}
        .gepyxis-category-image{display:block;width:100%;height:165px;object-fit:cover;background:#edf3fb}
        .gepyxis-category-copy{padding:15px 17px 17px}
        .gepyxis-category h3{margin:0 0 5px;color:var(--ink);font-size:16px;font-weight:800}
        .gepyxis-category p{margin:0;color:var(--muted);font-size:13px;line-height:1.5}
        .gepyxis-services{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
        .gepyxis-service{padding:25px;border:1px solid #e3eaf6;border-radius:15px;background:#fff;box-shadow:0 5px 16px rgba(16,43,85,.04)}
        .gepyxis-service-icon{display:grid;place-items:center;width:52px;height:52px;margin-bottom:16px;border-radius:14px;background:#eaf1ff;color:var(--blue);font-size:25px}
        .gepyxis-service h3{margin:0 0 9px;color:var(--ink);font-size:17px;font-weight:800}
        .gepyxis-service p{margin:0;color:var(--muted);font-size:13px;line-height:1.7}
        .gepyxis-contact{display:flex;align-items:center;justify-content:space-between;gap:25px;padding:34px 38px;border-radius:17px;background:linear-gradient(110deg,#082b67,#075bea);color:#fff}
        .gepyxis-contact h2{margin:0 0 9px;color:#fff;font-size:clamp(22px,3vw,30px);font-weight:850}
        .gepyxis-contact p{max-width:650px;margin:0;color:#e1ebff;font-size:14px;line-height:1.6}
        .gepyxis-contact-link{flex:0 0 auto;padding:13px 23px;border-radius:30px;background:#fff;color:var(--blue);font-size:14px;font-weight:850;text-decoration:none}
        .gepyxis-footer{
  position:relative;
  left:50%;
  width:100vw;
  margin-left:-50vw;
  margin-top:10px;
  padding:42px 0 18px;
  background:#071f49;
  color:#dce7fb;
}
        .gepyxis-footer-grid{display:grid;grid-template-columns:1.5fr 1fr 1fr 1.2fr;gap:30px}
        .gepyxis-footer h3{margin:0 0 15px;color:#fff;font-size:15px;font-weight:800}
        .gepyxis-footer p{margin:0;color:#c2d1e9;font-size:13px;line-height:1.75}
        .gepyxis-footer a{display:block;width:fit-content;margin:0 0 10px;color:#c2d1e9;font-size:13px;text-decoration:none}
        .gepyxis-footer a:hover{color:#fff;text-decoration:underline}
        .gepyxis-footer-brand{margin-bottom:13px;color:#fff;font-size:25px;font-weight:900;letter-spacing:-.8px}
        .gepyxis-footer-bottom{display:flex;justify-content:space-between;gap:15px;margin-top:30px;padding-top:17px;border-top:1px solid rgba(255,255,255,.15);color:#aebfda;font-size:12px}
        @media(max-width:950px){.gepyxis-brand-list{grid-template-columns:repeat(3,minmax(0,1fr))}.gepyxis-brands{grid-template-columns:1fr}.gepyxis-products{grid-template-columns:repeat(2,minmax(0,1fr))}.gepyxis-categories{grid-template-columns:repeat(2,minmax(0,1fr))}.gepyxis-footer-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
        @media(max-width:650px){.gepyxis-container{width:min(100% - 28px,1240px)}.gepyxis-slider,.gepyxis-slide{min-height:330px}.gepyxis-slide{padding:35px 45px}.gepyxis-slide h1{font-size:29px}.gepyxis-slide p{font-size:13px}.gepyxis-slider-arrow{width:32px;height:32px;font-size:19px}.gepyxis-slider-arrow--prev{left:8px}.gepyxis-slider-arrow--next{right:8px}.gepyxis-brand-list{grid-template-columns:repeat(2,minmax(0,1fr))}.gepyxis-brand-carousel{grid-template-columns:28px 1fr 28px;gap:6px}.gepyxis-brand-list{grid-template-columns:repeat(2,minmax(0,1fr))}.gepyxis-category-image{height:145px}.gepyxis-section{padding:34px 0}.gepyxis-section-heading{align-items:flex-start;flex-direction:column;gap:9px}.gepyxis-products{gap:11px}.gepyxis-product-image{height:150px;padding:11px}.gepyxis-product-info{padding:11px}.gepyxis-product-info h3{font-size:12px}.gepyxis-product-price{font-size:16px}.gepyxis-categories,.gepyxis-services{grid-template-columns:1fr}.gepyxis-contact{align-items:flex-start;flex-direction:column;padding:27px 22px}.gepyxis-footer-grid{grid-template-columns:1fr 1fr;gap:24px 16px}.gepyxis-footer-bottom{flex-direction:column}}
        @media(prefers-reduced-motion:reduce){.gepyxis-home *{transition-duration:.01ms!important}}
      `}</style>

      <section className="gepyxis-hero" aria-label="Promociones GEPYXIS">
        <div className="gepyxis-container">
          <div className="gepyxis-slider">
            {slides.map((slide, index) => (
              <div
                key={slide.title}
                className={`gepyxis-slide gepyxis-slide--${slide.style}`}
                hidden={activeSlide !== index}
                aria-hidden={activeSlide !== index}
                style={{ ['--slide-image' as any]: `url("${slide.image}")` }}
              >
                <div className="gepyxis-slide-copy">
                  <span className="gepyxis-slide-eyebrow">{slide.eyebrow}</span>
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                  <a className="gepyxis-hero-cta" href="/products">Descubre más <span aria-hidden="true">→</span></a>
                </div>
              </div>
            ))}
            <button className="gepyxis-slider-arrow gepyxis-slider-arrow--prev" type="button" onClick={previousSlide} aria-label="Banner anterior">‹</button>
            <button className="gepyxis-slider-arrow gepyxis-slider-arrow--next" type="button" onClick={nextSlide} aria-label="Banner siguiente">›</button>
            <div className="gepyxis-dots" aria-label="Seleccionar banner">
              {slides.map((slide, index) => (
                <button key={slide.title} type="button" className={`gepyxis-dot ${activeSlide === index ? 'is-active' : ''}`} onClick={() => setActiveSlide(index)} aria-label={`Mostrar banner ${index + 1}`} aria-current={activeSlide === index ? 'true' : undefined} />
              ))}
            </div>
          </div>
          <section className="gepyxis-brands" aria-label="Marcas">
            <div className="gepyxis-brands-title">¡Encuentra las<br />mejores marcas!</div>
            <div className="gepyxis-brand-carousel">
              <button className="gepyxis-brand-arrow" type="button" onClick={previousBrands} aria-label="Marcas anteriores">‹</button>
              <div className="gepyxis-brand-list">
                {Array.from({ length: visibleBrands }, (_, offset) => brands[(activeBrand + offset) % brands.length]).map((brand) => (
                  <div className={`gepyxis-brand gepyxis-brand--${brand.style}`} key={brand.name}>
                    <img src={brand.logo} alt={`Logotipo de ${brand.name}`} loading="eager" onError={(event) => { event.currentTarget.style.display = 'none'; }} />
                    <span className="gepyxis-brand-name">{brand.name}</span>
                  </div>
                ))}
              </div>
              <button className="gepyxis-brand-arrow" type="button" onClick={nextBrands} aria-label="Marcas siguientes">›</button>
            </div>
          </section>
        </div>
      </section>

      <section className="gepyxis-section gepyxis-section--soft">
        <div className="gepyxis-container">
          <div className="gepyxis-section-heading">
            <div><span className="gepyxis-eyebrow">Selección GEPYXIS</span><h2>Productos destacados</h2><p>Conoce algunos de los productos de nuestro catálogo.</p></div>
            <a href="/products" className="gepyxis-text-link">Ver todos los productos →</a>
          </div>
          <div className="gepyxis-products">
            {products.length > 0 ? products.slice(0, 4).map((product) => {
              const price = product.price?.special?.text || product.price?.regular?.text || '';
              return (
                <article className="gepyxis-product" key={product.productId}>
                  <a href={product.url} className="gepyxis-product-image" aria-label={`Ver ${product.name}`}>
                    {product.image?.url && <img src={product.image.url} alt={product.image.alt || product.name} />}
                  </a>
                  <div className="gepyxis-product-info">
                    <h3>{product.name}</h3>
                    {price && <p className="gepyxis-product-price">{price}</p>}
                    <a href={product.url} className="gepyxis-product-button">Ver producto</a>
                  </div>
                </article>
              );
            }) : <div className="gepyxis-empty-products">Los productos destacados aparecerán aquí cuando la colección tenga productos disponibles.</div>}
          </div>
        </div>
      </section>

      <section className="gepyxis-section">
        <div className="gepyxis-container">
          <div className="gepyxis-section-heading">
            <div><span className="gepyxis-eyebrow">Explora el catálogo</span><h2>Categorías destacadas</h2><p>Encuentra fácilmente la tecnología que estás buscando.</p></div>
            <a href="/products" className="gepyxis-text-link">Explorar catálogo →</a>
          </div>
          <div className="gepyxis-categories">
            {categories.map((category) => (
              <a href="/products" className="gepyxis-category" key={category.name}>
                <img className="gepyxis-category-image" src={category.image} alt={`Imagen de ${category.name}`} loading="lazy" />
                <div className="gepyxis-category-copy"><h3>{category.name}</h3><p>{category.description}</p></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="gepyxis-section gepyxis-section--soft">
        <div className="gepyxis-container">
          <div className="gepyxis-section-heading"><div><span className="gepyxis-eyebrow">Más que productos</span><h2>Servicios tecnológicos</h2><p>También te apoyamos con soluciones y asistencia especializada.</p></div></div>
          <div className="gepyxis-services">
            {services.map((service) => <article className="gepyxis-service" key={service.title}><div className="gepyxis-service-icon" aria-hidden="true">{service.icon}</div><h3>{service.title}</h3><p>{service.description}</p></article>)}
          </div>
        </div>
      </section>

      <section id="contacto" className="gepyxis-section">
        <div className="gepyxis-container">
          <div className="gepyxis-contact">
            <div><h2>¿Buscas una solución tecnológica?</h2><p>Cuéntanos qué necesitas. Podemos orientarte sobre productos y servicios para tu proyecto.</p></div>
            <a href="mailto:contacto@gepyxis.mx" className="gepyxis-contact-link">Contáctanos →</a>
          </div>
        </div>
      </section>

      <footer className="gepyxis-footer">
        <div className="gepyxis-container">
          <div className="gepyxis-footer-grid">
            <div><div className="gepyxis-footer-brand">GE PYXIS</div><p>Tecnología, productos y soluciones para acompañar tus proyectos y las necesidades de tu negocio.</p></div>
            <div><h3>Explora</h3><a href="/">Inicio</a><a href="/products">Productos</a><a href="#servicios">Servicios</a><a href="#contacto">Contacto</a></div>
            <div><h3>Categorías</h3><a href="/products">Laptops y computadoras</a><a href="/products">Componentes</a><a href="/products">Redes</a><a href="/products">Accesorios</a></div>
            <div><h3>Atención</h3><p>¿Tienes dudas o necesitas orientación? Ponte en contacto con nuestro equipo.</p><a href="mailto:contacto@gepyxis.mx">contacto@gepyxis.mx</a></div>
          </div>
          <div className="gepyxis-footer-bottom"><span>© {new Date().getFullYear()} GEPYXIS. Todos los derechos reservados.</span><span>Soluciones tecnológicas para ti y tu empresa.</span></div>
        </div>
      </footer>
    </main>
  );
};

export const layout = { areaId: 'content', sortOrder: 10 };

export const query = `
  query Query {
    collection(code: "homepage") {
      name
      products {
        items {
          ...Product
        }
      }
    }
  }
`;

export const fragments = `
  fragment Product on Product {
    productId
    name
    sku
    price {
      regular { value text }
      special { value text }
    }
    inventory { isInStock }
    image { alt url }
    url
  }
`;

export default Gepyxis;
