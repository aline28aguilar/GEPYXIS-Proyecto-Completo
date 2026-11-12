import { setContextValue } from '@evershop/evershop/graphql/services';
export default ((request, response, next)=>{
    const serviceParam = request.query?.servicio;
    const actionParam = request.query?.tipo;
    const serviceId = typeof serviceParam === 'string' && /^\d+$/.test(serviceParam) && Number(serviceParam) > 0 ? Number(serviceParam) : null;
    const action = actionParam === 'solicitud' || actionParam === 'cotizacion' ? actionParam : null;
    setContextValue(request, 'contactServiceId', serviceId);
    setContextValue(request, 'contactAction', action);
    setContextValue(request, 'pageInfo', {
        title: 'Contacto | GEPYXIS',
        description: 'Ponte en contacto con GEPYXIS para resolver tus dudas sobre nuestros productos y servicios.'
    });
    next();
});
