import React, { useState } from 'react';
import {
  Container, Typography, Box, Grid, Tabs, Tab,
  Chip, Paper
} from '@mui/material';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import StarIcon from '@mui/icons-material/Star';
import EcoIcon from '@mui/icons-material/Eco';
import OrchidCard from './OrchidCard';

const OrchidsList = ({ orchids }) => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const allOrchids = orchids;
  const specialOrchids = orchids.filter(o => o.isSpecial);
  const naturalOrchids = orchids.filter(o => o.isNatural);

  const getDisplayOrchids = () => {
    switch (tabValue) {
      case 1: return specialOrchids;
      case 2: return naturalOrchids;
      default: return allOrchids;
    }
  };

  const displayOrchids = getDisplayOrchids();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box textAlign="center" mb={4}>
        <LocalFloristIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          Orchids Collection
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Discover the beauty of {orchids.length} exquisite orchids
        </Typography>
      </Box>

      <Paper elevation={3} sx={{ mb: 4 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          centered
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab
            icon={<ViewModuleIcon />}
            label={`All (${allOrchids.length})`}
            iconPosition="start"
          />
          <Tab
            icon={<StarIcon />}
            label={`Special (${specialOrchids.length})`}
            iconPosition="start"
          />
          <Tab
            icon={<EcoIcon />}
            label={`Natural (${naturalOrchids.length})`}
            iconPosition="start"
          />
        </Tabs>
      </Paper>

      <Grid container spacing={3}>
        {displayOrchids.map((orchid) => (
          <Grid item xs={12} sm={6} md={4} key={orchid.id}>
            <OrchidCard orchid={orchid} />
          </Grid>
        ))}
      </Grid>

      {displayOrchids.length === 0 && (
        <Box textAlign="center" py={8}>
          <Typography variant="h6" color="text.secondary">
            No orchids found in this category
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default OrchidsList;
