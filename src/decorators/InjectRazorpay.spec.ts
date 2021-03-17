import { Injectable } from '@nestjs/common';
import { TestingModule, Test } from '@nestjs/testing';
import { RazorpayModule } from '../RazorpayModule';
import { InjectRazorpay } from './InjectRazorpay';
import * as Razorpay from 'razorpay';

describe('InjectRazorpay', () => {
  let module: TestingModule;
  const key_id = process.env.KEY_ID;
  const key_secret = process.env.KEY_SECRET;

  @Injectable()
  class TestService {
    constructor(@InjectRazorpay() public readonly rzpClient) {}
  }

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [RazorpayModule.forRoot({ key_id, key_secret })],
      providers: [TestService],
    }).compile();
  });

  describe('when decorating a class constructor parameter', () => {
    it('should inject the Razorpay client', () => {
      const testService = module.get(TestService);
      expect(testService).toHaveProperty('rzpClient');
      expect(testService.rzpClient).toBeInstanceOf(Razorpay);
    });
  });
});
