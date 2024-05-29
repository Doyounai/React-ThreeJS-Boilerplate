import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import p000Login from '../../frontend/domain/p000-login';
import p001user from '../../frontend/domain/p001-user';
import RoutePrivate from '../../frontend/global/components/route-private';

const i18nList: I18n[] = [p000Login.i18n, p001user.i18n];

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
              <RoutePrivate path="" isAuth={true}>
                <p001user.JSX />
              </RoutePrivate>
            }
          ></Route>
          {/* Default page */}
          <Route path="*" element={<div className="">URL Not Found</div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default { jsx, i18nList };
