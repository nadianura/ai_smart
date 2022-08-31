import { Pets } from '@mui/icons-material';
import { AppBar, Box, InputBase, styled, Toolbar, Typography } from '@mui/material'
import { width } from '@mui/system';
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SatelliteIcon from '@mui/icons-material/Satellite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled(Box)(({theme})=> ({
}));

const  Search = styled("div")(({theme}) => ({
  backgroundColor: "#FFFFFF",
  padding:"0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "20%"
}));

const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
      <Typography variant='h6' sx={{display: {xs: "none", sm:"block"}}}>
        Smart Tourism Kota Tangerang
        </Typography>
        <Pets sx={{display: {xs: "block", sm: "none"} }} />
        <Icons>
        <Box
      sx={{
        '& > :not(style)': {
          m: 2,
        },
      }}
    >
      <HomeIcon />
      <SatelliteIcon />
      <AccountCircleIcon />
    </Box>
        </Icons>
        <Search><InputBase placeholder='Search...' /></Search>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar