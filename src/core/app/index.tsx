import './index.css';

import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import p000Login from '../../frontend/domain/p000-login';
import p001user from '../../frontend/domain/p001-user';
import p002About from '../../frontend/domain/p002-about';
import RoutePrivate from '../../frontend/global/components/route-private';
import Template from './template';

const i18nList: I18n[] = [p000Login.i18n, p001user.i18n, p002About.i18n];

const jsx = () => {
  return (
    <div className="h-screen w-full gradient-wave">
      <BrowserRouter>
        <Routes>
          {/* index */}
          <Route path="/" element={<p000Login.JSX />} index></Route>
          {/* routes */}
          <Route
            path="user"
            element={
              <RoutePrivate path="/user" isAuth={true}>
                <Template>
                  <Outlet></Outlet>
                </Template>
              </RoutePrivate>
            }
          >
            <Route element={<p001user.JSX />} index />
            <Route path="about" element={<p002About.JSX />} />
          </Route>
          {/* Default page */}
          <Route path="*" element={<div className="">URL Not Found</div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default { jsx, i18nList };
