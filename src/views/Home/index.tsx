import { useState } from "react";
import { Box, Typography, Grid, Button, Avatar, Paper } from "@mui/material";
import Footer from "../../Layout/Footer";
import Header from "../../Layout/Header";
import FabSleep from '../../components/FAB/sleep.tsx';
import { mother } from "../../assets/index.ts";

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
    <>
      <Header />
      <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh", padding: 2 }}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 4 }}>
          <Avatar
            alt="Bebê"
            src={mother}
            sx={{ width: 120, height: 120, mb: 2 }}
          />
          <Typography variant="h5" component="h1">
            Arthur
          </Typography>
          <Typography variant="body2" color="textSecondary">
            1 dia
          </Typography>
        </Box>

        <Grid container justifyContent="center" spacing={2} sx={{ mb: 4 }}>
          <Grid item>
            <Paper sx={{ padding: 2, textAlign: "center", minWidth: 120 }}>
              <Typography variant="body1">Comprimento</Typography>
              <Typography variant="h6">40 cm</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper sx={{ padding: 2, textAlign: "center", minWidth: 120 }}>
              <Typography variant="body1">Peso</Typography>
              <Typography variant="h6">5 kg</Typography>
            </Paper>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" spacing={2} sx={{ mb: 4 }}>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              sx={{ minWidth: 120, height: 80 }}
              onClick={() => handleOpenModal('fralda')}
            >
              <Typography>Fralda</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              sx={{ minWidth: 120, height: 80 }}
              onClick={() => handleOpenModal('sono')}
            >
              <Typography>Sono</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="success"
              sx={{ minWidth: 120, height: 80 }}
              onClick={() => handleOpenModal('alimentacao')}
            >
              <Typography>Alimentação</Typography>
            </Button>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, backgroundColor: "#ffffff", padding: 2, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>
            Relatórios
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Aqui aparecerão os registros recentes.
          </Typography>
        </Box>

        <FabSleep
          open={openModal === 'fralda'}
          onClose={handleCloseModal}
          title="Registro de Fralda"
          content="Deseja registrar uma troca de fralda?"
          onSave={() => console.log('Save action')}
          onConfirm={handleConfirmModal}
        />

        <FabSleep
          open={openModal === 'sono'}
          onClose={handleCloseModal}
          title="Registro de Sono"
          content="Deseja registrar um ciclo de sono?"
          onSave={() => console.log('Save action')}
          onConfirm={handleConfirmModal}
        />

        <FabSleep
          open={openModal === 'alimentacao'}
          onClose={handleCloseModal}
          title="Registro de Alimentação"
          content="Deseja registrar uma alimentação?"
          onSave={() => console.log('Save action')}
          onConfirm={handleConfirmModal}
        />
      </Box>
      <Footer />
    </>
  );
}
