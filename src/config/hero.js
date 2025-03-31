export const courseLinks = {
    cs50: 'https://cs50.harvard.edu/college/2023/fall/',
    cs2050: 'https://sites.google.com/g.harvard.edu/cs-2050/syllabus'
};

export const heroConfig = {
    social: {
        linkedin: 'https://linkedin.com/in/sam-mucyo',
        github: 'https://github.com/Sam-Mucyo',
        email: 'sammucyo@college.harvard.edu',
        phone: '+1234567890',
        whatsapp: '+1234567890'
    },
    name: 'Sam Mucyo',
    title: "Harvard '25",
    roles: [],
    description: "Harvard Computer Science senior who tackles complex problems and delivers results. Proven ability to adapt and contribute at Amazon, while strengthening leadership as a teaching fellow for CS50 and CS2050. Excited to bring this proactive, adaptable approach to any team seeking innovative problem solvers.",
    heroImage: require('../img/hero.png'),
    courseLinks: courseLinks,
    buttons: {
        primary: {
            text: 'Get in Touch',
            href: '#contact'
        },
        secondary: {
            text: 'View GitHub',
            href: 'https://github.com/Sam-Mucyo'
        }
    },
    focusAreas: [
        {
            icon: 'code',
            title: 'Software Engineering'
        },
        {
            icon: 'storage',
            title: 'HPC & Systems'
        },
        {
            icon: 'school',
            title: 'Teaching'
        }
    ]
};
