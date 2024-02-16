// MainContent.js
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Footer, styles } from './App'; 

function MainContent({ isSubmitted, handleSubmit }) {
  return (
    <Box sx={styles.mainContainer}>
      {isSubmitted ? (
        <Box sx={styles.thankYouContent}>
          <Box sx={styles.thankYouBox}>
            <Typography variant="h4" component="h1" gutterBottom>
              <b>We Have Received Your Request</b>
            </Typography>
            <Typography variant="h6" component="p">
              We have processed your request and are currently gathering responses based on your criteria.
              Please check email in the next few days for a Google Sheet containing all the responses.
              Should you have any questions or feedbacks, please feel free to contact us at dyllan@berkeley.edu.
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box sx={styles.mainContent}>
          <Box sx={styles.textContent}>
            <Typography variant="h3" gutterBottom>
              SurveyBara | Survey ICPs at scale
            </Typography>
            <Typography variant="h6">
              (1) Define your target audience. <br /> (2) Ask your question. <br /> (3) Get a google sheet of responses mapped to LinkedIn Profiles in days.
            </Typography>
          </Box>
          <Card sx={styles.card}>
            <CardContent>
              <Box component="form" sx={styles.container} onSubmit={handleSubmit} noValidate autoComplete="off">
                <TextField name="email" label="Your Email" variant="outlined" sx={styles.textField} />
                <TextField name="targetAudience" label="Target Audience" variant="outlined" sx={styles.textField} />
                <TextField name="question" label="Question" multiline rows={4} defaultValue="Ask a question you can imagine yourself replying to" sx={styles.textField} />

                <Button type="submit" variant="outlined" color="primary" sx={styles.submitButton}>Submit</Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}
      <Footer />
    </Box>
  );
}

export default MainContent;
