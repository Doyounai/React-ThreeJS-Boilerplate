import './index.scss';

const UILoading = () => {
  return (
    <div className="absolute z-100 w-full h-screen bg-[#4e54c8] flex justify-center items-center space-x-4">
      <div className="bounceball"></div>
      <div className="bounceball delay-1"></div>
      <div className="bounceball delay-2"></div>
      <div className="bounceball delay-3"></div>
    </div>
  );
};

export default UILoading;
