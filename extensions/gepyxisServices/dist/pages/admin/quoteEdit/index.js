import { getConnection } from '@evershop/evershop/lib/postgres';
import { setContextValue } from '@evershop/evershop/graphql/services';
export default (async (request, response, next)=>{
    let connection;
    try {
        const quoteId = Number(request.params.id);
        if (!Number.isInteger(quoteId) || quoteId <= 0) {
            response.status(404);
            return next();
        }
        connection = await getConnection();
        const result = await connection.query(`SELECT quote_id
       FROM gepyxis_service_quote
       WHERE quote_id = $1`, [
            quoteId
        ]);
        const quote = result.rows[0];
        if (!quote) {
            response.status(404);
            return next();
        }
        setContextValue(request, 'quoteId', quote.quote_id);
        setContextValue(request, 'quoteIdString', String(quote.quote_id));
        return next();
    } catch (error) {
        return next(error);
    } finally{
        if (connection) {
            connection.release();
        }
    }
});
