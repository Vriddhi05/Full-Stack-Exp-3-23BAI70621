import { Container, TextField, Button, Typography, Box } from "@mui/material";

const Contact = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Contact Me
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          maxWidth: 500,
          margin: "auto",
        }}
      >
        <TextField label="Your Name" variant="outlined" fullWidth />
        <TextField label="Your Email" variant="outlined" fullWidth />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
        />

        <Button variant="contained" size="large">
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
