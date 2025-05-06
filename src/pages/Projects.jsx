import React, { useEffect } from 'react';
import { Grid, Container, Typography } from '@mui/material';
import { usePageTitle } from '../contexts/PageTitleContext';
import ProjectCard from '../components/ProjectCard';

const projectData = [
  {
    title: 'React Portfolio',
    description: 'My personal website built with React and Material UI.',
    image: '/assets/portfolio-screenshot.jpg',
    repoLink: 'https://github.com/AhmadHassan17/react-css-portfolio',
    demoLink: 'https://ahmadhassan.dev',
  },
  {
    title: 'Todo App',
    description: 'A simple todo app with hooks and local storage.',
    image: '/assets/todo.jpg',
    repoLink: 'https://github.com/AhmadHassan17/todo-app',
    demoLink: 'https://ahmadtodos.vercel.app',
  },
  {
    title: 'Weather Dashboard',
    description: 'Weather forecast using OpenWeatherMap API.',
    image: '/assets/weather.jpg',
    repoLink: 'https://github.com/AhmadHassan17/weather-dashboard',
    demoLink: 'https://weather.ahmadhassan.dev',
  },
];

const Projects = () => {
  const { setTitle } = usePageTitle();

  useEffect(() => {
    setTitle('Projects');
  }, [setTitle]);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={2}>
        {projectData.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
