import React, { useState } from 'react';
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WorkIcon from '@mui/icons-material/Work';
import { experienceConfig } from '../config/experience';

function Experience() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box
            id="experience"
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
                        {experienceConfig.title}
                    </Typography>

                    <Box sx={{ position: 'relative', mt: 4 }}>
                        <Box
                            sx={{
                                position: 'absolute',
                                left: '24px',
                                top: 0,
                                bottom: 0,
                                width: '2px',
                                bgcolor: 'primary.main',
                                opacity: 0.3,
                            }}
                        />
                        {experienceConfig.experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                            >
                                <Box sx={{ display: 'flex', mb: 4 }}>
                                    <Box
                                        sx={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: '50%',
                                            bgcolor: 'primary.main',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                            color: 'white',
                                            zIndex: 1,
                                            boxShadow: 2,
                                        }}
                                    >
                                        <WorkIcon />
                                    </Box>
                                    <Box sx={{ flexGrow: 1, ml: 3 }}>
                                        <Accordion
                                            expanded={expanded === `panel${index}`}
                                            onChange={handleChange(`panel${index}`)}
                                            sx={{
                                                backgroundColor: 'background.default',
                                                '&:before': { display: 'none' },
                                                boxShadow: 2,
                                                borderRadius: '8px !important',
                                                border: '1px solid',
                                                borderColor: 'primary.main',
                                                borderOpacity: 0.1,
                                            }}
                                        >
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                sx={{
                                                    borderRadius: 2,
                                                    '&:hover': { bgcolor: 'background.paper' },
                                                }}
                                            >
                                                <Box>
                                                    <Typography variant="h6" color="primary">
                                                        {exp.title}
                                                    </Typography>
                                                    <Typography variant="subtitle1" color="text.secondary">
                                                        {exp.company}
                                                    </Typography>
                                                    <Typography variant="subtitle2" color="text.secondary">
                                                        {exp.period}
                                                    </Typography>
                                                </Box>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                                                    {exp.description.map((item, i) => (
                                                        <Typography component="li" key={i} sx={{ mb: 1 }}>
                                                            {item}
                                                        </Typography>
                                                    ))}
                                                </Box>
                                            </AccordionDetails>
                                        </Accordion>
                                    </Box>
                                </Box>
                            </motion.div>
                        ))}
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
}

export default Experience;
