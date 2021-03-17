import { rzpToken } from '../constants';
import { RzpOptions } from '../interfaces';
import { getRzpClient } from '../util';

export function createRzpProvider(options: RzpOptions) {
  return {
    provide: rzpToken,
    useValue: getRzpClient(options),
  };
}
