import telegram from '../images/telegram.svg';
import vkontakte from '../images/vk.svg';
import youtube from '../images/youtube.svg';
import FooterTg from '../images/footer-telegram.svg';
import FooterVk from '../images/footer-vk.svg';
import FooterYt from '../images/footer-youtube.svg';

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

export const footerSocialData = [
	{
		socialHref: 'https://t.me/dobroe_detstvo',
		socialIcon: FooterTg,
		socialName: 'Телеграм',
	},
	{
		socialHref: 'https://vk.com/izdatel_dobroe_detstvo',
		socialIcon: FooterVk,
		socialName: 'ВКонтакте',
	},
	{
		socialHref: 'https://www.youtube.com/channel/UCaiMuGF8LARjnHdsUrDRy9A',
		socialIcon: FooterYt,
		socialName: 'Ютуб',
	},
];

export const contactData = [
	{
		appeal: 'Дорогой Художник!',
		vacancyText:
			'Если ты умеешь создавать реалистичные, яркие образы своими рисунками. Если понимаешь, что рисунки в детских книгах — это еще один вариант обучения и здесь нет места негативу или неверным пропорциям. Если рисуешь от руки и готов учиться правилам безопасных детских иллюстрации. Обязательно пиши нам!',
		mailto: 'mailto:kontakt@dobroedetstvo.ru?subject=Сотрудничество с издательством: художник',
	},
	{
		appeal: 'Дорогой Писатель!',
		vacancyText:
			'Если ты знаешь особенности детской литературы и понимаешь важность традиционных семейных ценностей, которые мы храним и доносим до детей. Если умеешь писать легкие для восприятия и одновременно поучительные тексты для детей от трёх до семи лет. Обязательно пиши нам!',
		mailto: 'mailto:kontakt@dobroedetstvo.ru?subject=Сотрудничество с издательством: писатель',
	},
];
