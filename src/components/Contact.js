import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { X } from "phosphor-react";
import React from "react";

const Contact = () => {
  const theme = useTheme();
  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            p={2}
            justifyContent={"space-between"}
            sx={{ height: "100%" }}
            spacing={3}
          >
            <Typography variant="subtitle2">Contact Info</Typography>
            <IconButton>
              <X size={24} />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Contact;
