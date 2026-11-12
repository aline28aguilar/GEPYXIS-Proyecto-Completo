import { setContextValue } from '@evershop/evershop/graphql/services';
export default ((request, response, next)=>{
    setContextValue(request, 'pageInfo', {
        title: 'Servicios | GEPYXIS',
        description: 'Conoce los servicios tecnológicos de GEPYXIS.'
    });
    next();
});
