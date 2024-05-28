import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

interface IRouterPrivate {
  isAuth: boolean;
  path: string;
  children: ReactElement;
}

const RoutePrivate = ({ isAuth, children, path }: IRouterPrivate) => {
  return isAuth ? children : <Navigate to={path} replace />;
};

export default RoutePrivate;
