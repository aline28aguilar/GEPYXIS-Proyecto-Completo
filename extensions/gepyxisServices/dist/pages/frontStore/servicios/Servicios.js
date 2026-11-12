import React from 'react';
const Servicios = ({ services: serviciosData })=>{
    return /*#__PURE__*/ React.createElement("main", {
        className: "gepyxis-services-page"
    }, /*#__PURE__*/ React.createElement("style", null, `
        .gepyxis-services-page {
          --blue: #075bea;
          --navy: #082b67;
          --ink: #102b55;
          --muted: #65748b;
          background: #fff;
          color: var(--ink);
          font-family: inherit;
        }

        .gepyxis-services-page * {
          box-sizing: border-box;
        }

        .services-container {
          width: min(1440px, calc(100% - 64px));
          margin: 0 auto;
        }

        /* Banner principal */
        .services-hero {
          position: relative;
          display: flex;
          align-items: center;
          min-height: 390px;
          overflow: hidden;
          background:
            linear-gradient(90deg, rgba(3, 24, 59, .65), rgba(3, 39, 91, .25)),
            url('/images/banner-gepyxis.png')
            center / cover no-repeat;
        }

        .services-hero-content {
          max-width: 720px;
          padding: 75px 0;
        }

        .services-eyebrow {
          display: block;
          margin-bottom: 15px;
          color: #a9ceff;
          font-size: 12px;
          font-weight: 850;
          letter-spacing: 1.8px;
        }

        .services-hero h1 {
          margin: 0 0 18px;
          color: #fff;
          font-size: clamp(35px, 5vw, 55px);
          font-weight: 850;
          line-height: 1.1;
        }

        .services-hero p {
          max-width: 590px;
          margin: 0 0 25px;
          color: #e4edff;
          font-size: 16px;
          line-height: 1.8;
        }

        .services-hero-button {
          display: inline-block;
          padding: 13px 24px;
          border-radius: 30px;
          background: var(--blue);
          color: #fff;
          font-size: 14px;
          font-weight: 800;
          text-decoration: none;
        }

        .services-hero-button:hover {
          background: #0049c7;
        }

        /* Introducción */
        .services-intro {
          padding: 65px 0 30px;
          text-align: center;
        }

        .services-intro span {
          color: var(--blue);
          font-size: 12px;
          font-weight: 850;
          letter-spacing: 1.6px;
          text-transform: uppercase;
        }

        .services-intro h2 {
          margin: 12px 0;
          color: var(--ink);
          font-size: clamp(27px, 4vw, 36px);
          font-weight: 850;
        }

        .services-intro p {
          max-width: 680px;
          margin: 0 auto;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.8;
        }

        /* Catálogo */
        .services-catalog {
          padding: 25px 0 75px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .service-card {
          overflow: hidden;
          border: 1px solid #e5ebf5;
          border-radius: 15px;
          background: #fff;
          box-shadow: 0 5px 18px rgba(16, 43, 85, .055);
          transition: transform .2s, box-shadow .2s;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 13px 28px rgba(16, 43, 85, .12);
        }

        .service-card-image {
          position: relative;
          height: 205px;
          overflow: hidden;
          background: #edf3fb;
        }

        .service-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .3s;
        }

        .service-card:hover .service-card-image img {
          transform: scale(1.04);
        }

        .service-card-category {
          position: absolute;
          bottom: 13px;
          left: 13px;
          padding: 7px 11px;
          border-radius: 20px;
          background: rgba(255,255,255,.95);
          color: var(--blue);
          font-size: 10px;
          font-weight: 850;
          letter-spacing: .5px;
        }

        .service-card-content {
          padding: 21px;
        }

        .service-card h3 {
          margin: 0 0 10px;
          color: var(--ink);
          font-size: 19px;
          font-weight: 800;
        }

        .service-card p {
          min-height: 72px;
          margin: 0 0 20px;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.8;
        }

        .service-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding-top: 16px;
          border-top: 1px solid #edf1f7;
        }

        .service-price {
          color: var(--blue);
          font-size: 13px;
          font-weight: 850;
        }

        .service-quote-button {
          display: inline-block;
          padding: 10px 14px;
          border-radius: 8px;
          background: var(--blue);
          color: #fff;
          font-size: 12px;
          font-weight: 800;
          text-decoration: none;
          white-space: nowrap;
        }

        .service-quote-button:hover {
          background: #0049c7;
        }

        /* Ventajas */
        .services-benefits {
          padding: 65px 0;
          background: #f5f8ff;
        }

        .services-benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 25px;
        }

        .services-benefit {
          padding: 22px;
          text-align: center;
        }

        .services-benefit-icon {
          display: grid;
          place-items: center;
          width: 54px;
          height: 54px;
          margin: 0 auto 15px;
          border-radius: 15px;
          background: #e3edff;
          color: var(--blue);
          font-size: 24px;
        }

        .services-benefit h3 {
          margin: 0 0 9px;
          color: var(--ink);
          font-size: 17px;
          font-weight: 800;
        }

        .services-benefit p {
          margin: 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.7;
        }

        /* Banner de contacto */
        .services-contact-section {
          padding: 65px 0;
        }

        .services-contact {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          padding: 38px;
          border-radius: 17px;
          background: linear-gradient(110deg, #082b67, #075bea);
        }

        .services-contact h2 {
          margin: 0 0 10px;
          color: #fff;
          font-size: clamp(23px, 3vw, 31px);
          font-weight: 850;
        }

        .services-contact p {
          max-width: 650px;
          margin: 0;
          color: #e2ecff;
          font-size: 14px;
          line-height: 1.7;
        }

        .services-contact a {
          flex-shrink: 0;
          padding: 14px 24px;
          border-radius: 30px;
          background: #fff;
          color: var(--blue);
          font-size: 14px;
          font-weight: 850;
          text-decoration: none;
        }

        /* Footer GEPYXIS */
        .gepyxis-services-footer {
          position: relative;
          left: 50%;
          width: 100vw;
          margin-left: -50vw;
          padding: 48px 0 20px;
          background: #071f49;
          color: #dce7fb;
        }

        .gepyxis-services-footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          gap: 35px;
        }

        .gepyxis-services-footer h3 {
          margin: 0 0 18px;
          color: #fff;
          font-size: 15px;
          font-weight: 800;
        }

        .gepyxis-services-footer p {
          margin: 0;
          color: #c2d1e9;
          font-size: 13px;
          line-height: 1.8;
        }

        .gepyxis-services-footer a {
          display: block;
          width: fit-content;
          margin: 0 0 12px;
          color: #c2d1e9;
          font-size: 13px;
          text-decoration: none;
          transition: color .2s;
        }

        .gepyxis-services-footer a:hover {
          color: #fff;
          text-decoration: underline;
        }

        .gepyxis-services-footer-brand {
          display: block;
          width: 155px;
          height: auto;
          max-height: 65px;
          margin-bottom: 16px;
          object-fit: contain;
          object-position: left center;
        }

        .gepyxis-services-footer-bottom {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          margin-top: 35px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,.15);
          color: #aebfda;
          font-size: 12px;
        }

        body:has(.gepyxis-services-footer) footer:not(.gepyxis-services-footer),
        body:has(.gepyxis-services-footer) .footer:not(.gepyxis-services-footer),
        body:has(.gepyxis-services-footer) [class*="footer-bottom"]:not(.gepyxis-services-footer-bottom) {
          display: none !important;
        }
        @media(max-width: 950px) {
          .services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .gepyxis-services-footer-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media(max-width: 650px) {
          .services-container {
            width: calc(100% - 30px);
          }

          .services-hero {
            min-height: 340px;
          }

          .services-hero-content {
            padding: 55px 0;
          }

          .services-grid,
          .services-benefits-grid {
            grid-template-columns: 1fr;
          }

          .services-intro {
            padding-top: 45px;
          }

          .services-contact {
            align-items: flex-start;
            flex-direction: column;
            padding: 28px 23px;
          }

          .gepyxis-services-footer {
            padding: 38px 0 18px;
          }

          .gepyxis-services-footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 28px 18px;
          }

          .gepyxis-services-footer-bottom {
            flex-direction: column;
          }
        }

        @media(max-width: 380px) {
          .gepyxis-services-footer-grid {
            grid-template-columns: 1fr;
          }
        }

        @media(prefers-reduced-motion: reduce) {
          .gepyxis-services-page * {
            transition-duration: .01ms !important;
          }
        }
      `), /*#__PURE__*/ React.createElement("section", {
        className: "services-hero"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "services-container"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "services-hero-content"
    }, /*#__PURE__*/ React.createElement("span", {
        className: "services-eyebrow"
    }, "GEPYXIS · TECNOLOGÍA Y SOLUCIONES"), /*#__PURE__*/ React.createElement("h1", null, "Soluciones tecnológicas para impulsar tu negocio"), /*#__PURE__*/ React.createElement("p", null, "Descubre nuestros servicios de asistencia, instalación y soluciones digitales. Estamos para ayudarte a encontrar lo que tu proyecto necesita."), /*#__PURE__*/ React.createElement("a", {
        href: "#catalogo-servicios",
        className: "services-hero-button"
    }, "Explorar servicios →")))), /*#__PURE__*/ React.createElement("section", {
        className: "services-intro"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "services-container"
    }, /*#__PURE__*/ React.createElement("span", null, "Conoce lo que hacemos"), /*#__PURE__*/ React.createElement("h2", null, "Nuestro catálogo de servicios"), /*#__PURE__*/ React.createElement("p", null, "Ponemos a tu alcance diferentes soluciones tecnológicas para acompañarte en tus actividades personales y empresariales."))), /*#__PURE__*/ React.createElement("section", {
        className: "services-catalog",
        id: "catalogo-servicios"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "services-container"
    }, (serviciosData?.items?.length ?? 0) > 0 ? /*#__PURE__*/ React.createElement("div", {
        className: "services-grid"
    }, serviciosData.items.map((service)=>/*#__PURE__*/ React.createElement("article", {
            className: "service-card",
            key: service.serviceId
        }, /*#__PURE__*/ React.createElement("div", {
            className: "service-card-image"
        }, service.image ? /*#__PURE__*/ React.createElement("img", {
            src: service.image,
            alt: service.name,
            loading: "lazy"
        }) : /*#__PURE__*/ React.createElement("div", {
            style: {
                display: 'grid',
                placeItems: 'center',
                width: '100%',
                height: '100%',
                color: '#075bea',
                fontWeight: 800,
                fontSize: '20px'
            }
        }, "GEPYXIS")), /*#__PURE__*/ React.createElement("div", {
            className: "service-card-content"
        }, /*#__PURE__*/ React.createElement("h3", null, /*#__PURE__*/ React.createElement("a", {
            href: `/servicios/${service.uuid}`
        }, service.name)), /*#__PURE__*/ React.createElement("div", {
            className: "service-card-footer"
        }, /*#__PURE__*/ React.createElement("span", {
            className: "service-price"
        }, service.priceType === 'fixed' && service.price !== null ? `$${service.price.toFixed(2)}` : service.priceType === 'starting' && service.price !== null ? `Desde $${service.price.toFixed(2)}` : 'Cotización'), /*#__PURE__*/ React.createElement("a", {
            href: `/contacto?servicio=${service.serviceId}&tipo=solicitud`,
            className: "service-quote-button"
        }, "Solicitar →"), /*#__PURE__*/ React.createElement("a", {
            href: `/contacto?servicio=${service.serviceId}&tipo=cotizacion`,
            className: "service-quote-button"
        }, "Cotizar →")))))) : /*#__PURE__*/ React.createElement("p", {
        style: {
            textAlign: 'center',
            color: '#65748b',
            padding: '30px 0'
        }
    }, "Actualmente no hay servicios disponibles."))), /*#__PURE__*/ React.createElement("section", {
        className: "services-benefits"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "services-container"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "services-intro",
        style: {
            padding: '0 0 30px'
        }
    }, /*#__PURE__*/ React.createElement("span", null, "La experiencia GEPYXIS"), /*#__PURE__*/ React.createElement("h2", null, "¿Por qué elegirnos?"), /*#__PURE__*/ React.createElement("p", null, "Buscamos ofrecer alternativas tecnológicas que se adapten a cada necesidad.")), /*#__PURE__*/ React.createElement("div", {
        className: "services-benefits-grid"
    }, /*#__PURE__*/ React.createElement("article", {
        className: "services-benefit"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "services-benefit-icon"
    }, "✦"), /*#__PURE__*/ React.createElement("h3", null, "Atención personalizada"), /*#__PURE__*/ React.createElement("p", null, "Soluciones de acuerdo con las necesidades de cada proyecto.")), /*#__PURE__*/ React.createElement("article", {
        className: "services-benefit"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "services-benefit-icon"
    }, "⚙"), /*#__PURE__*/ React.createElement("h3", null, "Soluciones tecnológicas"), /*#__PURE__*/ React.createElement("p", null, "Opciones para mejorar tus equipos, procesos y espacios.")), /*#__PURE__*/ React.createElement("article", {
        className: "services-benefit"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "services-benefit-icon"
    }, "⌘"), /*#__PURE__*/ React.createElement("h3", null, "Acompañamiento"), /*#__PURE__*/ React.createElement("p", null, "Orientación para encontrar la alternativa que necesitas."))))), /*#__PURE__*/ React.createElement("section", {
        className: "services-contact-section"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "services-container"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "services-contact"
    }, /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("h2", null, "¿Tienes un proyecto en mente?"), /*#__PURE__*/ React.createElement("p", null, "Cuéntanos qué necesitas y conoce las opciones que GEPYXIS tiene para ti.")), /*#__PURE__*/ React.createElement("a", {
        href: "/contacto"
    }, "Contáctanos →")))), /*#__PURE__*/ React.createElement("footer", {
        className: "gepyxis-services-footer"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "services-container"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "gepyxis-services-footer-grid"
    }, /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("img", {
        className: "gepyxis-services-footer-brand",
        src: "/images/logogepyxis.jpg",
        alt: "GEPYXIS"
    }), /*#__PURE__*/ React.createElement("p", null, "Tecnología, productos y soluciones para acompañar tus proyectos y las necesidades de tu negocio.")), /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("h3", null, "Explora"), /*#__PURE__*/ React.createElement("a", {
        href: "/"
    }, "Inicio"), /*#__PURE__*/ React.createElement("a", {
        href: "/products"
    }, "Productos"), /*#__PURE__*/ React.createElement("a", {
        href: "/servicios"
    }, "Servicios"), /*#__PURE__*/ React.createElement("a", {
        href: "/contacto"
    }, "Contacto")), /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("h3", null, "Categorías"), /*#__PURE__*/ React.createElement("a", {
        href: "/products"
    }, "Laptops y computadoras"), /*#__PURE__*/ React.createElement("a", {
        href: "/products"
    }, "Componentes"), /*#__PURE__*/ React.createElement("a", {
        href: "/products"
    }, "Redes"), /*#__PURE__*/ React.createElement("a", {
        href: "/products"
    }, "Accesorios")), /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("h3", null, "Atención"), /*#__PURE__*/ React.createElement("p", null, "¿Tienes dudas o necesitas orientación? Ponte en contacto con nuestro equipo."), /*#__PURE__*/ React.createElement("a", {
        href: "mailto:contacto@gepyxis.mx"
    }, "contacto@gepyxis.mx"))), /*#__PURE__*/ React.createElement("div", {
        className: "gepyxis-services-footer-bottom"
    }, /*#__PURE__*/ React.createElement("span", null, "© ", new Date().getFullYear(), " GEPYXIS. Todos los derechos reservados."), /*#__PURE__*/ React.createElement("span", null, "Soluciones tecnológicas para ti y tu empresa.")))));
};
export const layout = {
    areaId: 'content',
    sortOrder: 10
};
export default Servicios;
export const query = `
query Query {
  services: services(filters: [
    { key: "status", operation: eq, value: "true" },
    { key: "limit", operation: eq, value: "200" },
    { key: "page", operation: eq, value: "1" }
  ]) {
    items {
      serviceId
      uuid
      name
      description
      image
      priceType
      price
      status
    }
    total
    currentPage
  }
}`;
