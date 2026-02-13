import { Box, Typography, Button, Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: 6,
      }}
    >
      <Avatar
        src="/vriddhi.jpg"
        sx={{ width: 150, height: 150, margin: "auto", mb: 3 }}
      />

      <Typography variant="h3" gutterBottom>
        Hello, I'm Vriddhi Kakkar
      </Typography>

      <Typography variant="h6" gutterBottom>
        Roll No: 23BAI71463 | AI & ML Student
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
