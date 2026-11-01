import { Image } from '@components/common/Image.js';
import { ProductNoThumbnail } from '@components/common/ProductNoThumbnail.js';
import { ProductData } from '@components/frontStore/catalog/ProductContext.js';
import { _ } from '@evershop/evershop/lib/locale/translate/_';
import React from 'react';

export const ProductListItemRender = ({
  product,
  imageWidth,
  imageHeight,
  layout = 'grid'
}: {
  product: ProductData;
  imageWidth?: number;
  imageHeight?: number;
  layout?: 'grid' | 'list';
  showAddToCart?: boolean;
  customAddToCartRenderer?: (product: ProductData) => React.ReactNode;
}) => {
  const hasDiscount =
    product.price.special &&
    product.price.special.value < product.price.regular.value;

  if (layout === 'list') {
    return (
      <article className="group flex flex-col gap-5 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg sm:flex-row">
        <a href={product.url} className="relative flex min-h-[190px] items-center justify-center overflow-hidden rounded-xl bg-slate-50 sm:w-56 sm:flex-shrink-0">
          {hasDiscount && <span className="absolute left-3 top-3 z-10 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">OFERTA</span>}
          {product.image ? (
            <Image src={product.image.url} alt={product.image.alt || product.name} width={imageWidth || 320} height={imageHeight || 320} loading="lazy" className="max-h-52 object-contain transition-transform duration-500 group-hover:scale-105" />
          ) : (
            <ProductNoThumbnail width={imageWidth} height={imageHeight} />
          )}
        </a>
        <div className="flex min-w-0 flex-1 flex-col justify-between gap-4 py-1">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">GEPYXIS</span>
            <h3 className="mt-2 text-lg font-bold leading-snug text-slate-800">
              <a href={product.url} className="transition-colors hover:text-blue-700">{product.name}</a>
            </h3>
            <p className="mt-2 text-xs text-slate-400">{_('SKU ${sku}', { sku: product.sku })}</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {hasDiscount ? (
                <>
                  <span className="text-sm text-slate-400 line-through">{product.price.regular.text}</span>
                  <span className="text-2xl font-extrabold text-blue-800">{product.price.special!.text}</span>
                </>
              ) : (
                <span className="text-2xl font-extrabold text-blue-800">{product.price.regular.text}</span>
              )}
            </div>
            <div className="mt-3">
              {product.inventory.isInStock ? (
                <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700"><span className="h-2 w-2 rounded-full bg-emerald-500" />{_('In Stock')}</span>
              ) : (
                <span className="inline-flex items-center gap-2 text-sm font-medium text-red-600"><span className="h-2 w-2 rounded-full bg-red-500" />{_('Out of Stock')}</span>
              )}
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
      <a href={product.url} className="relative flex aspect-square items-center justify-center overflow-hidden bg-slate-50 p-5">
        {hasDiscount && <span className="absolute left-4 top-4 z-10 rounded-full bg-red-600 px-3 py-1.5 text-xs font-bold tracking-wide text-white shadow-sm">OFERTA</span>}
        <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-[10px] font-bold tracking-widest text-blue-800 shadow-sm">GEPYXIS</span>
        {product.image ? (
          <Image src={product.image.url} alt={product.image.alt || product.name} width={imageWidth || 800} height={imageHeight || 800} loading="lazy" sizes="(max-width: 768px) 100vw, 33vw" className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <ProductNoThumbnail width={imageWidth} height={imageHeight} />
        )}
      </a>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="mb-3">
          {product.inventory.isInStock ? (
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700"><span className="h-2 w-2 rounded-full bg-emerald-500" />{_('In Stock')}</span>
          ) : (
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-red-600"><span className="h-2 w-2 rounded-full bg-red-500" />{_('Out of Stock')}</span>
          )}
        </div>
        <a href={product.url} className="flex-1">
          <h3 className="line-clamp-2 min-h-[3rem] text-sm font-bold leading-6 text-slate-800 transition-colors group-hover:text-blue-800 sm:text-base">{product.name}</h3>
        </a>
        <div className="mt-4 border-t border-slate-100 pt-4">
          {hasDiscount ? (
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="text-xs text-slate-400 line-through">{product.price.regular.text}</span>
              <span className="text-xl font-extrabold text-blue-800">{product.price.special!.text}</span>
            </div>
          ) : (
            <span className="text-xl font-extrabold text-blue-800">{product.price.regular.text}</span>
          )}
        </div>
      </div>
    </article>
  );
};