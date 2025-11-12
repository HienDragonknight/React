import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container, Typography, Box, Button, Chip, Grid, Paper,
  Card, CardContent, Rating, Modal, Backdrop, Fade
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import EcoIcon from '@mui/icons-material/Eco';
import CategoryIcon from '@mui/icons-material/Category';
import PublicIcon from '@mui/icons-material/Public';
import PaletteIcon from '@mui/icons-material/Palette';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ListOfOrchids from '../data/ListOfOrchids';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  
  const orchid = ListOfOrchids.find(o => o.id === id);

  if (!orchid) {
    return (
      <Container maxWidth="lg" sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Orchid Not Found
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          The orchid you're looking for doesn't exist.
        </Typography>
        <Button
          variant="contained"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/')}
        >
          Back to Home
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/')}
        sx={{ mb: 3 }}
      >
        Back to Home
      </Button>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ position: 'relative', overflow: 'hidden' }}>
            <Box
              component="img"
              src={orchid.image}
              alt={orchid.name}
              sx={{
                width: '100%',
                height: 'auto',
                cursor: 'pointer'
              }}
              onClick={() => setOpenModal(true)}
            />
            <Button
              variant="contained"
              startIcon={<ZoomInIcon />}
              sx={{ position: 'absolute', bottom: 16, right: 16 }}
              onClick={() => setOpenModal(true)}
            >
              Zoom
            </Button>
            <Box sx={{ position: 'absolute', top: 16, right: 16, display: 'flex', gap: 1, flexDirection: 'column' }}>
              {orchid.isSpecial && (
                <Chip icon={<StarIcon />} label="Special" color="warning" />
              )}
              {orchid.isNatural && (
                <Chip icon={<EcoIcon />} label="Natural" color="success" />
              )}
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom fontWeight="bold">
            {orchid.name}
          </Typography>

          <Box display="flex" alignItems="center" gap={2} mb={3}>
            <Rating value={orchid.rating} readOnly size="large" />
            <Typography variant="h6" color="text.secondary">
              ({orchid.rating}/5)
            </Typography>
          </Box>

          <Paper elevation={2} sx={{ p: 2, mb: 3, background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <FavoriteIcon sx={{ color: 'white', fontSize: 40, mr: 2 }} />
              <Box>
                <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold' }}>
                  {orchid.numberOfLike}
                </Typography>
                <Typography variant="body1" sx={{ color: 'white' }}>
                  Likes
                </Typography>
              </Box>
            </Box>
          </Paper>

          <Grid container spacing={2} mb={3}>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={1}>
                    <CategoryIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="subtitle2" color="text.secondary">
                      Category
                    </Typography>
                  </Box>
                  <Typography variant="h6">{orchid.category}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={1}>
                    <PublicIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="subtitle2" color="text.secondary">
                      Origin
                    </Typography>
                  </Box>
                  <Typography variant="h6">{orchid.origin}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={1}>
                    <PaletteIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="subtitle2" color="text.secondary">
                      Color
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Box
                      sx={{
                        width: 30,
                        height: 30,
                        borderRadius: '50%',
                        backgroundColor: orchid.color,
                        border: '2px solid #ddd'
                      }}
                    />
                    <Typography variant="h6">{orchid.color}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={1}>
                    <EcoIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="subtitle2" color="text.secondary">
                      Type
                    </Typography>
                  </Box>
                  <Typography variant="h6">
                    {orchid.isNatural ? 'Natural' : 'Hybrid'}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom fontWeight="bold">
              About this Orchid
            </Typography>
            <Typography variant="body1" paragraph>
              The <strong>{orchid.name}</strong> is a{' '}
              {orchid.isSpecial ? 'special and highly sought-after' : 'beautiful'}{' '}
              orchid from the {orchid.category} family.
              {orchid.isNatural
                ? ' This natural species originates from '
                : ' This hybrid variety was developed in '}
              <strong>{orchid.origin}</strong> and is known for its stunning{' '}
              <strong>{orchid.color}</strong> color.
            </Typography>
            <Typography variant="body1">
              With a rating of <strong>{orchid.rating} out of 5 stars</strong> and{' '}
              <strong>{orchid.numberOfLike} likes</strong> from orchid enthusiasts,
              this is {orchid.isSpecial ? 'a prized addition' : 'a wonderful choice'} for
              any collection.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={openModal}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              maxWidth: '90vw',
              maxHeight: '90vh',
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 2
            }}
            onClick={() => setOpenModal(false)}
          >
            <img
              src={orchid.image}
              alt={orchid.name}
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
        </Fade>
      </Modal>
    </Container>
  );
};

export default Detail;
