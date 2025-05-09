import React from "react";

const CenterLayout = () => {
  return (
    <div className="center-wrapper">
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default CenterLayout;
