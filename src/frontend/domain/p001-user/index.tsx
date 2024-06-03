import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { GetSetMethodStoreGlobalPersist } from '../../global/store/persist';
import { I18nDomainResource } from './i18n';

const domainName = 'user';
const i18n = I18nDomainResource(domainName);

const JSX = () => {
  const { t } = useTranslation(domainName);

  const { setName } = GetSetMethodStoreGlobalPersist();

  useEffect(() => {
    setName('mint');
  }, []);

  return <div>{t('header')}</div>;
};

export default { JSX, i18n };
