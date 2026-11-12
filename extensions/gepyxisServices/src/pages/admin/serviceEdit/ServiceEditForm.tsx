import { FormButtons } from '@evershop/evershop/components/admin/FormButtons.js';
import Area from '@evershop/evershop/components/common/Area.js';
import { Form } from '@evershop/evershop/components/common/form/Form.js';
import { toast } from '@evershop/evershop/components/common/ui/Sonner.js';
import React from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';

export default function ServiceEditForm({
  action,
  gridUrl,
  service
}: {
  action: string;
  gridUrl: string;
  service: {
    uuid: string;
  };
}) {
  const form = useForm({
    shouldUnregister: true
  });

  const submit: SubmitHandler<any> = async (data) => {
    try {
      const response = await fetch(action, {
        method: 'PATCH',
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
        toast.error(
          result.message || 'No fue posible actualizar el servicio.'
        );
        return;
      }

      toast.success('Servicio actualizado correctamente.');
      window.location.href = gridUrl;
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : 'Ocurrió un error al actualizar el servicio.'
      );
    }
  };

  return (
    <Form
      id="serviceEditForm"
      method="PATCH"
      action={action}
      form={form}
      onSubmit={submit}
      submitBtn={false}
    >
      <div className="grid grid-cols-3 gap-x-5 grid-flow-row">
        <div className="col-span-2 grid grid-cols-1 gap-5 auto-rows-max">
          <Area id="leftSide" noOuter />
        </div>

        <div className="col-span-1 grid grid-cols-1 gap-5 auto-rows-max">
          <Area id="rightSide" noOuter />
        </div>
      </div>

      <FormButtons
        formId="serviceEditForm"
        cancelUrl={gridUrl}
      />
    </Form>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 10
};

export const query = `
  query Query {
    action: url(
      routeId: "updateService",
      params: [{ key: "id", value: getContextValue("serviceUuid") }]
    ),
    gridUrl: url(routeId: "serviceGrid"),
    service(id: getContextValue("serviceId")) {
      uuid
      name
      description
      image
      priceType
      price
      status
    }
  }
`;
