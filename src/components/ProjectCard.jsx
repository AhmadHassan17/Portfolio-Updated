import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Box,
} from '@mui/material';

const ProjectCard = ({ title, description, image, repoLink, demoLink }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt={`${title} project`}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Button size="small" href={repoLink} target="_blank">GitHub</Button>
          <Button size="small" href={demoLink} target="_blank">Live Demo</Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
