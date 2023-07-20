import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  graphql
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  }
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Onesware',
    icon: '',
    iconBg: '#333333',
    date: 'Sep 2007 - jun 2010',
  },
  {
    title: 'Front-End Developer',
    company_name: 'PCN',
    icon: '',
    iconBg: '#333333',
    date: 'jun 2010 - Feb 2016',
  },
  {
    title: 'Front-End Developer',
    company_name: 'DrJart',
    icon: '',
    iconBg: '#333333',
    date: 'Mar 2016 - jul 2023',
  },
  {
    title: 'Front-End Developer',
    company_name: '',
    icon: '',
    iconBg: '#333333',
    date: 'Sep 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: '',
    description: '',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: '',
    repo: '',
    demo: '',
  },
  {
    id: 'project-2',
    name: '',
    description:
      '',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: '',
    repo: '',
    demo: '',
  },
  {
    id: 'project-3',
    name: '',
    description: '',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: '',
    repo: '',
    demo: '',
  },
];

export { services, technologies, experiences, projects };
