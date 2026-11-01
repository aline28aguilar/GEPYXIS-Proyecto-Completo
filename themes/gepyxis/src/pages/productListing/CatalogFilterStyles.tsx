import React from 'react';

export default function CatalogFilterStyles(): React.ReactElement {
  return (
    <style>{`
      .product__filters {
        padding: 22px;
        border: 1px solid #e2e8f0;
        border-radius: 16px;
        background: #fff;
        box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);
      }

      .product__filters__header {
        padding-bottom: 15px;
        border-bottom: 1px solid #e2e8f0;
      }

      .product__filters__header h3 {
        color: #123b70;
        font-size: 17px;
        font-weight: 800;
      }

      .product__filters__header button {
        color: #2563eb;
        font-weight: 600;
      }

      .product__filters > div:last-child {
        display: flex;
        flex-direction: column;
        gap: 18px;
      }

      .product__filters > div:last-child > * {
        padding-bottom: 16px;
        border-bottom: 1px solid #eaf0f6;
      }

      .product__filters > div:last-child > *:last-child {
        padding-bottom: 0;
        border-bottom: 0;
      }

      @media (max-width: 767px) {
        .product__filters {
          padding: 16px;
        }
      }
    `}</style>
  );
}

export const layout = {
  areaId: 'productListingLeftColumn',
  sortOrder: 5
};


