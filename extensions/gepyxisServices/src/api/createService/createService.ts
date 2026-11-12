import { getConnection } from '@evershop/evershop/lib/postgres';

export default async (request, response) => {
  const body = request.body ?? {};

  const name =
    typeof body.name === 'string' ? body.name.trim() : '';

  const description =
    typeof body.description === 'string'
      ? body.description.trim()
      : '';

  const priceType = body.priceType ?? 'quote';

  if (!name || !description) {
    return response.status(400).json({
      success: false,
      message: 'El nombre y la descripción son obligatorios.'
    });
  }

  if (
  priceType !== 'fixed' &&
  priceType !== 'starting' &&
  priceType !== 'quote'
) {
  return response.status(400).json({
    success: false,
    message: 'El tipo de precio no es válido.'
  });
}

  let price: number | null = null;

  if (priceType === 'fixed' || priceType === 'starting') {
    if (
      body.price === undefined ||
      body.price === null ||
      body.price === ''
    ) {
      return response.status(400).json({
        success: false,
        message: 'Debes indicar el precio del servicio.'
      });
    }

    price = Number(body.price);

    if (!Number.isFinite(price) || price < 0) {
      return response.status(400).json({
        success: false,
        message: 'El precio debe ser un número válido y no negativo.'
      });
    }
  }

  const status = body.status === undefined ? true : body.status;

  if (typeof status !== 'boolean') {
    return response.status(400).json({
      success: false,
      message: 'El estado del servicio no es válido.'
    });
  }

  const image =
    typeof body.image === 'string' && body.image.trim()
      ? body.image.trim()
      : null;

  let connection;

  try {
    connection = await getConnection();

    const result = await connection.query(
      `INSERT INTO gepyxis_service
        (name, description, image, price_type, price, status)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING
        service_id,
        uuid,
        name,
        description,
        image,
        price_type,
        price,
        status,
        created_at,
        updated_at`,
      [name, description, image, priceType, price, status]
    );

    return response.status(201).json({
      success: true,
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Error al crear el servicio:', error);

    return response.status(500).json({
      success: false,
      message: 'No fue posible registrar el servicio.'
    });
  } finally {
    if (connection) {
      connection.release();
    }
  }
};
