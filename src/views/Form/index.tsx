import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import GenericModal from '../../components/FAB/sleep.tsx';

export default function Home() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const handleOpenModal = (modalType: string) => {
    setOpenModal(modalType);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  const handleConfirmModal = () => {
    console.log(`Confirmou ação para: ${openModal}`);
    handleCloseModal();
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Home
      </Typography>
      <Button variant="contained" color="primary" onClick={() => handleOpenModal('fralda')}>
        Fralda
      </Button>
      <Button variant="contained" color="secondary" onClick={() => handleOpenModal('sono')}>
        Sono
      </Button>
      <Button variant="contained" color="success" onClick={() => handleOpenModal('alimentacao')}>
        Alimentação
      </Button>

      {/* Modal Genérico */}
      <GenericModal
        open={openModal === 'fralda'}
        onClose={handleCloseModal}
        title="Registro de Fralda"
        content="Deseja registrar uma troca de fralda?"
        onSave={() => console.log('Save action')}
        onConfirm={handleConfirmModal}
      />

      <GenericModal
        open={openModal === 'sono'}
        onClose={handleCloseModal}
        title="Registro de Sono"
        content="Deseja registrar um ciclo de sono?"
        onSave={() => console.log('Save action')}
        onConfirm={handleConfirmModal}
      />

      <GenericModal
        open={openModal === 'alimentacao'}
        onClose={handleCloseModal}
        title="Registro de Alimentação"
        content="Deseja registrar uma alimentação?"
        onSave={() => console.log('Save action')}
        onConfirm={handleConfirmModal}
      />
    </Box>
  );
}
