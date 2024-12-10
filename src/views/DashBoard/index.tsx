import { useEffect, useState } from "react";
import { Box, Typography, Paper, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { getReports, deleteReport } from "../../utils/localStorage";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";

export default function Reports() {
    const [reports, setReports] = useState<any[]>([]);

    useEffect(() => {
        const storedReports = getReports();
        setReports(storedReports);
    }, []);

    const handleDelete = (id: number) => {
        const updatedReports = deleteReport(id);
        setReports(updatedReports);
    };

    return (
        <>
            <Header />
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
                        <Paper
                            key={report.id}
                            sx={{
                                p: 2,
                                mb: 2,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <Box>
                                {report.type === "sono" && (
                                    <>
                                        <Typography variant="body1">Sono</Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Início do Sono: {new Date(report.startTime).toLocaleString()}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Fim do Sono: {new Date(report.endTime).toLocaleString()}
                                        </Typography>
                                    </>
                                )}
                                {report.type === "fralda" && (
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
                                {report.type === "alimentacao" && (
                                    <>
                                        <Typography variant="body1">
                                            {report.feedingType === "mamadeira"
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
                                <Typography variant="body2" color="textSecondary">
                                    Descrição: {report.description}
                                </Typography>
                            </Box>
                            <Box>
                                <IconButton onClick={() => handleDelete(report.id)} color="error">
                                    <DeleteIcon />
                                </IconButton>
                            </Box>
                        </Paper>
                    ))
                )}
            </Box>
            <Footer />
        </>
    );
}