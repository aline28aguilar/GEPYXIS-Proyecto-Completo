import React from 'react';

export default function QuotesGrid({ serviceQuotes }) {
  const items = serviceQuotes?.items ?? [];
  const total = serviceQuotes?.total ?? 0;
  const currentFilters = serviceQuotes?.currentFilters ?? [];

  const page = Number(
    currentFilters.find((filter) => filter.key === 'page')?.value ?? 1
  );

  const limit = Number(
    currentFilters.find((filter) => filter.key === 'limit')?.value ?? 20
  );

  const totalPages = Math.max(1, Math.ceil(total / limit));

  const keyword =
    currentFilters.find((filter) => filter.key === 'keyword')?.value ?? '';

  const status =
    currentFilters.find((filter) => filter.key === 'status')?.value ?? '';

  const cellStyle: React.CSSProperties = {
    padding: '12px 16px',
    textAlign: 'left',
    borderBottom: '1px solid #e5e7eb',
    verticalAlign: 'middle'
  };

  const statusLabels = {
    pending: 'Pendiente',
    reviewing: 'En revisión',
    quoted: 'Cotizada',
    closed: 'Cerrada'
  };

  const formatDate = (value) => {
    if (!value) return 'Fecha no disponible';

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) return 'Fecha no disponible';

    return date.toLocaleString('es-MX', {
      dateStyle: 'short',
      timeStyle: 'short'
    });
  };

  const applyKeyword = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const value = String(formData.get('keyword') ?? '').trim();
    const url = new URL(window.location.href);

    if (value) {
      url.searchParams.set('keyword', value);
    } else {
      url.searchParams.delete('keyword');
    }

    url.searchParams.delete('page');
    window.location.href = url.href;
  };

  const applyStatus = (event) => {
    const url = new URL(window.location.href);

    if (event.target.value) {
      url.searchParams.set('status', event.target.value);
    } else {
      url.searchParams.delete('status');
    }

    url.searchParams.delete('page');
    window.location.href = url.href;
  };

  const clearFilters = () => {
    const url = new URL(window.location.href);

    url.searchParams.delete('keyword');
    url.searchParams.delete('status');
    url.searchParams.delete('page');

    window.location.href = url.href;
  };

  const goToPage = (pageNumber: number) => {
    const url = new URL(window.location.href);

    if (pageNumber <= 1) {
      url.searchParams.delete('page');
    } else {
      url.searchParams.set('page', String(pageNumber));
    }

    window.location.href = url.href;
  };

  const changeLimit = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const url = new URL(window.location.href);

    url.searchParams.set('limit', event.target.value);
    url.searchParams.delete('page');

    window.location.href = url.href;
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '600' }}>
          Cotizaciones
        </h1>

        <p style={{ color: '#6b7280', marginTop: '6px' }}>
          Total de solicitudes: {total}
        </p>
      </div>

      <div
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid #e5e7eb',
          borderRadius: '6px',
          padding: '16px',
          marginBottom: '16px'
        }}
      >
        <form
          onSubmit={applyKeyword}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            flexWrap: 'wrap'
          }}
        >
          <input
            type="text"
            name="keyword"
            defaultValue={keyword}
            placeholder="Buscar por nombre del cliente..."
            style={{
              padding: '10px 12px',
              border: '1px solid #d1d5db',
              borderRadius: '5px',
              minWidth: '220px'
            }}
          />

          <button
            type="submit"
            style={{
              padding: '10px 16px',
              backgroundColor: '#008060',
              color: '#ffffff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Buscar
          </button>

          <select
            value={status}
            onChange={applyStatus}
            style={{
              padding: '10px 12px',
              border: '1px solid #d1d5db',
              borderRadius: '5px'
            }}
          >
            <option value="">Todos los estados</option>
            <option value="pending">Pendiente</option>
            <option value="reviewing">En revisión</option>
            <option value="quoted">Cotizada</option>
            <option value="closed">Cerrada</option>
          </select>

          <button
            type="button"
            onClick={clearFilters}
            style={{
              padding: '10px 16px',
              backgroundColor: '#ffffff',
              border: '1px solid #d1d5db',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Limpiar filtros
          </button>
        </form>
      </div>

      <div
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid #e5e7eb',
          borderRadius: '6px',
          overflowX: 'auto'
        }}
      >
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse'
          }}
        >
          <thead>
            <tr style={{ backgroundColor: '#f9fafb' }}>
              <th style={cellStyle}>Folio</th>
              <th style={cellStyle}>Servicio solicitado</th>
              <th style={cellStyle}>Cliente</th>
              <th style={cellStyle}>Fecha de solicitud</th>
              <th style={cellStyle}>Estado</th>
              <th style={cellStyle}>Acción</th>
            </tr>
          </thead>

          <tbody>
            {items.length > 0 ? (
              items.map((quote) => (
                <tr key={quote.uuid || quote.quoteId}>
                  <td style={cellStyle}>
                    #{quote.quoteId}
                  </td>

                  <td style={cellStyle}>
                    <strong>{quote.serviceName}</strong>
                  </td>

                  <td style={cellStyle}>
                    {quote.customerName}
                  </td>

                  <td style={{ ...cellStyle, whiteSpace: 'nowrap' }}>
                    {formatDate(quote.createdAt)}
                  </td>

                  <td style={cellStyle}>
                    {statusLabels[quote.status] || quote.status}
                  </td>

                  <td style={cellStyle}>
                    <a
                      href={`/admin/service-quotes/${quote.quoteId}`}
                      style={{
                        color: '#008060',
                        fontWeight: '600',
                        textDecoration: 'none',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      Ver detalle
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={6}
                  style={{
                    ...cellStyle,
                    textAlign: 'center',
                    padding: '30px'
                  }}
                >
                  No hay solicitudes de cotización registradas.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '16px',
            padding: '0 16px 16px',
            flexWrap: 'wrap',
            gap: '12px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>Mostrar:</span>

            <select
              value={limit}
              onChange={changeLimit}
              style={{
                padding: '8px',
                border: '1px solid #d1d5db',
                borderRadius: '5px'
              }}
            >
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="150">150</option>
              <option value="200">200</option>
            </select>

            <span>por página</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              type="button"
              disabled={page <= 1}
              onClick={() => goToPage(1)}
            >
              Primera
            </button>

            <button
              type="button"
              disabled={page <= 1}
              onClick={() => goToPage(page - 1)}
            >
              Anterior
            </button>

            <span>
              Página {page} de {totalPages}
            </span>

            <button
              type="button"
              disabled={page >= totalPages}
              onClick={() => goToPage(page + 1)}
            >
              Siguiente
            </button>

            <button
              type="button"
              disabled={page >= totalPages}
              onClick={() => goToPage(totalPages)}
            >
              Última
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 20
};

export const query = `
  query Query($filters: [FilterInput]) {
    serviceQuotes(filters: $filters) {
      items {
        quoteId
        uuid
        serviceId
        serviceName
        customerName
        email
        phone
        description
        status
        createdAt
        updatedAt
      }
      currentPage
      total
      currentFilters {
        key
        operation
        value
      }
    }
  }
`;

export const variables = `
{
  filters: getContextValue('filtersFromUrl')
}`;