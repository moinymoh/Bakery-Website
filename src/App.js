import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Outlet, Navigate } from 'react-router-dom';
import { Box } from '@mui/system';
import { AppBar, TextField } from '@mui/material';
// import MuiTypography from '@mui/material';
// import ProductList from './Component/ProductList';
// import Cart from './Component/Cart';
// import Checkout from './Component/Checkout';
// import ProductThumbnail from './Component/ProductThumbnail';
import CustomCard from './Component/Card';
import NavBar from './Component/NavBar';
export const NavbarPasha = () => {
  return (
    <Box>
      <TextField>haardik</TextField>
      <AppBar enableColorOnDark/>
    </Box>
  );
};

const App = () => {
 
  return (
  <Router>
    < NavBar />
    <CustomCard
        img="path/to/your/image.jpg"
        description="This is the description of the product."
        productTitle="Moin"
      />
  </Router>
  );
};

export default App;