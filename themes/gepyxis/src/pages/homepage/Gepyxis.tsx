import React from 'react';

const Gepyxis: React.FC = () => {
  return (
    <main className="bg-white text-gray-800">
      {/* Banner principal de GEPYXIS */}
      <section className="w-full overflow-hidden">
        <img
          src="/images/banner-gepyxis.png"
          alt="GEPYXIS - Tecnología para lo que necesitas"
          className="block h-auto w-full"
        />
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