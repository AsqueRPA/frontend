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
  Alert,
} from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function MainContent() {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const maxResponse = 30;
  const [name, setName] = useState(""); // State for Name
  const [email, setEmail] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [numberOfResponses, setNumberOfResponses] = useState("");
  const [question, setQuestion] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [severity, setSeverity] = useState("");
  const [isSubmitted, setIsSubmited] = useState(false);
  const [errors, setErrors] = useState({
    name: false, // Validation for Name
    email: false,
    targetAudience: false,
    numberOfResponses: false,
    question: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {
      name: name === "", // Validate Name
      email: email === "",
      targetAudience: targetAudience === "",
      numberOfResponses: numberOfResponses === "",
      question: question === "",
    };
    setErrors(newErrors);

    const isFormValid = !Object.values(newErrors).includes(true);

    if (isFormValid) {
      const data = {
        name, // Include Name in data object
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
            setName(""); // Reset Name
            setEmail("");
            setTargetAudience("");
            setNumberOfResponses("");
            setQuestion("");
            setErrors({
              name: false, // Reset Name validation
              email: false,
              targetAudience: false,
              numberOfResponses: false,
              question: false,
            });
          } else {
            setSeverity("error");
          }
          setShowAlert(true);
          setIsSubmited(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 5000);
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
      {isSubmitted ? (
        <Box sx={styles.thankYouContent}>
          <Box sx={styles.thankYouBox}>
            <Typography variant="h4" component="h1" gutterBottom>
              <b>We Have Received Your Request</b>
            </Typography>
            <Typography variant="h6" component="p">
              We have processed your request and are currently gathering
              responses based on your criteria. Please check email in the next
              few days for a Google Sheet containing all the responses. Should
              you have any questions or feedbacks, please feel free to contact
              us at dyllan@berkeley.edu.
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            ...styles.mainContent,
            flexDirection: window.innerWidth > 900 ? "row" : "column",
          }}
        >
          <Box
            sx={{
              maxWidth: window.innerWidth > 900 ? "50%" : "90%",
              marginBottom: window.innerWidth > 900 ? 0 : "2rem",
            }}
          >
            <Typography
              variant={window.innerWidth > 500 ? "h3" : "h6"}
              gutterBottom
            >
              SurveyBara | Survey ICPs at scale
            </Typography>
            <Typography variant={window.innerWidth > 500 ? "h6" : "body2"}>
              (1) Define your target audience. <br /> (2) Ask your question.{" "}
              <br /> (3) Get a google sheet of replies mapped to LinkedIn
              Profiles in days.
            </Typography>
          </Box>
          <Card
            sx={{
              ...styles.card,
              width: window.innerWidth > 900 ? "50%" : "90%",
            }}
          >
            <CardContent>
              <Box
                component="form"
                sx={styles.container}
                onSubmit={handleSubmit}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="name"
                  label="Your Name"
                  variant="outlined"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={(e) => setErrors({ ...errors, name: false })}
                  onBlur={(e) =>
                    setErrors({ ...errors, name: e.target.value === "" })
                  }
                  sx={styles.textField}
                  error={errors.name}
                  helperText={errors.name && "Name is required"}
                />
                <TextField
                  id="email"
                  label="Your Email"
                  variant="outlined"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={(e) => setErrors({ ...errors, email: false })}
                  onBlur={(e) =>
                    setErrors({ ...errors, email: e.target.value === "" })
                  }
                  sx={styles.textField}
                  error={errors.email}
                  helperText={errors.email && "Email is required"}
                />
                <TextField
                  id="target-audience"
                  label="Target Audience"
                  variant="outlined"
                  required
                  value={targetAudience}
                  onChange={(e) => setTargetAudience(e.target.value)}
                  onFocus={(e) =>
                    setErrors({ ...errors, targetAudience: false })
                  }
                  onBlur={(e) =>
                    setErrors({
                      ...errors,
                      targetAudience: e.target.value === "",
                    })
                  }
                  sx={styles.textField}
                  error={errors.targetAudience}
                  helperText={
                    errors.targetAudience && "Target Audience is required"
                  }
                />
                <TextField
                  id="number-of-responses"
                  label="Number of Responses"
                  type="number"
                  inputProps={{ min: 0, max: maxResponse }}
                  variant="outlined"
                  required
                  value={numberOfResponses}
                  onChange={(e) => {
                    const value =
                      e.target.value === ""
                        ? ""
                        : Math.min(Math.max(0, e.target.value), maxResponse);
                    setNumberOfResponses(value);
                  }}
                  onFocus={(e) =>
                    setErrors({ ...errors, numberOfResponses: false })
                  }
                  onBlur={(e) =>
                    setErrors({
                      ...errors,
                      numberOfResponses: e.target.value === "",
                    })
                  }
                  sx={styles.textField}
                  error={errors.numberOfResponses}
                  helperText={
                    errors.numberOfResponses &&
                    "Number of Responses is required"
                  }
                />
                <TextField
                  id="question"
                  label="Question"
                  multiline
                  rows={4}
                  variant="outlined"
                  required
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onFocus={(e) => setErrors({ ...errors, question: false })}
                  onBlur={(e) =>
                    setErrors({ ...errors, question: e.target.value === "" })
                  }
                  sx={styles.textField}
                  error={errors.question}
                  helperText={errors.question && "Question is required"}
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
      )}
    </ThemeProvider>
  );
}

const styles = {
  appBar: {
    borderBottom: `1px solid ${darkTheme.palette.divider}`,
  },
  mainContent: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    minHeight: "calc(100vh - 256px)",
    padding: "2rem 5%",
  },
  card: {
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
  thankYouContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    minHeight: "calc(100vh - 256px)",
  },
  thankYouBox: {
    maxWidth: "600px",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "background.paper",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
};

export default MainContent;
