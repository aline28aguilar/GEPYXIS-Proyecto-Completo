import { select } from '@evershop/postgres-query-builder';
const toCamelCase = (record)=>{
    const item = Object.fromEntries(Object.entries(record).map(([key, value])=>[
            key.replace(/_([a-z])/g, (_, letter)=>letter.toUpperCase()),
            value
        ]));
    const createdAt = item.createdAt;
    const updatedAt = item.updatedAt;
    return {
        ...item,
        createdAt: createdAt ? new Date(String(createdAt)).toISOString() : null,
        updatedAt: updatedAt ? new Date(String(updatedAt)).toISOString() : null
    };
};
export default {
    Query: {
        serviceQuote: async (_, { id }, { pool })=>{
            const query = select().from('gepyxis_service_quote').andWhere('quote_id', '=', id);
            const records = await query.execute(pool);
            if (!records.length) {
                return null;
            }
            return toCamelCase(records[0]);
        },
        serviceQuotes: async (_, { filters = [] }, { pool })=>{
            const query = select().from('gepyxis_service_quote').orderBy('created_at', 'DESC');
            const currentFilters = [];
            const keywordFilter = filters.find((filter)=>filter.key === 'keyword' && filter.operation === 'eq');
            if (keywordFilter && String(keywordFilter.value).trim()) {
                query.andWhere('customer_name', 'ILIKE', `%${String(keywordFilter.value).trim()}%`);
                currentFilters.push(keywordFilter);
            }
            const statusFilter = filters.find((filter)=>filter.key === 'status' && filter.operation === 'eq');
            const allowedStatuses = [
                'pending',
                'reviewing',
                'quoted',
                'closed'
            ];
            if (statusFilter && allowedStatuses.includes(String(statusFilter.value))) {
                query.andWhere('status', '=', String(statusFilter.value));
                currentFilters.push(statusFilter);
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
            const countQuery = select().from('gepyxis_service_quote').select('COUNT(*)', 'total');
            if (keywordFilter && String(keywordFilter.value).trim()) {
                countQuery.andWhere('customer_name', 'ILIKE', `%${String(keywordFilter.value).trim()}%`);
            }
            if (statusFilter && allowedStatuses.includes(String(statusFilter.value))) {
                countQuery.andWhere('status', '=', String(statusFilter.value));
            }
            const countResult = await countQuery.execute(pool);
            const total = Number(countResult[0].total);
            query.limit(offset, limit);
            const records = await query.execute(pool);
            const items = records.map((record)=>toCamelCase(record));
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
        }
    }
};
