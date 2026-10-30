
import React from 'react';

const Gepyxis: React.FC = () => {
  return (
    <main className="bg-white text-gray-800">

      {/* Sección principal */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">

            <span className="mb-5 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Tecnología para tu día a día
            </span>

            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl">
              La tecnología que necesitas, en un solo lugar.
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-600">
              Descubre productos tecnológicos y soluciones digitales
              pensadas para acompañarte en cada proyecto.
            </p>

            <a
              href="/catalog"
              className="inline-flex items-center rounded-lg bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
            >
              Explorar productos
              <span className="ml-3">→</span>
            </a>

          </div>
        </div>
      </section>

      {/* Apartados destacados */}
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">

        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
            ✓
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">
              Productos tecnológicos
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Encuentra tecnología para tus necesidades.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
            ◇
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">
              Servicios especializados
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Soluciones digitales y asistencia tecnológica.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
            ★
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">
              Soluciones para ti
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Opciones pensadas para cada proyecto.
            </p>
          </div>
        </div>

      </section>
    </main>
  );
};

export const layout = {
  areaId: 'content',
  sortOrder: 10
};

export default Gepyxis;
