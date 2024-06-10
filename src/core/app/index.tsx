import './index.scss';

import { useEffect } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import p001Home from '../../frontend/domain/p001-home';
import AnimationBackground from '../../frontend/global/components/animation-background';
import RoutePrivate from '../../frontend/global/components/route-private';
import UILoading from '../../frontend/global/components/ui-loading';
import { WaitForMilliSecond } from '../../frontend/global/helper/time';
import { GetSetMethodStoreGlobal } from '../../frontend/global/store';
import Template from './template';

const i18nList: I18n[] = [p001Home.i18n];

const jsx = () => {
  const { setIsLoading } = GetSetMethodStoreGlobal();

  useEffect(() => {
    (async () => {
      await WaitForMilliSecond(1600);
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      <UILoading>
        <div className="absolute z-10 w-full h-screen overflow-hidden">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<p001Home.JSX />} index />
              {/* Default page */}
              <Route path="*" element={<div className="">URL Not Found</div>}></Route>
            </Routes>
          </BrowserRouter>
        </div>
        <AnimationBackground />
      </UILoading>
    </>
  );
};

export default { jsx, i18nList };
