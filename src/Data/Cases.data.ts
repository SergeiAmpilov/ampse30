
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
    techList: ['HTML', 'CSS', 'JavaScript', 'React'],
    linkList: [
      {
        name: 'GitHub',
        link: 'https://github.com/SergeiAmpilov/ampilovs-ru'
      },
    ]
  },
];