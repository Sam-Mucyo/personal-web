import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { heroConfig } from '../config/hero';

function Hero() {
    return (
        <Box
            id="home"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                py: 8
            }}
        >
            <Container maxWidth="md">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Typography
                        variant="h2"
                        gutterBottom
                        sx={{
                            fontWeight: 700,
                            color: 'text.primary'
                        }}
                    >
                        {heroConfig.name}
                    </Typography>

                    {/* <Typography
                        variant="h4"
                        sx={{
                            mb: 2,
                            color: 'text.secondary',
                            fontWeight: 500
                        }}
                    >
                        {heroConfig.title}
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            mb: 3,
                            color: 'text.secondary',
                            fontWeight: 400
                        }}
                    >
                        {heroConfig.roles.join(' • ')}
                    </Typography> */}

                    <Typography
                        variant="body1"
                        sx={{
                            mb: 4,
                            color: 'text.secondary',
                            fontSize: '1.1rem',
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
                                                    color: 'inherit',
                                                    textDecoration: 'none',
                                                    borderBottom: '1px dotted',
                                                    transition: 'all 0.2s ease',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                        borderBottom: '1px solid',
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
                                            color: 'inherit',
                                            textDecoration: 'none',
                                            borderBottom: '1px dotted',
                                            transition: 'all 0.2s ease',
                                            '&:hover': {
                                                color: 'primary.main',
                                                borderBottom: '1px solid',
                                            },
                                        }}
                                    >
                                        CS50
                                    </Box>
                                </React.Fragment>
                            );
                        })}
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button
                            variant="contained"
                            size="large"
                            href={heroConfig.buttons.primary.href}
                            sx={{
                                borderRadius: 2,
                                px: 4,
                                py: 1.5
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
                                borderRadius: 2,
                                px: 4,
                                py: 1.5
                            }}
                        >
                            {heroConfig.buttons.secondary.text}
                        </Button>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
}

export default Hero;