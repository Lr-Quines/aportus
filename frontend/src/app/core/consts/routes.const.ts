export const APP_ROUTES = {
  account: 'account',
  login: 'login',
  accountLogin: 'account/login',
  register: 'register',
  accountRegister: 'account/register',
  dashboard: 'dashboard'
} as const;

export const NAV_ROUTES = {
  login: `/${APP_ROUTES.account}/${APP_ROUTES.login}`,
  register: `/${APP_ROUTES.account}/${APP_ROUTES.register}`,
  dashboard: `/${APP_ROUTES.dashboard}`
} as const;
