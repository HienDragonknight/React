import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import OrchidCard from './OrchidCard';
import ListOfOrchids from '../data/ListOfOrchids';

const Special = () => {
  const [orchids, setOrchids] = useState([]);

  useEffect(() => {
    const specialOrchids = ListOfOrchids.filter(orchid => orchid.isSpecial);
    setOrchids(specialOrchids);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box textAlign="center" mb={4}>
        <StarIcon sx={{ fontSize: 60, color: 'warning.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          Special Orchids
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Explore {orchids.length} special and rare orchid varieties
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

export default Special;
