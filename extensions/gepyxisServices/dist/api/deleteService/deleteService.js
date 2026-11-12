import { getConnection } from '@evershop/evershop/lib/postgres';
export default (async (request, response)=>{
    const serviceId = request.params.id;
    if (typeof serviceId !== 'string' || !serviceId.trim()) {
        return response.status(400).json({
            success: false,
            message: 'El identificador del servicio no es válido.'
        });
    }
    let connection;
    try {
        connection = await getConnection();
        const result = await connection.query(`DELETE FROM gepyxis_service
       WHERE uuid = $1
       RETURNING service_id`, [
            serviceId
        ]);
        if (result.rowCount === 0) {
            return response.status(404).json({
                success: false,
                message: 'No se encontró el servicio que deseas eliminar.'
            });
        }
        return response.status(200).json({
            success: true,
            message: 'El servicio se eliminó correctamente.'
        });
    } catch (error) {
        console.error('Error al eliminar el servicio:', error);
        return response.status(500).json({
            success: false,
            message: 'No fue posible eliminar el servicio.'
        });
    } finally{
        if (connection) {
            connection.release();
        }
    }
});
