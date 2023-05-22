import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Type,
  UseInterceptors,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';

export function Serialize(dto: Type<unknown>) {
  return UseInterceptors(new SerializeInterceptor(dto));
}

export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: Type<unknown>) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<unknown>,
  ): Observable<unknown> {
    return next
      .handle()
      .pipe(
        map((data: unknown) =>
          plainToClass(this.dto, data, { excludeExtraneousValues: true }),
        ),
      );
  }
}
