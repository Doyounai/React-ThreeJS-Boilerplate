import en from './en/index.json';
import th from './th/index.json';

export const I18nDomainResource = (namespace: string): I18n => {
  return {
    namespace: namespace,
    locate: { en, th },
  };
};
