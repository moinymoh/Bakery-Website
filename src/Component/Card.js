import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const CustomCard = ({ img, description, productTitle }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt="Product"
      />
      {/* <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Product Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {productTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
