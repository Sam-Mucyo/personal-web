import React, { useRef } from 'react';
import { Container, Typography, Box, Card, CardContent, Chip, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { projectsConfig } from '../config/projects';

function Projects() {
    const scrollContainerRef = useRef(null);

    const handleScroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = direction === 'left' ? -400 : 400;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <Box
            id="projects"
            sx={{
                py: 8,
                backgroundColor: 'background.default',
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Typography variant="h2" color="primary">
                            {projectsConfig.title}
                        </Typography>
                        <Box sx={{ ml: 'auto', display: 'flex', gap: 1 }}>
                            <IconButton
                                onClick={() => handleScroll('left')}
                                sx={{
                                    backgroundColor: 'background.paper',
                                    boxShadow: 1,
                                    '&:hover': { backgroundColor: 'grey.100' },
                                }}
                            >
                                <ArrowBackIcon />
                            </IconButton>
                            <IconButton
                                onClick={() => handleScroll('right')}
                                sx={{
                                    backgroundColor: 'background.paper',
                                    boxShadow: 1,
                                    '&:hover': { backgroundColor: 'grey.100' },
                                }}
                            >
                                <ArrowForwardIcon />
                            </IconButton>
                        </Box>
                    </Box>

                    <Box
                        ref={scrollContainerRef}
                        sx={{
                            display: 'flex',
                            gap: 3,
                            overflowX: 'auto',
                            pb: 2,
                            scrollbarWidth: 'none',
                            '&::-webkit-scrollbar': { display: 'none' },
                            '-ms-overflow-style': 'none',
                        }}
                    >
                        {projectsConfig.projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                            >
                                <Card
                                    elevation={2}
                                    sx={{
                                        width: { xs: '300px', sm: '350px' },
                                        flex: '0 0 auto',
                                        height: '100%',
                                        transition: 'all 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: 3,
                                        },
                                    }}
                                >
                                        <CardContent>
                                            <Typography variant="h6" color="primary" gutterBottom>
                                                {project.title}
                                            </Typography>
                                            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                                {project.category}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                paragraph
                                                sx={{
                                                    minHeight: '80px',
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 4,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                }}
                                            >
                                                {project.description}
                                            </Typography>
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                                {project.technologies.map((tech, i) => (
                                                    <Chip
                                                        key={i}
                                                        label={tech}
                                                        size="small"
                                                        sx={{
                                                            backgroundColor: 'primary.main',
                                                            color: 'white',
                                                        }}
                                                    />
                                                ))}
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                        ))}
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
}

export default Projects;
