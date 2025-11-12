import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ListOfOrchids from '../data/ListOfOrchids';
import './Detail.css';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const orchid = ListOfOrchids.find(o => o.id === id);

  if (!orchid) {
    return (
      <div className="detail-container">
        <div className="detail-not-found">
          <h2>🌺 Orchid Not Found</h2>
          <p>The orchid you're looking for doesn't exist.</p>
          <button className="back-button" onClick={() => navigate('/')}>
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  return (
    <div className="detail-container">
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back to Home
      </button>
      
      <div className="detail-content">
        <div className="detail-image-section">
          <div className="detail-image-container">
            <img 
              src={orchid.image} 
              alt={orchid.name}
              className="detail-image"
            />
            <div className="detail-badges">
              {orchid.isSpecial && (
                <span className="badge special-badge">✨ Special</span>
              )}
              {orchid.isNatural && (
                <span className="badge natural-badge">🌿 Natural</span>
              )}
            </div>
          </div>
        </div>
        
        <div className="detail-info-section">
          <h1 className="detail-title">{orchid.name}</h1>
          
          <div className="detail-rating">
            <span className="rating-stars">{renderStars(orchid.rating)}</span>
            <span className="rating-text">({orchid.rating}/5)</span>
          </div>
          
          <div className="detail-stats">
            <div className="stat-card">
              <span className="stat-icon">❤️</span>
              <div className="stat-info">
                <span className="stat-value">{orchid.numberOfLike}</span>
                <span className="stat-label">Likes</span>
              </div>
            </div>
          </div>
          
          <div className="detail-info-grid">
            <div className="info-card">
              <div className="info-card-header">
                <span className="info-icon">🏷️</span>
                <h3>Category</h3>
              </div>
              <p className="info-card-value">{orchid.category}</p>
            </div>
            
            <div className="info-card">
              <div className="info-card-header">
                <span className="info-icon">🌍</span>
                <h3>Origin</h3>
              </div>
              <p className="info-card-value">{orchid.origin}</p>
            </div>
            
            <div className="info-card">
              <div className="info-card-header">
                <span className="info-icon">🎨</span>
                <h3>Color</h3>
              </div>
              <div className="color-display">
                <span 
                  className="color-circle" 
                  style={{ backgroundColor: orchid.color }}
                ></span>
                <p className="info-card-value">{orchid.color}</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-card-header">
                <span className="info-icon">🌟</span>
                <h3>Type</h3>
              </div>
              <p className="info-card-value">
                {orchid.isNatural ? 'Natural Species' : 'Hybrid'}
              </p>
            </div>
          </div>
          
          <div className="detail-description">
            <h3>About this Orchid</h3>
            <p>
              The <strong>{orchid.name}</strong> is a{' '}
              {orchid.isSpecial ? 'special and highly sought-after' : 'beautiful'}{' '}
              orchid from the {orchid.category} family. 
              {orchid.isNatural 
                ? ' This natural species originates from ' 
                : ' This hybrid variety was developed in '
              }
              <strong>{orchid.origin}</strong> and is known for its stunning{' '}
              <strong>{orchid.color}</strong> color.
            </p>
            <p>
              With a rating of <strong>{orchid.rating} out of 5 stars</strong> and{' '}
              <strong>{orchid.numberOfLike} likes</strong> from orchid enthusiasts,
              this is {orchid.isSpecial ? 'a prized addition' : 'a wonderful choice'} for 
              any collection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
