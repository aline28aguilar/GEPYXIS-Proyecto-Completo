import React from 'react';

type ServicioDetalle = {
  serviceId: number;
  uuid: string;
  name: string;
  description: string;
  image: string | null;
  priceType: 'fixed' | 'starting' | 'quote';
  price: number | null;
};

type ServicioViewProps = {
  service?: ServicioDetalle | null;
};

const ServicioView: React.FC<ServicioViewProps> = ({ service }) => {
  if (!service) {
    return <p>Servicio no disponible.</p>;
  }

  const precio =
    service.priceType === 'quote'
      ? 'Cotización'
      : service.priceType === 'starting'
        ? `Desde $${Number(service.price).toFixed(2)}`
        : `$${Number(service.price).toFixed(2)}`;

  return (
    <div className="gepyxis-detail-page">
      <style>{`
        .gepyxis-detail-page {
          background: #f4f7fc;
          padding: 38px 20px 65px;
          min-height: 600px;
          color: #172b4d;
        }

        .gepyxis-detail-container {
          max-width: 1120px;
          margin: 0 auto;
        }

        .gepyxis-detail-back {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 25px;
          color: #2457a7;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .gepyxis-detail-back:hover {
          color: #12366f;
        }

        .gepyxis-detail-card {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 42px;
          align-items: center;
          background: #ffffff;
          border: 1px solid #e5ebf4;
          border-radius: 18px;
          padding: 35px;
          box-shadow: 0 12px 35px rgba(25, 55, 100, 0.07);
        }

        .gepyxis-detail-image {
          min-height: 360px;
          background: #f1f5fb;
          border-radius: 14px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gepyxis-detail-image img {
          display: block;
          width: 100%;
          height: 360px;
          object-fit: cover;
        }

        .gepyxis-detail-image-placeholder {
          padding: 30px;
          color: #71829b;
          text-align: center;
          font-size: 15px;
        }

        .gepyxis-detail-label {
          display: inline-block;
          margin-bottom: 15px;
          padding: 7px 13px;
          border-radius: 30px;
          background: #eaf2ff;
          color: #2457a7;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.6px;
          text-transform: uppercase;
        }

        .gepyxis-detail-information h1 {
          margin: 0 0 18px;
          color: #142b50;
          font-size: 32px;
          line-height: 1.25;
          font-weight: 750;
        }

        .gepyxis-detail-price {
          display: inline-block;
          margin: 0 0 25px;
          padding: 12px 17px;
          border-radius: 10px;
          background: #edf4ff;
          color: #174b9b;
          font-size: 24px;
          font-weight: 750;
        }

        .gepyxis-detail-description {
          margin-bottom: 28px;
        }

        .gepyxis-detail-description h2 {
          margin: 0 0 10px;
          color: #19365f;
          font-size: 17px;
          font-weight: 700;
        }

        .gepyxis-detail-description p {
          margin: 0;
          color: #62718a;
          font-size: 15px;
          line-height: 1.8;
          white-space: pre-line;
        }

        .gepyxis-detail-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 13px;
        }

        .gepyxis-detail-button {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          min-width: 145px;
          padding: 14px 22px;
          border: 2px solid #2457a7;
          border-radius: 9px;
          background: #2457a7;
          color: #ffffff !important;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none !important;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .gepyxis-detail-button:hover {
          background: #173e7d;
          border-color: #173e7d;
          transform: translateY(-2px);
        }

        .gepyxis-detail-button-secondary {
          background: #ffffff;
          color: #2457a7 !important;
        }

        .gepyxis-detail-button-secondary:hover {
          background: #edf4ff;
          border-color: #173e7d;
          color: #173e7d !important;
        }

        @media (max-width: 760px) {
          .gepyxis-detail-page {
            padding: 25px 14px 45px;
          }

          .gepyxis-detail-card {
            grid-template-columns: 1fr;
            gap: 25px;
            padding: 20px;
          }

          .gepyxis-detail-image {
            min-height: 230px;
          }

          .gepyxis-detail-image img {
            height: 260px;
          }

          .gepyxis-detail-information h1 {
            font-size: 26px;
          }

          .gepyxis-detail-price {
            font-size: 21px;
          }

          .gepyxis-detail-actions {
            flex-direction: column;
          }

          .gepyxis-detail-button {
            width: 100%;
            box-sizing: border-box;
          }
        }
      `}</style>

      <div className="gepyxis-detail-container">
        <a href="/servicios" className="gepyxis-detail-back">
          ← Volver a servicios
        </a>

        <div className="gepyxis-detail-card">
          <div className="gepyxis-detail-image">
            {service.image ? (
              <img src={service.image} alt={service.name} />
            ) : (
              <div className="gepyxis-detail-image-placeholder">
                Imagen no disponible
              </div>
            )}
          </div>

          <div className="gepyxis-detail-information">
            <span className="gepyxis-detail-label">
              Servicio GEPYXIS
            </span>

            <h1>{service.name}</h1>

            <p className="gepyxis-detail-price">{precio}</p>

            <div className="gepyxis-detail-description">
              <h2>Descripción del servicio</h2>
              <p>{service.description}</p>
            </div>

            <div className="gepyxis-detail-actions">
              <a
                href={`/contacto?servicio=${service.serviceId}&tipo=solicitud`}
                className="gepyxis-detail-button"
              >
                Solicitar servicio →
              </a>

              <a
                href={`/contacto?servicio=${service.serviceId}&tipo=cotizacion`}
                className="gepyxis-detail-button gepyxis-detail-button-secondary"
              >
                Cotizar →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const query = `
  query Query {
    service: currentService {
      serviceId
      uuid
      name
      description
      image
      priceType
      price
    }
  }
`;

export const layout = {
  areaId: 'content',
  sortOrder: 10
};

export default ServicioView;