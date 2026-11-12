import { getConnection } from '@evershop/evershop/lib/postgres';
import { setContextValue } from '@evershop/evershop/graphql/services';

export default async (request, response, next) => {
  let connection;

  try {
    connection = await getConnection();

    const result = await connection.query(
      `SELECT service_id, uuid, name
       FROM gepyxis_service
       WHERE uuid = $1`,
      [request.params.id]
    );

    const service = result.rows[0];

    if (!service) {
      response.status(404);
      return next();
    }

    setContextValue(request, 'serviceId', service.service_id);
    setContextValue(request, 'serviceUuid', service.uuid);

    return next();
  } catch (error) {
    return next(error);
  } finally {
    if (connection) {
      connection.release();
    }
  }
};