import { getConnection } from '@evershop/evershop/lib/postgres';

export default async (request, response) => {
  const quoteId = Number(request.params.id);
  let body = request.body ?? {};

  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      body = {};
    }
  }

  const status =
    body && typeof body === 'object' ? body.status : undefined;

  console.log('[updateQuote diagnostico]', {
    bodyType: typeof request.body,
    bodyKeys: body && typeof body === 'object' ? Object.keys(body) : [],
    status,
    statusType: typeof status,
    contentType: request.headers['content-type']
  });

  if (!Number.isInteger(quoteId) || quoteId <= 0) {
    response.status(400);
    response.$body = {
      success: false,
      message: 'El identificador de la cotizacion no es valido.'
    };
    return;
  }

  const allowedStatuses = [
    'pending',
    'reviewing',
    'quoted',
    'closed'
  ];

  if (
    typeof status !== 'string' ||
    !allowedStatuses.includes(status.trim())
  ) {
    response.status(400);
    response.$body = {
      success: false,
      message: 'El estado de la cotizacion no es valido.'
    };
    return;
  }

  let connection;

  try {
    connection = await getConnection();

    const result = await connection.query(
      `UPDATE gepyxis_service_quote
       SET
         status = $1,
         updated_at = CURRENT_TIMESTAMP
       WHERE quote_id = $2
       RETURNING quote_id, status, updated_at`,
      [status.trim(), quoteId]
    );

    if (result.rowCount === 0) {
      response.status(404);
      response.$body = {
        success: false,
        message: 'No se encontro la cotizacion.'
      };
      return;
    }

    response.status(200);
    response.$body = {
      success: true,
      data: result.rows[0]
    };
  } catch (error) {
    console.error('Error al actualizar la cotizacion:', error);

    response.status(500);
    response.$body = {
      success: false,
      message: 'No fue posible actualizar la cotizacion.'
    };
  } finally {
    if (connection) {
      connection.release();
    }
  }
};
