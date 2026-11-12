import React from 'react';
const Contacto = ({ service, action })=>{
    const [enviando, setEnviando] = React.useState(false);
    const [mensaje, setMensaje] = React.useState('');
    const [error, setError] = React.useState(false);
    const mostrarFormulario = service && (action === 'solicitud' || action === 'cotizacion');
    const esCotizacion = action === 'cotizacion';
    const precio = service ? service.priceType === 'quote' ? 'Cotización' : service.priceType === 'starting' ? `Desde $${Number(service.price).toFixed(2)}` : `$${Number(service.price).toFixed(2)}` : '';
    const handleSubmit = async (event)=>{
        event.preventDefault();
        if (!esCotizacion || !service) {
            return;
        }
        const form = event.currentTarget;
        const formData = new FormData(form);
        const datos = {
            serviceId: service.serviceId,
            customerName: String(formData.get('name') ?? '').trim(),
            email: String(formData.get('email') ?? '').trim(),
            phone: String(formData.get('phone') ?? '').trim(),
            description: String(formData.get('message') ?? '').trim()
        };
        setEnviando(true);
        setMensaje('');
        setError(false);
        try {
            const response = await fetch('/api/services/quote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos)
            });
            const resultado = await response.json();
            if (!response.ok || !resultado.success) {
                throw new Error(resultado.message || 'No fue posible enviar la cotización.');
            }
            setMensaje(resultado.message || 'Tu cotización fue registrada correctamente.');
            form.reset();
        } catch (err) {
            setError(true);
            setMensaje(err instanceof Error ? err.message : 'Ocurrió un error al enviar la cotización.');
        } finally{
            setEnviando(false);
        }
    };
    return /*#__PURE__*/ React.createElement("main", {
        className: "bg-white"
    }, /*#__PURE__*/ React.createElement("section", {
        className: "mx-auto max-w-7xl px-6 py-16 md:py-24"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "mx-auto max-w-3xl text-center"
    }, /*#__PURE__*/ React.createElement("p", {
        className: "mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500"
    }, "GEPYXIS"), /*#__PURE__*/ React.createElement("h1", {
        className: "text-4xl font-bold tracking-tight text-gray-900 md:text-5xl"
    }, mostrarFormulario ? esCotizacion ? 'Solicitar cotización' : 'Solicitar servicio' : 'Estamos para ayudarte'), /*#__PURE__*/ React.createElement("p", {
        className: "mt-6 text-lg leading-8 text-gray-600"
    }, mostrarFormulario ? 'Compártenos tus datos y cuéntanos qué necesitas. Nuestro equipo podrá ponerse en contacto contigo.' : '¿Tienes alguna duda o necesitas información sobre nuestros productos y servicios tecnológicos? Nos dará gusto atenderte.')), mostrarFormulario ? /*#__PURE__*/ React.createElement("div", {
        className: "mx-auto mt-12 max-w-3xl rounded-xl border border-gray-200 p-8 shadow-sm"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "mb-8 rounded-lg bg-blue-50 p-5"
    }, /*#__PURE__*/ React.createElement("p", {
        className: "text-sm font-semibold text-blue-700"
    }, "Servicio seleccionado"), /*#__PURE__*/ React.createElement("h2", {
        className: "mt-2 text-xl font-bold text-gray-900"
    }, service.name), /*#__PURE__*/ React.createElement("p", {
        className: "mt-2 text-sm text-gray-600"
    }, precio), /*#__PURE__*/ React.createElement("p", {
        className: "mt-3 text-sm font-medium text-blue-700"
    }, "Tipo: ", esCotizacion ? 'Cotización' : 'Solicitud de servicio')), /*#__PURE__*/ React.createElement("form", {
        className: "space-y-5",
        onSubmit: handleSubmit
    }, /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("label", {
        htmlFor: "contact-name",
        className: "mb-2 block text-sm font-semibold text-gray-700"
    }, "Nombre completo"), /*#__PURE__*/ React.createElement("input", {
        id: "contact-name",
        name: "name",
        type: "text",
        required: true,
        maxLength: 255,
        className: "w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600",
        placeholder: "Escribe tu nombre"
    })), /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("label", {
        htmlFor: "contact-email",
        className: "mb-2 block text-sm font-semibold text-gray-700"
    }, "Correo electrónico"), /*#__PURE__*/ React.createElement("input", {
        id: "contact-email",
        name: "email",
        type: "email",
        required: true,
        maxLength: 255,
        className: "w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600",
        placeholder: "correo@ejemplo.com"
    })), /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("label", {
        htmlFor: "contact-phone",
        className: "mb-2 block text-sm font-semibold text-gray-700"
    }, "Teléfono"), /*#__PURE__*/ React.createElement("input", {
        id: "contact-phone",
        name: "phone",
        type: "tel",
        required: true,
        maxLength: 30,
        className: "w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600",
        placeholder: "Tu número de contacto"
    })), /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("label", {
        htmlFor: "contact-message",
        className: "mb-2 block text-sm font-semibold text-gray-700"
    }, esCotizacion ? 'Describe lo que necesitas cotizar' : 'Cuéntanos qué necesitas'), /*#__PURE__*/ React.createElement("textarea", {
        id: "contact-message",
        name: "message",
        rows: 5,
        required: true,
        maxLength: 5000,
        className: "w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600",
        placeholder: "Escribe los detalles de tu solicitud..."
    })), /*#__PURE__*/ React.createElement("button", {
        type: "submit",
        disabled: !esCotizacion || enviando,
        className: `w-full rounded-lg px-6 py-3 font-semibold text-white ${!esCotizacion || enviando ? 'cursor-not-allowed bg-blue-300' : 'bg-blue-600 hover:bg-blue-700'}`
    }, !esCotizacion ? 'Solicitud en preparación' : enviando ? 'Enviando cotización...' : 'Enviar cotización'), mensaje ? /*#__PURE__*/ React.createElement("p", {
        role: "status",
        className: `text-center text-sm ${error ? 'text-red-600' : 'text-green-600'}`
    }, mensaje) : /*#__PURE__*/ React.createElement("p", {
        className: "text-center text-sm text-gray-500"
    }, esCotizacion ? 'Tus datos serán enviados al equipo de GEPYXIS para dar seguimiento a tu cotización.' : 'El envío de solicitudes estará disponible próximamente.'))) : /*#__PURE__*/ React.createElement("div", {
        className: "mx-auto mt-12 grid max-w-3xl gap-6 md:grid-cols-2"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "rounded-xl border border-gray-200 p-8"
    }, /*#__PURE__*/ React.createElement("h2", {
        className: "text-xl font-semibold text-gray-900"
    }, "Productos"), /*#__PURE__*/ React.createElement("p", {
        className: "mt-3 text-gray-600"
    }, "¿Buscas información sobre alguno de nuestros productos?")), /*#__PURE__*/ React.createElement("div", {
        className: "rounded-xl border border-gray-200 p-8"
    }, /*#__PURE__*/ React.createElement("h2", {
        className: "text-xl font-semibold text-gray-900"
    }, "Servicios"), /*#__PURE__*/ React.createElement("p", {
        className: "mt-3 text-gray-600"
    }, "¿Necesitas una solución tecnológica para tu negocio?")))));
};
export const query = `
  query Query {
    service: currentContactService {
      serviceId
      name
      priceType
      price
    }
    action: currentContactAction
  }
`;
export const layout = {
    areaId: 'content',
    sortOrder: 10
};
export default Contacto;
