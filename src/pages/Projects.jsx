import { Container, Grid, Typography } from "@mui/material";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        My Projects
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item>
          <ProjectCard
            title="AI Mental Health Detection"
            description="A machine learning model to detect early mental health risks in students."
          />
        </Grid>

        <Grid item>
          <ProjectCard
            title="Government Scheme Chatbot"
            description="A Flask-based chatbot that suggests schemes based on user input."
          />
        </Grid>

        <Grid item>
          <ProjectCard
            title="Full Stack Portfolio"
            description="Responsive portfolio website built using React and MUI."
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;
