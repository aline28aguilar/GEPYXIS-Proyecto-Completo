import { setContextValue } from '@evershop/evershop/graphql/services';
export default ((request)=>{
    const url = new URL(request.originalUrl, 'http://localhost');
    const filters = [];
    const processedKeys = new Set();
    for (const [key, value] of url.searchParams.entries()){
        if (processedKeys.has(key)) {
            continue;
        }
        const values = url.searchParams.getAll(key);
        filters.push({
            key,
            operation: values.length > 1 ? 'in' : 'eq',
            value: values.length > 1 ? values.join(',') : value
        });
        processedKeys.add(key);
    }
    setContextValue(request, 'filtersFromUrl', filters);
});
