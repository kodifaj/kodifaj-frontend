import prodKeys from './prod';
import devKeys from './dev';

const keys: Keys = process.env.NODE_ENV === 'production' ? prodKeys : devKeys;

export default keys;

export interface Keys {
  githubClientID: string;
  githubClientSecret: string;
  mongoURI: string;
  cookieKey: string;
}
