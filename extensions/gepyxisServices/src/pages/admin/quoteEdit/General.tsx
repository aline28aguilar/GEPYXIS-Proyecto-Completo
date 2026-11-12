import React from 'react';
import { toast } from '@evershop/evershop/components/common/ui/Sonner.js';

export default function General({ serviceQuote, action }) {
  const quote = serviceQuote;

  const [selectedStatus, setSelectedStatus] = React.useState(quote.status);
  const [saving, setSaving] = React.useState(false);

  const statusLabels = {
    pending: 'Pendiente',
    reviewing: 'En revisi\u00f3n',
    quoted: 'Cotizada',
    closed: 'Cerrada'
  };

  const formatDate = (value) => {
    if (!value) return 'Fecha no disponible';

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return 'Fecha no disponible';
    }

    return date.toLocaleString('es-MX', {
      dateStyle: 'long',
      timeStyle: 'short'
    });
  };

  const saveStatus = async () => {
    try {
      setSaving(true);

      const response = await fetch(action, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          status: selectedStatus
        })
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        toast.error(
          result.message || 'No fue posible actualizar el estado.'
        );
        return;
      }

      toast.success('Estado de la cotizaci\u00f3n actualizado correctamente.');
      window.location.href = '/admin/service-quotes';
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : 'Ocurri\u00f3 un error al actualizar el estado.'
      );
    } finally {
      setSaving(false);
    }
  };

  const rowStyle = {
    padding: '14px 0',
    borderBottom: '1px solid #e5e7eb'
  };

  const labelStyle = {
    display: 'block',
    color: '#6b7280',
    fontSize: '13px',
    marginBottom: '5px'
  };

  const valueStyle: React.CSSProperties = {
    color: '#111827',
    fontSize: '15px',
    fontWeight: '500',
    overflowWrap: 'anywhere'
  };

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e5e7eb',
        borderRadius: '6px',
        padding: '24px',
        maxWidth: '850px'
      }}
    >
      <h2 style={{ fontSize: '18px', fontWeight: '600' }}>
        {'Informaci\u00f3n de la solicitud'}
      </h2>

      <div style={rowStyle}>
        <span style={labelStyle}>Folio</span>
        <div style={valueStyle}>#{quote.quoteId}</div>
      </div>

      <div style={rowStyle}>
        <span style={labelStyle}>Servicio solicitado</span>
        <div style={valueStyle}>{quote.serviceName}</div>
      </div>

      <div style={rowStyle}>
        <span style={labelStyle}>Nombre del cliente</span>
        <div style={valueStyle}>{quote.customerName}</div>
      </div>

      <div style={rowStyle}>
        <span style={labelStyle}>{'Correo electr\u00f3nico'}</span>
        <div style={valueStyle}>{quote.email}</div>
      </div>

      <div style={rowStyle}>
        <span style={labelStyle}>{'Tel\u00e9fono'}</span>
        <div style={valueStyle}>{quote.phone}</div>
      </div>

      <div style={rowStyle}>
        <span style={labelStyle}>{'Descripci\u00f3n de la solicitud'}</span>
        <div style={{ ...valueStyle, fontWeight: '400', whiteSpace: 'pre-wrap' }}>
          {quote.description}
        </div>
      </div>

      <div style={rowStyle}>
        <span style={labelStyle}>Fecha de solicitud</span>
        <div style={valueStyle}>{formatDate(quote.createdAt)}</div>
      </div>

      <div style={rowStyle}>
        <span style={labelStyle}>Estado actual</span>
        <div style={valueStyle}>
          {statusLabels[quote.status] || quote.status}
        </div>
      </div>

      <div style={{ paddingTop: '20px' }}>
        <label
          htmlFor="quoteStatus"
          style={{
            display: 'block',
            color: '#374151',
            fontSize: '14px',
            fontWeight: '600',
            marginBottom: '8px'
          }}
        >
          Cambiar estado
        </label>

        <select
          id="quoteStatus"
          value={selectedStatus}
          onChange={(event) => setSelectedStatus(event.target.value)}
          disabled={saving}
          style={{
            width: '100%',
            maxWidth: '350px',
            padding: '10px',
            border: '1px solid #d1d5db',
            borderRadius: '5px',
            backgroundColor: '#ffffff',
            marginBottom: '15px'
          }}
        >
          <option value="pending">Pendiente</option>
          <option value="reviewing">En revisi{'Ã³'}n</option>
          <option value="quoted">Cotizada</option>
          <option value="closed">Cerrada</option>
        </select>

        <div>
          <button
            type="button"
            onClick={saveStatus}
            disabled={saving}
            style={{
              backgroundColor: '#2563eb',
              color: '#ffffff',
              border: 'none',
              borderRadius: '5px',
              padding: '10px 18px',
              cursor: saving ? 'wait' : 'pointer',
              opacity: saving ? 0.7 : 1
            }}
          >
            {saving ? 'Guardando...' : 'Guardar estado'}
          </button>
        </div>
      </div>
    </div>
  );
}

export const layout = {
  areaId: 'leftSide',
  sortOrder: 10
};

export const query = `
  query Query {
    action: url(
      routeId: "updateQuote",
      params: [{ key: "id", value: getContextValue("quoteIdString") }]
    )
    serviceQuote(id: getContextValue("quoteId")) {
      quoteId
      serviceName
      customerName
      email
      phone
      description
      status
      createdAt
      updatedAt
    }
  }
`;
