// ===== MEDICAL AI DATABASE =====
const medicalKnowledge = [
  {
    keywords: ['сердце', 'сердечный', 'кардио', 'инфаркт', 'аритмия', 'гипертония', 'давление'],
    answers: [
      '❤️ **Сердечно-сосудистые заболевания**: Основные причины - стресс, курение, гиподинамия. Профилактика: регулярные упражнения, здоровое питание (овощи, рыба), контроль веса. Симптомы опасности: боль в груди, одышка, головокружение - срочно к врачу!',
      '🏥 **Высокое давление (гипертония)**: Норма 120/80. Факторы риска: избыток соли, стресс, ожирение. Лечение: DASH диета (овощи, фрукты), физкультура, отказ от курения. Измеряйте давление регулярно!',
      '⚡ **Аритмия (нарушение ритма)**: Ощущение перебоев в сердце. Причины: кофеин, стресс, гормональные сбои. Помощь: избегайте стимулянтов, медитация, обратитесь к кардиологу для ЭКГ.'
    ]
  },
  {
    keywords: ['легкие', 'дыхание', 'кашель', 'пневмония', 'бронхит', 'астма', 'одышка', 'бронх'],
    answers: [
      '🫁 **Заболевания дыхательной системы**: Основные симптомы - кашель, одышка, боль в груди. Причины: инфекции, аллергия, загрязнение воздуха. Профилактика: вентиляция помещения, отказ от курения, вакцинация.',
      '🤒 **Пневмония (воспаление легких)**: Симптомы - кашель с мокротой, температура, слабость. ОПАСНО! Нужна врачебная помощь и возможно антибиотики. Не занимайтесь самолечением!',
      '💨 **Бронхит**: Кашель (сначала сухой, потом с мокротой), температура до 38°C. Лечение: обильное питье, увлажнитель воздуха, отхаркивающие средства. Если не проходит неделю - к врачу!'
    ]
  },
  {
    keywords: ['желудок', 'гастрит', 'язва', 'изжога', 'тошнота', 'рвота', 'диарея', 'запор', 'кишечник'],
    answers: [
      '🍽️ **Гастрит (воспаление желудка)**: Симптомы - боль в животе, изжога, тошнота. Причины: стресс, острая пища, бактерия Helicobacter pylori. Лечение: диета (исключить острое, кислое), лекарства. Обследуйте у гастроэнтеролога!',
      '⚠️ **Язва желудка**: Сильная боль в верхней части живота, часто ночью. СЕРЬЕЗНО! Может кровоточить. Нужны лекарства и строгая диета. Избегайте стресса, острого, алкоголя!',
      '🔥 **Изжога**: Жжение за грудиной после еды. Причины: жирная пища, кофеин, наклоны вперед. Помощь: антациды, приподнимите голову во сне, ешьте маленькими порциями.'
    ]
  },
  {
    keywords: ['печень', 'гепатит', 'цирроз', 'желчь', 'поджелудочная', 'панкреатит'],
    answers: [
      '🏥 **Гепатит (воспаление печени)**: Типы А, В, С. Симптомы - желтуха, темная моча, слабость. Передача - через воду (А), кровь (В, С). Профилактика: вакцинация, гигиена, безопасность.',
      '⚠️ **Цирроз печени**: Хроническое поражение, необратимо. Главная причина - алкоголь. Симптомы - асцит (жидкость в животе), кровотечения. Профилактика: отказ от алкоголя, здоровый образ жизни!',
      '🔪 **Панкреатит (воспаление поджелудочной)**: Сильная боль в животе, рвота, температура. СРОЧНО К ВРАЧУ! Причины - алкоголь, жирная пища, камни в желчном пузыре. Соблюдайте диету!'
    ]
  },
  {
    keywords: ['почки', 'мочевой', 'нефрит', 'нефроз', 'камни', 'мочекаменная', 'цистит', 'уретрит'],
    answers: [
      '💧 **Нефрит (воспаление почек)**: Боль в пояснице, отёки, повышенное давление, кровь в моче. СЕРЬЕЗНО! Нужна помощь нефролога. Лечение: антибиотики, диета с ограничением соли.',
      '🪨 **Мочекаменная болезнь**: Острая боль при движении камней, кровь в моче. Профилактика: много воды (2-3 литра в день), ограничьте кальций и оксалаты. УЗИ поможет обнаружить камни.',
      '🔥 **Цистит (воспаление мочевого пузыря)**: Боль при мочеиспускании, частые позывы, может быть температура. Лечение: антибиотики, много воды, тепло на живот. Обратитесь к урологу!'
    ]
  },
  {
    keywords: ['мозг', 'нервная система', 'инсульт', 'инфаркт мозга', 'мигрень', 'головная боль', 'невралгия', 'судороги'],
    answers: [
      '🧠 **Инсульт (острое нарушение кровообращения мозга)**: Симптомы - внезапная слабость, нарушение речи, перекос лица. ВЫЗОВИТЕ СКОРУЮ! Это угроза жизни. Первая помощь - положить человека, не давайте еду/воду.',
      '🤕 **Мигрень**: Сильная головная боль, часто с тошнотой и светобоязнью. Триггеры - стресс, гормоны, еда. Помощь: тёмное спокойное место, компресс, триптаны. Профилактика: здоровый сон, регулярность!',
      '⚡ **Невралгия тройничного нерва**: Острая жгучая боль в лице. Причины - давление на нерв, инфекция. Лечение - противосудорожные препараты, может помочь операция. Консультируйтесь с неврологом!'
    ]
  },
  {
    keywords: ['кость', 'остеопороз', 'артрит', 'артроз', 'остеохондроз', 'перелом', 'вывих', 'суставы', 'позвоночник', 'спина', 'боль в спине'],
    answers: [
      '🦴 **Остеопороз (хрупкость костей)**: Кости становятся пористыми, легко ломаются. Риск повышен после 50 лет, особенно у женщин. Профилактика: кальций (молочные продукты), витамин D, физкультура, отказ от курения.',
      '🔴 **Артрит (воспаление суставов)**: Боль, отёк, скованность движений. Типы - ревматоидный, остеоартрит. Лечение: противовоспалительные препараты, физиотерапия, диета. Вода в суставах - обратитесь к ревматологу!',
      '⚠️ **Остеохондроз (поражение позвоночника)**: Дегенерация хрящей между позвонками. Симптомы - боль в спине, шее, онемение рук. Профилактика: правильная осанка, зарядка, поднимайте правильно. Помогут мануальная терапия и физкультура!'
    ]
  },
  {
    keywords: ['кожа', 'дерматит', 'экзема', 'псориаз', 'прыщи', 'акне', 'сыпь', 'грибок', 'лишай'],
    answers: [
      '🔴 **Дерматит (воспаление кожи)**: Красные зудящие пятна. Причины - аллергия, раздражители, инфекция. Лечение: увлажняющие кремы, исключить раздражители, иногда гормональные мази. Обратитесь к дерматологу!',
      '🌡️ **Экзема**: Хроническое воспаление кожи, зуд, волдыри. Триггеры - стресс, моющие средства, пищевые аллергены. Помощь: увлажнение, ванны с овсянкой, избегайте триггеров.',
      '🧴 **Акне (прыщи)**: Вызвано бактериями и избытком кожного сала. Лечение: очищение, салициловая кислота, бензоилпероксид, в тяжелых случаях антибиотики. Не давите! Обратитесь к дерматологу!'
    ]
  },
  {
    keywords: ['глаз', 'зрение', 'катаракта', 'глаукома', 'миопия', 'дальнозоркость', 'астигматизм', 'конъюнктивит'],
    answers: [
      '👁️ **Глаукома**: Повышенное давление в глазу, повреждает зрительный нерв. ОПАСНА - может привести к слепоте! Симптомы - боль в глазах, ограничение поля зрения. Нужны регулярные осмотры офтальмолога!',
      '🔍 **Катаракта**: Помутнение хрусталика, особенно у пожилых. Симптомы - размытое зрение, свечение. Лечение - оперативное. Профилактика: UV защита, отказ от курения, здоровое питание.',
      '📖 **Миопия (близорукость)**: Видно хорошо близко, далеко - размыто. Причины - генетика, переутомление глаз. Помощь: очки, линзы, возможно операция. Берегите глаза - делайте перерывы при чтении!'
    ]
  },
  {
    keywords: ['ухо', 'слух', 'отит', 'тугоухость', 'громкий звук', 'шум', 'звон'],
    answers: [
      '👂 **Отит (воспаление среднего уха)**: Боль в ухе, могут быть выделения, снижение слуха. Причины - инфекция, вода в ухе. Лечение: антибиотики, обезболивающие. ОПАСНО - может привести к менингиту! К врачу-отоларингологу!',
      '🔊 **Потеря слуха**: Может быть врождённой или приобретённой (шум, возраст, инфекции). Профилактика: используйте наушники на безопасной громкости, защитите уши от громких звуков. Слухопротезирование помогает!',
      '🔔 **Тиннитус (звон в ушах)**: Постоянный звон, шум. Причины - повреждение волосковых клеток, стресс, некоторые лекарства. Лечение: звуковая терапия, снятие стресса. Обратитесь к отоларингологу!'
    ]
  },
  {
    keywords: ['зуб', 'зубы', 'кариес', 'пародонтит', 'пульпит', 'гингивит', 'зубной', 'десна'],
    answers: [
      '🦷 **Кариес (разрушение зуба)**: Вызывают бактерии и сахар. Профилактика - чистите зубы 2 раза в день, зубная нить, избегайте сахара. Лечение: пломба, очистка. Не запускайте - может привести к потере зуба!',
      '🩸 **Пародонтит (воспаление дёсен)**: Кровоточивость, гноение, рыхлость дёсен. ОПАСНО - может привести к потере зубов! Лечение: профессиональная чистка, гигиена, иногда антибиотики. К стоматологу!',
      '🪥 **Гингивит (воспаление дёсен)**: Красные, опухшие, кровоточащие дёсны. Причина - плохая гигиена. Лечение: правильная чистка, полоскание хлоргексидином. Вовремя лечите - может перерасти в пародонтит!'
    ]
  },
  {
    keywords: ['гормон', 'щитовидная железа', 'диабет', 'гипотиреоз', 'гипертиреоз', 'инсулин', 'сахар'],
    answers: [
      '🩸 **Сахарный диабет**: Высокий уровень глюкозы в крови. Типы 1 и 2. Симптомы - жажда, частое мочеиспускание, усталость. Лечение: диета, инсулин или таблетки, физкультура. Проверяйте сахар регулярно!',
      '🦋 **Гипертиреоз (избыток гормонов щитовидной железы)**: Ускоренный метаболизм, потеря веса, дрожь, беспокойство. Лечение: противотиреоидные препараты, иногда облучение или операция. К эндокринологу!',
      '😔 **Гипотиреоз (недостаток гормонов щитовидной железы)**: Усталость, набор веса, депрессия, холодонебось. Лечение: гормон щитовидной железы (L-тироксин). Регулярно проверяйте уровень гормонов!'
    ]
  },
  {
    keywords: ['иммунитет', 'СПИД', 'ВИЧ', 'вирус', 'антитело', 'вакцина', 'прививка', 'инфекция'],
    answers: [
      '🛡️ **Иммунная система**: Защищает от инфекций. Укрепляйте: витамин C (цитрусовые), витамин D (солнце), цинк, сон 7-9 часов, физкультура, здоровое питание. Избегайте стресса!',
      '⚠️ **ВИЧ/СПИД**: Вирус поражает иммунную систему. Передача - через кровь, половой контакт, от матери к ребёнку. Профилактика - защита, регулярное тестирование. При диагнозе - антиретровирусная терапия спасает жизнь!',
      '💉 **Вакцины**: Обучают иммунную систему. Профилактика множества болезней: коронавирус, грипп, корь, полиомиелит. Побочные эффекты обычно лёгкие. Вакцинируйтесь - это спасает жизни!'
    ]
  },
  {
    keywords: ['беременность', 'роды', 'плод', 'матка', 'токсикоз', 'гинеколог', 'менструация', 'гормональный'],
    answers: [
      '👶 **Беременность**: Период 40 недель развития плода. Важно: регулярные осмотры гинеколога, фолиевая кислота, витамины, правильное питание, избегайте курения и алкоголя. Токсикоз в 1м триместре - нормально.',
      '🤰 **Гестационный диабет**: Повышение сахара при беременности. Грозит осложнениями для матери и ребёнка. Контролируйте сахар, диета. Обычно проходит после родов.',
      '💊 **Менструальный цикл**: Норма 21-35 дней. Если нарушен - могут быть гормональные проблемы, стресс, недостаток веса. К гинеколог-эндокринологу! Если обильные кровотечения - может быть анемия!'
    ]
  },
  {
    keywords: ['мышцы', 'спорт', 'травма', 'растяжение', 'ушиб', 'вывих', 'растяжение связок'],
    answers: [
      '💪 **Растяжение мышц**: Боль, отёк, синяки. Лечение: RICE (отдых, лёд, компрессия, возвышение). Не тренируйтесь пока не заживёт. Профилактика - разминка перед спортом!',
      '⚠️ **Вывих сустава**: Сустав смещается из суставной сумки. БОЛЕЗНЕННО! Помощь - иммобилизация, лёд, к врачу. Может потребоваться репозиция (вправление). Реабилитация - важна!',
      '🏃 **Растяжение связок**: Боль, отёк, невозможно нагружать. Грейд 1-3 в зависимости от тяжести. Лечение: RICE, физиотерапия. Может восстанавливаться 2-6 месяцев!'
    ]
  }
];

function getAIResponse(question) {
  const q = question.toLowerCase().trim();
  
  if (!q) return '❓ Пожалуйста, задайте вопрос про здоровье. Я помогу чем смогу!';
  
  // Ищем подходящую категорию
  for (let category of medicalKnowledge) {
    for (let keyword of category.keywords) {
      if (q.includes(keyword)) {
        const randomAnswer = category.answers[Math.floor(Math.random() * category.answers.length)];
        return randomAnswer;
      }
    }
  }
  
  // Если не медицинский вопрос
  return '❌ Извините, я отвечаю только на медицинские вопросы про здоровье человека, болезни, органы и лечение. Пожалуйста, спросите что-то медицинское! Например: "Как лечить кашель?", "Что такое гастрит?" или "Симптомы диабета?"';
}

// ===== DATABASE =====
const database = {
  users: [
    { id: 1, name: 'Главный администратор', email: 'abboskulovtoxir@gmail.com', role: 'admin', password: '10052005' }
  ],
  doctors: [
    { id: 1, name: 'Доктор Смирнов', specialty: 'Терапевт', rating: 4.8, experience: '12 лет', photo: '👨‍⚕️' },
    { id: 2, name: 'Доктор Петрова', specialty: 'Кардиолог', rating: 4.9, experience: '15 лет', photo: '👩‍⚕️' },
    { id: 3, name: 'Доктор Сидоров', specialty: 'Невролог', rating: 4.7, experience: '8 лет', photo: '👨‍⚕️' }
  ],
  appointments: [],
  medicalRecords: [],
  articles: [
    { id: 1, title: 'Здоровье сердца', category: 'Кардиология', icon: '❤️', content: 'Контролируйте давление, ограничьте соль, занимайтесь спортом 30 минут в день. Рекомендуемое давление: 120/80 мм рт. ст.', tips: ['Регулярные упражнения', 'DASH диета', 'Контроль стресса', 'Отказ от курения'] },
    { id: 2, title: 'Дыхательная система', category: 'Пульмонология', icon: '🫁', content: 'Здоровые лёгкие - основа жизни. Избегайте курения, загрязнённого воздуха. При затруднённом дыхании обратитесь к врачу.', tips: ['Избегайте курения', 'Вентилируйте помещение', 'Вакцинируйтесь', 'Упражнения дыхания'] },
    { id: 3, title: 'ЖКТ и пищеварение', category: 'Гастроэнтерология', icon: '🍽️', content: 'Правильное питание - ключ к здоровому пищеварению. Ешьте медленно, жуйте тщательно. Избегайте жирного и острого.', tips: ['Маленькие порции', 'Много воды', 'Клетчатка', 'Избегайте спешки'] },
    { id: 4, title: 'Почки и мочеполовая система', category: 'Нефрология', icon: '💧', content: 'Пейте 2-3 литра воды в день. Это помогает предотвратить камни в почках. Следите за цветом мочи - она должна быть светлой.', tips: ['2-3 литра воды', 'Ограничьте соль', 'Активный образ жизни', 'Регулярные проверки'] },
    { id: 5, title: 'Нервная система и психическое здоровье', category: 'Неврология', icon: '🧠', content: 'Стресс и тревога влияют на здоровье. Практикуйте медитацию, йогу, глубокое дыхание. Спите 7-9 часов в сутки.', tips: ['Медитация', 'Йога', 'Прогулки на природе', 'Здоровый сон'] },
    { id: 6, title: 'Опорно-двигательный аппарат', category: 'Ортопедия', icon: '🦴', content: 'Правильная осанка предотвращает боли в спине. Укрепляйте мышцы спины и пресса. При болях не поднимайте тяжести.', tips: ['Правильная осанка', 'Упражнения для спины', 'Не переносите тяжести', 'Физиотерапия'] },
    { id: 7, title: 'Кожа и дерматология', category: 'Дерматология', icon: '🔴', content: 'Используйте солнцезащиту SPF 30+ ежедневно. Увлажняйте кожу. При сыпи или зуде обратитесь к дерматологу.', tips: ['Солнцезащита', 'Увлажнение', 'Очищение кожи', 'Избегайте химии'] },
    { id: 8, title: 'Зрение и офтальмология', category: 'Офтальмология', icon: '👁️', content: 'Защищайте глаза от UV лучей. Делайте перерывы при работе за экраном. После 40 лет - ежегодные осмотры офтальмолога.', tips: ['UV защита', 'Перерывы при ПК', 'Гимнастика для глаз', 'Регулярные осмотры'] },
    { id: 9, title: 'Уши и слух', category: 'Отоларингология', icon: '👂', content: 'Не используйте наушники на громкости выше 60%. Защищайте уши от громких звуков. При звоне в ушах обратитесь к врачу.', tips: ['Безопасная громкость', 'Защита от шума', 'Гигиена ушей', 'Регулярные проверки'] },
    { id: 10, title: 'Зубы и полость рта', category: 'Стоматология', icon: '🦷', content: 'Чистите зубы 2 раза в день по 2 минуты. Используйте зубную нить. Посещайте стоматолога 2 раза в год.', tips: ['Чистка 2 раза в день', 'Зубная нить', 'Полоскание', 'Профосмотры'] },
    { id: 11, title: 'Гормональная система', category: 'Эндокринология', icon: '⚡', content: 'Сахарный диабет 2 типа можно предотвратить здоровым образом жизни. Проверяйте уровень сахара регулярно.', tips: ['Здоровое питание', 'Физкультура', 'Контроль веса', 'Регулярные тесты'] },
    { id: 12, title: 'Иммунитет и профилактика', category: 'Иммунология', icon: '🛡️', content: 'Вакцины спасают жизни. Витамин C, цинк, витамин D укрепляют иммунитет. Спите достаточно и управляйте стрессом.', tips: ['Вакцинируйтесь', 'Витамины', 'Здоровый сон', 'Физкультура'] },
    { id: 13, title: 'Гинекология и женское здоровье', category: 'Гинекология', icon: '👶', content: 'Регулярные осмотры гинеколога - основа женского здоровья. Во время беременности - витамины и здоровое питание.', tips: ['Регулярные осмотры', 'Гинекологическая профилактика', 'Здоровое питание', 'Фитнес'] },
    { id: 14, title: 'Спортивная медицина', category: 'Спортивная медицина', icon: '🏃', content: 'Разминка перед тренировкой предотвращает травмы. Восстановление не менее важно, чем сама тренировка.', tips: ['Разминка 10 минут', 'Постепенное увеличение', 'Восстановление', 'Правильная техника'] },
    { id: 15, title: 'Питание и диетология', category: 'Диетология', icon: '🥗', content: 'Сбалансированное питание включает белки, жиры, углеводы. Ешьте радугу - разноцветные овощи и фрукты.', tips: ['Белки, жиры, углеводы', 'Много воды', 'Овощи и фрукты', 'Меньше обработанной еды'] }
  ]
};

// ===== STATE =====
let currentUser = null;
let isRegistering = false;
let showAIChat = false;

// ===== AUTHENTICATION =====
function login(email, password) {
  const user = database.users.find(u => u.email === email && u.password === password);
  if (user) {
    currentUser = { ...user };
    renderApp();
  } else {
    alert('Неверный email или пароль');
  }
}

function register(name, email, password, passwordConfirm) {
  if (!name || !email || !password) {
    alert('Заполни все поля');
    return;
  }
  
  if (password !== passwordConfirm) {
    alert('Пароли не совпадают');
    return;
  }
  
  if (password.length < 4) {
    alert('Пароль должен быть минимум 4 символа');
    return;
  }
  
  if (database.users.find(u => u.email === email)) {
    alert('Этот email уже зарегистрирован');
    return;
  }
  
  const newUser = {
    id: Math.max(...database.users.map(u => u.id), 0) + 1,
    name,
    email,
    role: 'patient',
    password
  };
  
  database.users.push(newUser);
  alert('✓ Аккаунт создан! Теперь войди со своими данными');
  isRegistering = false;
  renderApp();
}

function toggleRegister() {
  isRegistering = !isRegistering;
  renderApp();
}

function logout() {
  currentUser = null;
  isRegistering = false;
  showAIChat = false;
  renderApp();
}

// ===== AI CHAT =====
function toggleAIChat() {
  showAIChat = !showAIChat;
  renderApp();
}

function sendAIMessage() {
  const input = document.getElementById('ai-input');
  const question = input.value.trim();
  
  if (!question) return;
  
  const response = getAIResponse(question);
  const chatBox = document.getElementById('ai-messages');
  
  chatBox.innerHTML += `
    <div class="ai-message user-msg">
      <div class="msg-text">👤 ${question}</div>
    </div>
    <div class="ai-message bot-msg">
      <div class="msg-text">${response}</div>
    </div>
  `;
  
  chatBox.scrollTop = chatBox.scrollHeight;
  input.value = '';
}

// ===== ADMIN FUNCTIONS =====
function createDoctorAccount(name, email, password) {
  if (!name || !email || !password) {
    alert('Заполни все поля');
    return;
  }
  
  if (password.length < 4) {
    alert('Пароль должен быть минимум 4 символа');
    return;
  }
  
  if (database.users.find(u => u.email === email)) {
    alert('Этот email уже существует');
    return;
  }
  
  const newDoctor = {
    id: Math.max(...database.users.map(u => u.id), 0) + 1,
    name,
    email,
    role: 'doctor',
    password
  };
  
  database.users.push(newDoctor);
  alert(`✓ Врач ${name} создан!`);
  renderApp();
}

function changeUserRole(userId, newRole) {
  const user = database.users.find(u => u.id === userId);
  if (user && user.role !== 'admin') {
    user.role = newRole;
    alert(`✓ Роль изменена`);
    renderApp();
  }
}

function removeUser(userId) {
  const user = database.users.find(u => u.id === userId);
  if (user && user.role === 'admin') {
    alert('⚠️ Нельзя удалить администратора!');
    return;
  }
  database.users = database.users.filter(u => u.id !== userId);
  alert('✓ Пользователь удалён');
  renderApp();
}

function getStatistics() {
  return {
    totalUsers: database.users.length,
    totalDoctors: database.doctors.length,
    totalAppointments: database.appointments.length,
    completedAppointments: database.appointments.filter(a => a.status === 'completed').length,
    averageRating: (database.doctors.reduce((sum, d) => sum + d.rating, 0) / database.doctors.length).toFixed(1)
  };
}

// ===== PATIENT FUNCTIONS =====
function bookAppointment(doctorId, date, time) {
  const appointment = {
    id: database.appointments.length + 1,
    patientId: currentUser.id,
    doctorId,
    date,
    time,
    status: 'scheduled'
  };
  database.appointments.push(appointment);
  alert('✓ Запись успешна!');
  renderApp();
}

function cancelAppointment(appointmentId) {
  database.appointments = database.appointments.filter(a => a.id !== appointmentId);
  alert('✓ Запись отменена');
  renderApp();
}

function getPatientAppointments() {
  return database.appointments
    .filter(a => a.patientId === currentUser.id)
    .map(a => {
      const doctor = database.doctors.find(d => d.id === a.doctorId);
      return { ...a, doctorName: doctor.name, doctorSpecialty: doctor.specialty };
    });
}

// ===== RENDER FUNCTIONS =====
function renderApp() {
  const app = document.getElementById('app');
  
  if (!currentUser) {
    app.innerHTML = renderAuthPage();
  } else if (currentUser.role === 'patient') {
    app.innerHTML = renderPatientDashboard();
  } else if (currentUser.role === 'doctor') {
    app.innerHTML = renderDoctorDashboard();
  } else if (currentUser.role === 'admin') {
    app.innerHTML = renderAdminDashboard();
  }
  
  attachEventListeners();
}

function renderAuthPage() {
  if (isRegistering) {
    return `
      <div class="auth-page">
        <div class="animated-bg"></div>
        <div class="medical-background"></div>
        <div class="auth-container">
          <div class="auth-box">
            <div class="auth-logo">🏥</div>
            <h1>МедПорт</h1>
            <p class="auth-subtitle">Создание аккаунта</p>
            
            <form id="register-form">
              <div class="form-group">
                <label>Полное имя</label>
                <input type="text" id="reg-name" placeholder="Иван Иванов" required />
              </div>
              <div class="form-group">
                <label>Email</label>
                <input type="email" id="reg-email" placeholder="example@clinic.ru" required />
              </div>
              <div class="form-group">
                <label>Пароль</label>
                <input type="password" id="reg-password" placeholder="Минимум 4 символа" required />
              </div>
              <div class="form-group">
                <label>Подтверди пароль</label>
                <input type="password" id="reg-password-confirm" placeholder="Повтори пароль" required />
              </div>
              <button type="submit" class="btn btn-primary">Зарегистрироваться →</button>
            </form>
            
            <div class="auth-divider">или</div>
            
            <button type="button" class="btn btn-secondary" onclick="toggleRegister()">Уже есть аккаунт? Войти</button>
          </div>
        </div>
      </div>
    `;
  }
  
  return `
    <div class="auth-page">
      <div class="animated-bg"></div>
      <div class="medical-background">
        <div class="floating-icon">🩺</div>
        <div class="floating-icon">💊</div>
        <div class="floating-icon">🩹</div>
        <div class="floating-icon">🧬</div>
        <div class="floating-icon">⚕️</div>
      </div>
      <div class="auth-container">
        <div class="auth-box">
          <div class="auth-logo">🏥</div>
          <h1>МедПорт</h1>
          <p class="auth-subtitle">Ваше здоровье — наша забота</p>
          
          <form id="login-form">
            <div class="form-group">
              <label>Email</label>
              <input type="email" id="email" placeholder="example@clinic.ru" required />
            </div>
            <div class="form-group">
              <label>Пароль</label>
              <input type="password" id="password" placeholder="••••••••" required />
            </div>
            <button type="submit" class="btn btn-primary">Войти →</button>
          </form>
          
          <div class="auth-divider">или</div>
          
          <button type="button" class="btn btn-secondary" onclick="toggleRegister()">Создать аккаунт</button>
          
          <div class="features-preview">
            <h3>✨ Что вас ждёт:</h3>
            <div class="feature-item">📅 Запись к врачу онлайн</div>
            <div class="feature-item">📋 Электронная медкарта</div>
            <div class="feature-item">💬 Консультации с врачами</div>
            <div class="feature-item">🤖 AI ассистент 24/7</div>
            <div class="feature-item">📚 Медицинские статьи</div>
          </div>
          
          <div class="admin-hint">
            <strong>👨‍💼 Администратор:</strong><br>
            abboskulovtoxir@gmail.com / 10052005
          </div>
        </div>
      </div>
      
      <div class="articles-preview">
        <h2>📚 Медицинские статьи</h2>
        <div class="articles-grid">
          ${database.articles.slice(0, 4).map(a => `
            <div class="article-card">
              <div class="article-icon">${a.icon}</div>
              <h3>${a.title}</h3>
              <div class="article-category">${a.category}</div>
              <p>${a.content.substring(0, 90)}...</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderPatientDashboard() {
  const appointments = getPatientAppointments();
  
  return `
    <div class="dashboard">
      <nav class="navbar">
        <div class="navbar-logo">🏥 МедПорт</div>
        <div class="navbar-user">
          <span>${currentUser.name}</span>
          <button class="btn btn-sm" onclick="toggleAIChat()">🤖 AI Помощь</button>
          <button class="btn btn-sm" onclick="logout()">Выход</button>
        </div>
      </nav>
      
      ${showAIChat ? `
        <div class="ai-chat">
          <div class="ai-header">
            <h3>🤖 Медицинский AI Ассистент</h3>
            <button onclick="toggleAIChat()">✕</button>
          </div>
          <div class="ai-messages" id="ai-messages">
            <div class="ai-message bot-msg">
              <div class="msg-text">Привет! 👋 Я медицинский AI ассистент. Отвечаю на вопросы про здоровье, болезни, органы, симптомы и лечение. Спросите меня что-нибудь! Например: "Как лечить простуду?" или "Симптомы гастрита?"</div>
            </div>
          </div>
          <div class="ai-input-box">
            <input type="text" id="ai-input" placeholder="Спросите про здоровье..." />
            <button onclick="sendAIMessage()">Отправить</button>
          </div>
        </div>
      ` : ''}
      
      <div class="container">
        <h1>🧑 Кабинет пациента</h1>
        
        <div class="welcome-box">
          <h2>Добро пожаловать, ${currentUser.name}! 👋</h2>
          <p>Запишитесь к врачу, читайте статьи про здоровье и используйте AI ассистент 24/7!</p>
        </div>
        
        <div class="quick-actions">
          <a href="#" class="action-card" onclick="document.querySelector('[data-tab=\\'appointments\\']').click(); return false;">
            <div class="action-icon">📅</div>
            <h3>Запись к врачу</h3>
            <p>Выберите врача и время</p>
          </a>
          <a href="#" class="action-card" onclick="document.querySelector('[data-tab=\\'articles\\']').click(); return false;">
            <div class="action-icon">📚</div>
            <h3>Медицинские статьи</h3>
            <p>15+ статей про здоровье</p>
          </a>
          <a href="#" class="action-card" onclick="toggleAIChat(); return false;">
            <div class="action-icon">🤖</div>
            <h3>AI Ассистент</h3>
            <p>Ответы на медицинские вопросы</p>
          </a>
        </div>
        
        <div class="tabs">
          <button class="tab-btn active" data-tab="appointments">📅 Мои записи</button>
          <button class="tab-btn" data-tab="articles">📚 Статьи</button>
        </div>
        
        <div class="tab-content" id="appointments">
          <h2>Ваши записи к врачу</h2>
          ${appointments.length === 0 ? `
            <div class="empty-state">
              <div class="empty-icon">📅</div>
              <p>У вас нет записей</p>
              <form id="book-form" class="form-box">
                <h3>Запись к врачу</h3>
                <div class="form-group">
                  <label>Выберите врача</label>
                  <select id="doctor-select" required>
                    <option value="">-- Выберите врача --</option>
                    ${database.doctors.map(d => `<option value="${d.id}">${d.name} (${d.specialty})</option>`).join('')}
                  </select>
                </div>
                <div class="form-group">
                  <label>Дата приёма</label>
                  <input type="date" id="appointment-date" required />
                </div>
                <div class="form-group">
                  <label>Время приёма</label>
                  <input type="time" id="appointment-time" required />
                </div>
                <button type="submit" class="btn btn-primary">Записаться →</button>
              </form>
            </div>
          ` : `
            <div class="card-grid">
              ${appointments.map(a => `
                <div class="card">
                  <h3>${a.doctorName}</h3>
                  <p><strong>Специальность:</strong> ${a.doctorSpecialty}</p>
                  <p><strong>Дата:</strong> ${a.date} в ${a.time}</p>
                  <p><strong>Статус:</strong> <span class="badge ${a.status === 'completed' ? 'badge-success' : 'badge-info'}">${a.status === 'completed' ? 'Завершено' : 'Назначено'}</span></p>
                  ${a.status === 'scheduled' ? `<button class="btn btn-danger btn-sm" onclick="cancelAppointment(${a.id})">Отменить</button>` : ''}
                </div>
              `).join('')}
            </div>
          `}
        </div>
        
        <div class="tab-content hidden" id="articles">
          <h2>📚 Медицинские статьи</h2>
          <div class="articles-grid">
            ${database.articles.map(a => `
              <div class="article-card">
                <div class="article-icon">${a.icon}</div>
                <h3>${a.title}</h3>
                <div class="article-category">${a.category}</div>
                <p>${a.content}</p>
                <div class="article-tips">
                  ${a.tips.map(t => `<div class="tip">✓ ${t}</div>`).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderDoctorDashboard() {
  return `
    <div class="dashboard">
      <nav class="navbar">
        <div class="navbar-logo">🏥 МедПорт</div>
        <div class="navbar-user">
          <span>${currentUser.name}</span>
          <button class="btn btn-sm" onclick="logout()">Выход</button>
        </div>
      </nav>
      <div class="container">
        <h1>👨‍⚕️ Кабинет врача</h1>
        <p>Функционал врача в разработке...</p>
      </div>
    </div>
  `;
}

function renderAdminDashboard() {
  const stats = getStatistics();
  
  return `
    <div class="dashboard">
      <nav class="navbar">
        <div class="navbar-logo">🏥 МедПорт</div>
        <div class="navbar-user">
          <span>${currentUser.name}</span>
          <button class="btn btn-sm" onclick="logout()">Выход</button>
        </div>
      </nav>
      <div class="container">
        <h1>👩‍💼 Панель администратора</h1>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-value">${stats.totalUsers}</div>
            <div class="stat-label">Пользователей</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${stats.totalDoctors}</div>
            <div class="stat-label">Врачей</div>
          </div>
        </div>
        <div class="tabs">
          <button class="tab-btn active" data-tab="create-doctor">Создать врача</button>
          <button class="tab-btn" data-tab="users">Пользователи</button>
        </div>
        <div class="tab-content" id="create-doctor">
          <h2>Создать аккаунт врача</h2>
          <form id="create-doctor-form" class="form-box">
            <div class="form-group">
              <label>Имя врача</label>
              <input type="text" id="doctor-name" placeholder="Доктор Иванов" required />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email" id="doctor-email" placeholder="doctor@clinic.ru" required />
            </div>
            <div class="form-group">
              <label>Пароль</label>
              <input type="password" id="doctor-password" placeholder="Минимум 4 символа" required />
            </div>
            <button type="submit" class="btn btn-primary">Создать врача →</button>
          </form>
        </div>
        <div class="tab-content hidden" id="users">
          <h2>Пользователи</h2>
          <div class="card-grid">
            ${database.users.map(u => `
              <div class="card">
                <h3>${u.name}</h3>
                <p><strong>Email:</strong> ${u.email}</p>
                <p><strong>Роль:</strong> <span class="badge">${u.role}</span></p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

// ===== EVENT LISTENERS =====
function attachEventListeners() {
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      login(email, password);
    });
  }
  
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('reg-name').value;
      const email = document.getElementById('reg-email').value;
      const password = document.getElementById('reg-password').value;
      const passwordConfirm = document.getElementById('reg-password-confirm').value;
      register(name, email, password, passwordConfirm);
    });
  }

  const createDoctorForm = document.getElementById('create-doctor-form');
  if (createDoctorForm) {
    createDoctorForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('doctor-name').value;
      const email = document.getElementById('doctor-email').value;
      const password = document.getElementById('doctor-password').value;
      createDoctorAccount(name, email, password);
    });
  }
  
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tabName = e.target.dataset.tab;
      document.querySelectorAll('.tab-content').forEach(t => t.classList.add('hidden'));
      document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
      document.getElementById(tabName)?.classList.remove('hidden');
      e.target.classList.add('active');
    });
  });
  
  const bookForm = document.getElementById('book-form');
  if (bookForm) {
    bookForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const doctorId = parseInt(document.getElementById('doctor-select').value);
      const date = document.getElementById('appointment-date').value;
      const time = document.getElementById('appointment-time').value;
      bookAppointment(doctorId, date, time);
    });
  }

  const aiInput = document.getElementById('ai-input');
  if (aiInput) {
    aiInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendAIMessage();
      }
    });
  }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', renderApp);
