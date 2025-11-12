import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card, CardMedia, CardContent, CardActions,
  Typography, Button, Chip, Box, Rating
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarIcon from '@mui/icons-material/Star';
import EcoIcon from '@mui/icons-material/Eco';

const OrchidCard = ({ orchid }) => {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate(`/orchid/${orchid.id}`);
  };

  return (
    <Card 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: 8
        }
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="240"
          image={orchid.image}
          alt={orchid.name}
          sx={{ objectFit: 'cover' }}
        />
        <Box sx={{ position: 'absolute', top: 8, right: 8, display: 'flex', gap: 1 }}>
          {orchid.isSpecial && (
            <Chip
              icon={<StarIcon />}
              label="Special"
              color="warning"
              size="small"
              sx={{ fontWeight: 'bold' }}
            />
          )}
          {orchid.isNatural && (
            <Chip
              icon={<EcoIcon />}
              label="Natural"
              color="success"
              size="small"
              sx={{ fontWeight: 'bold' }}
            />
          )}
        </Box>
      </Box>

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="h3" fontWeight="bold">
          {orchid.name}
        </Typography>

        <Box display="flex" alignItems="center" mb={1}>
          <Rating value={orchid.rating} readOnly size="small" />
          <Typography variant="body2" color="text.secondary" ml={1}>
            ({orchid.rating}/5)
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary" gutterBottom>
          <strong>Category:</strong> {orchid.category}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          <strong>Origin:</strong> {orchid.origin}
        </Typography>
        <Box display="flex" alignItems="center" gap={1}>
          <Typography variant="body2" color="text.secondary">
            <strong>Color:</strong>
          </Typography>
          <Box
            sx={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              backgroundColor: orchid.color,
              border: '2px solid #ddd'
            }}
          />
          <Typography variant="body2" color="text.secondary">
            {orchid.color}
          </Typography>
        </Box>
      </CardContent>

      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
        <Box display="flex" alignItems="center">
          <FavoriteIcon sx={{ color: 'error.main', fontSize: 20, mr: 0.5 }} />
          <Typography variant="body2">{orchid.numberOfLike}</Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<VisibilityIcon />}
          onClick={handleDetailClick}
          size="small"
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default OrchidCard;
