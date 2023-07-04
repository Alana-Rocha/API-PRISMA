import { PrismaClientError } from './PrismaClientError';

export class ConflictError extends Error {
  constructor(e: PrismaClientError) {
    const uniqueField = e.meta.target;

    super(`A record with this ${uniqueField} already exists.`);
  }
}
