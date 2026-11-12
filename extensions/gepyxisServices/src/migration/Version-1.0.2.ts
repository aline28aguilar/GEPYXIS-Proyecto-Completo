import { execute } from '@evershop/postgres-query-builder';
import type { PoolClient } from 'pg';

export default async (connection: PoolClient) => {
  await execute(
    connection,
    `CREATE TABLE gepyxis_service_quote (
      quote_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      uuid UUID NOT NULL DEFAULT gen_random_uuid(),
      service_id INT,
      service_name VARCHAR(255) NOT NULL,
      customer_name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(30) NOT NULL,
      description TEXT NOT NULL,
      status VARCHAR(20) NOT NULL DEFAULT 'pending',
      created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
      CONSTRAINT uq_gepyxis_service_quote_uuid UNIQUE (uuid),
      CONSTRAINT fk_gepyxis_service_quote_service
        FOREIGN KEY (service_id)
        REFERENCES gepyxis_service (service_id)
        ON DELETE SET NULL,
      CONSTRAINT chk_gepyxis_service_quote_status
        CHECK (status IN ('pending', 'reviewing', 'quoted', 'closed'))
    )`
  );

  await execute(
    connection,
    `CREATE INDEX idx_gepyxis_service_quote_status
     ON gepyxis_service_quote (status)`
  );

  await execute(
    connection,
    `CREATE INDEX idx_gepyxis_service_quote_created_at
     ON gepyxis_service_quote (created_at DESC)`
  );
};