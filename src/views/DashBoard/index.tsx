import { useEffect, useState } from "react";
import { Box, Typography, Paper, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { getReports, deleteReport } from "../../utils/localStorage";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import { useLanguage } from "../../context/Translation/language";

export default function Reports() {
    const [reports, setReports] = useState<any[]>([]);
    const { t } = useLanguage();

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
                    {t("reports.title")}
                </Typography>
                {reports.length === 0 ? (
                    <Typography variant="body2" color="textSecondary">
                        {t("reports.empty")}
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
                                        <Typography variant="body1">{t("reports.sleep.title")}</Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {t("reports.sleep.start")} {new Date(report.startTime).toLocaleString()}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {t("reports.sleep.end")} {new Date(report.endTime).toLocaleString()}
                                        </Typography>
                                    </>
                                )}
                                {report.type === "fralda" && (
                                    <>
                                        <Typography variant="body1">{t("reports.diaper.title")}</Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {t("reports.diaper.time")}{new Date(report.dateTime).toLocaleString()}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {t("reports.diaper.status")} {report.diaperStatus}
                                        </Typography>
                                    </>
                                )}
                                {report.type === "alimentacao" && (
                                    <>
                                        <Typography variant="body1">
                                            {report.feedingType === "mamadeira"
                                                ? `${t("reports.feed.bottle")} (${report.quantity}ml)`
                                                : `${t("reports.feed.milk")} (${report.breastSide})`}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {t("reports.feed.start")} {new Date(report.startTime).toLocaleString()}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {t("reports.feed.end")} {new Date(report.endTime).toLocaleString()}
                                        </Typography>
                                    </>
                                )}
                                <Typography variant="body2" color="textSecondary">
                                    {t("reports.description")} {report.description}
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