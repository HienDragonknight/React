import React, { useEffect } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, orchid }) => {
  // Close modal on ESC key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !orchid) return null;

  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        
        <div className="modal-body">
          <div className="modal-image-section">
            <img 
              src={orchid.image} 
              alt={orchid.name}
              className="modal-image"
            />
            <div className="modal-badges">
              {orchid.isSpecial && (
                <span className="badge special-badge">✨ Special</span>
              )}
              {orchid.isNatural && (
                <span className="badge natural-badge">🌿 Natural</span>
              )}
            </div>
          </div>
          
          <div className="modal-info-section">
            <h2 className="modal-title">{orchid.name}</h2>
            
            <div className="modal-rating">
              <span className="rating-label">Rating:</span>
              <span className="rating-stars">{renderStars(orchid.rating)}</span>
              <span className="rating-number">({orchid.rating}/5)</span>
            </div>

            <div className="modal-details">
              <div className="detail-item">
                <div className="detail-icon">📁</div>
                <div className="detail-content">
                  <span className="detail-label">Category</span>
                  <span className="detail-value">{orchid.category}</span>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">🌍</div>
                <div className="detail-content">
                  <span className="detail-label">Origin</span>
                  <span className="detail-value">{orchid.origin}</span>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">🎨</div>
                <div className="detail-content">
                  <span className="detail-label">Color</span>
                  <div className="color-display">
                    <span 
                      className="color-circle" 
                      style={{ backgroundColor: orchid.color }}
                    ></span>
                    <span className="detail-value">{orchid.color}</span>
                  </div>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">❤️</div>
                <div className="detail-content">
                  <span className="detail-label">Likes</span>
                  <span className="detail-value">{orchid.numberOfLike.toLocaleString()}</span>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">🌱</div>
                <div className="detail-content">
                  <span className="detail-label">Type</span>
                  <span className="detail-value">
                    {orchid.isNatural ? 'Natural Species' : 'Hybrid Cultivar'}
                  </span>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">💎</div>
                <div className="detail-content">
                  <span className="detail-label">Status</span>
                  <span className="detail-value">
                    {orchid.isSpecial ? 'Special Collection' : 'Regular Collection'}
                  </span>
                </div>
              </div>
            </div>

            <div className="modal-description">
              <h3>About this Orchid</h3>
              <p>
                The <strong>{orchid.name}</strong> is a beautiful orchid from the{' '}
                <strong>{orchid.category}</strong> family, originating from{' '}
                <strong>{orchid.origin}</strong>. This stunning {orchid.color} orchid
                has captured the hearts of {orchid.numberOfLike} orchid enthusiasts
                around the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
