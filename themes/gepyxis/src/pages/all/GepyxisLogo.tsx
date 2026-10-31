import React from 'react';

const GepyxisLogo: React.FC = () => (
  <>
    <style>{`
      .header__middle__left > .logo:not(.gepyxis-logo-native) {
        display: none !important;
      }

      .gepyxis-logo {
        display: flex;
        align-items: center;
        flex: 0 0 190px;
        max-width: 190px;
      }

      .gepyxis-logo img {
        display: block;
        width: 185px;
        max-width: 100%;
        height: auto;
        max-height: 76px;
        object-fit: contain;
      }

      @media (max-width: 1200px) {
        .gepyxis-logo {
          flex-basis: 150px;
          max-width: 150px;
        }
      }

      @media (max-width: 850px) {
        .gepyxis-logo {
          flex: 1 1 130px;
          max-width: 145px;
        }

        .gepyxis-logo img {
          max-height: 58px;
        }
      }
    `}</style>

    <a href="/" className="gepyxis-logo" aria-label="GEPYXIS - Inicio">
      <img src="/images/logogepyxis.jpg" alt="GEPYXIS" />
    </a>
  </>
);

export const layout = {
  areaId: 'headerMiddleLeft',
  sortOrder: 1
};

export default GepyxisLogo;
