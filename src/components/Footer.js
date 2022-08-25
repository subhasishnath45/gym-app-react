import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from '../assets/images/Logo-1.png';
const Footer = () => {
  return <Box sx={{ mt: '80px', backgroundColor: '#d1d1d1' }}>
    <Stack gap="20px" sx={{ alignItems: 'center', px: '40px', py: '24px' }}>
      <img src={Logo} />
      <Typography>
        CopyRight {(new Date().getFullYear())}. All rights are reserved.
      </Typography>
    </Stack>
  </Box>;
};

export default Footer;
