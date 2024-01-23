// Archivo: DashboardAlumnosLayout.js

import React from "react";

const DashboardAlumnosLayout = ({ children }) => {
  return (
    <>
      <div className="dashboard-container" style={{ color: "black" }}>
        {children}
      </div>
      {/* Otros elementos comunes del dashboard, como el pie de página, etc. */}
    </>
  );
};

export default DashboardAlumnosLayout;
