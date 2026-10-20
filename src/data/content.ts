export type Lang = 'ru' | 'uz' | 'en';
export const LANGS: Lang[] = ['ru', 'uz', 'en'];
export const LANG_NAME: Record<Lang, string> = { ru: 'Русский', uz: "O'zbekcha", en: 'English' };

export const profile = {
  name: 'Kamalov Akmalbek',
  tgUrl: 'https://t.me/haesoull',
  tgHandle: '@haesoull',
  ghUrl: 'https://github.com/haesoul',
  ghHandle: '@haesoul',
};

export const stack = ['Python', 'Django', 'TypeScript', 'React', 'React Native', 'Telegram Bot API'];

const ru = {
  meta: {
    title: 'Камалов Акмалбек — сайты, Telegram-боты и приложения для бизнеса',
    desc: 'Сайты, Telegram-боты, Mini Apps и мобильные приложения для малого бизнеса. Примеры, ориентировочные цены и интерактивные демо на русском, узбекском и английском.',
  },
  nav: { services: 'Решения', work: 'Проекты', demos: 'Демо', prices: 'Цены', contact: 'Контакт' },
  hero: {
    kicker: 'РАЗРАБОТКА ДЛЯ МАЛОГО БИЗНЕСА · UZ / RU / EN',
    title: 'Меньше рутины. Больше клиентов онлайн.',
    lead: 'Создаю сайты, Telegram-боты и приложения, которые помогают принимать заказы, записывать клиентов и понятнее представлять ваш бизнес в интернете.',
    cta: 'Обсудить задачу',
    more: 'Посмотреть демо',
    caption: 'Интерактивные концепты ниже можно попробовать прямо на сайте.',
    trust: ['Сначала согласуем объём', 'Цена до начала работы', 'Без сложных терминов'],
    preview: {
      badge: 'КОНЦЕПТ ИНТЕРФЕЙСА',
      title: 'Рабочий день — под контролем',
      subtitle: 'Пример панели для бизнеса',
      order: 'Новый заказ',
      orderValue: 'Кофе · 2 позиции',
      booking: 'Новая запись',
      bookingValue: 'Сегодня · 15:30',
      status: 'Интерфейс готов к просмотру',
      statusValue: 'Пример, не настоящая статистика',
      week: 'Активность за неделю',
    },
  },
  services: {
    kicker: 'ЧЕМ МОГУ ПОМОЧЬ',
    title: 'Решение начинается с вашей задачи',
    lead: 'Не нужно разбираться в технологиях. Достаточно объяснить, где сейчас теряются время, заявки или клиенты.',
    items: [
      { n: '01', t: 'Заказы в Telegram', d: 'Меню, корзина, ответы на частые вопросы и передача заявки владельцу — вместо бесконечной переписки вручную.', tag: 'Для кафе и магазинов' },
      { n: '02', t: 'Сайт, который объясняет', d: 'Услуги, цены, контакты и понятный следующий шаг. Клиент быстро понимает, что вы предлагаете и как связаться.', tag: 'Для услуг и специалистов' },
      { n: '03', t: 'Онлайн-запись', d: 'Выбор услуги, специалиста и времени. Меньше сообщений в духе «а когда свободно?» — больше порядка в расписании.', tag: 'Для салонов и студий' },
      { n: '04', t: 'Панель управления', d: 'Собираем нужные данные в одном интерфейсе, чтобы не искать клиентов, заказы или записи по разным таблицам.', tag: 'Для процессов внутри бизнеса' },
    ],
  },
  work: {
    kicker: 'ПРИМЕРЫ И ОПЫТ',
    title: 'Что именно сделано',
    lead: 'Здесь важен не список модных технологий, а роль в проекте, задача и то, что можно проверить. Демо отделены от законченных клиентских работ.',
    labels: { problem: 'Задача', role: 'Моя часть', stack: 'Технологии', client: 'Проект для клиента', app: 'Мобильное приложение', demo: 'Интерактивное демо', concept: 'Концепт интерфейса' },
    items: [
      {
        name: 'Платформа для спортивных клубов',
        text: 'Пользовательский интерфейс платформы для управления спортивными клубами.',
        problem: 'Сложный сервис должен быть понятным администратору, а основные разделы — быстро находиться.',
        role: 'Разработал frontend по заказу клиента. Этот кейс показывает именно мою часть работы, а не заявляет о самостоятельно созданном backend.',
        status: 'client',
        stack: ['Next.js', 'TypeScript'],
      },
      {
        name: 'Приложение для оценок',
        text: 'Мобильный интерфейс, в котором можно выставлять оценки и формировать рейтинг.',
        problem: 'Нужен простой сценарий оценивания, который не зависит от постоянного подключения к интернету.',
        role: 'Данные сохраняются на устройстве. Пример ниже — визуальная демонстрация интерфейса, не публикация приложения в магазине.',
        status: 'app',
        stack: ['React Native', 'Realm'],
      },
      {
        name: 'Заказ кофе в Telegram',
        text: 'Сценарий заказа для кофейни: выбрать позиции, изменить количество и увидеть итоговую сумму.',
        problem: 'Покупателю проще самостоятельно собрать заказ, чем уточнять каждую позицию в чате.',
        role: 'На этой странице доступна браузерная демоверсия. Она не подключена к Telegram и не отправляет настоящий заказ.',
        status: 'demo',
        stack: ['React', 'TypeScript', 'Telegram Bot API'],
      },
    ],
  },
  demos: {
    kicker: 'ПОПРОБУЙТЕ САМИ',
    title: 'Не картинка — интерактивное демо',
    lead: 'Переключайте сценарии, выбирайте позиции и нажимайте кнопки. Так можно оценить логику до заказа похожего решения.',
    tabs: [
      { id: 'coffee', label: 'Заказ кофе', marker: '01' },
      { id: 'salon', label: 'Запись в салон', marker: '02' },
      { id: 'website', label: 'Сайт услуг', marker: '03' },
    ],
    disclaimer: 'Демо работает только в браузере. Заказы и записи не отправляются владельцу; подключение сервера, Telegram и уведомлений согласуется отдельно.',
    coffee: {
      aria: 'Интерактивное демо заказа кофе',
      eyebrow: 'БРАУЗЕРНЫЙ КОНЦЕПТ',
      brand: 'ARAL COFFEE',
      sub: 'Меню · заказ навынос',
      online: 'демо-режим',
      hi: 'Сәлем! Что приготовим для вас?',
      total: 'Итого',
      ask: 'Проверим заказ?',
      confirm: 'Показать подтверждение',
      cancel: 'Очистить корзину',
      remove: 'Убрать одну штуку',
      okTitle: 'Выглядит отлично!',
      ok: 'Это только демонстрация: заказ не отправлен в кофейню.',
      again: 'Собрать новый заказ',
      sum: 'сум',
      add: 'Добавить',
      items: { latte: 'Латте', flat: 'Флэт уайт', cake: 'Чизкейк' } as Record<string, string>,
      details: { latte: 'Нежный эспрессо и молоко', flat: 'Крепкий кофе с микропеной', cake: 'Сливочный десерт' } as Record<string, string>,
    },
    salon: {
      aria: 'Интерактивное демо онлайн-записи в салон',
      eyebrow: 'ЗАПИСЬ БЕЗ ПЕРЕПИСКИ',
      brand: 'FORMA STUDIO',
      subtitle: 'Выберите услугу и удобное время',
      service: '1. Услуга',
      specialist: '2. Специалист',
      time: '3. Свободное время',
      day: 'ЧЕТВЕРГ · ПРИМЕР РАСПИСАНИЯ',
      confirm: 'Проверить запись',
      successTitle: 'Сценарий пройден',
      success: 'В демо запись отмечена как готовая, но салон не получил уведомление.',
      reset: 'Изменить запись',
      note: 'Цены и расписание ниже — демонстрационные.',
      sum: 'сум',
      services: [
        { id: 'cut', name: 'Стрижка', price: 70000, duration: '45 мин' },
        { id: 'style', name: 'Стрижка + укладка', price: 110000, duration: '60 мин' },
        { id: 'beard', name: 'Оформление бороды', price: 40000, duration: '25 мин' },
      ],
      specialists: [
        { id: 'ali', name: 'Али', role: 'Стилист' },
        { id: 'timur', name: 'Тимур', role: 'Барбер' },
      ],
      slots: ['10:30', '11:30', '13:00', '15:30', '17:00'],
    },
    website: {
      aria: 'Демонстрация сайта местного сервиса',
      eyebrow: 'САЙТ-ВИЗИТКА',
      browser: 'Пример страницы локального сервиса',
      brand: 'NOVA AUTO',
      navServices: 'Услуги',
      navPrices: 'Цены',
      navAbout: 'Преимущества',
      heroTag: 'УХОД ЗА АВТОМОБИЛЕМ',
      title: 'Чистый автомобиль. Спокойный день.',
      text: 'Понятный перечень услуг, честные ориентировочные цены и быстрый переход к записи.',
      action: 'Посмотреть цены',
      contact: 'Обсудить похожий сайт',
      listTitle: 'Популярные услуги',
      items: [
        { name: 'Комплексная мойка', price: 'от 60 000 сум' },
        { name: 'Чистка салона', price: 'от 120 000 сум' },
        { name: 'Полировка кузова', price: 'от 250 000 сум' },
      ],
      footer: 'Концепт страницы · Название и цены вымышлены для примера',
      hidePrices: 'Свернуть цены',
      showPrices: 'Показать цены',
    },
  },
  prices: {
    kicker: 'ПОНЯТНЫЙ БЮДЖЕТ',
    title: 'Ориентиры по стоимости',
    lead: 'Можно заранее понять порядок суммы — точная цена не берётся с потолка и не назначается автоматически.',
    duration: 'Ориентировочный срок',
    noteTitle: 'Почему цена может измениться?',
    note: 'Итоговая стоимость зависит от количества экранов и функций, дизайна, интеграций, уведомлений, объёма данных и срочности. После короткого обсуждения я уточню объём, назову финальную цену и начну работу только после согласования.',
    footnote: 'Диапазоны — предварительный ориентир для небольших проектов, а не публичная оферта. Срок отсчитывается после согласования задачи и получения материалов.',
    items: [
      { name: 'Сайт-визитка / лендинг', range: '$40–120', time: '2–5 дней', detail: 'Одна страница, услуги, цены, контакты и кнопки связи.' },
      { name: 'Telegram-бот', range: '$50–180', time: '3–7 дней', detail: 'Меню, FAQ, форма заявки или простой сценарий заказа.' },
      { name: 'Telegram Mini App', range: '$80–250', time: '5–10 дней', detail: 'Каталог, простая корзина или интерфейс онлайн-записи.' },
      { name: 'Панель управления / API', range: '$100–300+', time: 'от 5 дней', detail: 'Работа с данными, роли пользователей и интеграции по задаче.' },
      { name: 'Мобильный прототип', range: '$150–400+', time: 'от 2 недель', detail: 'Базовые экраны и локальная логика для Android / iOS.' },
    ],
  },
  process: {
    kicker: 'БЕЗ НЕОЖИДАННЫХ СЮРПРИЗОВ',
    title: 'Как проходит работа',
    items: [
      { n: '01', title: 'Обсуждаем задачу', text: 'Вы описываете цель, сроки и обязательные функции. Я задаю вопросы и оцениваю объём.' },
      { n: '02', title: 'Показываю черновик', text: 'Согласуем структуру и внешний вид до того, как вкладываться в детали.' },
      { n: '03', title: 'Утверждаем цену и запускаем', text: 'Фиксируем состав работ, стоимость и сроки. Дополнительные функции отдельно согласуем.' },
    ],
  },
  faq: {
    title: 'Частые вопросы',
    items: [
      { q: 'Что нужно подготовить?', a: 'Достаточно описать задачу и цель. Если есть логотип, фотографии, тексты или примеры сайтов, они помогут; если нет — сначала согласуем структуру.' },
      { q: 'Можно ли попросить правки?', a: 'Да. До начала работы отдельно согласуем объём и количество этапов проверки. Изменения за пределами согласованной задачи могут повлиять на цену и срок.' },
      { q: 'Кому принадлежит готовый сайт?', a: 'Передача исходного кода, доступов и прав на материалы оговаривается до старта. Сторонние сервисы или домен могут оплачиваться отдельно.' },
      { q: 'Демо уже подключены к Telegram или серверу?', a: 'Нет. Интерактивные сценарии на этой странице работают в браузере. Реальный бот, база данных и уведомления — отдельная часть разработки.' },
    ],
  },
  contact: {
    kicker: 'СЛЕДУЮЩИЙ ШАГ',
    title: 'Есть задача? Разложим её на понятные шаги.',
    text: 'Напишите, что хотите улучшить в своём бизнесе. Обсудим функции, сроки и согласуем стоимость до начала работы.',
    cta: 'Написать в Telegram',
    github: 'Посмотреть GitHub',
  },
  footer: 'Каракалпакстан, Узбекистан',
};
export type Dict = typeof ru;

const uz: Dict = {
  meta: {
    title: "Kamalov Akmalbek — biznes uchun saytlar, Telegram botlar va ilovalar",
    desc: "Kichik biznes uchun saytlar, Telegram botlar, Mini Apps va mobil ilovalar. Misollar, taxminiy narxlar va uch tildagi interaktiv demo.",
  },
  nav: { services: 'Yechimlar', work: 'Loyihalar', demos: 'Demo', prices: 'Narxlar', contact: 'Aloqa' },
  hero: {
    kicker: 'KICHIK BIZNES UCHUN DASTURLASH · UZ / RU / EN',
    title: 'Kamroq kundalik ish. Onlayn ko‘proq mijoz.',
    lead: 'Buyurtma qabul qilish, mijozlarni yozish va biznesingizni internetda tushunarli ko‘rsatishga yordam beradigan sayt, Telegram bot va ilovalar yarataman.',
    cta: 'Vazifani muhokama qilish',
    more: 'Demoni ko‘rish',
    caption: 'Quyidagi interaktiv konseptlarni shu sahifada sinab ko‘rish mumkin.',
    trust: ['Avval vazifani kelishamiz', 'Narx ish boshlanishidan oldin', 'Murakkab atamalarsiz'],
    preview: {
      badge: 'INTERFEYS KONSEPTI',
      title: 'Ish kuni — nazorat ostida',
      subtitle: 'Biznes paneli namunasi',
      order: 'Yangi buyurtma',
      orderValue: 'Qahva · 2 ta mahsulot',
      booking: 'Yangi yozuv',
      bookingValue: 'Bugun · 15:30',
      status: 'Interfeysni ko‘rish mumkin',
      statusValue: 'Namuna, haqiqiy statistika emas',
      week: 'Haftalik faollik',
    },
  },
  services: {
    kicker: 'QANDAY YORDAM BERAMAN',
    title: 'Yechim sizning vazifangizdan boshlanadi',
    lead: 'Texnologiyalarni bilish shart emas. Qayerda vaqt, buyurtma yoki mijoz yo‘qolayotganini tushuntirsangiz kifoya.',
    items: [
      { n: '01', t: 'Telegram orqali buyurtma', d: 'Menyu, savat, tez-tez beriladigan savollarga javob va arizani egasiga yuborish — qo‘lda yozishmalar o‘rniga.', tag: 'Kafe va do‘konlar uchun' },
      { n: '02', t: 'Tushunarli sayt', d: 'Xizmatlar, narxlar, aloqa va aniq keyingi qadam. Mijoz taklifingizni tez tushunadi va bog‘lana oladi.', tag: 'Xizmatlar va mutaxassislar uchun' },
      { n: '03', t: 'Onlayn yozilish', d: 'Xizmat, mutaxassis va vaqtni tanlash. “Qachon bo‘sh?” degan xabarlar kamayadi, jadval tartibli bo‘ladi.', tag: 'Salon va studiyalar uchun' },
      { n: '04', t: 'Boshqaruv paneli', d: 'Mijozlar, buyurtmalar yoki yozuvlarni turli jadvallardan qidirmaslik uchun kerakli ma’lumotlarni bir joyda yig‘ish.', tag: 'Ichki biznes jarayonlari uchun' },
    ],
  },
  work: {
    kicker: 'MISOLLAR VA TAJRIBA',
    title: 'Aynan nima bajarilgan',
    lead: 'Muhimi — texnologiyalar ro‘yxati emas, loyihadagi rol, vazifa va tekshirish mumkin bo‘lgan natija. Demo haqiqiy mijoz loyihalaridan alohida ko‘rsatilgan.',
    labels: { problem: 'Vazifa', role: 'Mening hissam', stack: 'Texnologiyalar', client: 'Mijoz loyihasi', app: 'Mobil ilova', demo: 'Interaktiv demo', concept: 'Interfeys konsepti' },
    items: [
      {
        name: 'Sport klublari platformasi',
        text: 'Sport klublarini boshqarish platformasining foydalanuvchi interfeysi.',
        problem: 'Murakkab xizmat administrator uchun tushunarli, asosiy bo‘limlar esa tez topiladigan bo‘lishi kerak.',
        role: 'Mijoz buyurtmasi bo‘yicha frontend yaratdim. Bu loyiha mening qismimni ko‘rsatadi; backendni o‘zim yaratganman degani emas.',
        status: 'client', stack: ['Next.js', 'TypeScript'],
      },
      {
        name: 'Baholash ilovasi',
        text: 'Baho qo‘yish va reyting shakllantirish mumkin bo‘lgan mobil interfeys.',
        problem: 'Baholash sodda bo‘lishi va doimiy internetga bog‘liq bo‘lmasligi kerak.',
        role: 'Ma’lumotlar qurilmada saqlanadi. Quyidagi ko‘rinish interfeys namunasidir, ilova do‘konda e’lon qilinganini anglatmaydi.',
        status: 'app', stack: ['React Native', 'Realm'],
      },
      {
        name: 'Telegramda qahva buyurtmasi',
        text: 'Kofe uchun buyurtma ssenariysi: mahsulotlarni tanlash, sonini o‘zgartirish va jami narxni ko‘rish.',
        problem: 'Xaridor har bir mahsulotni chatda alohida so‘rashdan ko‘ra buyurtmani o‘zi yig‘ishi osonroq.',
        role: 'Bu sahifada brauzer demosi mavjud. U Telegramga ulanmagan va haqiqiy buyurtma yubormaydi.',
        status: 'demo', stack: ['React', 'TypeScript', 'Telegram Bot API'],
      },
    ],
  },
  demos: {
    kicker: 'O‘ZINGIZ SINAB KO‘RING',
    title: 'Rasm emas — interaktiv demo',
    lead: 'Ssenariylarni almashtiring, mahsulot tanlang va tugmalarni bosing. Shunday qilib, o‘xshash yechimni buyurtma qilishdan avval uning mantiqini baholaysiz.',
    tabs: [
      { id: 'coffee', label: 'Qahva buyurtmasi', marker: '01' },
      { id: 'salon', label: 'Salonga yozilish', marker: '02' },
      { id: 'website', label: 'Xizmatlar sayti', marker: '03' },
    ],
    disclaimer: 'Demo faqat brauzerda ishlaydi. Buyurtma va yozuvlar egasiga yuborilmaydi; server, Telegram va bildirishnomalarni ulash alohida kelishiladi.',
    coffee: {
      aria: 'Qahva buyurtmasining interaktiv demosi', eyebrow: 'BRAUZER KONSEPTI', brand: 'ARAL COFFEE', sub: 'Menyu · olib ketish', online: 'demo rejimi',
      hi: 'Salom! Sizga nima tayyorlaymiz?', total: 'Jami', ask: 'Buyurtmani tekshiramizmi?', confirm: 'Tasdiqlashni ko‘rsatish', cancel: 'Savatni tozalash', remove: 'Bittasini olib tashlash',
      okTitle: 'Ajoyib ko‘rinadi!', ok: 'Bu faqat demo: buyurtma qahvaxonaga yuborilmadi.', again: 'Yangi buyurtma', sum: 'so‘m', add: 'Qo‘shish',
      items: { latte: 'Latte', flat: 'Flat white', cake: 'Chizkeyk' } as Record<string, string>,
      details: { latte: 'Espresso va sut', flat: 'Kuchli qahva va mayin ko‘pik', cake: 'Qaymoqli desert' } as Record<string, string>,
    },
    salon: {
      aria: 'Salonga onlayn yozilish demosi', eyebrow: 'YOZISHMALARSIZ BAND QILISH', brand: 'FORMA STUDIO', subtitle: 'Xizmat va qulay vaqtni tanlang', service: '1. Xizmat', specialist: '2. Mutaxassis', time: '3. Bo‘sh vaqt', day: 'PAYSHANBA · NAMUNAVIY JADVAL', confirm: 'Yozilishni tekshirish',
      successTitle: 'Ssenariy bajarildi', success: 'Demo yozuvni tayyor deb belgiladi, ammo salon xabarnoma olmadi.', reset: 'Yozuvni o‘zgartirish', note: 'Quyidagi narx va jadval namuna uchun berilgan.', sum: 'so‘m',
      services: [
        { id: 'cut', name: 'Soch olish', price: 70000, duration: '45 daqiqa' },
        { id: 'style', name: 'Soch olish + turmak', price: 110000, duration: '60 daqiqa' },
        { id: 'beard', name: 'Soqolni tartibga keltirish', price: 40000, duration: '25 daqiqa' },
      ],
      specialists: [{ id: 'ali', name: 'Ali', role: 'Stilist' }, { id: 'timur', name: 'Temur', role: 'Barber' }],
      slots: ['10:30', '11:30', '13:00', '15:30', '17:00'],
    },
    website: {
      aria: 'Mahalliy servis sayti demosi', eyebrow: 'SAYT-VIZITKA', browser: 'Mahalliy servis sahifasi namunasi', brand: 'NOVA AUTO', navServices: 'Xizmatlar', navPrices: 'Narxlar', navAbout: 'Afzalliklar',
      heroTag: 'AVTOMOBIL PARVARISHI', title: 'Toza avtomobil. Xotirjam kun.', text: 'Xizmatlar ro‘yxati, taxminiy narxlar va yozilish uchun tezkor havola.', action: 'Narxlarni ko‘rish', contact: 'Shunga o‘xshash sayt haqida', listTitle: 'Ommabop xizmatlar',
      items: [{ name: 'Kompleks yuvish', price: '60 000 so‘mdan' }, { name: 'Salon tozalash', price: '120 000 so‘mdan' }, { name: 'Kuzovni jilolash', price: '250 000 so‘mdan' }],
      footer: 'Sahifa konsepti · nom va narxlar misol uchun o‘ylab topilgan', hidePrices: 'Narxlarni yopish', showPrices: 'Narxlarni ko‘rsatish',
    },
  },
  prices: {
    kicker: 'TUSHUNARLI BYUDJET', title: 'Taxminiy narxlar', lead: 'Oldindan taxminiy budjetni bilish mumkin — yakuniy narx avtomatik belgilanmaydi.', duration: 'Taxminiy muddat',
    noteTitle: 'Narx nega o‘zgarishi mumkin?', note: 'Yakuniy qiymat ekranlar va funksiyalar soni, dizayn, integratsiyalar, bildirishnomalar, ma’lumotlar hajmi va shoshilinchlikka bog‘liq. Qisqa muhokamadan so‘ng ish hajmini aniqlab, yakuniy narxni aytaman va faqat kelishuvdan keyin boshlayman.',
    footnote: 'Diapazonlar kichik loyihalar uchun dastlabki mo‘ljal, ommaviy oferta emas. Muddat vazifa kelishilib, materiallar olingandan keyin hisoblanadi.',
    items: [
      { name: 'Sayt-vizitka / landing', range: '$40–120', time: '2–5 kun', detail: 'Bir sahifa, xizmatlar, narxlar, kontakt va aloqa tugmalari.' },
      { name: 'Telegram bot', range: '$50–180', time: '3–7 kun', detail: 'Menyu, FAQ, ariza shakli yoki oddiy buyurtma ssenariysi.' },
      { name: 'Telegram Mini App', range: '$80–250', time: '5–10 kun', detail: 'Katalog, sodda savat yoki onlayn yozilish interfeysi.' },
      { name: 'Boshqaruv paneli / API', range: '$100–300+', time: '5 kundan', detail: 'Ma’lumotlar, foydalanuvchi rollari va vazifaga qarab integratsiyalar.' },
      { name: 'Mobil prototip', range: '$150–400+', time: '2 haftadan', detail: 'Android / iOS uchun asosiy ekranlar va lokal mantiq.' },
    ],
  },
  process: {
    kicker: 'KUTILMAGAN HOLATLARSIZ', title: 'Ish qanday bajariladi',
    items: [
      { n: '01', title: 'Vazifani muhokama qilamiz', text: 'Maqsad, muddat va kerakli funksiyalarni aytasiz. Men savollar berib, ish hajmini baholayman.' },
      { n: '02', title: 'Qoralama ko‘rsataman', text: 'Tafsilotlarga o‘tishdan oldin tuzilma va tashqi ko‘rinishni kelishamiz.' },
      { n: '03', title: 'Narxni kelishib, boshlaymiz', text: 'Ishlar tarkibi, narx va muddatni belgilaymiz. Qo‘shimcha funksiyalar alohida kelishiladi.' },
    ],
  },
  faq: {
    title: 'Ko‘p beriladigan savollar',
    items: [
      { q: 'Nimani tayyorlash kerak?', a: 'Vazifa va maqsadni aytish kifoya. Logotip, surat, matn yoki sayt namunalari yordam beradi; ular bo‘lmasa, avval tuzilmani kelishamiz.' },
      { q: 'Tuzatish kiritish mumkinmi?', a: 'Ha. Ish boshlanishidan oldin tekshirish bosqichlari va hajmini kelishamiz. Kelishilgan vazifadan tashqaridagi o‘zgarishlar narx va muddatga ta’sir qilishi mumkin.' },
      { q: 'Tayyor sayt kimga tegishli bo‘ladi?', a: 'Manba kodi, kirish huquqlari va materiallarga bo‘lgan huquqlar ish boshlanishidan oldin kelishiladi. Domen va tashqi xizmatlar alohida to‘lanishi mumkin.' },
      { q: 'Demolar Telegram yoki serverga ulanganmi?', a: 'Yo‘q. Sahifadagi interaktiv ssenariylar brauzerda ishlaydi. Haqiqiy bot, ma’lumotlar bazasi va bildirishnomalar alohida ishlab chiqiladi.' },
    ],
  },
  contact: {
    kicker: 'KEYINGI QADAM', title: 'Vazifa bormi? Uni aniq bosqichlarga ajratamiz.', text: 'Biznesingizda nimani yaxshilamoqchi ekaningizni yozing. Funksiyalar va muddatlarni muhokama qilib, ish boshlanishidan oldin narxni kelishamiz.', cta: 'Telegramda yozish', github: 'GitHub profilini ko‘rish',
  },
  footer: "Qoraqalpog‘iston, O‘zbekiston",
};

const en: Dict = {
  meta: {
    title: 'Kamalov Akmalbek — websites, Telegram bots and apps for businesses',
    desc: 'Websites, Telegram bots, Mini Apps and mobile apps for small businesses. Explore examples, indicative pricing and interactive demos in three languages.',
  },
  nav: { services: 'Solutions', work: 'Projects', demos: 'Demos', prices: 'Pricing', contact: 'Contact' },
  hero: {
    kicker: 'DEVELOPMENT FOR SMALL BUSINESSES · UZ / RU / EN', title: 'Less busywork. More customers online.',
    lead: 'I build websites, Telegram bots and apps that help businesses take orders, schedule customers and explain their services clearly online.',
    cta: 'Discuss a project', more: 'Explore demos', caption: 'Try the interactive concepts right here on the page.',
    trust: ['Scope agreed first', 'Price before work starts', 'Plain-language process'],
    preview: { badge: 'INTERFACE CONCEPT', title: 'Your workday, in control', subtitle: 'Example business dashboard', order: 'New order', orderValue: 'Coffee · 2 items', booking: 'New booking', bookingValue: 'Today · 3:30 PM', status: 'Interface ready to explore', statusValue: 'Illustration, not live analytics', week: 'Weekly activity' },
  },
  services: {
    kicker: 'WHAT I CAN HELP WITH', title: 'The solution starts with your problem', lead: 'You do not need to know the technology. Just explain where time, requests or customers are getting lost.',
    items: [
      { n: '01', t: 'Orders in Telegram', d: 'A menu, cart, FAQ and request handoff instead of handling every message manually.', tag: 'For cafés and shops' },
      { n: '02', t: 'A website that explains', d: 'Services, prices, contact details and a clear next step. Customers quickly understand what you offer and how to reach you.', tag: 'For service businesses' },
      { n: '03', t: 'Online booking', d: 'Choose a service, specialist and time slot. Fewer “when are you free?” messages, more order in the calendar.', tag: 'For salons and studios' },
      { n: '04', t: 'Management dashboard', d: 'Keep the data you need in one interface instead of searching across spreadsheets for customers, orders or bookings.', tag: 'For internal workflows' },
    ],
  },
  work: {
    kicker: 'EXAMPLES AND EXPERIENCE', title: 'What was actually built', lead: 'The important details are the role, the problem and what can be checked—not a list of trendy technologies. Demos are clearly separated from client work.',
    labels: { problem: 'Problem', role: 'My contribution', stack: 'Technology', client: 'Client project', app: 'Mobile app', demo: 'Interactive demo', concept: 'Interface concept' },
    items: [
      { name: 'Sports club platform', text: 'User interface for a platform that manages sports clubs.', problem: 'A complex service needs to be clear to administrators, with key sections easy to find.', role: 'Built the frontend for a client. This case describes my part, not a claim that I independently built the backend.', status: 'client', stack: ['Next.js', 'TypeScript'] },
      { name: 'Rating app', text: 'A mobile interface for assigning ratings and building a ranking.', problem: 'Rating should be straightforward and should not rely on a constant internet connection.', role: 'Data is stored on the device. The example is an interface demonstration, not a claim that the app is published in an app store.', status: 'app', stack: ['React Native', 'Realm'] },
      { name: 'Coffee orders in Telegram', text: 'An ordering flow: select items, change quantities and see the total.', problem: 'It is easier for customers to assemble an order themselves than to ask about every item in a chat.', role: 'A browser demo is available on this page. It is not connected to Telegram and does not send real orders.', status: 'demo', stack: ['React', 'TypeScript', 'Telegram Bot API'] },
    ],
  },
  demos: {
    kicker: 'TRY IT YOURSELF', title: 'Not a screenshot—an interactive demo', lead: 'Switch scenarios, choose items and press the buttons. This lets you assess the flow before ordering a similar solution.',
    tabs: [{ id: 'coffee', label: 'Coffee order', marker: '01' }, { id: 'salon', label: 'Salon booking', marker: '02' }, { id: 'website', label: 'Service website', marker: '03' }],
    disclaimer: 'These demos run only in the browser. Orders and bookings are not sent to a business. Server, Telegram and notification integrations are scoped separately.',
    coffee: {
      aria: 'Interactive coffee ordering demo', eyebrow: 'BROWSER CONCEPT', brand: 'ARAL COFFEE', sub: 'Menu · takeaway', online: 'demo mode', hi: 'Hi there! What can we make for you?', total: 'Total', ask: 'Review the order?', confirm: 'Show confirmation', cancel: 'Clear cart', remove: 'Remove one', okTitle: 'Looks good!', ok: 'This is only a demo: no order was sent to the café.', again: 'Start a new order', sum: 'sum', add: 'Add',
      items: { latte: 'Latte', flat: 'Flat white', cake: 'Cheesecake' } as Record<string, string>, details: { latte: 'Espresso and milk', flat: 'Bold coffee with silky foam', cake: 'Creamy dessert' } as Record<string, string>,
    },
    salon: {
      aria: 'Interactive online salon booking demo', eyebrow: 'BOOK WITHOUT BACK-AND-FORTH', brand: 'FORMA STUDIO', subtitle: 'Choose a service and a convenient time', service: '1. Service', specialist: '2. Specialist', time: '3. Available time', day: 'THURSDAY · SAMPLE SCHEDULE', confirm: 'Review booking', successTitle: 'Flow completed', success: 'The demo marked the booking as ready, but the salon was not notified.', reset: 'Change booking', note: 'Prices and availability shown are examples.', sum: 'sum',
      services: [{ id: 'cut', name: 'Haircut', price: 70000, duration: '45 min' }, { id: 'style', name: 'Haircut + styling', price: 110000, duration: '60 min' }, { id: 'beard', name: 'Beard trim', price: 40000, duration: '25 min' }],
      specialists: [{ id: 'ali', name: 'Ali', role: 'Stylist' }, { id: 'timur', name: 'Timur', role: 'Barber' }], slots: ['10:30', '11:30', '13:00', '15:30', '17:00'],
    },
    website: {
      aria: 'Local service website demo', eyebrow: 'SMALL BUSINESS WEBSITE', browser: 'Example local service page', brand: 'NOVA AUTO', navServices: 'Services', navPrices: 'Prices', navAbout: 'Why us', heroTag: 'CAR CARE', title: 'A clean car. A clearer day.', text: 'A clear service list, indicative prices and a quick way to get in touch.', action: 'Explore prices', contact: 'Discuss a similar website', listTitle: 'Popular services',
      items: [{ name: 'Full wash', price: 'from UZS 60,000' }, { name: 'Interior cleaning', price: 'from UZS 120,000' }, { name: 'Body polish', price: 'from UZS 250,000' }], footer: 'Page concept · Name and prices are fictional examples', hidePrices: 'Hide prices', showPrices: 'Show prices',
    },
  },
  prices: {
    kicker: 'A CLEAR BUDGET', title: 'Indicative pricing', lead: 'Get an initial sense of the budget. The final price is assessed for your specific scope, not assigned automatically.', duration: 'Estimated timeline', noteTitle: 'Why can the price change?', note: 'The final cost depends on the number of screens and features, design, integrations, notifications, data volume and urgency. After a short discussion, I will confirm the scope and final price; work starts only after agreement.', footnote: 'Ranges are preliminary guidance for small projects, not a formal offer. Timelines start after the scope is agreed and materials are received.',
    items: [
      { name: 'Business website / landing page', range: '$40–120', time: '2–5 days', detail: 'One page with services, prices, contacts and action buttons.' },
      { name: 'Telegram bot', range: '$50–180', time: '3–7 days', detail: 'Menu, FAQ, request form or a simple ordering flow.' },
      { name: 'Telegram Mini App', range: '$80–250', time: '5–10 days', detail: 'Catalog, simple cart or an online booking interface.' },
      { name: 'Management panel / API', range: '$100–300+', time: '5+ days', detail: 'Data handling, user roles and task-specific integrations.' },
      { name: 'Mobile prototype', range: '$150–400+', time: '2+ weeks', detail: 'Core screens and local logic for Android / iOS.' },
    ],
  },
  process: {
    kicker: 'NO UNEXPECTED SURPRISES', title: 'How the work goes', items: [
      { n: '01', title: 'Discuss the problem', text: 'You describe the goal, deadline and essential features. I ask questions and estimate the scope.' },
      { n: '02', title: 'Review a draft', text: 'We agree on structure and appearance before spending time on details.' },
      { n: '03', title: 'Agree and begin', text: 'We confirm deliverables, price and timing. Additional features are discussed separately.' },
    ],
  },
  faq: {
    title: 'Frequently asked questions', items: [
      { q: 'What should I prepare?', a: 'Describe the task and goal. A logo, photos, copy or website examples help; if you do not have them, we can agree on the structure first.' },
      { q: 'Can I request revisions?', a: 'Yes. We will agree on review stages and scope before work begins. Changes outside the agreed task may affect cost and timing.' },
      { q: 'Who owns the finished website?', a: 'Source code, access credentials and rights to materials are agreed before the start. A domain or third-party services may cost extra.' },
      { q: 'Are the demos connected to Telegram or a server?', a: 'No. The interactive flows on this page run in the browser. A real bot, database and notifications are separate development work.' },
    ],
  },
  contact: {
    kicker: 'NEXT STEP', title: 'Have a project? Let’s break it into clear steps.', text: 'Tell me what you want to improve in your business. We will discuss features and timing, then agree on the price before work begins.', cta: 'Message on Telegram', github: 'View GitHub profile',
  },
  footer: 'Karakalpakstan, Uzbekistan',
};

export const dict: Record<Lang, Dict> = { ru, uz, en };
