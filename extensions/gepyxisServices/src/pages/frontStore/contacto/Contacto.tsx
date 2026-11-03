
import React from 'react';

export default function Contacto() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">
            GEPYXIS
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Estamos para ayudarte
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            ¿Tienes alguna duda o necesitas información sobre nuestros
            productos y servicios tecnológicos? Nos dará gusto atenderte.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900">
              Productos
            </h2>
            <p className="mt-3 text-gray-600">
              ¿Buscas información sobre alguno de nuestros productos?
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900">
              Servicios
            </h2>
            <p className="mt-3 text-gray-600">
              ¿Necesitas una solución tecnológica para tu negocio?
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 10
};
