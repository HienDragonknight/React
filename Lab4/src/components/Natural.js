import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import EcoIcon from '@mui/icons-material/Eco';
import OrchidCard from './OrchidCard';
import ListOfOrchids from '../data/ListOfOrchids';

const Natural = () => {
  const [orchids, setOrchids] = useState([]);

  useEffect(() => {
    const naturalOrchids = ListOfOrchids.filter(orchid => orchid.isNatural);
    setOrchids(naturalOrchids);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box textAlign="center" mb={4}>
        <EcoIcon sx={{ fontSize: 60, color: 'success.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          Natural Orchids
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Discover {orchids.length} natural orchid species from around the world
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {orchids.map((orchid) => (
          <Grid item xs={12} sm={6} md={4} key={orchid.id}>
            <OrchidCard orchid={orchid} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Natural;
