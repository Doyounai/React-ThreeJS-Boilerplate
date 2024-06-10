import './index.scss';

import { lazy, Suspense, useState } from 'react';

import { I18nDomainResource } from './i18n';

const domainName = 'css-show';
const i18n = I18nDomainResource(domainName);

const Preload = lazy(() => import('./preload'));
const Content = lazy(() => import('./content'));

export interface IContentData {
  isLoading: boolean;
}

const JSX = () => {
  const [data, setData] = useState<IContentData | null>(null);

  return (
    <Suspense>
      {!data ? (
        <Preload
          onLoadComplete={(data: IContentData) => {
            setData(data);
            console.log(data);
          }}
        />
      ) : (
        <Content domainName={domainName} data={data} />
      )}
    </Suspense>
  );
};

export default { JSX, i18n };
