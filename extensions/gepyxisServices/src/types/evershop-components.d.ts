declare module '@evershop/evershop/components/common/Area.js' {
  const Area: any;
  export default Area;
}

declare module '@evershop/evershop/components/common/form/InputField.js' {
  export const InputField: any;
}

declare module '@evershop/evershop/components/common/form/TextareaField.js' {
  export const TextareaField: any;
}

declare module '@evershop/evershop/components/common/ui/Card.js' {
  export const Card: any;
  export const CardContent: any;
  export const CardDescription: any;
  export const CardHeader: any;
  export const CardTitle: any;
}

declare module '@evershop/evershop/lib/postgres' {
  export function getConnection(): Promise<any>;
  export const pool: any;
}


declare module '@evershop/evershop/components/common/form/SelectField.js' {
  export const SelectField: any;
}

declare module '@evershop/evershop/components/common/form/NumberField.js' {
  export const NumberField: any;
}

declare module '@evershop/evershop/components/common/form/ToggleField.js' {
  export const ToggleField: any;
}

declare module '@evershop/evershop/components/admin/FormButtons.js' {
  export const FormButtons: any;
}

declare module '@evershop/evershop/components/common/form/Form.js' {
  export const Form: any;
}

declare module '@evershop/evershop/components/common/ui/Sonner.js' {
  export const toast: any;
}

declare module '@evershop/evershop/modules/cms/services/pageMetaInfo.js' {
  export function setPageMetaInfo(
    request: any,
    info: {
      title?: string;
      description?: string;
    }
  ): void;
}
