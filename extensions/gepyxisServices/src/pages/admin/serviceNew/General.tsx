import Area from '@evershop/evershop/components/common/Area.js';
import { InputField } from '@evershop/evershop/components/common/form/InputField.js';
import { TextareaField } from '@evershop/evershop/components/common/form/TextareaField.js';
import { SelectField } from '@evershop/evershop/components/common/form/SelectField.js';
import { NumberField } from '@evershop/evershop/components/common/form/NumberField.js';
import { ToggleField } from '@evershop/evershop/components/common/form/ToggleField.js';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@evershop/evershop/components/common/ui/Card.js';
import React, { useState } from 'react';

export default function General() {
  const [priceType, setPriceType] = useState<
  'fixed' | 'starting' | 'quote'
>('quote');

  return (
    <Card>
      <CardHeader>
        <CardTitle>Información general</CardTitle>
        <CardDescription>
          Registra la información principal del servicio.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Area
          id="gepyxisServiceGeneral"
          className="flex flex-col gap-2"
          coreComponents={[
            {
              component: {
                default: (
                  <InputField
                    name="name"
                    label="Nombre del servicio"
                    placeholder="Escribe el nombre del servicio"
                    required
                    validation={{
                      required: 'El nombre del servicio es obligatorio'
                    }}
                  />
                )
              },
              sortOrder: 10,
              id: 'name'
            },
            {
              component: {
                default: (
                  <TextareaField
                    name="description"
                    label="Descripción"
                    placeholder="Describe el servicio que ofrece GEPYXIS"
                    required
                    validation={{
                      required: 'La descripción es obligatoria'
                    }}
                  />
                )
              },
              sortOrder: 20,
              id: 'description'
            },
            {
              component: {
                default: (
                  <SelectField
                    name="priceType"
                    label="Tipo de precio"
                    defaultValue="quote"
                    options={[
  { value: 'fixed', label: 'Precio fijo' },
  { value: 'starting', label: 'Desde un precio' },
  { value: 'quote', label: 'Cotización' }
]}
                    required
                    onChange={(value) => {
                      setPriceType(value as 'fixed' | 'starting' | 'quote');
                    }}
                  />
                )
              },
              sortOrder: 30,
              id: 'priceType'
            },
            ...(priceType === 'fixed' || priceType === 'starting'
              ? [
                  {
                    component: {
                      default: (
                        <NumberField
                          name="price"
                          label={priceType === 'starting' ? 'Precio desde' : 'Precio del servicio'}
                          placeholder={priceType === 'starting' ? 'Ej. 500.00' : 'Ej. 1500.00'}
                          min={0}
                          step={0.01}
                          allowDecimals
                          unit="$"
                          unitPosition="left"
                          required
                          validation={{
                            required: 'Debes indicar el precio del servicio'
                          }}
                        />
                      )
                    },
                    sortOrder: 40,
                    id: 'price'
                  }
                ]
              : []),
            {
              component: {
                default: (
                  <InputField
                    name="image"
                    label="URL de la imagen"
                    placeholder="https://ejemplo.com/imagen.jpg"
                  />
                )
              },
              sortOrder: 50,
              id: 'image'
            },
            {
              component: {
                default: (
                  <ToggleField
                    name="status"
                    label="Estado del servicio"
                    defaultValue={true}
                    trueLabel="Activo"
                    falseLabel="Inactivo"
                  />
                )
              },
              sortOrder: 60,
              id: 'status'
            }
          ]}
        />
      </CardContent>
    </Card>
  );
}

export const layout = {
  areaId: 'leftSide',
  sortOrder: 10
};