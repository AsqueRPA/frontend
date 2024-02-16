// App.js
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from './capylogo.png';
import MainContent from './MainContent'; // Import the new component
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HowItWorks from './HowItWorks'; // Import the new component
import Button from '@mui/material/Button';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export function Footer() {
  return (
    <Box sx={styles.footer}>
      <Typography variant="body2">
        Email us at <a href="dyllan@berkeley.edu" style={{ color: 'inherit', textDecoration: 'none' }}>dyllan@berkeley.edu</a>
      </Typography>
      <Typography variant="body2">
        © Copyright 2024 LineUpp, Corp.
      </Typography>
    </Box>
  )
}

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, targetAudience, question } = event.target.elements; // Destructure the form elements

    const formData = {
      email: email.value,
      targetAudience: targetAudience.value,
      question: question.value,
    };

    // Replace 'YOUR_ZAPIER_WEBHOOK_URL' with the URL provided by Zapier
    await fetch('https://hooks.zapier.com/hooks/catch/17339037/3l7tlks/', {
      method: 'POST',
      body: JSON.stringify(formData),
    }).catch(error => console.error('Fetch error:', error));
    setIsSubmitted(true);
    console.log("Form submitted");
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <AppBar position="static" color="default" elevation={0} sx={styles.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={logo} alt="Logo" style={{ padding: '1rem 5%', maxHeight: '150px', cursor: 'pointer' }} />
              </Link>
            </Typography>
            <Button variant="outlined" color="primary" component={Link} to="/howitworks" style={{ textDecoration: 'none', marginRight: '100px' }}>
              How It Works
            </Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/" element={<MainContent isSubmitted={isSubmitted} handleSubmit={handleSubmit} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export const styles = {
  appBar: {
    borderBottom: `1px solid ${darkTheme.palette.divider}`,
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'calc(100vh - 64px)',
  },
  mainContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2rem 5%',
    flexGrow: 1,
  },
  thankYouContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  textContent: {
    maxWidth: '50%',
  },
  card: {
    minWidth: 600,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    padding: '20px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  textField: {
    width: '100%',
  },
  submitButton: {
    marginTop: 2,
    width: '100%',
  },
  thankYouBox: {
    maxWidth: '600px',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: 'background.paper',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    marginTop: 'auto',
    backgroundColor: 'background.paper',
    borderTop: `1px solid ${darkTheme.palette.divider}`,
  },
};

export default App;
