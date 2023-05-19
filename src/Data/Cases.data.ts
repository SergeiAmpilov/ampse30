
export type Case = {
  index: number,
  img: string,
  title: string,
  description: string,
  techList: string[],
  linkList: {
    name: string,
    link: string
  }[]
  
};

export const CASES_DATA: Case[]  = [
  {
    index: 1,
    title: 'Интернет-магазин вина wineexpress.ru',
    img: 'webanner.jpg',
    description: 'Онлайн-винтрина с функцией заказа доставки в пункт выдачи',
    techList: ['PHP', 'Bitrix', 'JavaScript', 'jQuery'],
    linkList: [
      {
        name: 'Перейти на сайт',
        link: 'https://wineexpress.ru/'
      },
    ]
  },
  {
    index: 2,
    title: 'Одностраничный сайт ampilovs.ru',
    img: 'avatar.png',
    description: 'Персональный сайт программиста с портфолио проектов и контактами',
    techList: ['HTML', 'CSS', 'Typescript', 'React'],
    linkList: [
      {
        name: 'GitHub',
        link: 'https://github.com/SergeiAmpilov/ampse30'
      },
    ]
  },
  {
    index: 3,
    img: 'weathercli.png',
    title: 'CLI-утилита weather',
    description: 'Утилита командной строки получает прогноз погоды и выводит в консоль',
    techList: ['Node.js', 'CLI', 'API', 'Npm'],
    linkList: [
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
    index: 4,
    img: 'rutravel.jpg',
    title: 'Russian travel',
    description: 'Сайт посвящен путешествиям по Россия',
    techList: ['HTML', 'CSS', 'БЭМ', 'Grid', 'github'],
    linkList: [
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
    index: 5,
    img: 'how-to-learn.jpg',
    title: 'How to learn',
    description: 'Как научиться учиться. Учебный проект на тему методик обучения и эффективности',
    techList: ['HTML', 'CSS', 'БЭМ', 'github'],
    linkList: [
      {
        name: 'GitHub',
        link: 'https://github.com/SergeiAmpilov/how-to-learn'
      }
    ]
  },
];