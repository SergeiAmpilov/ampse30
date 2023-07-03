
export type Case = {
  index: number,
  img: string,
  title: string,
  description: string,
  techs: string[],
  links: {
    name: string,
    link: string
  }[]
  
};

export const CASES_DATA: Case[]  = [
  {
    index: 10,
    title: 'Социальная сеть Movie Explorer',
    img: 'movie.png',
    description: 'Социальная сеть для поиска фильмов из публичного каталога. После регистрации пользователи могут добалять фильмы в избранное! Также, есть статическая страница-портфолио.',
    techs: ['HTML', 'CSS', 'Javascript', 'React', 'Node.js', 'Express.js', 'MongoDB'],
    links: [
      {
        name: 'Go LIVE',
        link: 'https://movie.ampilovs.ru'
      },
      {
        name: 'Api',
        link: 'https://api.movie.ampilovs.ru'
      },
      {
        name: 'GitHub Frontend',
        link: 'https://github.com/SergeiAmpilov/movies-explorer-frontend/tree/level-31'
      },
      {
        name: 'GitHub Api backend',
        link: 'https://github.com/SergeiAmpilov/movies-explorer-api'
      },
    ]
  },
  {
    index: 11,
    title: 'Социальная сеть Mesto',
    img: 'mesto.png',
    description: 'Социальная сеть для обмена фотографиями из путешествий с функцией регистрации и авторизации пользователей, размещением постов и возможностью ставить лайки избранным постам!',
    techs: ['HTML', 'CSS', 'Javascript', 'React', 'Node.js', 'Express.js', 'MongoDB'],
    links: [
      {
        name: 'Go LIVE',
        link: 'https://mesto.ampilovs.ru'
      },
      {
        name: 'Api',
        link: 'https://api.mesto.ampilovs.ru'
      },
      {
        name: 'GitHub',
        link: 'https://github.com/SergeiAmpilov/react-mesto-api-full'
      },
    ]
  },
  {
    index: 12,
    title: 'Одностраничный сайт ampilovs.ru',
    img: 'avatar.png',
    description: 'Персональный сайт программиста с портфолио проектов и контактами',
    techs: ['HTML', 'CSS', 'Typescript', 'React'],
    links: [
      {
        name: 'GitHub',
        link: 'https://github.com/SergeiAmpilov/ampse30'
      },
    ]
  },
  {
    index: 13,
    img: 'weathercli.png',
    title: 'CLI-утилита weather',
    description: 'Утилита командной строки получает прогноз погоды и выводит в консоль',
    techs: ['Node.js', 'CLI', 'API', 'Npm'],
    links: [
      {
        name: 'GitHub',
        link: 'https://github.com/SergeiAmpilov/weather-cli'
      },
      {
        name: 'go npmjs.com',
        link: 'https://www.npmjs.com/package/weather-cli-amp'
      },
    ]
  },
  {
    index: 14,
    img: 'rutravel.jpg',
    title: 'Russian travel',
    description: 'Сайт посвящен путешествиям по Россия',
    techs: ['HTML', 'CSS', 'БЭМ', 'Grid', 'github'],
    links: [
      {
        name: 'GitHub',
        link: 'https://github.com/SergeiAmpilov/russian-travel'
      },
      {
        name: 'Github Pages',
        link: 'https://sergeiampilov.github.io/russian-travel/'
      },
    ]
  },

  {
    index: 15,
    img: 'how-to-learn.jpg',
    title: 'How to learn',
    description: 'Как научиться учиться. Учебный проект на тему методик обучения и эффективности',
    techs: ['HTML', 'CSS', 'БЭМ', 'github'],
    links: [
      {
        name: 'GitHub',
        link: 'https://github.com/SergeiAmpilov/how-to-learn'
      }
    ]
  },
];