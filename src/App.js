import React, { useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline, createTheme, responsiveFontSizes } from '@mui/material';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

const getTheme = (mode) => {
    let theme = createTheme({
        palette: {
            mode,
            primary: {
                main: '#4361EE',
                light: '#4CC9F0',
                dark: '#3A0CA3',
                contrastText: '#FFFFFF',
            },
            secondary: {
                main: '#F72585',
                light: '#FF9E00',
                dark: '#7209B7',
                contrastText: '#FFFFFF',
            },
            background: {
                default: mode === 'light' ? '#F8F9FA' : '#121212',
                paper: mode === 'light' ? '#FFFFFF' : '#1E1E1E',
                accent: mode === 'light' ? '#F0F7FF' : '#2D2D2D',
            },
            text: {
                primary: mode === 'light' ? '#2D3748' : '#E2E8F0',
                secondary: mode === 'light' ? '#4A5568' : '#A0AEC0',
            },
            divider: mode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)',
        },
        typography: {
            fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
            h1: {
                fontSize: '4rem',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                lineHeight: 1.2,
            },
            h2: {
                fontSize: '2.75rem',
                fontWeight: 700,
                letterSpacing: '-0.015em',
                lineHeight: 1.3,
            },
            h3: {
                fontSize: '2.25rem',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                lineHeight: 1.4,
            },
            h4: {
                fontSize: '1.75rem',
                fontWeight: 600,
                letterSpacing: '-0.005em',
            },
            h5: {
                fontSize: '1.5rem',
                fontWeight: 500,
            },
            h6: {
                fontSize: '1.25rem',
                fontWeight: 500,
            },
            body1: {
                fontSize: '1.125rem',
                lineHeight: 1.6,
            },
            body2: {
                fontSize: '1rem',
                lineHeight: 1.6,
            },
            button: {
                fontWeight: 600,
            },
        },
        shape: {
            borderRadius: 12,
        },
        shadows: [
            'none',
            '0px 2px 4px rgba(0, 0, 0, 0.05)',
            '0px 4px 8px rgba(0, 0, 0, 0.08)',
            '0px 8px 16px rgba(0, 0, 0, 0.1)',
            '0px 12px 24px rgba(0, 0, 0, 0.12)',
            ...Array(20).fill('none'),
        ],
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                        fontWeight: 600,
                        padding: '10px 24px',
                        boxShadow: 'none',
                        '&:hover': {
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                        },
                    },
                    contained: {
                        '&:hover': {
                            transform: 'translateY(-2px)',
                            transition: 'transform 0.2s ease-in-out',
                        },
                    },
                    outlined: {
                        borderWidth: '2px',
                        '&:hover': {
                            borderWidth: '2px',
                        },
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        borderRadius: 12,
                        overflow: 'hidden',
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        borderRadius: 12,
                    },
                },
            },
            MuiChip: {
                styleOverrides: {
                    root: {
                        borderRadius: 8,
                        fontWeight: 500,
                    },
                },
            },
            MuiContainer: {
                styleOverrides: {
                    root: {
                        paddingLeft: 24,
                        paddingRight: 24,
                        '@media (min-width: 600px)': {
                            paddingLeft: 32,
                            paddingRight: 32,
                        },
                    },
                },
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
                    },
                },
            },
        },
    });

    theme = responsiveFontSizes(theme);
    return theme;
};

function App() {
    // Initialize with localStorage value or light mode as default
    const [mode, setMode] = useState(() => {
        try {
            const savedMode = localStorage.getItem('themeMode');
            return savedMode ? savedMode : 'light';
        } catch (error) {
            console.error('Error accessing localStorage:', error);
            return 'light';
        }
    });
    
    const theme = React.useMemo(() => getTheme(mode), [mode]);

    const toggleColorMode = () => {
        const newMode = mode === 'light' ? 'dark' : 'light';
        setMode(newMode);
        
        // Save to localStorage immediately when toggled
        try {
            localStorage.setItem('themeMode', newMode);
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Navbar toggleColorMode={toggleColorMode} currentMode={mode} />
                <Hero />
                <Experience />
                <Projects />
                <Skills />
                <Contact />
                <ScrollToTop />
            </motion.div>
        </ThemeProvider>
    );
}

export default App;
