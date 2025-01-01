import { Box, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Stack>Main Layout</Stack>

      <Outlet />
    </>
  );
};

export default MainLayout;
