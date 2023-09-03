import { rzpToken } from 'src/constants';
import { createRzpProvider } from './createRzpProvider';
import Razorpay from 'razorpay';

describe('when called', () => {
  const key_id = process.env.KEY_ID;
  const key_secret = process.env.KEY_SECRET;
  it('it shoud use the correct token', () => {
    const provider = createRzpProvider({ key_id, key_secret });
    expect(provider).toHaveProperty('provide', rzpToken);
  });

  it('should provide a razorpay client', () => {
    const provider = createRzpProvider({ key_secret, key_id });
    expect(provider).toHaveProperty('useValue');
    expect((provider as any).useValue).toBeInstanceOf(Razorpay);
  });
});
