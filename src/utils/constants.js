import telegram from '../images/telegram.svg';
import vkontakte from '../images/vk.svg';
import youtube from '../images/youtube.svg';

export const headerNavigationData = [
  { linkName: 'Книги', linkHref: '/books', isHashLink: false },
  { linkName: 'Видеоконтент', linkHref: '/#video', isHashLink: true },
  { linkName: 'Контакты', linkHref: '/contacts', isHashLink: false },
];

export const menuNavigationData = [
  { linkName: 'Главная', linkHref: '/', isHashLink: false },
  { linkName: 'Книги', linkHref: '/books', isHashLink: false },
  { linkName: 'Видеоконтент', linkHref: '/#video', isHashLink: true },
  { linkName: 'Контакты', linkHref: '/contacts', isHashLink: false },
];

export const headerSocialData = [
  {
    socialHref: 'https://t.me/dobroe_detstvo',
    socialIcon: telegram,
    socialName: 'Телеграм',
    isYoutube: false,
  },
  {
    socialHref: 'https://vk.com/izdatel_dobroe_detstvo',
    socialIcon: vkontakte,
    socialName: 'ВКонтакте',
    isYoutube: false,
  },
  {
    socialHref: 'https://www.youtube.com/channel/UCaiMuGF8LARjnHdsUrDRy9A',
    socialIcon: youtube,
    socialName: 'Ютуб',
    isYoutube: true,
  },
];

export const menuSocialData = [
  {
    socialHref: 'https://t.me/dobroe_detstvo',
    socialIcon: telegram,
    socialName: 'Телеграм',
  },
  {
    socialHref: 'https://vk.com/izdatel_dobroe_detstvo',
    socialIcon: vkontakte,
    socialName: 'ВКонтакте',
  },
  {
    socialHref: 'https://www.youtube.com/channel/UCaiMuGF8LARjnHdsUrDRy9A',
    socialIcon: youtube,
    socialName: 'Ютуб',
  },
];
