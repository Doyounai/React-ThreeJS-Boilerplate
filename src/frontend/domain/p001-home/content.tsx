import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import FullScreenModal from '../../global/components/fullscreen-modal';
import { IContentData } from '.';
import thai from './assets/thailand-svgrepo-com.svg';
import eng from './assets/united-states-of-america-svgrepo-com.svg';

const Content = (props: { domainName: string; data?: IContentData }) => {
  const { domainName } = props;
  const navigate = useNavigate();
  const { t, i18n } = useTranslation([domainName]);

  return (
    <FullScreenModal isShow={true}>
      <div className="text-center mx-5 w-max-[500px]">
        <h1>{t('header')}</h1>
        <h2>{t('createBy')}</h2>
        <div className="my-5 space-y-4 relative">
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
          <p className="text-justify">{t('selectLang')}</p>
        </div>
        <button
          onClick={() => {
            navigate('/user');
          }}
          className="button"
        >
          Start
        </button>
      </div>
    </FullScreenModal>
  );
};

export default Content;
