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
import { useLanguage } from "../../context/Translation/language.tsx";

export default function Home() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [reports, setReports] = useState<any[]>([]);
  const [editingReport, setEditingReport] = useState<any | null>(null);
  const { babyInfo } = useBabyContext();
  const age = babyInfo.birthDate
    ? calculateAge(new Date(babyInfo.birthDate))
    : '0 dias';


  const { t } = useLanguage();

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
          alt={t("baby_info.avatar_alt")}
          src={mother}
          sx={{ width: 120, height: 120, mb: 2 }}
        />
        <Typography variant="h5" component="h1">
          {babyInfo.name || t("baby_info.default_name")}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {age}
        </Typography>

        <Grid container justifyContent="center" spacing={2} sx={{ mb: 4 }}>
          <Grid item>
            <Paper sx={{ padding: 2, textAlign: "center", minWidth: 120 }}>
              <Typography variant="body1">{t("baby_info.length")}</Typography>
              <Typography variant="h6">
                {babyInfo.length ? `${babyInfo.length} cm` : '- '}
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper sx={{ padding: 2, textAlign: "center", minWidth: 120 }}>
              <Typography variant="body1">{t("baby_info.weight")}</Typography>
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
              <Typography>{t("actions.diaper")}</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              sx={{ minWidth: 120, height: 80 }}
              onClick={() => handleOpenModal('sono')}
            >
              <Typography>{t("actions.sleep")}</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="success"
              sx={{ minWidth: 120, height: 80 }}
              onClick={() => handleOpenModal('alimentacao')}
            >
              <Typography>{t("actions.feed")}</Typography>
            </Button>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, backgroundColor: "#ffffff", padding: 2, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>
            {t("reports.title")}
          </Typography>
          {reports.length === 0 ? (
            <Typography variant="body2" color="textSecondary">
              {t("reports.empty")}
            </Typography>
          ) : (
            reports.map((report) => (
              <Paper key={report.id} sx={{ p: 2, mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="body1">
                    {report.type === 'sono' && (
                      <>
                        <Typography>{t("reports.sleep.title")}</Typography>
                        <Typography variant="body2" color="textSecondary">
                          {t("reports.sleep.start")} {new Date(report.startTime).toLocaleString()}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {t("reports.sleep.end")} {new Date(report.endTime).toLocaleString()}
                        </Typography>
                      </>
                    )}
                    {report.type === 'fralda' && (
                      <>
                        <Typography variant="body1">{t("reports.diaper.title")}</Typography>
                        <Typography variant="body2" color="textSecondary">
                          {t("reports.diaper.time")} {new Date(report.dateTime).toLocaleString()}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {t("reports.diaper.status")} {report.diaperStatus}
                        </Typography>
                      </>
                    )}
                    {report.type === 'alimentacao' && (
                      <>
                        <Typography variant="body1">
                          {report.feedingType === 'mamadeira'
                            ? `${t("reports.feed.bottle")} (${report.quantity}ml)`
                            : `${t("reports.feed.milk")} (${report.breastSide})`}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {t("reports.feed.start")} {new Date(report.startTime).toLocaleString()}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {t("reports.feed.end")}{new Date(report.endTime).toLocaleString()}
                        </Typography>
                      </>
                    )}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {t("reports.description")} {report.description}
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
          title={editingReport ? t("reports.diaper.edit_title") : t("reports.diaper.new_title")}
          onSave={(data) => handleSaveReport('fralda', data)}
          initialData={editingReport}
        />

        <FabSleep
          open={openModal === 'sono'}
          onClose={handleCloseModal}
          title={editingReport ? t("reports.sleep.edit_title") : t("reports.sleep.new_title")}
          onSave={(data) => handleSaveReport('sono', data)}
          initialData={editingReport}
        />

        <FabFood
          open={openModal === 'alimentacao'}
          onClose={handleCloseModal}
          title={editingReport ? t("reports.feed.edit_title") : t("reports.feed.new_title")}
          onSave={(data) => handleSaveReport('alimentacao', data)}
          initialData={editingReport}
        />

      </Box>
      <Footer />
    </>
  );
}
