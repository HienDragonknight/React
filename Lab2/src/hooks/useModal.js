import { useState, useCallback } from 'react';

// Custom Hook for managing modal state
const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const openModal = useCallback((data) => {
    setModalData(data);
    setIsOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setModalData(null);
    // Restore body scroll when modal is closed
    document.body.style.overflow = 'unset';
  }, []);

  return {
    isOpen,
    modalData,
    openModal,
    closeModal
  };
};

export default useModal;
