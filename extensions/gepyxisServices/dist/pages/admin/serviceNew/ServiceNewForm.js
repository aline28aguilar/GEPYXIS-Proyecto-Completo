import { FormButtons } from '@evershop/evershop/components/admin/FormButtons.js';
import Area from '@evershop/evershop/components/common/Area.js';
import { Form } from '@evershop/evershop/components/common/form/Form.js';
import { toast } from '@evershop/evershop/components/common/ui/Sonner.js';
import React from 'react';
import { useForm } from 'react-hook-form';
export default function ServiceNewForm({ action, gridUrl }) {
    const form = useForm({
        shouldUnregister: true
    });
    const submit = async (data)=>{
        try {
            const response = await fetch(action, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...data,
                    action: undefined,
                    method: undefined
                })
            });
            const result = await response.json();
            if (!response.ok || !result.success) {
                toast.error(result.message || 'No fue posible registrar el servicio.');
                return;
            }
            toast.success('Servicio registrado correctamente.');
            window.location.href = gridUrl;
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Ocurrió un error al registrar el servicio.');
        }
    };
    return /*#__PURE__*/ React.createElement(Form, {
        id: "serviceNewForm",
        method: "POST",
        action: action,
        form: form,
        onSubmit: submit,
        submitBtn: false
    }, /*#__PURE__*/ React.createElement("div", {
        className: "grid grid-cols-3 gap-x-5 grid-flow-row"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "col-span-2 grid grid-cols-1 gap-5 auto-rows-max"
    }, /*#__PURE__*/ React.createElement(Area, {
        id: "leftSide",
        noOuter: true
    })), /*#__PURE__*/ React.createElement("div", {
        className: "col-span-1 grid grid-cols-1 gap-5 auto-rows-max"
    }, /*#__PURE__*/ React.createElement(Area, {
        id: "rightSide",
        noOuter: true
    }))), /*#__PURE__*/ React.createElement(FormButtons, {
        formId: "serviceNewForm",
        cancelUrl: gridUrl
    }));
}
export const layout = {
    areaId: 'content',
    sortOrder: 10
};
export const query = `
  query Query {
    action: url(routeId: "createService"),
    gridUrl: url(routeId: "serviceGrid")
  }
`;
