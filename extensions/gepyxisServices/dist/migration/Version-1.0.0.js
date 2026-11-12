import { execute } from '@evershop/postgres-query-builder';
export default (async (connection)=>{
    await execute(connection, `CREATE TABLE gepyxis_service (
      service_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      uuid UUID NOT NULL DEFAULT gen_random_uuid(),
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      image TEXT,
      price_type VARCHAR(20) NOT NULL DEFAULT 'quote',
      price DECIMAL(12, 2),
      status BOOLEAN NOT NULL DEFAULT TRUE,
      created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
      CONSTRAINT uq_gepyxis_service_uuid UNIQUE (uuid),
      CONSTRAINT chk_gepyxis_service_price_type
        CHECK (price_type IN ('fixed', 'quote')),
      CONSTRAINT chk_gepyxis_service_price
        CHECK (
          (price_type = 'quote' AND price IS NULL)
          OR
          (price_type = 'fixed' AND price IS NOT NULL AND price >= 0)
        )
    )`);
    await execute(connection, `CREATE INDEX idx_gepyxis_service_status
     ON gepyxis_service (status)`);
});
