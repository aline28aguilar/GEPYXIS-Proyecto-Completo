import { getConnection } from '@evershop/evershop/lib/postgres';
import { setContextValue } from '@evershop/evershop/graphql/services';
export default (async (request, response, next)=>{
    let connection;
    try {
        connection = await getConnection();
        const result = await connection.query(`SELECT service_id, uuid, name
       FROM gepyxis_service
       WHERE uuid = $1 AND status = TRUE`, [
            request.params.uuid
        ]);
        const service = result.rows[0];
        if (!service) {
            response.status(404);
            return next();
        }
        setContextValue(request, 'currentServiceId', service.service_id);
        setContextValue(request, 'pageInfo', {
            title: `${service.name} | GEPYXIS`,
            description: service.name
        });
        return next();
    } catch (error) {
        return next(error);
    } finally{
        if (connection) {
            connection.release();
        }
    }
});
