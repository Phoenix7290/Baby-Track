import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface CardComponentProps {
  title: string;
  description: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ title, description }) => {
  return (
    <Card style={{ marginBottom: '16px' }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
