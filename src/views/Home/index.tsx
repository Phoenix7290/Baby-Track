import { Box, Typography, Grid, Button, Avatar, Paper } from "@mui/material";
import Footer from "../../Layout/Footer";
import Header from "../../Layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh", padding: 2 }}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 4 }}>
          <Avatar
            alt="Bebê"
            src="https://via.placeholder.com/120" 
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
              onClick={() => console.log("Navegar para Fraldas")}
            >
              <Typography>Fralda</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              sx={{ minWidth: 120, height: 80 }}
              onClick={() => console.log("Navegar para Sono")}
            >
              <Typography>Sono</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="success"
              sx={{ minWidth: 120, height: 80 }}
              onClick={() => console.log("Navegar para Alimentação")}
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
      </Box>
      <Footer />
    </>
  );
}
