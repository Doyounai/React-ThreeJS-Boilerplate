import React, { ReactNode } from 'react';

type ModalProps = {
  children: ReactNode;
  isShow: boolean;
};

const FullScreenModal: React.FC<ModalProps> = ({ children, isShow }) => {
  // bg-stone-900

  return isShow ? (
    <div className="flex h-screen py-auto w-screen justify-center items-center absolute pop-in">
      <div className="bg-white h-auto rounded-2xl shadow-xl py-10 px-7 relative">
        {children}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default FullScreenModal;
