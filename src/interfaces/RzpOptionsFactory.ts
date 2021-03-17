import { RzpOptions } from './RzpOptions';

export interface RzpOptionsFactory {
  createRzpOptions(): Promise<RzpOptions> | RzpOptions;
}
