
type Case = {
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
    title: 'Интернет-магазин вина wineexpress.ru',
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
    title: 'Одностраничный сайт ampilovs.ru',
    description: 'Персональный сайт программиста',
    techList: ['HTML', 'CSS', 'JavaScript', 'React'],
    linkList: [
      {
        name: 'GitHub',
        link: 'https://github.com/SergeiAmpilov/ampilovs-ru'
      },
    ]
  },



];