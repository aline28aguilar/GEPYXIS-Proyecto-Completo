import React from 'react';

interface Product {
  productId: number;
  name: string;
  sku: string;
  price?: {
    regular?: {
      text?: string;
    };
    special?: {
      text?: string;
    };
  };
  inventory?: {
    isInStock?: boolean;
  };
  image?: {
    alt?: string;
    url?: string;
  };
  url: string;
}

interface GepyxisProps {
  collection?: {
    name?: string;
    products?: {
      items?: Product[];
    };
  };
}

const categories = [
  { icon: '💻', name: 'Laptops', description: 'Equipos para trabajar y estudiar' },
  { icon: '🖥️', name: 'Computadoras', description: 'Tecnología para cada espacio' },
  { icon: '⚙️', name: 'Componentes', description: 'Mejora y personaliza tus equipos' },
  { icon: '🌐', name: 'Redes', description: 'Conectividad y comunicación' },
  { icon: '💾', name: 'Almacenamiento', description: 'Espacio para tu información' },
  { icon: '🎧', name: 'Accesorios', description: 'Complementos para tu tecnología' }
];

const services = [
  {
    icon: '🛠️',
    title: 'Soporte técnico',
    description: 'Atención y asistencia para tus equipos tecnológicos.'
  },
  {
    icon: '🔌',
    title: 'Instalación y configuración',
    description: 'Apoyo para poner en funcionamiento tus soluciones.'
  },
  {
    icon: '💡',
    title: 'Soluciones digitales',
    description: 'Alternativas tecnológicas para tus necesidades.'
  }
];

const Gepyxis: React.FC<GepyxisProps> = ({ collection }) => {
  const products = collection?.products?.items ?? [];

  return (
    <main className="gepyxis-home">
      <style>{`
        .gepyxis-home {
          color: #243247;
          background: #fff;
          font-family: inherit;
        }

        .gepyxis-home * {
          box-sizing: border-box;
        }

        .gepyxis-container {
          width: min(1200px, calc(100% - 40px));
          margin: 0 auto;
        }

        .gepyxis-banner img {
          display: block;
          width: 100%;
          height: auto;
        }

        .gepyxis-benefits {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          padding-top: 30px;
          padding-bottom: 45px;
        }

        .gepyxis-benefit {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 22px;
          border: 1px solid #e9eef5;
          border-radius: 13px;
          background: #fff;
        }

        .gepyxis-benefit-icon {
          display: flex;
          flex: 0 0 48px;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #edf4ff;
          font-size: 23px;
        }

        .gepyxis-benefit h2 {
          margin: 0 0 5px;
          color: #172d4d;
          font-size: 16px;
          font-weight: 700;
        }

        .gepyxis-benefit p {
          margin: 0;
          color: #718096;
          font-size: 13px;
          line-height: 1.5;
        }

        .gepyxis-section {
          padding: 48px 0;
        }

        .gepyxis-section--soft {
          background: #f6f8fc;
        }

        .gepyxis-section-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 26px;
        }

        .gepyxis-eyebrow {
          display: block;
          margin-bottom: 8px;
          color: #075bea;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.2px;
          text-transform: uppercase;
        }

        .gepyxis-section-heading h2 {
          margin: 0;
          color: #172d4d;
          font-size: clamp(23px, 3vw, 30px);
          font-weight: 800;
        }

        .gepyxis-section-heading p {
          margin: 8px 0 0;
          color: #718096;
          font-size: 14px;
        }

        .gepyxis-text-link {
          color: #075bea;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
        }

        .gepyxis-text-link:hover {
          text-decoration: underline;
        }

        .gepyxis-products {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
        }

        .gepyxis-product {
          overflow: hidden;
          border: 1px solid #e9eef5;
          border-radius: 14px;
          background: #fff;
          transition: transform .2s ease, box-shadow .2s ease;
        }

        .gepyxis-product:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(25, 53, 91, .09);
        }

        .gepyxis-product-image {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 210px;
          padding: 18px;
          background: #fff;
        }

        .gepyxis-product-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .gepyxis-product-info {
          padding: 17px;
          border-top: 1px solid #f0f2f6;
        }

        .gepyxis-product-info h3 {
          display: -webkit-box;
          overflow: hidden;
          min-height: 42px;
          margin: 0 0 12px;
          color: #26364d;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.5;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }

        .gepyxis-product-price {
          margin: 0 0 14px;
          color: #075bea;
          font-size: 19px;
          font-weight: 800;
        }

        .gepyxis-product-button {
          display: block;
          padding: 11px 14px;
          border-radius: 8px;
          background: #075bea;
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          text-align: center;
          text-decoration: none;
          transition: background .2s ease;
        }

        .gepyxis-product-button:hover {
          background: #0648b8;
          color: #fff;
        }

        .gepyxis-empty-products {
          grid-column: 1 / -1;
          padding: 35px;
          border: 1px dashed #cbd5e1;
          border-radius: 12px;
          color: #718096;
          text-align: center;
        }

        .gepyxis-categories {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .gepyxis-category {
          display: flex;
          align-items: center;
          gap: 17px;
          min-height: 112px;
          padding: 20px;
          border: 1px solid #e8edf5;
          border-radius: 13px;
          background: #fff;
          text-decoration: none;
          transition: border-color .2s ease, transform .2s ease;
        }

        .gepyxis-category:hover {
          transform: translateY(-3px);
          border-color: #9bbcff;
        }

        .gepyxis-category-icon {
          display: flex;
          flex: 0 0 55px;
          align-items: center;
          justify-content: center;
          width: 55px;
          height: 55px;
          border-radius: 13px;
          background: #edf4ff;
          font-size: 26px;
        }

        .gepyxis-category h3 {
          margin: 0 0 5px;
          color: #172d4d;
          font-size: 15px;
          font-weight: 700;
        }

        .gepyxis-category p {
          margin: 0;
          color: #718096;
          font-size: 12px;
          line-height: 1.5;
        }

        .gepyxis-services {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .gepyxis-service {
          padding: 27px;
          border: 1px solid #e8edf5;
          border-radius: 14px;
          background: #fff;
        }

        .gepyxis-service-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          margin-bottom: 18px;
          border-radius: 13px;
          background: #edf4ff;
          font-size: 25px;
        }

        .gepyxis-service h3 {
          margin: 0 0 9px;
          color: #172d4d;
          font-size: 17px;
          font-weight: 700;
        }

        .gepyxis-service p {
          margin: 0;
          color: #718096;
          font-size: 13px;
          line-height: 1.7;
        }

        .gepyxis-contact {
          padding: 42px 25px;
          border-radius: 17px;
          background: linear-gradient(115deg, #102b50, #075bea);
          color: #fff;
          text-align: center;
        }

        .gepyxis-contact h2 {
          margin: 0 0 10px;
          color: #fff;
          font-size: clamp(22px, 3vw, 30px);
          font-weight: 800;
        }

        .gepyxis-contact p {
          max-width: 620px;
          margin: 0 auto 22px;
          color: #e1ebff;
          font-size: 14px;
          line-height: 1.6;
        }

        .gepyxis-contact-link {
          display: inline-block;
          padding: 12px 23px;
          border-radius: 8px;
          background: #fff;
          color: #075bea;
          font-size: 14px;
          font-weight: 800;
          text-decoration: none;
        }

        @media (max-width: 900px) {
          .gepyxis-products {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .gepyxis-categories {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 650px) {
          .gepyxis-container {
            width: min(100% - 28px, 1200px);
          }

          .gepyxis-benefits {
            grid-template-columns: 1fr;
            gap: 10px;
            padding-top: 18px;
            padding-bottom: 25px;
          }

          .gepyxis-benefit {
            padding: 15px;
          }

          .gepyxis-section {
            padding: 34px 0;
          }

          .gepyxis-section-heading {
            align-items: flex-start;
            flex-direction: column;
            gap: 10px;
          }

          .gepyxis-products {
            gap: 12px;
          }

          .gepyxis-product-image {
            height: 155px;
            padding: 12px;
          }

          .gepyxis-product-info {
            padding: 12px;
          }

          .gepyxis-product-info h3 {
            font-size: 12px;
          }

          .gepyxis-product-price {
            font-size: 16px;
          }

          .gepyxis-categories,
          .gepyxis-services {
            grid-template-columns: 1fr;
          }

          .gepyxis-category {
            min-height: 90px;
          }

          .gepyxis-service {
            padding: 22px;
          }
        }
      `}</style>

      <section className="gepyxis-banner">
        <img
          src="/images/banner-gepyxis.png"
          alt="GEPYXIS - Tecnología para lo que necesitas"
        />
      </section>

      <div className="gepyxis-container">
        <section className="gepyxis-benefits" aria-label="Beneficios">
          <article className="gepyxis-benefit">
            <div className="gepyxis-benefit-icon">✓</div>
            <div>
              <h2>Productos tecnológicos</h2>
              <p>Encuentra tecnología para tus necesidades.</p>
            </div>
          </article>

          <article className="gepyxis-benefit">
            <div className="gepyxis-benefit-icon">◇</div>
            <div>
              <h2>Servicios especializados</h2>
              <p>Soluciones digitales y asistencia tecnológica.</p>
            </div>
          </article>

          <article className="gepyxis-benefit">
            <div className="gepyxis-benefit-icon">★</div>
            <div>
              <h2>Soluciones para ti</h2>
              <p>Opciones pensadas para cada proyecto.</p>
            </div>
          </article>
        </section>
      </div>

      <section className="gepyxis-section gepyxis-section--soft">
        <div className="gepyxis-container">
          <div className="gepyxis-section-heading">
            <div>
              <span className="gepyxis-eyebrow">Selección GEPYXIS</span>
              <h2>Productos destacados</h2>
              <p>Conoce algunos de los productos de nuestro catálogo.</p>
            </div>
            <a href="/products" className="gepyxis-text-link">
              Ver todos los productos →
            </a>
          </div>

          <div className="gepyxis-products">
            {products.length > 0 ? (
              products.slice(0, 4).map((product) => {
                const price =
                  product.price?.special?.text ||
                  product.price?.regular?.text ||
                  '';

                return (
                  <article
                    className="gepyxis-product"
                    key={product.productId}
                  >
                    <a
                      href={product.url}
                      className="gepyxis-product-image"
                      aria-label={`Ver ${product.name}`}
                    >
                      {product.image?.url && (
                        <img
                          src={product.image.url}
                          alt={product.image.alt || product.name}
                        />
                      )}
                    </a>

                    <div className="gepyxis-product-info">
                      <h3>{product.name}</h3>
                      {price && (
                        <p className="gepyxis-product-price">{price}</p>
                      )}
                      <a
                        href={product.url}
                        className="gepyxis-product-button"
                      >
                        Ver producto
                      </a>
                    </div>
                  </article>
                );
              })
            ) : (
              <div className="gepyxis-empty-products">
                Los productos destacados aparecerán aquí cuando la colección
                tenga productos disponibles.
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="gepyxis-section">
        <div className="gepyxis-container">
          <div className="gepyxis-section-heading">
            <div>
              <span className="gepyxis-eyebrow">Explora el catálogo</span>
              <h2>Encuentra lo que necesitas</h2>
              <p>Explora nuestras categorías de tecnología.</p>
            </div>
            <a href="/products" className="gepyxis-text-link">
              Explorar catálogo →
            </a>
          </div>

          <div className="gepyxis-categories">
            {categories.map((category) => (
              <a
                href="/products"
                className="gepyxis-category"
                key={category.name}
              >
                <div className="gepyxis-category-icon">{category.icon}</div>
                <div>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        id="servicios"
        className="gepyxis-section gepyxis-section--soft"
      >
        <div className="gepyxis-container">
          <div className="gepyxis-section-heading">
            <div>
              <span className="gepyxis-eyebrow">Más que productos</span>
              <h2>Servicios tecnológicos</h2>
              <p>También te apoyamos con soluciones y asistencia especializada.</p>
            </div>
          </div>

          <div className="gepyxis-services">
            {services.map((service) => (
              <article className="gepyxis-service" key={service.title}>
                <div className="gepyxis-service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="gepyxis-section">
        <div className="gepyxis-container">
          <div className="gepyxis-contact">
            <h2>¿Buscas una solución tecnológica?</h2>
            <p>
              Cuéntanos qué necesitas. Podemos orientarte sobre productos y
              servicios para tu proyecto.
            </p>
            <a href="mailto:contacto@gepyxis.mx" className="gepyxis-contact-link">
              Contáctanos
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export const layout = {
  areaId: 'content',
  sortOrder: 10
};

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
      regular {
        value
        text
      }
      special {
        value
        text
      }
    }
    inventory {
      isInStock
    }
    image {
      alt
      url
    }
    url
  }
`;

export default Gepyxis;