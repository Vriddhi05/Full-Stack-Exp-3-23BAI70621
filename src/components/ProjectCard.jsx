import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";

const ProjectCard = ({ title, description }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
