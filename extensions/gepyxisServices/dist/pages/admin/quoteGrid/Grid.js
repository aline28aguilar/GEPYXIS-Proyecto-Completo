import React from 'react';
export default function QuotesGrid({ serviceQuotes }) {
    const items = serviceQuotes?.items ?? [];
    const total = serviceQuotes?.total ?? 0;
    const currentFilters = serviceQuotes?.currentFilters ?? [];
    const page = Number(currentFilters.find((filter)=>filter.key === 'page')?.value ?? 1);
    const limit = Number(currentFilters.find((filter)=>filter.key === 'limit')?.value ?? 20);
    const totalPages = Math.max(1, Math.ceil(total / limit));
    const keyword = currentFilters.find((filter)=>filter.key === 'keyword')?.value ?? '';
    const status = currentFilters.find((filter)=>filter.key === 'status')?.value ?? '';
    const cellStyle = {
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
    const formatDate = (value)=>{
        if (!value) return 'Fecha no disponible';
        const date = new Date(value);
        if (Number.isNaN(date.getTime())) return 'Fecha no disponible';
        return date.toLocaleString('es-MX', {
            dateStyle: 'short',
            timeStyle: 'short'
        });
    };
    const applyKeyword = (event)=>{
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
    const applyStatus = (event)=>{
        const url = new URL(window.location.href);
        if (event.target.value) {
            url.searchParams.set('status', event.target.value);
        } else {
            url.searchParams.delete('status');
        }
        url.searchParams.delete('page');
        window.location.href = url.href;
    };
    const clearFilters = ()=>{
        const url = new URL(window.location.href);
        url.searchParams.delete('keyword');
        url.searchParams.delete('status');
        url.searchParams.delete('page');
        window.location.href = url.href;
    };
    const goToPage = (pageNumber)=>{
        const url = new URL(window.location.href);
        if (pageNumber <= 1) {
            url.searchParams.delete('page');
        } else {
            url.searchParams.set('page', String(pageNumber));
        }
        window.location.href = url.href;
    };
    const changeLimit = (event)=>{
        const url = new URL(window.location.href);
        url.searchParams.set('limit', event.target.value);
        url.searchParams.delete('page');
        window.location.href = url.href;
    };
    return /*#__PURE__*/ React.createElement("div", {
        style: {
            padding: '20px'
        }
    }, /*#__PURE__*/ React.createElement("div", {
        style: {
            marginBottom: '20px'
        }
    }, /*#__PURE__*/ React.createElement("h1", {
        style: {
            fontSize: '24px',
            fontWeight: '600'
        }
    }, "Cotizaciones"), /*#__PURE__*/ React.createElement("p", {
        style: {
            color: '#6b7280',
            marginTop: '6px'
        }
    }, "Total de solicitudes: ", total)), /*#__PURE__*/ React.createElement("div", {
        style: {
            backgroundColor: '#ffffff',
            border: '1px solid #e5e7eb',
            borderRadius: '6px',
            padding: '16px',
            marginBottom: '16px'
        }
    }, /*#__PURE__*/ React.createElement("form", {
        onSubmit: applyKeyword,
        style: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            flexWrap: 'wrap'
        }
    }, /*#__PURE__*/ React.createElement("input", {
        type: "text",
        name: "keyword",
        defaultValue: keyword,
        placeholder: "Buscar por nombre del cliente...",
        style: {
            padding: '10px 12px',
            border: '1px solid #d1d5db',
            borderRadius: '5px',
            minWidth: '220px'
        }
    }), /*#__PURE__*/ React.createElement("button", {
        type: "submit",
        style: {
            padding: '10px 16px',
            backgroundColor: '#008060',
            color: '#ffffff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
        }
    }, "Buscar"), /*#__PURE__*/ React.createElement("select", {
        value: status,
        onChange: applyStatus,
        style: {
            padding: '10px 12px',
            border: '1px solid #d1d5db',
            borderRadius: '5px'
        }
    }, /*#__PURE__*/ React.createElement("option", {
        value: ""
    }, "Todos los estados"), /*#__PURE__*/ React.createElement("option", {
        value: "pending"
    }, "Pendiente"), /*#__PURE__*/ React.createElement("option", {
        value: "reviewing"
    }, "En revisión"), /*#__PURE__*/ React.createElement("option", {
        value: "quoted"
    }, "Cotizada"), /*#__PURE__*/ React.createElement("option", {
        value: "closed"
    }, "Cerrada")), /*#__PURE__*/ React.createElement("button", {
        type: "button",
        onClick: clearFilters,
        style: {
            padding: '10px 16px',
            backgroundColor: '#ffffff',
            border: '1px solid #d1d5db',
            borderRadius: '5px',
            cursor: 'pointer'
        }
    }, "Limpiar filtros"))), /*#__PURE__*/ React.createElement("div", {
        style: {
            backgroundColor: '#ffffff',
            border: '1px solid #e5e7eb',
            borderRadius: '6px',
            overflowX: 'auto'
        }
    }, /*#__PURE__*/ React.createElement("table", {
        style: {
            width: '100%',
            borderCollapse: 'collapse'
        }
    }, /*#__PURE__*/ React.createElement("thead", null, /*#__PURE__*/ React.createElement("tr", {
        style: {
            backgroundColor: '#f9fafb'
        }
    }, /*#__PURE__*/ React.createElement("th", {
        style: cellStyle
    }, "Folio"), /*#__PURE__*/ React.createElement("th", {
        style: cellStyle
    }, "Servicio solicitado"), /*#__PURE__*/ React.createElement("th", {
        style: cellStyle
    }, "Cliente"), /*#__PURE__*/ React.createElement("th", {
        style: cellStyle
    }, "Fecha de solicitud"), /*#__PURE__*/ React.createElement("th", {
        style: cellStyle
    }, "Estado"), /*#__PURE__*/ React.createElement("th", {
        style: cellStyle
    }, "Acción"))), /*#__PURE__*/ React.createElement("tbody", null, items.length > 0 ? items.map((quote)=>/*#__PURE__*/ React.createElement("tr", {
            key: quote.uuid || quote.quoteId
        }, /*#__PURE__*/ React.createElement("td", {
            style: cellStyle
        }, "#", quote.quoteId), /*#__PURE__*/ React.createElement("td", {
            style: cellStyle
        }, /*#__PURE__*/ React.createElement("strong", null, quote.serviceName)), /*#__PURE__*/ React.createElement("td", {
            style: cellStyle
        }, quote.customerName), /*#__PURE__*/ React.createElement("td", {
            style: {
                ...cellStyle,
                whiteSpace: 'nowrap'
            }
        }, formatDate(quote.createdAt)), /*#__PURE__*/ React.createElement("td", {
            style: cellStyle
        }, statusLabels[quote.status] || quote.status), /*#__PURE__*/ React.createElement("td", {
            style: cellStyle
        }, /*#__PURE__*/ React.createElement("a", {
            href: `/admin/service-quotes/${quote.quoteId}`,
            style: {
                color: '#008060',
                fontWeight: '600',
                textDecoration: 'none',
                whiteSpace: 'nowrap'
            }
        }, "Ver detalle")))) : /*#__PURE__*/ React.createElement("tr", null, /*#__PURE__*/ React.createElement("td", {
        colSpan: 6,
        style: {
            ...cellStyle,
            textAlign: 'center',
            padding: '30px'
        }
    }, "No hay solicitudes de cotización registradas.")))), /*#__PURE__*/ React.createElement("div", {
        style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '16px',
            padding: '0 16px 16px',
            flexWrap: 'wrap',
            gap: '12px'
        }
    }, /*#__PURE__*/ React.createElement("div", {
        style: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        }
    }, /*#__PURE__*/ React.createElement("span", null, "Mostrar:"), /*#__PURE__*/ React.createElement("select", {
        value: limit,
        onChange: changeLimit,
        style: {
            padding: '8px',
            border: '1px solid #d1d5db',
            borderRadius: '5px'
        }
    }, /*#__PURE__*/ React.createElement("option", {
        value: "20"
    }, "20"), /*#__PURE__*/ React.createElement("option", {
        value: "50"
    }, "50"), /*#__PURE__*/ React.createElement("option", {
        value: "100"
    }, "100"), /*#__PURE__*/ React.createElement("option", {
        value: "150"
    }, "150"), /*#__PURE__*/ React.createElement("option", {
        value: "200"
    }, "200")), /*#__PURE__*/ React.createElement("span", null, "por página")), /*#__PURE__*/ React.createElement("div", {
        style: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        }
    }, /*#__PURE__*/ React.createElement("button", {
        type: "button",
        disabled: page <= 1,
        onClick: ()=>goToPage(1)
    }, "Primera"), /*#__PURE__*/ React.createElement("button", {
        type: "button",
        disabled: page <= 1,
        onClick: ()=>goToPage(page - 1)
    }, "Anterior"), /*#__PURE__*/ React.createElement("span", null, "Página ", page, " de ", totalPages), /*#__PURE__*/ React.createElement("button", {
        type: "button",
        disabled: page >= totalPages,
        onClick: ()=>goToPage(page + 1)
    }, "Siguiente"), /*#__PURE__*/ React.createElement("button", {
        type: "button",
        disabled: page >= totalPages,
        onClick: ()=>goToPage(totalPages)
    }, "Última")))));
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
