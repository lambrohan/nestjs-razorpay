## About

This package implements a module which can be used to setup and inject Razorpay client instance into your nestjs application.

## Installation

```bash
yarn add nestjs-razorpay
```

## Getting Started

The simplest way to use `nestjs-razorpay` is to use `RazorpayModule.forRoot`

```typescript
import { Module } from '@nestjs-common';
import { RazorpayModule } from 'nestjs-razorpay';

@Module({
  imports: [
    RazorpayModule.forRoot({
      key_id: 'razorpay_key_id',
      key_secret: 'razorpay_key_secret',
    }),
  ],
})
export class AppModule {}
```

use `@InjectRazorpay()` decorator in any injectables to get a Razorpay client inside class

```typescript
import { Injectable } from '@nestjs/common';
import { InjectRazorpay } from 'nestjs-razorpay';
import * as Razorpay from 'razorpay';

@Injectable()
export class TestService {
  public constructor(
    @InjectRazorpay() private readonly razorpayClient: Razorpay,
  ) {}
}
```

Read more about `node-razorpay` [here](https://github.com/razorpay/razorpay-node).

## License

Distributed under the MIT License. See `LICENSE` for more information.
