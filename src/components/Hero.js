import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, useTheme, useMediaQuery, Grid, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-scroll';
import { heroConfig } from '../config/hero';

function Hero() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [showScrollIndicator, setShowScrollIndicator] = useState(true);

    // Add scroll event listener to hide indicator when not on hero section
    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.getElementById('home');
            if (!heroSection) return;

            const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
            const scrollPosition = window.scrollY + window.innerHeight;

            // Only show when we're viewing the hero section and haven't scrolled past it
            setShowScrollIndicator(scrollPosition < heroBottom + 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6 },
        },
    };

    // Floating animation for decorative elements
    const floatingAnimation = {
        y: ['-10px', '10px'],
        transition: {
            y: {
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
            },
        },
    };

    return (
        <Box
            id="home"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                background: theme.palette.mode === 'light'
                    ? 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
                    : 'linear-gradient(135deg, #121212 0%, #1e1e1e 100%)',
                py: { xs: 10, md: 12 },
            }}
        >
            {/* Decorative elements */}
            <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: 0 }}>
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={floatingAnimation}
                        style={{
                            position: 'absolute',
                            width: Math.random() * 200 + 50,
                            height: Math.random() * 200 + 50,
                            borderRadius: '50%',
                            background: theme.palette.primary[theme.palette.mode === 'light' ? 'light' : 'dark'],
                            opacity: 0.03 + Math.random() * 0.05,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            filter: 'blur(40px)',
                        }}
                    />
                ))}
            </Box>

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={4} alignItems="center" justifyContent="space-between">
                    <Grid item xs={12} md={7}>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.div variants={itemVariants}>
                                <Typography
                                    variant="h1"
                                    component="h1"
                                    sx={{
                                        fontWeight: 800,
                                        color: 'text.primary',
                                        mb: 2,
                                        fontSize: { xs: '2.2rem', sm: '2.6rem', md: '3rem', lg: '3.5rem' },
                                        background: theme.palette.mode === 'dark'
                                            ? 'linear-gradient(90deg, #4CC9F0 0%, #4361EE 50%, #7209B7 100%)'
                                            : 'linear-gradient(90deg, #4361EE 0%, #3A0CA3 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        textFillColor: 'transparent',
                                    }}
                                >
                                    {heroConfig.name}
                                </Typography>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        mb: 2,
                                        color: 'primary.main',
                                        fontWeight: 600,
                                        fontSize: { xs: '1.3rem', md: '1.5rem' },
                                    }}
                                >
                                    {heroConfig.title}
                                </Typography>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        mb: 3,
                                        color: 'text.secondary',
                                        fontWeight: 500,
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: 1,
                                    }}
                                >
                                    {heroConfig.roles.map((role, index) => (
                                        <React.Fragment key={role}>
                                            <Box component="span" sx={{ color: 'text.primary' }}>{role}</Box>
                                            {index < heroConfig.roles.length - 1 && (
                                                <Box
                                                    component="span"
                                                    sx={{
                                                        color: 'primary.main',
                                                        fontWeight: 'bold',
                                                        fontSize: '1.2rem',
                                                    }}
                                                >
                                                    •
                                                </Box>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </Typography>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        mb: 4,
                                        color: 'text.secondary',
                                        fontSize: { xs: '0.95rem', md: '1rem' },
                                        lineHeight: 1.6,
                                        maxWidth: '600px'
                                    }}
                                >
                                    {heroConfig.description.split('CS50').map((part, i, arr) => {
                                        if (i === arr.length - 1) {
                                            return part.split('CS2050').map((subPart, j, subArr) => {
                                                if (j === subArr.length - 1) return subPart;
                                                return (
                                                    <React.Fragment key={`cs2050-${j}`}>
                                                        {subPart}
                                                        <Box
                                                            component="a"
                                                            href={heroConfig.courseLinks.cs2050}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            sx={{
                                                                color: 'primary.main',
                                                                fontWeight: 600,
                                                                textDecoration: 'none',
                                                                borderBottom: '2px dotted',
                                                                borderColor: 'primary.main',
                                                                transition: 'all 0.2s ease',
                                                                '&:hover': {
                                                                    opacity: 0.8,
                                                                    borderBottom: '2px solid',
                                                                },
                                                            }}
                                                        >
                                                            CS2050
                                                        </Box>
                                                    </React.Fragment>
                                                );
                                            });
                                        }
                                        return (
                                            <React.Fragment key={`cs50-${i}`}>
                                                {part}
                                                <Box
                                                    component="a"
                                                    href={heroConfig.courseLinks.cs50}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    sx={{
                                                        color: 'primary.main',
                                                        fontWeight: 600,
                                                        textDecoration: 'none',
                                                        borderBottom: '2px dotted',
                                                        borderColor: 'primary.main',
                                                        transition: 'all 0.2s ease',
                                                        '&:hover': {
                                                            opacity: 0.8,
                                                            borderBottom: '2px solid',
                                                        },
                                                    }}
                                                >
                                                    CS50
                                                </Box>
                                            </React.Fragment>
                                        );
                                    })}
                                </Typography>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <Box sx={{ display: 'flex', gap: 2, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        href={heroConfig.buttons.primary.href}
                                        sx={{
                                            px: 4,
                                            py: 1.5,
                                            position: 'relative',
                                            overflow: 'hidden',
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)',
                                                transform: 'translateX(-100%)',
                                            },
                                            '&:hover::after': {
                                                transform: 'translateX(100%)',
                                                transition: 'transform 0.6s ease-in-out',
                                            },
                                        }}
                                    >
                                        {heroConfig.buttons.primary.text}
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        size="large"
                                        href={heroConfig.buttons.secondary.href}
                                        target="_blank"
                                        sx={{
                                            px: 4,
                                            py: 1.5,
                                        }}
                                    >
                                        {heroConfig.buttons.secondary.text}
                                    </Button>
                                </Box>
                            </motion.div>
                        </motion.div>
                    </Grid>

                    {!isMobile && (
                        <Grid item xs={12} md={5}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        width: '100%',
                                        height: '450px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: '20px',
                                        overflow: 'hidden',
                                        background: theme.palette.mode === 'dark' 
                                            ? 'radial-gradient(circle, rgba(66,66,74,0.5) 0%, rgba(25,25,25,0.5) 100%)'
                                            : 'radial-gradient(circle, rgba(238,242,255,0.5) 0%, rgba(215,222,254,0.5) 100%)',
                                    }}
                                >
                                    {/* Subject picture with no background */}
                                    <Box
                                        component="img"
                                        src={heroConfig.heroImage || 'https://source.unsplash.com/random/600x800?developer'}
                                        alt="Hero"
                                        sx={{
                                            width: '90%',
                                            height: '90%',
                                            objectFit: 'contain',
                                            filter: 'drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.15))',
                                            transform: 'scale(1.05)',
                                            transition: 'transform 0.3s ease-in-out',
                                            '&:hover': {
                                                transform: 'scale(1.08)',
                                            },
                                        }}
                                    />
                                </Box>
                            </motion.div>
                        </Grid>
                    )}
                </Grid>

                {/* Scroll down indicator - only shown when on hero section */}
                {showScrollIndicator && (
                    <Box
                        sx={{
                            position: 'fixed',
                            bottom: { xs: 30, md: 40 },
                            left: '50%',
                            transform: 'translateX(-50%)',
                            textAlign: 'center',
                            zIndex: 10,
                            width: 'auto',
                            opacity: 1,
                            transition: 'opacity 0.3s ease',
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5, duration: 0.5 }}
                        >
                            <Typography
                                variant="body2"
                                sx={{
                                    mb: 0.5,
                                    color: 'text.secondary',
                                    fontSize: '0.8rem',
                                    fontWeight: 500,
                                    textAlign: 'center',
                                    display: 'block',
                                    opacity: 0.8,
                                }}
                            >
                                Scroll down
                            </Typography>
                            <Link to="experience" smooth={true} duration={800} style={{ display: 'block' }}>
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                    style={{ display: 'flex', justifyContent: 'center' }}
                                >
                                    <Avatar
                                        sx={{
                                            bgcolor: 'background.paper',
                                            color: 'primary.main',
                                            width: 36,
                                            height: 36,
                                            boxShadow: 2,
                                            cursor: 'pointer',
                                            margin: '0 auto',
                                            border: '2px solid',
                                            borderColor: 'divider',
                                            '&:hover': {
                                                bgcolor: 'primary.main',
                                                color: 'white',
                                            },
                                        }}
                                    >
                                        <KeyboardArrowDownIcon />
                                    </Avatar>
                                </motion.div>
                            </Link>
                        </motion.div>
                    </Box>
                )}
            </Container>
        </Box>
    );
}

export default Hero;