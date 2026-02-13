import { Box, Typography, Button, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import profilePic from "../assets/vriddhi.jpg";

const HeroSection = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: 6,
      }}
    >
      <Avatar
        src={profilePic}
        sx={{ width: 150, height: 150, margin: "auto", mb: 3 }}
      />

      <Typography variant="h3" gutterBottom>
        Hello, I'm Vriddhi Kakkar
      </Typography>

      <Typography variant="h6" gutterBottom>
        Roll No: 23BAI70621 | AI & ML Student
      </Typography>

      <Button
        variant="contained"
        size="large"
        component={Link}
        to="/projects"
        sx={{ mt: 3 }}
      >
        View My Projects
      </Button>
    </Box>
  );
};

export default HeroSection;

