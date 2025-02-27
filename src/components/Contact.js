import React from 'react';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { contactConfig } from '../config/contact';

const iconMap = {
  email: EmailIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon
};

function Contact() {
  return (
    <Box
      id="contact"
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
          <Typography variant="h2" color="primary" gutterBottom>
            {contactConfig.title}
          </Typography>
          <Typography variant="body1" paragraph sx={{ maxWidth: 600, mb: 4 }}>
            {contactConfig.description}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {Object.entries(contactConfig.links).map(([key, link]) => {
                  const Icon = iconMap[key];
                  return (
                    <Button
                      key={key}
                      variant={key === 'email' ? 'contained' : 'outlined'}
                      size="large"
                      startIcon={<Icon />}
                      href={link.href}
                      target={key !== 'email' ? '_blank' : undefined}
                      sx={{ borderRadius: 2 }}
                    >
                      {link.text}
                    </Button>
                  );
                })}
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
      <Box sx={{ mt: 8, py: 3, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            {contactConfig.footer.copyright.replace('{year}', new Date().getFullYear())}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default Contact;
