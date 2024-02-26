import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function HowItWorks() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        minHeight: "calc(100vh - 256px)",
      }}
    >
      <Card
        sx={{
          maxWidth: 600,
        }}
      >
        <CardContent
          sx={{
            padding: "50px",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            How It Works
          </Typography>
          <Typography variant="body1" paragraph>
            SurveyBara is a “question-to-answer machine”. Here's how:
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Submit Your Query:"
                secondary="Just let us know your question, target audience, and how many responses you need (up to 30 for now)."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="We Do the Reachout:"
                secondary="Our AI-powered
            researchers identify and engage with relevant experts on LinkedIn
            and Twitter, ensuring your question reaches the right audience."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Consolidated Insights:"
                secondary="We compile all replies mapped to their
            Linkedin/Twitter profiles into a Google Sheet, delivering direct
            insights to you within days."
              />
            </ListItem>
          </List>
          <Typography variant="body1" paragraph>
            This streamlined process ensures you get the insights you need
            without the hassle of manual outreach and data collection.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default HowItWorks;
