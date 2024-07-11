import { Inject } from '@nestjs/common';
import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { User } from './models/user.model';

export class UserService {
  constructor(@Inject('DATABASE_POOL') private pool: Pool) {}

  async findAll(): Promise<User[]> {
    const [rows] = await this.pool.query<RowDataPacket[]>(
      'SELECT * FROM users',
    );

    return rows as User[];
  }

  async findById(id: number): Promise<User> {
    const [rows] = await this.pool.query('SELECT * FROM users WHERE id = ?', [
      id,
    ]);

    return rows[0] as User;
  }

  async upsert(name: string): Promise<User> {
    await this.pool.query<ResultSetHeader>(
      'INSERT INTO users (name) VALUES (?) ON DUPLICATE KEY UPDATE name = VALUES(name)',
      [name],
    );

    const [rows] = await this.pool.query<RowDataPacket[]>(
      'SELECT * FROM users WHERE name = ?',
      [name],
    );

    return rows[0] as User;
  }

  async addAmount({
    id,
    amount,
  }: {
    id: number;
    amount: number;
  }): Promise<User> {
    await this.pool.query<ResultSetHeader>(
      'UPDATE users SET amount = amount + ? WHERE id = ?',
      [amount, id],
    );

    const [rows] = await this.pool.query('SELECT * FROM users WHERE id = ?', [
      id,
    ]);

    return rows[0] as User;
  }
}
