import { useEffect } from 'react';

import { WaitForMilliSecond } from '../../global/helper/time';
import { GetSetMethodStoreGlobal } from '../../global/store';
import { IContentData } from '.';

const Preload = (props: IPreloadProps<IContentData>) => {
  const { onLoadComplete } = props;
  const { setIsLoading } = GetSetMethodStoreGlobal();

  useEffect(() => {
    (async () => {
      await WaitForMilliSecond(1400);
      setIsLoading(false);

      onLoadComplete({ isLoading: false });
    })();
  }, []);

  return <>Loading...</>;
};

export default Preload;
