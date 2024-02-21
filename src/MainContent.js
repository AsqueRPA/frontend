import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  CssBaseline,
  Typography,
  AppBar,
  Toolbar,
  Alert,
} from "@mui/material";
import logo from "./capylogo.png";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function MainContent() {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const [email, setEmail] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [numberOfResponses, setNumberOfResponses] = useState("");
  const [question, setQuestion] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [severity, setSeverity] = useState("");
  const [errors, setErrors] = useState({
    email: false,
    targetAudience: false,
    numberOfResponses: false,
    question: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {
      email: email === "",
      targetAudience: targetAudience === "",
      numberOfResponses: numberOfResponses === "",
      question: question === "",
    };
    setErrors(newErrors);

    const isFormValid = !Object.values(newErrors).includes(true);

    if (isFormValid) {
      const data = {
        email,
        keyword: targetAudience,
        targetAmountResponse: numberOfResponses,
        question,
      };

      fetch(`${baseUrl}/request-reachout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          if (res.status === 200) {
            setSeverity("success");
            setEmail("");
            setTargetAudience("");
            setNumberOfResponses("");
            setQuestion("");
            setErrors({
              email: false,
              targetAudience: false,
              numberOfResponses: false,
              question: false,
            });
          } else {
            setSeverity("error");
          }
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 5000);
          // const formData = {
          //   email,
          //   targetAudience,
          //   question,
          // };

          // // Replace 'YOUR_ZAPIER_WEBHOOK_URL' with the URL provided by Zapier
          // await fetch('https://hooks.zapier.com/hooks/catch/17339037/3l7tlks/', {
          //   method: 'POST',
          //   body: JSON.stringify(formData),
          // }).catch(error => console.error('Fetch error:', error));
        })
        .catch(() => {
          setSeverity("error");
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 5000);
        });
    } else {
      setSeverity("error");
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {showAlert && (
        <Alert
          severity={severity}
          onClose={() => {
            setShowAlert(false);
          }}
          style={{
            position: "fixed",
            top: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {severity === "success"
            ? "Your request has been submitted successfully. We will get back to you soon."
            : "There was an error submitting your request. Please try again."}
        </Alert>
      )}
      <Box sx={styles.mainContent}>
        <Box sx={styles.textContent}>
          <Typography variant="h3" gutterBottom>
            SurveyBara | Survey ICPs at scale
          </Typography>
          <Typography variant="h6">
            (1) Define your target audience. <br /> (2) Ask your question.{" "}
            <br /> (3) Get a google sheet of replies mapped to LinkedIn Profiles
            in days.
          </Typography>
        </Box>
        <Card sx={styles.card}>
          <CardContent>
            <Box
              component="form"
              sx={styles.container}
              onSubmit={handleSubmit}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="email"
                label="Your Email"
                variant="outlined"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                onFocus={(e) => {
                  setErrors({ ...errors, email: false });
                }}
                onBlur={(e) => {
                  setErrors({ ...errors, email: e.target.value === "" });
                }}
                sx={styles.textField}
                error={errors.email}
              />
              <TextField
                id="target-audience"
                label="Target Audience"
                variant="outlined"
                required
                value={targetAudience}
                onChange={(e) => {
                  setTargetAudience(e.target.value);
                }}
                onFocus={(e) => {
                  setErrors({ ...errors, targetAudience: false });
                }}
                onBlur={(e) => {
                  setErrors({
                    ...errors,
                    targetAudience: e.target.value === "",
                  });
                }}
                sx={styles.textField}
                error={errors.targetAudience}
              />
              <TextField
                id="number-of-responses"
                type="number"
                inputProps={{ min: 0, max: 100 }}
                onChange={(e) => {
                  if (e.target.value === "") {
                    setNumberOfResponses("");
                    return;
                  }
                  const value = Math.min(Math.max(0, e.target.value), 100);
                  setNumberOfResponses(value);
                }}
                onFocus={(e) => {
                  setErrors({ ...errors, numberOfResponses: false });
                }}
                onBlur={(e) => {
                  setErrors({
                    ...errors,
                    numberOfResponses: e.target.value === "",
                  });
                }}
                label="Number of Responses"
                variant="outlined"
                required
                value={numberOfResponses}
                sx={styles.textField}
                error={errors.numberOfResponses}
              />
              <TextField
                id="outlined-multiline-static"
                label="Question"
                required
                multiline
                rows={4}
                value={question}
                onChange={(e) => {
                  setQuestion(e.target.value);
                }}
                onFocus={(e) => {
                  setErrors({ ...errors, question: false });
                }}
                onBlur={(e) => {
                  setErrors({ ...errors, question: e.target.value === "" });
                }}
                sx={styles.textField}
                error={errors.question}
              />
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                sx={styles.submitButton}
              >
                Submit
              </Button>
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
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "calc(100vh - 64px)",
    padding: "2rem 5%",
    marginTop: "-64px",
  },
  textContent: {
    maxWidth: "50%",
  },
  card: {
    minWidth: 600,
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    padding: "20px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  textField: {
    width: "100%",
  },
  submitButton: {
    marginTop: 2,
    width: "100%",
  },
};

export default MainContent;
