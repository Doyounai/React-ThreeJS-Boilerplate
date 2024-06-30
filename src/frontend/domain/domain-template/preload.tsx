import { useEffect } from 'react';

import FirebaseAPI from '../../global/api/firebase';
import { IContentData } from '.';

const Preload = (props: IPreloadProps<IContentData>) => {
  const loadUser = async () => {
    const resUser = await FirebaseAPI.ReadUserProfile({
      docId: '1',
    });

    return resUser.res;
  };

  useEffect(() => {
    (async () => {
      const user = await loadUser();

      props.onLoadComplete(user);
    })();
  }, []);

  return <>Loading...</>;
};

export default Preload;
