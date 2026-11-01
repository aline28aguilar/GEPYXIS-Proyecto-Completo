import { ProductList } from '@components/frontStore/catalog/ProductList.js';
import { useProductListing } from '@components/frontStore/catalog/ProductListingContext.js';
import React from 'react';

export default function CatalogFeatured(): React.ReactElement {
  const { products } = useProductListing();

  const offers = products.items.filter(
    (product) =>
      product.price.special &&
      product.price.special.value < product.price.regular.value
  );

  if (offers.length === 0) {
    return <></>;
  }

  return (
    <section className="mb-10 rounded-2xl bg-blue-50/70 p-5 sm:p-7">
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
          Precios especiales
        </span>
        <h2 className="mt-1 text-2xl font-extrabold text-slate-800">
          Ofertas para ti
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Aprovecha los precios especiales de nuestros productos.
        </p>
      </div>

      <ProductList
        products={offers.slice(0, 4)}
        layout="grid"
        gridColumns={4}
        showAddToCart={false}
      />
    </section>
  );
}

export const layout = {
  areaId: 'productListingPageTop',
  sortOrder: 9
};
