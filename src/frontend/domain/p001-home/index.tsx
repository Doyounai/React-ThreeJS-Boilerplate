import './index.scss';

import { lazy, Suspense } from 'react';

import { I18nDomainResource } from './i18n';

const domainName = 'home';
const i18n = I18nDomainResource(domainName);

const Content = lazy(() => import('./content'));

export interface IContentData {
  data: User;
}

const JSX = () => {
  return (
    <Suspense>
      <Content domainName={domainName} />
    </Suspense>
  );
};

export default { JSX, i18n };
