import React from 'react';

const brands = [
  {
    name: 'Lenovo',
    logo: 'https://cdn.simpleicons.org/lenovo/E2231A',
    url: 'https://www.lenovo.com/'
  },
  {
    name: 'HP',
    logo: 'https://cdn.simpleicons.org/hp/0096D6',
    url: 'https://www.hp.com/'
  },
  {
    name: 'Dell',
    logo: 'https://cdn.simpleicons.org/dell/007DB8',
    url: 'https://www.dell.com/'
  },
  {
    name: 'Logitech',
    logo: 'https://cdn.simpleicons.org/logitech/00B8FC',
    url: 'https://www.logitech.com/'
  },
  {
    name: 'Apple',
    logo: 'https://cdn.simpleicons.org/apple/000000',
    url: 'https://www.apple.com/'
  },
  {
    name: 'MSI',
    logo: 'https://cdn.simpleicons.org/msi/FF0000',
    url: 'https://www.msi.com/'
  }
];

export default function CatalogBrands(): React.ReactElement {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-9">
          <span className="text-xs font-semibold tracking-[0.25em] text-gray-500">
            GEPYXIS
          </span>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900">
            Marcas que encontrarás
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-500">
            Conoce algunas de las marcas de tecnología que tenemos para ti.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {brands.map((brand) => (
            <a
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visitar sitio oficial de ${brand.name}`}
              className="flex items-center justify-center h-24 md:h-28 rounded-xl border border-gray-200 bg-white px-4 transition-all duration-200 hover:border-gray-400 hover:shadow-md"
            >
              <img
                src={brand.logo}
                alt={`Logotipo de ${brand.name}`}
                loading="lazy"
                className="max-h-10 max-w-full object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export const layout = {
  areaId: 'productListingPageBottom',
  sortOrder: 10
};
