import './index.scss';

import { useState } from 'react';
import { FiAlignJustify } from 'react-icons/fi';

const Template = (props: any) => {
  const [isShowMenu, setShowMenu] = useState(false);

  return (
    <div className="flex flex-col h-screen w-full relative">
      <div className="bg-white flex h-[80px] shadow-lg w-full px-10 justify-between">
        <div className={`menu-list ${isShowMenu ? 'display-block' : ''}`}>
          <div className="flex font-semibold h-full px-10 items-center hover:bg-[#fbae17] hover:text-white">
            CSS
          </div>
          <div className="flex font-semibold h-full px-10 items-center hover:bg-[#fbae17] hover:text-white">
            ThreeJS
          </div>
        </div>
        <div
          className="menu-btn"
          onClick={() => {
            setShowMenu(!isShowMenu);
          }}
        >
          <FiAlignJustify size="30px" />
        </div>
      </div>
      <div className="h-full py-20 px-30 overflow-y-scroll">{props.children}</div>
    </div>
  );
};

export default Template;
