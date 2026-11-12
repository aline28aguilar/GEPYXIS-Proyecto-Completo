import { select } from '@evershop/postgres-query-builder';
import { buildUrl } from '@evershop/evershop/lib/router';
const toCamelCase = (record)=>Object.fromEntries(Object.entries(record).map(([key, value])=>[
            key.replace(/_([a-z])/g, (_, letter)=>letter.toUpperCase()),
            value
        ]));
export default {
    Service: {
        deleteApi: (service)=>buildUrl('deleteService', {
                id: service.uuid
            })
    },
    Query: {
        services: async (_, { filters = [] }, { pool })=>{
            const query = select().from('gepyxis_service').orderBy('created_at', 'DESC');
            const currentFilters = [];
            const keywordFilter = filters.find((filter)=>filter.key === 'keyword' && filter.operation === 'eq');
            if (keywordFilter && String(keywordFilter.value).trim()) {
                query.andWhere('name', 'ILIKE', `%${String(keywordFilter.value).trim()}%`);
                currentFilters.push(keywordFilter);
            }
            const statusFilter = filters.find((filter)=>filter.key === 'status' && filter.operation === 'eq');
            if (statusFilter && [
                '1',
                '0',
                'true',
                'false'
            ].includes(String(statusFilter.value))) {
                const active = [
                    '1',
                    'true'
                ].includes(String(statusFilter.value));
                query.andWhere('status', '=', active);
                currentFilters.push({
                    ...statusFilter,
                    value: active
                });
            }
            const pageFilter = filters.find((filter)=>filter.key === 'page' && filter.operation === 'eq');
            const page = Math.max(1, parseInt(pageFilter?.value, 10) || 1);
            const limitFilter = filters.find((filter)=>filter.key === 'limit' && filter.operation === 'eq');
            const requestedLimit = parseInt(limitFilter?.value, 10) || 20;
            const limit = [
                20,
                50,
                100,
                150,
                200
            ].includes(requestedLimit) ? requestedLimit : 20;
            const offset = (page - 1) * limit;
            const countQuery = select().from('gepyxis_service').select('COUNT(*)', 'total');
            if (keywordFilter && String(keywordFilter.value).trim()) {
                countQuery.andWhere('name', 'ILIKE', `%${String(keywordFilter.value).trim()}%`);
            }
            if (statusFilter && [
                '1',
                '0',
                'true',
                'false'
            ].includes(String(statusFilter.value))) {
                countQuery.andWhere('status', '=', [
                    '1',
                    'true'
                ].includes(String(statusFilter.value)));
            }
            const countResult = await countQuery.execute(pool);
            const total = Number(countResult[0].total);
            query.limit(offset, limit);
            const records = await query.execute(pool);
            const items = records.map((service)=>({
                    ...toCamelCase(service),
                    price: service.price === null ? null : Number(service.price)
                }));
            currentFilters.push({
                key: 'page',
                operation: 'eq',
                value: page
            }, {
                key: 'limit',
                operation: 'eq',
                value: limit
            });
            return {
                items,
                currentPage: page,
                total,
                currentFilters
            };
        },
        currentService: async (_, __, { currentRoute, currentServiceId, pool })=>{
            if (currentRoute?.id !== 'serviceView' || !currentServiceId) {
                return null;
            }
            const record = await select().from('gepyxis_service').where('service_id', '=', currentServiceId).andWhere('status', '=', true).load(pool);
            if (!record) {
                return null;
            }
            return {
                ...toCamelCase(record),
                price: record.price === null ? null : Number(record.price)
            };
        },
        currentContactService: async (_, __, { currentRoute, contactServiceId, pool })=>{
            if (currentRoute?.id !== 'contacto' || !contactServiceId) {
                return null;
            }
            const record = await select().from('gepyxis_service').where('service_id', '=', contactServiceId).andWhere('status', '=', true).load(pool);
            if (!record) {
                return null;
            }
            return {
                ...toCamelCase(record),
                price: record.price === null ? null : Number(record.price)
            };
        },
        currentContactAction: (_, __, { currentRoute, contactAction })=>{
            if (currentRoute?.id !== 'contacto') {
                return null;
            }
            return [
                'solicitud',
                'cotizacion'
            ].includes(contactAction) ? contactAction : null;
        },
        service: async (_, { id }, { pool })=>{
            const record = await select().from('gepyxis_service').where('service_id', '=', id).load(pool);
            if (!record) {
                return null;
            }
            return {
                ...toCamelCase(record),
                price: record.price === null ? null : Number(record.price)
            };
        }
    }
};
