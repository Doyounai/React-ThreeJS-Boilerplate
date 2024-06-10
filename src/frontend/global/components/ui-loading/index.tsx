import './index.scss';

import { UseStoreGlobal } from '../../store';

const UILoading = (props: any) => {
  const { isLoading } = UseStoreGlobal(['isLoading']);

  if (isLoading) {
    return (
      <div className="w-full h-screen bg-[#4e54c8] flex justify-center items-center space-x-4">
        <div className="bounceball"></div>
        <div className="bounceball delay-1"></div>
        <div className="bounceball delay-2"></div>
        <div className="bounceball delay-3"></div>
      </div>
    );
  }

  return <>{props.children}</>;
};

export default UILoading;
