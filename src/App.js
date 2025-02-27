import React from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#2C3E50',
        },
        secondary: {
            main: '#3498DB',
        },
        background: {
            default: '#FFFFFF',
            paper: '#F8F9FA',
        },
    },
    typography: {
        fontFamily: 'Inter, sans-serif',
        h1: {
            fontSize: '3.5rem',
            fontWeight: 700,
        },
        h2: {
            fontSize: '2.5rem',
            fontWeight: 600,
        },
        h3: {
            fontSize: '2rem',
            fontWeight: 500,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 8,
                },
            },
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Navbar />
                <Hero />
                <Experience />
                <Projects />
                <Skills />
                <Contact />
            </motion.div>
        </ThemeProvider>
  );
}

export default App;
