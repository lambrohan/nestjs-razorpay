import { Inject } from '@nestjs/common';
import { rzpToken } from '../constants';

export function InjectRazorpay() {
  return Inject(rzpToken);
}
