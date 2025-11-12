import React from 'react';
import {
  Container, Typography, Box, Card, CardContent, Grid,
  Avatar, Accordion, AccordionSummary, AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import EcoIcon from '@mui/icons-material/Eco';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PublicIcon from '@mui/icons-material/Public';

const About = () => {
  const features = [
    { icon: <LocalFloristIcon sx={{ fontSize: 40 }} />, title: 'Diverse Collection', 
      description: 'Explore our extensive collection of over 16 different orchid species.' },
    { icon: <EcoIcon sx={{ fontSize: 40 }} />, title: 'Natural & Hybrid', 
      description: 'Discover both natural species and beautiful hybrid varieties.' },
    { icon: <FavoriteIcon sx={{ fontSize: 40 }} />, title: 'Community Favorites', 
      description: 'See which orchids are most loved by our community.' },
    { icon: <PublicIcon sx={{ fontSize: 40 }} />, title: 'Global Origins', 
      description: 'Learn about orchids from diverse regions worldwide.' }
  ];

  const faqs = [
    { question: 'What makes an orchid "special"?',
      answer: 'Special orchids are rare, highly sought-after varieties with exceptional beauty and unique characteristics.' },
    { question: 'What is the difference between natural and hybrid orchids?',
      answer: 'Natural orchids occur in the wild. Hybrid orchids are created by cross-breeding different species.' },
    { question: 'How do you rate orchids?',
      answer: 'Our rating system is based on beauty, rarity, ease of care, and popularity among collectors.' }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box textAlign="center" mb={6}>
        <LocalFloristIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          About Orchids Collection
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Your Premier Destination for Exquisite Orchids
        </Typography>
      </Box>

      <Card elevation={3} sx={{ mb: 6, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
            Our Mission
          </Typography>
          <Typography variant="body1" sx={{ color: 'white', fontSize: '1.1rem' }}>
            We are dedicated to sharing the beauty and diversity of orchids with enthusiasts around the world.
            Our collection showcases magnificent varieties, from rare natural species to stunning hybrid creations.
          </Typography>
        </CardContent>
      </Card>

      <Typography variant="h4" gutterBottom textAlign="center" mb={4} fontWeight="bold">
        Why Choose Our Collection?
      </Typography>
      <Grid container spacing={3} mb={6}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card elevation={2} sx={{ height: '100%', '&:hover': { transform: 'translateY(-8px)', boxShadow: 6 }}}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Avatar sx={{ width: 80, height: 80, margin: '0 auto 16px', bgcolor: 'primary.light' }}>
                  {feature.icon}
                </Avatar>
                <Typography variant="h6" gutterBottom fontWeight="bold">{feature.title}</Typography>
                <Typography variant="body2" color="text.secondary">{feature.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" gutterBottom textAlign="center" mb={4} fontWeight="bold">
        Frequently Asked Questions
      </Typography>
      <Box mb={6}>
        {faqs.map((faq, index) => (
          <Accordion key={index} elevation={2}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default About;
