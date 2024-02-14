import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './capylogo.png'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} sx={styles.appBar}>
        <Toolbar>
          {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            <img src={logo} alt="Logo" style={{ maxHeight: '150px' }} />
          </Typography>
          <Button variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Contact
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={styles.mainContent}>
        <Box sx={styles.textContent}>
          <Typography variant="h3" gutterBottom>
            SurveyBara | Survey ICPs at scale
          </Typography>
          <Typography variant="h6">
            (1) Define your target audience. <br /> (2) Ask your question. <br /> (3) Get a google sheet of replies mapped to LinkedIn Profiles in days.
          </Typography>
        </Box>
        <Card sx={styles.card}>
          <CardContent>
            <Box component="form" sx={styles.container} onSubmit={handleSubmit} noValidate autoComplete="off">
              <TextField id="email" label="Your Email" variant="outlined" sx={styles.textField} />
              <TextField id="target-audience" label="Target Audience" variant="outlined" sx={styles.textField} />
              <TextField
                id="outlined-multiline-static"
                label="Question"
                multiline
                rows={4}
                defaultValue="Default Value"
                sx={styles.textField}
              />
              <Button type="submit" variant="outlined" color="primary" sx={styles.submitButton}>Submit</Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
}

const styles = {
  appBar: {
    borderBottom: `1px solid ${darkTheme.palette.divider}`,
  },
  mainContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', // Keep this to align items vertically in the center
    minHeight: 'calc(100vh - 64px)', // Adjust for AppBar height to ensure full vertical centering
    padding: '2rem 5%', // Maintain padding for horizontal spacing
    marginTop: '-64px', // Offset for the AppBar height
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
  }
};

export default App;
