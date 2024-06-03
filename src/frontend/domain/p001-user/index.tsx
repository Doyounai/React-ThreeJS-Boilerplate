import { useTranslation } from 'react-i18next';

import { UseStoreGlobal } from '../../global/store';
import { I18nDomainResource } from './i18n';

const domainName = 'user';
const i18n = I18nDomainResource(domainName);

const JSX = () => {
  const { t } = useTranslation(domainName);

  return <div>{t('header')}</div>;
};

export default { JSX, i18n };
