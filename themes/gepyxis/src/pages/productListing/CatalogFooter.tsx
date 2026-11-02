import React from 'react';

export default function CatalogFooter(): React.ReactElement {
  return (
    <>
      <style>{`
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
        .gepyxis-footer .gepyxis-container{
          width:min(1440px,calc(100% - 64px));
          margin:0 auto;
        }
        .gepyxis-footer-grid{
          display:grid;
          grid-template-columns:1.5fr 1fr 1fr 1.2fr;
          gap:30px;
        }
        .gepyxis-footer h3{
          margin:0 0 15px;
          color:#fff;
          font-size:15px;
          font-weight:800;
        }
        .gepyxis-footer p{
          margin:0;
          color:#c2d1e9;
          font-size:13px;
          line-height:1.75;
        }
        .gepyxis-footer a{
          display:block;
          width:fit-content;
          margin:0 0 10px;
          color:#c2d1e9;
          font-size:13px;
          text-decoration:none;
        }
        .gepyxis-footer a:hover{
          color:#fff;
          text-decoration:underline;
        }
        .gepyxis-footer-brand{
          margin-bottom:13px;
          color:#fff;
          font-size:25px;
          font-weight:900;
          letter-spacing:-.8px;
        }
        .gepyxis-footer-bottom{
          display:flex;
          justify-content:space-between;
          gap:15px;
          margin-top:30px;
          padding-top:17px;
          border-top:1px solid rgba(255,255,255,.15);
          color:#aebfda;
          font-size:12px;
        }
        body:has(.gepyxis-catalog-footer) footer:not(.gepyxis-catalog-footer),
        body:has(.gepyxis-catalog-footer) .footer:not(.gepyxis-catalog-footer),
        body:has(.gepyxis-catalog-footer) [class*="footer-bottom"]:not(.gepyxis-footer-bottom){
          display:none!important;
        }
        @media(max-width:950px){
          .gepyxis-footer-grid{
            grid-template-columns:repeat(2,minmax(0,1fr));
          }
        }
        @media(max-width:650px){
          .gepyxis-footer .gepyxis-container{
            width:min(100% - 28px,1240px);
          }
          .gepyxis-footer-grid{
            grid-template-columns:1fr 1fr;
            gap:24px 16px;
          }
          .gepyxis-footer-bottom{
            flex-direction:column;
          }
        }
      `}</style>

      <footer className="gepyxis-footer gepyxis-catalog-footer">
        <div className="gepyxis-container">
          <div className="gepyxis-footer-grid">
            <div>
              <div className="gepyxis-footer-brand">GE PYXIS</div>
              <p>Tecnología, productos y soluciones para acompañar tus proyectos y las necesidades de tu negocio.</p>
            </div>
            <div>
              <h3>Explora</h3>
              <a href="/">Inicio</a>
              <a href="/products">Productos</a>
              <a href="/#servicios">Servicios</a>
              <a href="/#contacto">Contacto</a>
            </div>
            <div>
              <h3>Categorías</h3>
              <a href="/products">Laptops y computadoras</a>
              <a href="/products">Componentes</a>
              <a href="/products">Redes</a>
              <a href="/products">Accesorios</a>
            </div>
            <div>
              <h3>Atención</h3>
              <p>¿Tienes dudas o necesitas orientación? Ponte en contacto con nuestro equipo.</p>
              <a href="mailto:contacto@gepyxis.mx">contacto@gepyxis.mx</a>
            </div>
          </div>
          <div className="gepyxis-footer-bottom">
            <span>© {new Date().getFullYear()} GEPYXIS. Todos los derechos reservados.</span>
            <span>Soluciones tecnológicas para ti y tu empresa.</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export const layout = {
  areaId: 'productListingPageBottom',
  sortOrder: 20
};
