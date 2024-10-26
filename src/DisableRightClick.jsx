import React from "react";

const DisableRightClick = ({ children }) => {
  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevents the default context menu from opening
  };

  return (
    <div
      onContextMenu={handleContextMenu}
      className="min-h-screen select-none bg-white text-gray-900"
    >
      {children}
    </div>
  );
};

export default DisableRightClick;
