import React from 'react';
import { Box, Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function HowItWorks() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            How It Works
          </Typography>
          <Typography variant="body1" paragraph>
            Our tool allows you to survey Ideal Customer Profiles (ICPs) at scale. Here's how it works:
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Indicate the target audience and the question you want to ask them." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Our AI Researchers connect and ask people that match your criteria on LinkedIn." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="We collect the responses for you and will email you a Google Sheet of replies." />
            </ListItem>
          </List>
          <Typography variant="body1" paragraph>
            This streamlined process ensures you get the insights you need without the hassle of manual outreach and data collection.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default HowItWorks;
