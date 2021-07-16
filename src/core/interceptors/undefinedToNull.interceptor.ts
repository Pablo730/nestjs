import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class undefinedToNullInterceptor implements NestInterceptor {
	intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
		return next.handle().pipe(map((data) => data === undefined ? { statusCode: 'FAIL', data: null } : { statusCode: 'SUCCESS', data: data }));
	}
}
