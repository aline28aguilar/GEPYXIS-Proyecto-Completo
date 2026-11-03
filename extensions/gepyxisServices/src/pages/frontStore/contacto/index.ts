import { setContextValue } from '@evershop/evershop/graphql/services';

export default (request, response, next) => {
  setContextValue(request, 'pageInfo', {
    title: 'Contacto | GEPYXIS',
    description: 'Ponte en contacto con GEPYXIS para resolver tus dudas sobre nuestros productos y servicios.'
  });

  next();
};