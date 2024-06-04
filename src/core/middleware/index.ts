import { InitFirebase } from './firebase';
import { InitI18n } from './i18n';

export const MiddlewareInit = async (payload: {
  i18n: {
    resource: I18n[];
  };
}) => {
  const { i18n } = payload;

  InitI18n(i18n.resource);
  await InitFirebase();
};
