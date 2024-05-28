import i18next from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector/cjs';
import { initReactI18next } from 'react-i18next';

export const InitI18n = (i18nList: I18n[]) => {
  const resource: any = {};
  for (const i in i18nList) {
    if (i18nList[i].namespace !== '') {
      for (const key in i18nList[i].locate) {
        // eslint-disable-next-line
        if (!resource.hasOwnProperty(key)) {
          resource[key] = {};
        }
        resource[key] = {
          ...resource[key],
          [i18nList[i].namespace]: i18nList[i].locate[key],
        };
      }
    }
  }

  console.log(resource);
  console.log('Init I18N');

  i18next
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
      resources: resource,
    });
};
