import React, { useState, useEffect } from 'react';
import OrchidsList from './OrchidsList';
import Modal from './Modal';
import ListOfOrchids from '../data/ListOfOrchids';
import useModal from '../hooks/useModal';

// Container Component - Handles logic and state management
const OrchidsContainer = () => {
  const [orchids, setOrchids] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isOpen, modalData, openModal, closeModal } = useModal();

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

  const handleDetailClick = (orchid) => {
    openModal(orchid);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p>Loading orchids...</p>
      </div>
    );
  }

  return (
    <>
      <OrchidsList orchids={orchids} onDetailClick={handleDetailClick} />
      <Modal isOpen={isOpen} onClose={closeModal} orchid={modalData} />
    </>
  );
};

export default OrchidsContainer;
