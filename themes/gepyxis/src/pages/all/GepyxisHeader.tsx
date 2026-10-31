
import React from 'react';

const GepyxisHeader: React.FC = () => {
  return (
    <>
      <style>{`
        /* Encabezado principal */
        .header {
          width: 100%;
          background: #ffffff;
          border-bottom: 1px solid #edf0f5;
        }

        .header__middle {
          box-sizing: border-box;
          display: flex;
          align-items: center;
          gap: 28px;
          width: 100%;
          max-width: 1600px;
          min-height: 104px;
          margin: 0 auto;
          padding: 12px 40px;
        }

        /* Logo */
        .header__middle__left {
          flex: 0 0 190px;
          min-width: 0;
        }

        .header__middle__left .logo img {
          display: block;
          width: auto;
          max-width: 185px;
          max-height: 76px;
          object-fit: contain;
        }

        /* Navegación */
        .header__middle__center {
          display: flex;
          flex: 1 1 auto;
          justify-content: center;
          min-width: 0;
        }

        .gepyxis-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(18px, 2.2vw, 34px);
          width: 100%;
          height: 80px;
          white-space: nowrap;
        }

        .gepyxis-nav__link {
          position: relative;
          display: inline-flex;
          align-items: center;
          height: 100%;
          color: #25334b;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          transition: color .2s ease;
        }

        .gepyxis-nav__link:hover,
        .gepyxis-nav__link--active {
          color: #075bea;
        }

        .gepyxis-nav__link--active::after {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          height: 3px;
          border-radius: 3px 3px 0 0;
          background: #075bea;
          content: "";
        }

        /* Buscador nativo de EverShop con presentación de barra */
        .header__middle__right {
          display: flex;
          flex: 0 1 auto;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
          min-width: 0;
        }

        .header__middle__right .search__box {
          width: 245px;
          flex: 0 1 245px;
        }

        .header__middle__right .search__box > .search__icon {
          box-sizing: border-box;
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 44px;
          padding: 0 15px;
          color: #687386;
          background: #f2f3f6;
          border: 1px solid transparent;
          border-radius: 24px;
          text-decoration: none;
          gap: 10px;
        }

        .header__middle__right .search__box > .search__icon::before {
          content: "Buscar productos...";
          flex: 1;
          color: #7b8493;
          font-size: 13px;
          font-weight: 400;
          white-space: nowrap;
        }

        .header__middle__right .search__box > .search__icon:hover {
          color: #075bea;
          background: #edf2fa;
        }

        .header__middle__right .search__box > .search__icon svg {
          width: 19px;
          height: 19px;
          flex-shrink: 0;
        }

        /* Cuenta */
        .header__middle__right .customer-icon a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          padding: 0;
          color: #25334b;
          border-radius: 50%;
        }

        .header__middle__right .customer-icon a:hover {
          color: #075bea;
          background: #f3f7ff;
        }

        .header__middle__right .customer-icon svg {
          width: 21px;
          height: 21px;
        }

        /* Carrito */
        .header__middle__right .mini__cart__wrapper {
          flex-shrink: 0;
        }

        .header__middle__right .mini-cart-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          padding: 0;
          color: #25334b;
          background: transparent;
          border-radius: 50%;
        }

        .header__middle__right .mini-cart-icon:hover {
          color: #075bea;
          background: #f3f7ff;
        }

        .header__middle__right .mini-cart-icon svg {
          width: 21px;
          height: 21px;
        }

        .header__middle__right .mini-cart-icon > span {
          background: #075bea;
          color: #ffffff;
        }

        /* Tabletas */
        @media (max-width: 1200px) {
          .header__middle {
            gap: 16px;
            padding-right: 22px;
            padding-left: 22px;
          }

          .header__middle__left {
            flex-basis: 150px;
          }

          .header__middle__left .logo img {
            max-width: 145px;
          }

          .gepyxis-nav {
            gap: 16px;
          }

          .gepyxis-nav__link {
            font-size: 14px;
          }

          .header__middle__right {
            gap: 7px;
          }

          .header__middle__right .search__box {
            width: 200px;
            flex-basis: 200px;
          }
        }

        /* Móviles */
        @media (max-width: 850px) {
          .header__middle {
            flex-wrap: wrap;
            min-height: auto;
            gap: 8px;
            padding: 12px 16px;
          }

          .header__middle__left {
            flex: 1 1 130px;
          }

          .header__middle__left .logo img {
            max-width: 145px;
            max-height: 58px;
          }

          .header__middle__right {
            flex: 0 1 auto;
            margin-left: auto;
            gap: 5px;
          }

          .header__middle__right .search__box {
            width: 42px;
            flex: 0 0 42px;
          }

          .header__middle__right .search__box > .search__icon {
            justify-content: center;
            width: 42px;
            padding: 0;
          }

          .header__middle__right .search__box > .search__icon::before {
            display: none;
          }

          .header__middle__center {
            order: 3;
            flex: 1 1 100%;
            justify-content: flex-start;
          }

          .gepyxis-nav {
            justify-content: flex-start;
            height: 48px;
            gap: 24px;
            overflow-x: auto;
          }

          .gepyxis-nav__link {
            font-size: 13px;
          }
        }
      `}</style>

      <nav className="gepyxis-nav" aria-label="Navegación principal">
        <a
          href="/"
          className="gepyxis-nav__link gepyxis-nav__link--active"
        >
          Inicio
        </a>

        <a href="/catalog" className="gepyxis-nav__link">
          Productos
        </a>

        <a href="/servicios" className="gepyxis-nav__link">
          Servicios
        </a>

        <a href="/contacto" className="gepyxis-nav__link">
          Contacto
        </a>
      </nav>
    </>
  );
};

export const layout = {
  areaId: 'headerMiddleCenter',
  sortOrder: 1
};

export default GepyxisHeader;

