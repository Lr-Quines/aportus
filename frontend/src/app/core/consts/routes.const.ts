export const APP_ROUTES = {
  account: 'account',
  login: 'login',
  accountLogin: 'account/login',
  register: 'register',
  accountRegister: 'account/register',
  homePage: 'home-page',
  portfolios: 'portfolios'
} as const;

export const NAV_ROUTES = {
  login: `/${APP_ROUTES.account}/${APP_ROUTES.login}`,
  register: `/${APP_ROUTES.account}/${APP_ROUTES.register}`,
  homePage: `/${APP_ROUTES.homePage}`,
  portfolios: `/${APP_ROUTES.portfolios}`
} as const;
