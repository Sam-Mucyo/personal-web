import React, { useState } from 'react';
import { 
    Container, 
    Typography, 
    Box, 
    Accordion, 
    AccordionSummary, 
    AccordionDetails,
    Chip,
    useTheme,
    alpha,
    Grid,
    Paper,
    Divider,
    IconButton,
    Tooltip,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LinkIcon from '@mui/icons-material/Link';
import { experienceConfig } from '../config/experience';

function Experience() {
    const [expanded, setExpanded] = useState(false);
    const theme = useTheme();

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    
    // Get icon based on experience type
    const getIcon = (type) => {
        switch(type?.toLowerCase()) {
            case 'education':
                return <SchoolIcon />;
            case 'internship':
                return <BusinessCenterIcon />;
            case 'work':
            default:
                return <WorkIcon />;
        }
    };
    
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    };

    return (
        <Box
            id="experience"
            sx={{
                py: { xs: 8, md: 12 },
                backgroundColor: 'background.paper',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background decorative elements */}
            <Box 
                sx={{ 
                    position: 'absolute',
                    top: -100,
                    right: -100,
                    width: 300,
                    height: 300,
                    borderRadius: '50%',
                    background: alpha(theme.palette.primary.main, 0.05),
                    filter: 'blur(60px)',
                    zIndex: 0,
                }}
            />
            <Box 
                sx={{ 
                    position: 'absolute',
                    bottom: -50,
                    left: -50,
                    width: 200,
                    height: 200,
                    borderRadius: '50%',
                    background: alpha(theme.palette.secondary.main, 0.05),
                    filter: 'blur(60px)',
                    zIndex: 0,
                }}
            />
            
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Box sx={{ mb: 6, textAlign: { xs: 'center', md: 'left' } }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Typography 
                                variant="h2" 
                                color="primary" 
                                gutterBottom
                                sx={{
                                    fontWeight: 700,
                                    position: 'relative',
                                    display: 'inline-block',
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '40%',
                                        height: '4px',
                                        background: 'linear-gradient(90deg, #4361EE, transparent)',
                                        borderRadius: '4px',
                                    }
                                }}
                            >
                                {experienceConfig.title}
                            </Typography>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            {/* <Typography
                                variant="subtitle1"
                                color="text.secondary"
                                sx={{
                                    maxWidth: 600,
                                    mx: { xs: 'auto', md: 0 },
                                    mt: 2,
                                }}
                            >
                                {experienceConfig.description || "My professional journey and work experience across different roles and organizations."}
                            </Typography> */}
                        </motion.div>
                    </Box>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <Grid container spacing={4}>
                            {experienceConfig.experiences.map((exp, index) => (
                                <Grid item xs={12} key={index}>
                                    <motion.div variants={itemVariants}>
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                borderRadius: 3,
                                                overflow: 'hidden',
                                                position: 'relative',
                                                transition: 'all 0.3s ease',
                                                border: `1px solid ${theme.palette.divider}`,
                                                '&:hover': {
                                                    boxShadow: 3,
                                                    transform: 'translateY(-4px)',
                                                    borderColor: alpha(theme.palette.primary.main, 0.3),
                                                },
                                            }}
                                        >
                                            <Box sx={{ p: { xs: 2, md: 3 } }}>
                                                <Grid container spacing={3}>
                                                    {/* Icon and date column */}
                                                    <Grid item xs={12} md={3}>
                                                        <Box sx={{ 
                                                            display: 'flex', 
                                                            flexDirection: { xs: 'row', md: 'column' },
                                                            alignItems: { xs: 'center', md: 'flex-start' },
                                                            mb: { xs: 2, md: 0 },
                                                        }}>
                                                            <Box
                                                                sx={{
                                                                    width: 56,
                                                                    height: 56,
                                                                    borderRadius: '12px',
                                                                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    color: 'white',
                                                                    boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.3)}`,
                                                                    mr: { xs: 2, md: 0 },
                                                                    mb: { xs: 0, md: 2 },
                                                                }}
                                                            >
                                                                {getIcon(exp.type)}
                                                            </Box>
                                                            
                                                            <Box>
                                                                <Typography 
                                                                    variant="subtitle2" 
                                                                    color="text.secondary"
                                                                    sx={{ 
                                                                        fontWeight: 600,
                                                                        mb: 0.5,
                                                                    }}
                                                                >
                                                                    {exp.period}
                                                                </Typography>
                                                                
                                                                {exp.location && (
                                                                    <Typography 
                                                                        variant="body2" 
                                                                        color="text.secondary"
                                                                        sx={{ fontSize: '0.875rem' }}
                                                                    >
                                                                        {exp.location}
                                                                    </Typography>
                                                                )}
                                                            </Box>
                                                        </Box>
                                                    </Grid>
                                                    
                                                    {/* Content column */}
                                                    <Grid item xs={12} md={9}>
                                                        <Box>
                                                            <Box sx={{ 
                                                                display: 'flex', 
                                                                alignItems: 'flex-start',
                                                                justifyContent: 'space-between',
                                                                flexWrap: 'wrap',
                                                                mb: 1,
                                                            }}>
                                                                <Typography 
                                                                    variant="h5" 
                                                                    color="text.primary"
                                                                    sx={{ 
                                                                        fontWeight: 600,
                                                                        mb: 0.5,
                                                                    }}
                                                                >
                                                                    {exp.title}
                                                                </Typography>
                                                                
                                                                {exp.url && (
                                                                    <Tooltip title="Visit company website">
                                                                        <IconButton 
                                                                            size="small" 
                                                                            href={exp.url} 
                                                                            target="_blank"
                                                                            sx={{ 
                                                                                color: 'primary.main',
                                                                                ml: 1,
                                                                            }}
                                                                        >
                                                                            <LinkIcon fontSize="small" />
                                                                        </IconButton>
                                                                    </Tooltip>
                                                                )}
                                                            </Box>
                                                            
                                                            <Typography 
                                                                variant="h6" 
                                                                color="primary.main"
                                                                sx={{ 
                                                                    fontWeight: 500,
                                                                    mb: 2,
                                                                }}
                                                            >
                                                                {exp.company}
                                                            </Typography>
                                                            
                                                            <Accordion
                                                                expanded={expanded === `panel${index}`}
                                                                onChange={handleChange(`panel${index}`)}
                                                                elevation={0}
                                                                disableGutters
                                                                sx={{
                                                                    backgroundColor: 'transparent',
                                                                    '&:before': { display: 'none' },
                                                                }}
                                                            >
                                                                <AccordionSummary
                                                                    expandIcon={
                                                                        <Chip 
                                                                            label={expanded === `panel${index}` ? "Show less" : "Show more"}
                                                                            size="small"
                                                                            color="primary"
                                                                            variant="outlined"
                                                                            sx={{ 
                                                                                fontWeight: 500,
                                                                                '& .MuiChip-label': {
                                                                                    px: 2,
                                                                                },
                                                                            }}
                                                                        />
                                                                    }
                                                                    sx={{
                                                                        p: 0,
                                                                        minHeight: 'auto',
                                                                        '& .MuiAccordionSummary-content': {
                                                                            margin: 0,
                                                                        },
                                                                    }}
                                                                >
                                                                    <Typography 
                                                                        variant="body1" 
                                                                        color="text.secondary"
                                                                        sx={{ 
                                                                            display: expanded === `panel${index}` ? 'none' : 'block',
                                                                            mb: 1,
                                                                        }}
                                                                    >
                                                                        {exp.summary || exp.description[0]}
                                                                    </Typography>
                                                                </AccordionSummary>
                                                                
                                                                <AccordionDetails sx={{ p: 0, pt: 2 }}>
                                                                    <Box component="ul" sx={{ pl: 2, mb: 0, mt: 0 }}>
                                                                        {exp.description.map((item, i) => (
                                                                            <Typography 
                                                                                component="li" 
                                                                                key={i} 
                                                                                sx={{ 
                                                                                    mb: 1.5,
                                                                                    color: 'text.secondary',
                                                                                    '&::marker': {
                                                                                        color: theme.palette.primary.main,
                                                                                    },
                                                                                }}
                                                                            >
                                                                                {item}
                                                                            </Typography>
                                                                        ))}
                                                                    </Box>
                                                                    
                                                                    {exp.skills && (
                                                                        <Box sx={{ mt: 3 }}>
                                                                            <Divider sx={{ mb: 2 }} />
                                                                            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                                                                                Skills & Technologies:
                                                                            </Typography>
                                                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                                                                {exp.skills.map((skill, i) => (
                                                                                    <Chip 
                                                                                        key={i}
                                                                                        label={skill}
                                                                                        size="small"
                                                                                        sx={{ 
                                                                                            backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                                                                            color: 'primary.main',
                                                                                            fontWeight: 500,
                                                                                        }}
                                                                                    />
                                                                                ))}
                                                                            </Box>
                                                                        </Box>
                                                                    )}
                                                                </AccordionDetails>
                                                            </Accordion>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Paper>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                </motion.div>
            </Container>
        </Box>
    );
}

export default Experience;
