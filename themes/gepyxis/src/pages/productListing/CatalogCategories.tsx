import { useProductListing } from '@components/frontStore/catalog/ProductListingContext.js';
import React from 'react';

const categoryImages = [
  {
    terms: ['laptop', 'portatil'],
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=85'
  },
  {
    terms: ['comput'],
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=700&q=85'
  },
  {
    terms: ['componente'],
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=700&q=85'
  },
  {
    terms: ['red', 'network'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=85'
  },
  {
    terms: ['almacenamiento', 'disco'],
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=700&q=85'
  },
  {
    terms: ['accesorio', 'audio', 'teclado', 'mouse'],
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=700&q=85'
  },
  {
    terms: ['monitor'],
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=700&q=85'
  },
  {
    terms: ['impres'],
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=700&q=85'
  }
];

const defaultImage =
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=85';

function getCategoryImage(name: string): string {
  const value = name.toLowerCase();
  const match = categoryImages.find((category) =>
    category.terms.some((term) => value.includes(term))
  );

  return match?.image || defaultImage;
}

export default function CatalogCategories(): React.ReactElement {
  const { categories } = useProductListing();

  if (!categories.length) return <></>;

  return (
    <section className="mb-12 w-full">
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
          Explora nuestro catálogo
        </span>
        <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
          Compra por categoría
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Encuentra fácilmente los productos que necesitas.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {categories.map((category) => (
          <a
            key={category.uuid}
            href={`/products?cat=${category.categoryId}`}
            className="group relative flex min-h-40 items-end overflow-hidden rounded-xl bg-slate-900 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <img
              src={getCategoryImage(category.name)}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="relative z-10 w-full p-3 md:p-4">
              <h3 className="text-sm md:text-base font-bold leading-tight">
                {category.name}
              </h3>
              {category.depth > 0 && (
                <span className="mt-1 block text-xs text-white/75">
                  Subcategoría
                </span>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export const layout = {
  areaId: 'productListingPageTop',
  sortOrder: 8
};
