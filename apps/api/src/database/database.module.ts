import { Global, Module } from '@nestjs/common';
import { createPool } from 'mysql2/promise';

@Global()
@Module({
  providers: [
    {
      provide: 'DATABASE_POOL',
      useFactory: async () => {
        const pool = createPool({
          host: 'localhost',
          user: 'root',
          password: 'password',
          database: 'kuy',
          waitForConnections: true,
          connectionLimit: 10,
          queueLimit: 0,
        });
        return pool;
      },
    },
  ],
  exports: ['DATABASE_POOL'],
})
export class DatabaseModule {}
