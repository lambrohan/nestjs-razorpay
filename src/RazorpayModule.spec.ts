import { Module } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { RzpOptions } from './interfaces';
import { RzpOptionsFactory } from './interfaces/RzpOptionsFactory';
import { RazorpayModule } from './RazorpayModule';
import * as Razorpay from 'razorpay';
import { rzpToken } from './constants';

describe('RazorpayModule', () => {
  const key_id = process.env.KEY_ID;
  const key_secret = process.env.KEY_SECRET;

  class TestService implements RzpOptionsFactory {
    createRzpOptions(): RzpOptions {
      return {
        key_id,
        key_secret,
      };
    }
  }

  @Module({
    exports: [TestService],
    providers: [TestService],
  })
  class TestModule {}

  describe('forRoot', () => {
    it('should provide the Razorpay client', async () => {
      const module = await Test.createTestingModule({
        imports: [RazorpayModule.forRoot({ key_secret, key_id })],
      }).compile();

      const rzpClient = module.get<any>(rzpToken);
      expect(rzpClient).toBeDefined();
      expect(rzpClient).toBeInstanceOf(Razorpay);
    });
  });
});
