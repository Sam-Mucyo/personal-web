import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { skillsConfig } from '../config/skills';

function Skills() {
  return (
    <Box
      id="skills"
      sx={{
        py: 8,
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" color="primary" gutterBottom>
            {skillsConfig.title}
          </Typography>
          <Grid container spacing={3}>
            {skillsConfig.categories.map((category, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      height: '100%',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <Typography variant="h6" color="primary" gutterBottom>
                      {category.title}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {category.skills.map((skill, i) => (
                        <Box
                          key={i}
                          sx={{
                            backgroundColor: 'rgba(52, 152, 219, 0.1)',
                            color: 'primary.main',
                            px: 2,
                            py: 0.5,
                            borderRadius: 2,
                            fontSize: '0.9rem',
                          }}
                        >
                          {skill}
                        </Box>
                      ))}
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Skills;
