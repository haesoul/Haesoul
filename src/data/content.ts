export type Lang = 'ru' | 'uz' | 'en';
export const LANGS: Lang[] = ['ru', 'uz', 'en'];
export const LANG_NAME: Record<Lang, string> = { ru: 'Русский', uz: "O'zbekcha", en: 'English' };

export const profile = {
  name: 'Kamalov Akmalbek',
  tgUrl: 'https://t.me/haessoull',
  tgHandle: '@haessoull',
  ghUrl: 'https://github.com/haesoul',
  ghHandle: '@haesoul',
};

export const stack = ['Python', 'Django', 'TypeScript', 'React', 'React Native', 'Telegram Bot API'];
export const tones = ['from-blue-600/35', 'from-sky-500/25', 'from-indigo-600/35'];

const ru = {
  meta: {
    title: 'Камалов Акмалбек — разработчик сайтов, Telegram-ботов и приложений | Каракалпакстан, Узбекистан',
    desc: 'Делаю сайты, Telegram-боты, Mini Apps и мобильные приложения для малого бизнеса в Узбекистане и Каракалпакстане. Python, Django, React, React Native.',
  },
  nav: { services: 'Услуги', work: 'Работы', contact: 'Контакты' },
  hero: {
    title: 'Сайты, Telegram-боты и приложения для бизнеса в Узбекистане',
    lead: 'Помогаю кафе, магазинам и сервисам принимать заказы и находить клиентов онлайн. Работаю на русском, узбекском и английском.',
    cta: 'Написать в Telegram',
    more: 'Смотреть работы',
    caption: 'Попробуйте сами: демо бота для кофейни.',
  },
  services: {
    title: 'Что я делаю',
    items: [
      { t: 'Telegram-боты и Mini Apps', d: 'Заказы, записи и каталог прямо в Telegram, где клиенты и так бывают каждый день.' },
      { t: 'Сайты и лендинги', d: 'Быстрая страница, которую находят в Google и Яндексе, с кнопкой на ваш Telegram.' },
      { t: 'Backend и админ-панели', d: 'Django и API: заказы, клиенты и товары в одном месте, а не в тетради.' },
      { t: 'Мобильные приложения', d: 'React Native для iOS и Android, в том числе с работой без интернета.' },
    ],
  },
  work: {
    title: 'Работы',
    items: [
      { name: 'Платформа для спортивных клубов', text: 'Система управления клубами. Сделал фронтенд для клиента.' },
      { name: 'Приложение для оценок', text: 'Мобильное приложение для оценивания и рейтинга, все данные хранятся на устройстве.' },
      { name: 'Бот для заказа кофе', text: 'Демо заказа для небольшой кофейни. Попробуйте в начале страницы.' },
    ],
    stacks: ['Next.js, TypeScript', 'React Native, Realm', 'Telegram, TypeScript'],
  },
  contact: {
    title: 'Есть задача? Напишите.',
    text: 'Расскажите, что нужно и к какому сроку. Отвечу с ценой и планом.',
  },
  demo: {
    aria: 'Интерактивное демо бота для заказа кофе',
    sub: 'бот для заказов',
    hi: 'Привет! Что закажете?',
    total: 'Итого',
    ask: 'Подтвердить заказ?',
    confirm: 'Подтвердить',
    cancel: 'Отменить заказ',
    remove: 'Убрать одну штуку',
    ok: 'Заказ принят. Будет готов через 10 минут.',
    again: 'Новый заказ',
    sum: 'сум',
    items: { latte: 'Латте', flat: 'Флэт уайт', cake: 'Чизкейк' } as Record<string, string>,
  },
  footer: 'Каракалпакстан, Узбекистан',
};
export type Dict = typeof ru;

const uz: Dict = {
  meta: {
    title: "Kamalov Akmalbek — sayt, Telegram bot va ilovalar yaratuvchi dasturchi | Qoraqalpog'iston, O'zbekiston",
    desc: "O'zbekiston va Qoraqalpog'istondagi kichik biznes uchun sayt, Telegram bot, Mini App va mobil ilovalar yarataman. Python, Django, React, React Native.",
  },
  nav: { services: 'Xizmatlar', work: 'Ishlar', contact: 'Aloqa' },
  hero: {
    title: "O'zbekistondagi biznes uchun sayt, Telegram bot va ilovalar",
    lead: "Kafe, do'kon va xizmatlarga onlayn buyurtma qabul qilish va mijoz topishda yordam beraman. O'zbek, rus va ingliz tillarida ishlayman.",
    cta: 'Telegramda yozish',
    more: "Ishlarni ko'rish",
    caption: "O'zingiz sinab ko'ring: qahvaxona boti demosi.",
  },
  services: {
    title: 'Nima qilaman',
    items: [
      { t: 'Telegram bot va Mini App', d: "Buyurtma, yozilish va katalog Telegramning o'zida, mijozlar har kuni shu yerda bo'ladi." },
      { t: 'Sayt va landing', d: "Google va Yandexda topiladigan tez sahifa, Telegramingizga o'tadigan tugma bilan." },
      { t: 'Backend va admin panel', d: "Django va API: buyurtma, mijoz va tovarlar daftarda emas, bir joyda." },
      { t: 'Mobil ilovalar', d: "iOS va Android uchun React Native, internetsiz ishlaydigan ilovalar ham." },
    ],
  },
  work: {
    title: 'Ishlar',
    items: [
      { name: 'Sport klublari platformasi', text: 'Klublarni boshqarish tizimi. Mijoz uchun frontendni yozdim.' },
      { name: "Baholash ilovasi", text: "Baholash va reyting uchun mobil ilova, barcha ma'lumot qurilmada saqlanadi." },
      { name: 'Qahva buyurtma boti', text: "Kichik qahvaxona uchun buyurtma demosi. Sahifa boshida sinab ko'ring." },
    ],
    stacks: ['Next.js, TypeScript', 'React Native, Realm', 'Telegram, TypeScript'],
  },
  contact: {
    title: 'Vazifa bormi? Yozing.',
    text: "Nima kerakligini va qachongacha ekanini ayting. Narx va reja bilan javob beraman.",
  },
  demo: {
    aria: 'Qahva buyurtma botining interaktiv demosi',
    sub: 'buyurtma boti',
    hi: 'Salom! Nima buyurtma qilasiz?',
    total: 'Jami',
    ask: 'Buyurtmani tasdiqlaysizmi?',
    confirm: 'Tasdiqlash',
    cancel: 'Buyurtmani bekor qilish',
    remove: 'Bittasini olib tashlash',
    ok: 'Buyurtma qabul qilindi. 10 daqiqada tayyor bo\'ladi.',
    again: 'Yangi buyurtma',
    sum: "so'm",
    items: { latte: 'Latte', flat: 'Flat white', cake: 'Cheesecake' },
  },
  footer: "Qoraqalpog'iston, O'zbekiston",
};

const en: Dict = {
  meta: {
    title: 'Kamalov Akmalbek — developer of websites, Telegram bots and apps | Karakalpakstan, Uzbekistan',
    desc: 'I build websites, Telegram bots, Mini Apps and mobile apps for small businesses in Uzbekistan and Karakalpakstan. Python, Django, React, React Native.',
  },
  nav: { services: 'Services', work: 'Work', contact: 'Contact' },
  hero: {
    title: 'Websites, Telegram bots and apps for businesses in Uzbekistan',
    lead: 'I help cafes, shops and services take orders and find customers online. I work in Russian, Uzbek and English.',
    cta: 'Message me on Telegram',
    more: 'See my work',
    caption: 'Try it yourself: a demo bot for a coffee shop.',
  },
  services: {
    title: 'What I do',
    items: [
      { t: 'Telegram bots and Mini Apps', d: 'Orders, bookings and catalogs inside the app your customers already open every day.' },
      { t: 'Websites and landing pages', d: 'One fast page that shows up in Google and Yandex, with a button to your Telegram.' },
      { t: 'Backend and admin panels', d: 'Django and APIs: orders, customers and products in one place instead of a notebook.' },
      { t: 'Mobile apps', d: 'React Native apps for iOS and Android, including ones that work offline.' },
    ],
  },
  work: {
    title: 'Work',
    items: [
      { name: 'Sports club platform', text: 'Management platform for sports clubs. I built the frontend for a client.' },
      { name: 'Grading app', text: 'Mobile app for grading and ranking that keeps all data on the device.' },
      { name: 'Coffee order bot', text: 'Demo of an ordering flow for a small cafe. Try it at the top of this page.' },
    ],
    stacks: ['Next.js, TypeScript', 'React Native, Realm', 'Telegram, TypeScript'],
  },
  contact: {
    title: 'Have a task? Write to me.',
    text: 'Tell me what you need and by when. I will reply with a price and a plan.',
  },
  demo: {
    aria: 'Interactive demo of a coffee order bot',
    sub: 'order bot',
    hi: 'Hi! What would you like?',
    total: 'Total',
    ask: 'Confirm the order?',
    confirm: 'Confirm',
    cancel: 'Cancel order',
    remove: 'Remove one',
    ok: 'Order accepted. It will be ready in 10 minutes.',
    again: 'New order',
    sum: 'sum',
    items: { latte: 'Latte', flat: 'Flat white', cake: 'Cheesecake' },
  },
  footer: 'Karakalpakstan, Uzbekistan',
};

export const dict: Record<Lang, Dict> = { ru, uz, en };
