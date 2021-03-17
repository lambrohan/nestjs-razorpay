import * as Razorpay from 'razorpay';
import { RzpOptions } from '../interfaces';
export function getRzpClient(options: RzpOptions) {
  const rzpClient = new Razorpay({
    key_id: options.key_id,
    key_secret: options.key_secret,
  });

  return rzpClient;
}
