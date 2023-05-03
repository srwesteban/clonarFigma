import logo from './../assets/images/logo.svg';
import twitter from './../assets/images/twitter.svg';
import github from './../assets/images/github.svg';
import instagram from './../assets/images/instagram.svg';

export const HeaderData = {
  logo: {
    title: 'UCC',
    link: 'index.html',
    icon: logo,
  },
  nav: [
    {
      id: 1,
      title: 'Inicio',
      link: 'index.html',
    },
    {
      id: 2,
      title: 'Servicios',
      link: 'servicios.html',
    },
    {
      id: 3,
      title: 'Experiencia',
      link: 'experiencia.html',
    },
    {
      id: 4,
      title: 'Proyectos',
      link: 'proyectos.html',
    },
    {
      id: 5,
      title: 'Equipo',
      link: 'equipo.html',
    },
  ],
  social: [
    {
      id: 1,
      title: 'Twitter',
      link: 'twitter.html',
      icon: twitter,
    },
    {
      id: 2,
      title: 'GitHub',
      link: 'github.html',
      icon: github,
    },
    {
      id: 3,
      title: 'Instagram',
      link: 'instagram.html',
      icon: instagram,
    },
  ],
};

export const HeroData = {
  title: 'Las mejores experiencias en software',
  subTitle:
    'Nos aseguramos que cada desarrollo sea enfocado en las necesidades de los usuarios para brindar soluciones de alta calidad.',
  btnTextDownloadCv: 'Descargar CV',
  btnTextContact: 'Contactarnos',
};

export const ServiceData = {
  header: {
    title: 'Servicios',
    subTitle:
      'Cada uno de nuestros servicios tiene como foco principal las necesidades de nuestros usuarios.',
  },
  items: [
    {
      icon: '',
      title: '',
      subTitle: '',
      orientation: '',
    },
    {
      icon: '',
      title: '',
      subTitle: '',
      orientation: '',
    },
  ],
};
