import { getConnection } from '@evershop/evershop/lib/postgres';
export default (async (request, response)=>{
    const body = request.body ?? {};
    const serviceId = request.params.id;
    if (typeof serviceId !== 'string' || !serviceId.trim()) {
        return response.status(400).json({
            success: false,
            message: 'El identificador del servicio no es válido.'
        });
    }
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const description = typeof body.description === 'string' ? body.description.trim() : '';
    const priceType = body.priceType;
    if (!name || !description) {
        return response.status(400).json({
            success: false,
            message: 'El nombre y la descripción son obligatorios.'
        });
    }
    if (priceType !== 'fixed' && priceType !== 'starting' && priceType !== 'quote') {
        return response.status(400).json({
            success: false,
            message: 'El tipo de precio no es válido.'
        });
    }
    let price = null;
    if (priceType === 'fixed' || priceType === 'starting') {
        if (body.price === undefined || body.price === null || body.price === '') {
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
    const status = body.status;
    if (typeof status !== 'boolean') {
        return response.status(400).json({
            success: false,
            message: 'El estado del servicio no es válido.'
        });
    }
    const image = typeof body.image === 'string' && body.image.trim() ? body.image.trim() : null;
    let connection;
    try {
        connection = await getConnection();
        const result = await connection.query(`UPDATE gepyxis_service
       SET
         name = $1,
         description = $2,
         image = $3,
         price_type = $4,
         price = $5,
         status = $6,
         updated_at = CURRENT_TIMESTAMP
       WHERE uuid = $7
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
         updated_at`, [
            name,
            description,
            image,
            priceType,
            price,
            status,
            serviceId
        ]);
        if (result.rowCount === 0) {
            return response.status(404).json({
                success: false,
                message: 'No se encontró el servicio que deseas actualizar.'
            });
        }
        return response.status(200).json({
            success: true,
            data: result.rows[0]
        });
    } catch (error) {
        console.error('Error al actualizar el servicio:', error);
        return response.status(500).json({
            success: false,
            message: 'No fue posible actualizar el servicio.'
        });
    } finally{
        if (connection) {
            connection.release();
        }
    }
});
