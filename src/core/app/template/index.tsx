import './index.scss';

import { useState } from 'react';
import { FiAlignJustify } from 'react-icons/fi';

const Template = (props: any) => {
  const [isShowMenu, setShowMenu] = useState(false);

  return (
    <div className="flex flex-col h-screen w-full relative">
      <div className="bg-white flex h-[80px] shadow-xl w-full px-10 justify-between z-10">
        <div className={`menu-list ${isShowMenu ? 'display-block' : ''}`}>
          <div className="flex font-semibold h-full px-10 items-center hover:bg-[#ff9955] hover:text-white">
            CSS
          </div>
          <div className="flex font-semibold h-full px-10 items-center hover:bg-[#ff9955] hover:text-white">
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
      <div className="h-full py-20 px-30 relative overflow-y-scroll">
        {props.children}
      </div>
    </div>
  );
};

export default Template;
