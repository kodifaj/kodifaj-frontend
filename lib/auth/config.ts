let config: ClientConfig | ServerConfig;

if (typeof window === 'undefined') {
  /**
   * Settings exposed to the server.
   */
  config = {
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    AUTH0_SCOPE: process.env.AUTH0_SCOPE,
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    REDIRECT_URI: process.env.REDIRECT_URI,
    POST_LOGOUT_REDIRECT_URI: process.env.POST_LOGOUT_REDIRECT_URI,
    SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET,
    SESSION_COOKIE_LIFETIME: process.env.SESSION_COOKIE_LIFETIME,
  };
} else {
  /**
   * Settings exposed to the client.
   */
  config = {
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_SCOPE: process.env.AUTH0_SCOPE,
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    REDIRECT_URI: process.env.REDIRECT_URI,
    POST_LOGOUT_REDIRECT_URI: process.env.POST_LOGOUT_REDIRECT_URI,
  };
}

export default config;

export interface ServerConfig extends ClientConfig {
  AUTH0_CLIENT_SECRET: string;
  SESSION_COOKIE_SECRET: string;
  SESSION_COOKIE_LIFETIME: string;
}

export interface ClientConfig {
  [key: string]: string | undefined;
  AUTH0_CLIENT_ID: string | undefined;
  AUTH0_SCOPE: string | undefined;
  AUTH0_DOMAIN: string | undefined;
  REDIRECT_URI: string | undefined;
  POST_LOGOUT_REDIRECT_URI: string | undefined;
}
