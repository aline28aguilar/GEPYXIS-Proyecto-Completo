import { getConnection } from '@evershop/evershop/lib/postgres';
export default (async (request, response)=>{
    const body = request.body ?? {};
    const serviceId = Number(body.serviceId);
    const customerName = typeof body.customerName === 'string' ? body.customerName.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
    const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
    const description = typeof body.description === 'string' ? body.description.trim() : '';
    if (!Number.isInteger(serviceId) || serviceId <= 0) {
        return response.status(400).json({
            success: false,
            message: 'El servicio seleccionado no es válido.'
        });
    }
    if (!customerName || customerName.length > 255) {
        return response.status(400).json({
            success: false,
            message: 'Ingresa un nombre válido.'
        });
    }
    if (!email || email.length > 255 || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        return response.status(400).json({
            success: false,
            message: 'Ingresa un correo electrónico válido.'
        });
    }
    if (!phone || phone.length > 30) {
        return response.status(400).json({
            success: false,
            message: 'Ingresa un teléfono válido.'
        });
    }
    if (!description || description.length > 5000) {
        return response.status(400).json({
            success: false,
            message: 'La descripción es obligatoria y no debe superar los 5000 caracteres.'
        });
    }
    let connection;
    try {
        connection = await getConnection();
        const serviceResult = await connection.query(`SELECT service_id, name
       FROM gepyxis_service
       WHERE service_id = $1
         AND status = TRUE`, [
            serviceId
        ]);
        const service = serviceResult.rows[0];
        if (!service) {
            return response.status(404).json({
                success: false,
                message: 'El servicio seleccionado no existe o no está disponible.'
            });
        }
        const result = await connection.query(`INSERT INTO gepyxis_service_quote
        (service_id, service_name, customer_name, email, phone, description)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING
        quote_id,
        uuid,
        service_id,
        service_name,
        customer_name,
        email,
        phone,
        description,
        status,
        created_at`, [
            service.service_id,
            service.name,
            customerName,
            email,
            phone,
            description
        ]);
        return response.status(201).json({
            success: true,
            message: 'Tu solicitud de cotización fue registrada correctamente.',
            data: result.rows[0]
        });
    } catch (error) {
        console.error('Error al registrar la cotización:', error);
        return response.status(500).json({
            success: false,
            message: 'No fue posible registrar tu solicitud de cotización.'
        });
    } finally{
        if (connection) {
            connection.release();
        }
    }
});
