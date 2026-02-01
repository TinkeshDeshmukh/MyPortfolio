import React from "react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-[#202020] flex items-center justify-center z-[9999]">
      <div className="flex flex-col items-center gap-4">
        {/* Loader animation */}
        <div className="w-12 h-12 border-4 border-gray-500 border-t-white rounded-full animate-spin"></div>

        {/* Text */}
        <p className="text-sm tracking-widest text-gray-300">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Preloader;
