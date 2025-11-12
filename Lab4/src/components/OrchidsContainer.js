import React, { useState, useEffect } from 'react';
import OrchidsList from './OrchidsList';
import ListOfOrchids from '../data/ListOfOrchids';

// Container Component - Handles logic and state management
const OrchidsContainer = () => {
  const [orchids, setOrchids] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const loadOrchids = () => {
      setTimeout(() => {
        setOrchids(ListOfOrchids);
        setLoading(false);
      }, 500);
    };

    loadOrchids();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p>Loading orchids...</p>
      </div>
    );
  }

  return <OrchidsList orchids={orchids} />;
};

export default OrchidsContainer;
