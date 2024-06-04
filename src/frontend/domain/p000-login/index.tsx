import { useTranslation } from 'react-i18next';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

import FullScreenModal from '../../global/components/fullscreen-modal';
import thai from './assets/thailand-svgrepo-com.svg';
import eng from './assets/united-states-of-america-svgrepo-com.svg';
import { I18nDomainResource } from './i18n';

const domainName = 'login';
const i18n = I18nDomainResource(domainName);

const JSX = () => {
  const { t, i18n } = useTranslation(domainName);
  const navigate = useNavigate();

  return (
    <FullScreenModal isShow={true}>
      <div className="flex flex-col space-y-5 my-5 w-[350px] justify-start items-center">
        <h1 className="font-bold text-3xl">{t('header')}</h1>
        <div className="flex space-x-8 justify-center">
          <img
            onClick={() => {
              i18n.changeLanguage('th');
            }}
            src={thai}
            className="rounded-full w-[33px] hover:shadow-lg"
          ></img>
          <img
            onClick={() => {
              i18n.changeLanguage('en');
            }}
            src={eng}
            className="rounded-full w-[33px] hover:shadow-lg"
          ></img>
        </div>
        <form className="w-full">
          <div className="w-full justify-start">
            <span>{t('email')}</span>
            <div className="flex space-x-5">
              <FaUser className="my-auto mx-0.5 text-[#a3aab5]" size="20px" />
              <input
                placeholder="email"
                type="email"
                className="border-[2px] my-1 w-full p-1"
                autoComplete="username"
              ></input>
            </div>
          </div>
          <div className="mt-3 w-full justify-start">
            <span>{t('password')}</span>
            <div className="flex space-x-5">
              <RiLockPasswordFill className="my-auto mx-0.5 text-[#a3aab5]" size="20px" />
              <input
                placeholder="password"
                type="password"
                className="border-[2px] my-1 w-full p-1"
                autoComplete="current-password"
              ></input>
            </div>
          </div>
        </form>
        <div
          onClick={() => {
            navigate('/user');
          }}
          className="button"
        >
          {t('header')}
        </div>
      </div>
    </FullScreenModal>
  );
};

export default { JSX, i18n };
