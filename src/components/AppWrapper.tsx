import React from "react";
import { Outlet } from "react-router-dom";

export const AppWrapper = () => {
  return (
    <div>
      AppWrapper
      <Outlet />
    </div>
  );
};
