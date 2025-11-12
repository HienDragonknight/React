import React from 'react';
import OrchidCard from './OrchidCard';
import './OrchidsList.css';

// Presentation Component - Only handles displaying the list
const OrchidsList = ({ orchids, onDetailClick }) => {
  return (
    <div className="orchids-list-container">
      <header className="orchids-header">
        <h1 className="main-title">🌸 Orchids Collection 🌸</h1>
        <p className="subtitle">Discover the beauty of {orchids.length} exquisite orchids</p>
      </header>
      
      <div className="orchids-grid">
        {orchids.map((orchid) => (
          <OrchidCard 
            key={orchid.id} 
            orchid={orchid} 
            onDetailClick={onDetailClick}
          />
        ))}
      </div>
    </div>
  );
};

export default OrchidsList;
