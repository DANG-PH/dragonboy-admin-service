import { RpcException } from '@nestjs/microservices';
import { ServiceError } from '@grpc/grpc-js';

export function handleGrpcError(err: unknown): never {
  const error = err as ServiceError;

  if (error.code !== undefined) {
    throw new RpcException({
      status: error.code,
      message: error.details || error.message,
    });
  }

  throw err;
}