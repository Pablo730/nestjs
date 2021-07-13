import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Token = createParamDecorator(
	(data: string, ctx: ExecutionContext) => {
		const response = ctx.switchToHttp().getResponse();
		return response.loacls.jwt;
	},
);

// @Token() token