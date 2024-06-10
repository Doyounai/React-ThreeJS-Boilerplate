import './index.scss';

import { useEffect } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import p001CssShow from '../../frontend/domain/p001-css-show';
import p001Home from '../../frontend/domain/p001-home';
import AnimationBackground from '../../frontend/global/components/animation-background';
import RoutePrivate from '../../frontend/global/components/route-private';
import UILoading from '../../frontend/global/components/ui-loading';
import { WaitForMilliSecond } from '../../frontend/global/helper/time';
import { GetSetMethodStoreGlobal, UseStoreGlobal } from '../../frontend/global/store';
import Template from './template';

const i18nList: I18n[] = [p001Home.i18n, p001CssShow.i18n];

const jsx = () => {
  const { isLoading } = UseStoreGlobal(['isLoading']);
  const { setIsLoading } = GetSetMethodStoreGlobal();

  useEffect(() => {
    (async () => {
      await WaitForMilliSecond(1400);
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      <div className="absolute z-10 w-full h-screen overflow-hidden">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<p001Home.JSX />} index />
            <Route
              path="/css"
              element={
                <Template>
                  <Outlet />
                </Template>
              }
            >
              <Route element={<p001CssShow.JSX />} index></Route>
            </Route>
            {/* Default page */}
            <Route path="*" element={<div className="">URL Not Found</div>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <AnimationBackground />
      {isLoading && <UILoading />}
    </>
  );
};

export default { jsx, i18nList };
