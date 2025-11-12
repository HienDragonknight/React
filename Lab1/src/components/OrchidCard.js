import React from 'react';
import './OrchidCard.css';

// Presentation Component - Only handles UI rendering
const OrchidCard = ({ orchid }) => {
  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  return (
    <div className="orchid-card">
      <div className="orchid-image-container">
        <img 
          src={orchid.image} 
          alt={orchid.name}
          className="orchid-image"
        />
        {orchid.isSpecial && (
          <span className="badge special-badge">Special</span>
        )}
        {orchid.isNatural && (
          <span className="badge natural-badge">Natural</span>
        )}
      </div>
      
      <div className="orchid-content">
        <h3 className="orchid-name">{orchid.name}</h3>
        
        <div className="orchid-rating">
          {renderStars(orchid.rating)}
        </div>
        
        <div className="orchid-info">
          <div className="info-row">
            <span className="info-label">Category:</span>
            <span className="info-value">{orchid.category}</span>
          </div>
          
          <div className="info-row">
            <span className="info-label">Origin:</span>
            <span className="info-value">{orchid.origin}</span>
          </div>
          
          <div className="info-row">
            <span className="info-label">Color:</span>
            <span className="color-indicator" style={{ backgroundColor: orchid.color }}></span>
            <span className="info-value">{orchid.color}</span>
          </div>
        </div>
        
        <div className="orchid-footer">
          <div className="like-section">
            <span className="like-icon">❤️</span>
            <span className="like-count">{orchid.numberOfLike} likes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrchidCard;
