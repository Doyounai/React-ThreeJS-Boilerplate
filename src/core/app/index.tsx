import './index.scss';

import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import p001Home from '../../frontend/domain/p001-home';
import AnimationBackground from '../../frontend/global/components/animation-background';
import RoutePrivate from '../../frontend/global/components/route-private';
import Template from './template';

const i18nList: I18n[] = [p001Home.i18n];

const jsx = () => {
  return (
    <>
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
    </>
  );
};

export default { jsx, i18nList };
