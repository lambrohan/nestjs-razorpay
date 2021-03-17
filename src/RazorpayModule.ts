import { DynamicModule, Global, Module } from '@nestjs/common';
import { RzpOptions } from './interfaces';
import { createRzpProvider } from './providers/createRzpProvider';

@Global()
@Module({})
export class RazorpayModule {
  public static forRoot(options: RzpOptions): DynamicModule {
    const provider = createRzpProvider(options);
    return {
      module: RazorpayModule,
      providers: [provider],
      exports: [provider],
    };
  }
}
