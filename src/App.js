import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "./capylogo.png";
import MainContent from "./MainContent";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HowItWorks from "./HowItWorks";
import Button from "@mui/material/Button";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export function Footer() {
  return (
    <Box sx={styles.footer}>
      <Typography variant="body2">
        Email us at{" "}
        <a
          href="dyllan@berkeley.edu"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          dyllan@berkeley.edu
        </a>
      </Typography>
      <Typography variant="body2">© Copyright 2024 LineUpp, Corp.</Typography>
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={styles.appBar}
        >
          <Toolbar>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <img
                  src={logo}
                  alt="Logo"
                  style={{
                    padding: "1rem 5%",
                    maxHeight: "150px",
                    cursor: "pointer",
                  }}
                />
              </Link>
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              to="/howitworks"
              style={{ textDecoration: "none", margin: "1rem 5%" }}
            >
              How It Works
            </Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/" element={<MainContent />} />
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export const styles = {
  appBar: {
    borderBottom: `1px solid ${darkTheme.palette.divider}`,
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    marginTop: "auto",
    backgroundColor: "background.paper",
    borderTop: `1px solid ${darkTheme.palette.divider}`,
  },
};

export default App;
