import { execute } from '@evershop/postgres-query-builder';
export default (async (connection)=>{
    await execute(connection, `ALTER TABLE gepyxis_service
      DROP CONSTRAINT chk_gepyxis_service_price_type,
      DROP CONSTRAINT chk_gepyxis_service_price`);
    await execute(connection, `ALTER TABLE gepyxis_service
      ADD CONSTRAINT chk_gepyxis_service_price_type
        CHECK (price_type IN ('fixed', 'starting', 'quote')),
      ADD CONSTRAINT chk_gepyxis_service_price
        CHECK (
          (price_type = 'quote' AND price IS NULL)
          OR
          (price_type IN ('fixed', 'starting')
            AND price IS NOT NULL
            AND price >= 0)
        )`);
});
