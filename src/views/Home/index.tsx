import { useState, useEffect } from "react";
import { Box, Typography, Grid, Button, Avatar, Paper } from "@mui/material";
import Footer from "../../Layout/Footer";
import Header from "../../Layout/Header";
import { FabSleep, FabDiaper, FabFood } from "../../components/FAB/index.tsx"
import { mother } from "../../assets/index.ts";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { saveReport, getReports, updateReport, deleteReport } from '../../utils/localStorage.ts';
import calculateAge from "../../utils/calculateAge.ts";
import { useBabyContext } from "../../context/Global/avatar.tsx";

export default function Home() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [reports, setReports] = useState<any[]>([]);
  const [editingReport, setEditingReport] = useState<any | null>(null);
  const { babyInfo } = useBabyContext();
  const age = babyInfo.birthDate 
    ? calculateAge(new Date(babyInfo.birthDate)) 
    : '0 dias';
  

  const handleOpenModal = (modalType: string) => {
    setOpenModal(modalType);
  };

  useEffect(() => {
    const savedReports = getReports();
    setReports(savedReports);
  }, []);

  const handleSaveReport = (type: string, data: any) => {
    if (editingReport) {
      const updatedReport = updateReport(editingReport.id, { ...data, type });
      if (updatedReport) {
        setReports(getReports());
        setEditingReport(null);
      }
    } else {
      saveReport(type, data);
      setReports(getReports());
    }
    handleCloseModal();
  };

  const handleDeleteReport = (id: number) => {
    const updatedReports = deleteReport(id);
    setReports(updatedReports);
  };

  const handleEditReport = (report: any) => {
    setEditingReport(report);
    setOpenModal(report.type);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  return (
    <>
      <Header />
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 4 }}>
      <Avatar
        alt="Bebê"
        src={mother}
        sx={{ width: 120, height: 120, mb: 2 }}
      />
      <Typography variant="h5" component="h1">
        {babyInfo.name || 'Bebê'}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {age}
      </Typography>

      <Grid container justifyContent="center" spacing={2} sx={{ mb: 4 }}>
        <Grid item>
          <Paper sx={{ padding: 2, textAlign: "center", minWidth: 120 }}>
            <Typography variant="body1">Comprimento</Typography>
            <Typography variant="h6">
              {babyInfo.length ? `${babyInfo.length} cm` : '- '}
            </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper sx={{ padding: 2, textAlign: "center", minWidth: 120 }}>
            <Typography variant="body1">Peso</Typography>
            <Typography variant="h6">
              {babyInfo.weight ? `${babyInfo.weight} kg` : '- '}
            </Typography>
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
          {reports.length === 0 ? (
            <Typography variant="body2" color="textSecondary">
              Aqui aparecerão os registros recentes.
            </Typography>
          ) : (
            reports.map((report) => (
              <Paper key={report.id} sx={{ p: 2, mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="body1">
                    {report.type === 'sono' && (
                      <>
                        <Typography>Sono</Typography>
                        <Typography variant="body2" color="textSecondary">
                          Início do Sono: {new Date(report.startTime).toLocaleString()}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Fim do Sono: {new Date(report.endTime).toLocaleString()}
                        </Typography>
                      </>
                    )}
                    {report.type === 'fralda' && (
                      <>
                      <Typography variant="body1">Troca de Fralda</Typography>
                      <Typography variant="body2" color="textSecondary">
                        Hora da troca: {new Date(report.dateTime).toLocaleString()}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Status da fralda: {report.diaperStatus}
                      </Typography>
                      </>
                    )}
                    {report.type === 'alimentacao' && (
                      <>
                        <Typography variant="body1">
                          {report.feedingType === 'mamadeira'
                            ? `Mamadeira (${report.quantity}ml)`
                            : `Amamentação (${report.breastSide})`}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Início: {new Date(report.startTime).toLocaleString()}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Fim: {new Date(report.endTime).toLocaleString()}
                        </Typography>
                      </>
                    )}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Descrição: {report.description}
                  </Typography>
                </Box>
                <Box>
                  <EditIcon
                    onClick={() => handleEditReport(report)}
                    color="primary"
                  >
                    <EditIcon />
                  </EditIcon>
                  <DeleteIcon
                    onClick={() => handleDeleteReport(report.id)}
                    color="error"
                  >
                    <DeleteIcon />
                  </DeleteIcon>
                </Box>
              </Paper>
            ))
          )}
        </Box>

        <FabDiaper
          open={openModal === 'fralda'}
          onClose={handleCloseModal}
          title={editingReport ? "Editar Registro de Fralda" : "Registro de Fralda"}
          onSave={(data) => handleSaveReport('fralda', data)}
          initialData={editingReport}
        />

        <FabSleep
          open={openModal === 'sono'}
          onClose={handleCloseModal}
          title={editingReport ? "Editar Registro de Sono" : "Registro de Sono"}
          onSave={(data) => handleSaveReport('sono', data)}
          initialData={editingReport}
        />

        <FabFood
          open={openModal === 'alimentacao'}
          onClose={handleCloseModal}
          title={editingReport ? "Editar Registro de Alimentação" : "Registro de Alimentação"}
          onSave={(data) => handleSaveReport('alimentacao', data)}
          initialData={editingReport}
        />

      </Box>
      <Footer />
    </>
  );
}
