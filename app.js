// ===== ENHANCED MEDICAL AI DATABASE =====
const medicalKnowledge = {
  // Системы организма
  cardiovascular: {
    keywords: ['сердце', 'сердечн', 'кардио', 'инфаркт', 'аритми', 'гипертони', 'давлени', 'артери', 'вена', 'кровь', 'холестерин'],
    answers: [
      '❤️ **Сердечно-сосудистая система**: Основные факторы риска - стресс, курение, гиподинамия, избыточный вес, плохое питание. Профилактика: регулярные упражнения 30 минут в день, здоровое питание (овощи, рыба, оливковое масло), контроль стресса. Норма давления: 120/80. При боли в груди, одышке - срочно к врачу!',
      '🏥 **Высокое давление (гипертония)**: Норма 120/80 мм рт. ст. Факторы риска: избыток соли, стресс, ожирение, сидячий образ жизни. DASH диета: овощи, фрукты, нежирное мясо, исключить соль. Физкультура, отказ от курения, медитация. Измеряйте давление регулярно!',
      '⚡ **Аритмия (нарушение ритма сердца)**: Ощущение перебоев, учащённого сердцебиения. Причины: кофеин, стресс, гормональные сбои, недостаток сна. Помощь: избегайте стимулянтов, медитация, йога. Обратитесь к кардиологу для ЭКГ и Холтера мониторинга.'
    ]
  },
  respiratory: {
    keywords: ['легкие', 'дыхани', 'кашел', 'пневмони', 'бронхит', 'астма', 'одышка', 'бронх', 'дыхатель', 'респиратор', 'воздух'],
    answers: [
      '🫁 **Дыхательная система**: Основные симптомы - кашель, одышка, боль в груди. Причины: инфекции, аллергия, загрязнение воздуха, курение. Профилактика: вентилируйте помещение, отказ от курения, вакцинация против гриппа и пневмонии, избегайте контакта с аллергенами.',
      '🤒 **Пневмония (воспаление лёгких)**: Симптомы - кашель с мокротой (может быть с кровью), температура выше 38°C, слабость, боль в груди при дыхании. ОПАСНО! Нужна срочная врачебная помощь и, возможно, антибиотики. Не занимайтесь самолечением!',
      '💨 **Бронхит**: Кашель (сначала сухой, потом с мокротой), температура до 38°C, усталость. Лечение: обильное питье, увлажнитель воздуха, отхаркивающие средства, тепло на грудь. Если не проходит более 2 недель - к врачу!'
    ]
  },
  digestive: {
    keywords: ['желудок', 'гастрит', 'язва', 'изжога', 'тошнота', 'рвота', 'диарея', 'запор', 'кишечник', 'пищеварени', 'животе', 'боль живот', 'брюшин'],
    answers: [
      '🍽️ **Гастрит (воспаление желудка)**: Симптомы - боль в верхней части живота, тошнота, изжога, отсутствие аппетита. Причины: стресс, острая пища, спиртное, бактерия Helicobacter pylori. Лечение: мягкая диета, исключить острое/кислое/жирное, лекарства. Обратитесь к гастроэнтерологу!',
      '⚠️ **Язва желудка**: Сильная боль в верхней части живота, часто ночью, может быть чёрный стул (признак кровотечения). СЕРЬЕЗНО! Может кровоточить и привести к перфорации. Нужны лекарства и строгая диета. Избегайте стресса, острого, алкоголя и кофеина!',
      '🔥 **Изжога**: Жжение за грудиной после еды. Причины: жирная пища, кофеин, шоколад, лежание после еды. Помощь: антациды, приподнимите голову во сне, ешьте маленькими порциями, избегайте триггеров.'
    ]
  },
  urinary: {
    keywords: ['почки', 'мочевой', 'нефрит', 'цистит', 'уретрит', 'камни', 'мочекаменная', 'мочеиспускани', 'моча', 'почечн'],
    answers: [
      '💧 **Нефрит (воспаление почек)**: Боль в пояснице, отёки, повышенное давление, кровь в моче, лихорадка. СЕРЬЕЗНО! Нужна помощь нефролога. Лечение: антибиотики, диета с ограничением соли, много воды. УЗИ почек обязательно!',
      '🪨 **Мочекаменная болезнь**: Острая боль в пояснице при движении камней, кровь в моче, учащённое мочеиспускание. Профилактика: пейте 2-3 литра воды в день, ограничьте кальций и оксалаты (шпинат, щавель), подвижный образ жизни. УЗИ помогает обнаружить камни.',
      '🔥 **Цистит (воспаление мочевого пузыря)**: Боль при мочеиспускании, частые позывы, может быть температура и кровь в моче. Лечение: антибиотики, много воды, тепло на низ живота, отвар ромашки. Обратитесь к урологу!'
    ]
  },
  nervous: {
    keywords: ['мозг', 'нервн', 'инсульт', 'голова', 'мигрень', 'головная боль', 'невралги', 'парализ', 'паралич', 'судороги', 'отпустить'],
    answers: [
      '🧠 **Инсульт (острое нарушение кровообращения мозга)**: Симптомы - внезапная слабость половины тела, нарушение речи, перекос лица, головокружение. ВЫЗЫВАЙТЕ СКОРУЮ НЕМЕДЛЕННО! Это угроза жизни. Первая помощь - положите человека, не давайте еду/воду. Время - мозг!',
      '🤕 **Мигрень**: Сильная головная боль на одной стороне головы, часто с тошнотой, рвотой и светобоязнью. Триггеры - стресс, гормоны, определённые продукты, недосыпание. Помощь: тёмное спокойное место, компресс, таблетки от боли. Профилактика: регулярный сон, йога, магний!',
      '⚡ **Невралгия тройничного нерва**: Острая жгучая боль в лице, часто с одной стороны. Причины - давление на нерв, герпес зостер, рассеянный склероз. Лечение - противосудорожные препараты, может помочь операция. Консультируйтесь с неврологом!'
    ]
  },
  musculoskeletal: {
    keywords: ['кость', 'остеопороз', 'артрит', 'артроз', 'остеохондроз', 'перелом', 'вывих', 'суставы', 'позвоночник', 'спина', 'боль спин', 'мышцы', 'связки'],
    answers: [
      '🦴 **Остеопороз (хрупкость костей)**: Кости становятся пористыми, легко ломаются. Риск повышен после 50 лет, особенно у женщин. Профилактика: кальций (молочные продукты, сыр, йогурт), витамин D (солнце, рыба), физкультура, отказ от курения. Проверьте костную плотность DEXA!',
      '🔴 **Артрит (воспаление суставов)**: Боль, отёк, скованность движений, особенно утром. Типы - ревматоидный (аутоиммунный), остеоартрит (износ). Лечение: противовоспалительные, физиотерапия, здоровый вес. Может потребоваться введение препаратов в сустав.',
      '⚠️ **Остеохондроз (поражение позвоночника)**: Дегенерация межпозвонковых дисков. Симптомы - боль в спине, шее, онемение рук и ног, ограничение движений. Профилактика: правильная осанка, зарядка, не поднимайте тяжести неправильно. Помогут физиотерапия, массаж, мануальная терапия!'
    ]
  },
  skin: {
    keywords: ['кожа', 'дерматит', 'экзема', 'псориаз', 'прыщи', 'акне', 'сыпь', 'грибок', 'лишай', 'ожог', 'раны'],
    answers: [
      '🔴 **Дерматит (воспаление кожи)**: Красные зудящие пятна, могут быть волдыри. Причины - аллергия, раздражители, инфекция, потница. Лечение: увлажняющие кремы, исключить раздражители, иногда гормональные мази. Обратитесь к дерматологу если не проходит!',
      '🌡️ **Экзема**: Хроническое воспаление кожи, зуд, волдыри, может быть инфекция. Триггеры - стресс, моющие средства, пищевые аллергены, изменения погоды. Помощь: увлажнение, ванны с овсянкой, избегайте триггеров, антигистаминные.',
      '🧴 **Акне (прыщи)**: Вызывают бактерии и избыток кожного сала. Может быть воспаление и рубцы. Лечение: очищение, салициловая кислота, бензоилпероксид, витамин А. В тяжелых случаях - антибиотики или изотретиноин. Не давите прыщи!'
    ]
  },
  vision: {
    keywords: ['глаз', 'зрени', 'катаракта', 'глаукома', 'миопи', 'дальнозоркость', 'астигматизм', 'конъюнктивит', 'офтальмолог', 'слепот'],
    answers: [
      '👁️ **Глаукома**: Повышенное давление внутри глаза повреждает зрительный нерв. ОПАСНА - может привести к слепоте! Часто бессимптомна до позднего этапа. Лечение - глазные капли, лазер, операция. Регулярные осмотры офтальмолога после 40 лет!',
      '🔍 **Катаракта**: Помутнение хрусталика, видение становится мутным, особенно у пожилых. Может быть после травмы или при диабете. Лечение - оперативное. Профилактика: UV защита, отказ от курения, здоровое питание (витамины).',
      '📖 **Близорукость (миопия)**: Видно хорошо близко, далеко - размыто. Причины - генетика, переутомление глаз, работа за компьютером. Помощь: очки, контактные линзы, возможно LASIK операция. Берегите глаза - делайте перерывы!'
    ]
  },
  hearing: {
    keywords: ['ухо', 'слух', 'отит', 'тугоухость', 'громкий звук', 'шум', 'звон в ухе', 'тиннитус', 'отоларинголог'],
    answers: [
      '👂 **Отит (воспаление уха)**: Боль в ухе, могут быть выделения, снижение слуха, может быть температура. Причины - инфекция, вода в ухе, травма. Лечение: антибиотики, обезболивающие, капли. ОПАСНО - может привести к менингиту или глухоте! К отоларингологу срочно!',
      '🔊 **Потеря слуха**: Может быть врождённой или приобретённой (шум, возраст, инфекции, некоторые лекарства). Профилактика: используйте наушники на безопасной громкости (ниже 60дБ), защитите уши от громких звуков, гигиена ушей. Слухопротезирование помогает!',
      '🔔 **Тиннитус (звон в ушах)**: Постоянный звон, шум, щелканье в ушах. Причины - повреждение волосковых клеток, стресс, некоторые лекарства, менопауза. Лечение: звуковая терапия, снятие стресса, когнитивно-поведенческая терапия. Обратитесь к отоларингологу!'
    ]
  },
  dental: {
    keywords: ['зуб', 'зубы', 'кариес', 'пародонтит', 'пульпит', 'гингивит', 'зубной', 'десна', 'зубная эмаль', 'стоматолог'],
    answers: [
      '🦷 **Кариес (разрушение зуба)**: Вызывают бактерии, сахар и кислоты. Профилактика - чистите зубы 2 раза в день по 2 минуты, зубная нить, избегайте сахара, ополаскиватель. Лечение: пломба, очистка. Не запускайте - может привести к потере зуба или инфекции!',
      '🩸 **Пародонтит (воспаление дёсен и костей)**: Кровоточивость, гноение, рыхлость дёсен, шатаются зубы. ОПАСНО - может привести к потере зубов! Лечение: профессиональная чистка, гигиена, иногда антибиотики, может потребоваться операция. К стоматологу и парадонтологу!',
      '🪥 **Гингивит (воспаление дёсен)**: Красные, опухшие, кровоточащие дёсны, запах из рта. Причина - плохая гигиена, гормональные изменения. Лечение: правильная чистка, зубная нить, полоскание хлоргексидином, противовоспалительные. Вовремя лечите - может перерасти в пародонтит!'
    ]
  },
  hormonal: {
    keywords: ['гормон', 'щитовидная', 'диабет', 'гипотиреоз', 'гипертиреоз', 'инсулин', 'сахар', 'эндокринолог', 'менопауза', 'климакс'],
    answers: [
      '🩸 **Сахарный диабет**: Высокий уровень глюкозы в крови. Типы 1 (аутоиммунный) и 2 (образ жизни). Симптомы - жажда, частое мочеиспускание, усталость, слабое зрение. Лечение: диета, инсулин или таблетки, физкультура, контроль веса. Проверяйте сахар регулярно! Осложнения - очень серьезные!',
      '🦋 **Гипертиреоз (избыток гормонов щитовидной железы)**: Ускоренный метаболизм, потеря веса несмотря на хороший аппетит, дрожь, беспокойство, тахикардия. Лечение: противотиреоидные препараты, бета-блокаторы, иногда облучение или операция. К эндокринологу!',
      '😔 **Гипотиреоз (недостаток гормонов щитовидной железы)**: Усталость, набор веса, депрессия, зябкость, сухость кожи. Лечение: гормон щитовидной железы (L-тироксин). Регулярно проверяйте уровень ТТГ - важно правильно подобрать дозу.'
    ]
  },
  immune: {
    keywords: ['иммунитет', 'СПИД', 'ВИЧ', 'вирус', 'антитело', 'вакцина', 'прививка', 'инфекция', 'иммунная', 'коронавирус'],
    answers: [
      '🛡️ **Иммунная система**: Защищает от инфекций. Укрепляйте: витамин C (апельсины, киви), витамин D (солнце, рыба), цинк (мясо, орехи), сон 7-9 часов, физкультура, здоровое питание. Избегайте стресса - он ослабляет иммунитет!',
      '⚠️ **ВИЧ/СПИД**: Вирус поражает иммунную систему. Передача - через кровь, половой контакт, от матери к ребёнку. НЕ передается при рукопожатиях! Профилактика - защита, регулярное тестирование. При диагнозе - антиретровирусная терапия спасает жизнь, человек может жить нормально!',
      '💉 **Вакцины и прививки**: Обучают иммунную систему. Профилактика множества болезней: грипп, корь, полиомиелит, коронавирус, гепатит. Побочные эффекты обычно лёгкие (боль в руке, небольшая температура). Вакцинируйтесь - это спасает жизни!'
    ]
  },
  reproductive: {
    keywords: ['беременность', 'роды', 'плод', 'матка', 'токсикоз', 'гинеколог', 'менструация', 'гинекологический', 'простата', 'половой'],
    answers: [
      '👶 **Беременность**: Период примерно 40 недель развития плода. Важно: регулярные осмотры гинеколога, фолиевая кислота (400мкг в день), витамины, правильное питание, избегайте курения, алкоголя и наркотиков. Токсикоз в 1м триместре - нормально, часто проходит. Следите за давлением!',
      '🤰 **Гестационный диабет**: Повышение сахара при беременности. Грозит осложнениями для матери (преэклампсия) и ребёнка (крупный плод, гипогликемия). Контролируйте сахар, диета, физкультура. Обычно проходит после родов, но повышает риск диабета 2 типа в будущем.',
      '💊 **Менструальный цикл**: Норма 21-35 дней. Если нарушен - могут быть гормональные проблемы, стресс, чрезмерная физическая нагрузка, недостаток веса. Обильные кровотечения - могут быть причиной анемии. К гинеколог-эндокринологу если проблемы длятся более 3 месяцев!'
    ]
  },
  sports_injuries: {
    keywords: ['мышцы', 'спорт', 'травма', 'растяжени', 'ушиб', 'вывих', 'связки', 'растяжени связок', 'спортсмен', 'разрыв'],
    answers: [
      '💪 **Растяжение мышц**: Боль, отёк, синяки, ограничение движений. Лечение: RICE (отдых, лёд 15 минут, компрессия, возвышение), противовоспалительные. Не тренируйтесь пока не заживёт - может быть 1-3 недели. Профилактика - разминка перед спортом!',
      '⚠️ **Вывих сустава**: Сустав смещается из суставной сумки. БОЛЕЗНЕННО и опасно! Помощь - иммобилизация (фиксация), лёд, срочно к врачу. Может потребоваться репозиция (вправление). Реабилитация очень важна - может быть 4-6 недель!',
      '🏃 **Растяжение связок**: Связки порваны или растянуты. Боль, отёк, невозможно нагружать. Грейд 1 (лёгкое) до Грейд 3 (полный разрыв). Лечение: RICE, физиотерапия, может потребоваться операция при полном разрыве. Восстановление - 2-6 месяцев в зависимости от тяжести!'
    ]
  },
  general: {
    keywords: ['болезнь', 'болею', 'заболевани', 'здоровье', 'болит', 'симптом', 'лечени', 'врач', 'медицина', 'болезн', 'медицинск'],
    answers: [
      '🏥 **Общие советы по здоровью**: Здоровье - это образ жизни! Ключевые факторы: здоровое питание (овощи, фрукты, цельные зерна), физкультура (30 минут в день), здоровый сон (7-9 часов), управление стрессом (медитация, йога), отказ от вредных привычек (курение, алкоголь).',
      '💊 **Когда обращаться к врачу**: Обратитесь срочно при: сильная боль, кровотечение, затруднённое дыхание, боль в груди, признаки инсульта, потеря сознания. Запишитесь к врачу при: симптомы длятся более недели, повторяются, влияют на качество жизни.',
      '📋 **Профилактика**: Проходите профилактические осмотры ежегодно, следите за весом, контролируйте давление, проверяйте холестерин, делайте прививки, занимайтесь физкультурой. Профилактика - это лучшее лечение!'
    ]
  }
};

function getAIResponse(question) {
  const q = question.toLowerCase().trim();
  
  if (!q) return '❓ Пожалуйста, задайте вопрос про здоровье, болезни, органы человека или лечение. Я помогу чем смогу!';
  
  // Ищем подходящую категорию с более гибким поиском
  for (let category in medicalKnowledge) {
    for (let keyword of medicalKnowledge[category].keywords) {
      if (q.includes(keyword)) {
        const answers = medicalKnowledge[category].answers;
        const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
        return randomAnswer;
      }
    }
  }
  
  // Если не совпадает точно, пробуем более общий поиск
  if (q.includes('что') || q.includes('как') || q.includes('почему') || q.includes('симптом') || q.includes('лечи') || q.includes('болез')) {
    return medicalKnowledge.general.answers[0];
  }
  
  // Если совсем не медицинский вопрос
  return '❌ Я специализируюсь только на медицинских вопросах. Пожалуйста, спросите про: болезни, органы человека, симптомы, лечение, здоровье. Например: "Что такое гастрит?", "Как лечить кашель?", "Симптомы диабета?"';
}

// ===== DATABASE =====
const database = {
  users: [
    { id: 1, name: 'Главный администратор', email: 'admin@clinic.ru', role: 'admin', password: 'admin123', blocked: false, createdAt: new Date() }
  ],
  doctors: [
    { id: 1, name: 'Доктор Смирнов', specialty: 'Терапевт', rating: 4.8, experience: '12 лет', photo: '👨‍⚕️' },
    { id: 2, name: 'Доктор Петрова', specialty: 'Кардиолог', rating: 4.9, experience: '15 лет', photo: '👩‍⚕️' },
    { id: 3, name: 'Доктор Сидоров', specialty: 'Невролог', rating: 4.7, experience: '8 лет', photo: '👨‍⚕️' }
  ],
  appointments: [],
  medicalRecords: [],
  articles: [
    { id: 1, title: 'Здоровье сердца', category: 'Кардиология', icon: '❤️', content: 'Контролируйте давление, ограничьте соль, занимайтесь спортом 30 минут в день. Рекомендуемое давление: 120/80 мм рт. ст.', tips: ['Регулярные упражнения', 'DASH диета', 'Контроль стресса', 'Отказ от курения'], author: 'Система', published: true },
    { id: 2, title: 'Дыхательная система', category: 'Пульмонология', icon: '🫁', content: 'Здоровые лёгкие - основа жизни. Избегайте курения, загрязнённого воздуха. При затруднённом дыхании обратитесь к врачу.', tips: ['Избегайте курения', 'Вентилируйте помещение', 'Вакцинируйтесь', 'Упражнения дыхания'], author: 'Система', published: true },
    { id: 3, title: 'ЖКТ и пищеварение', category: 'Гастроэнтерология', icon: '🍽️', content: 'Правильное питание - ключ к здоровому пищеварению. Ешьте медленно, жуйте тщательно. Избегайте жирного и острого.', tips: ['Маленькие порции', 'Много воды', 'Клетчатка', 'Избегайте спешки'], author: 'Система', published: true },
    { id: 4, title: 'Почки и мочеполовая система', category: 'Нефрология', icon: '💧', content: 'Пейте 2-3 литра воды в день. Это помогает предотвратить камни в почках. Следите за цветом мочи - она должна быть светлой.', tips: ['2-3 литра воды', 'Ограничьте соль', 'Активный образ жизни', 'Регулярные проверки'], author: 'Система', published: true },
    { id: 5, title: 'Нервная система и психическое здоровье', category: 'Неврология', icon: '🧠', content: 'Стресс и тревога влияют на здоровье. Практикуйте медитацию, йогу, глубокое дыхание. Спите 7-9 часов в сутки.', tips: ['Медитация', 'Йога', 'Прогулки на природе', 'Здоровый сон'], author: 'Система', published: true },
    { id: 6, title: 'Опорно-двигательный аппарат', category: 'Ортопедия', icon: '🦴', content: 'Правильная осанка предотвращает боли в спине. Укрепляйте мышцы спины и пресса. При болях не поднимайте тяжести.', tips: ['Правильная осанка', 'Упражнения для спины', 'Не переносите тяжести', 'Физиотерапия'], author: 'Система', published: true },
    { id: 7, title: 'Кожа и дерматология', category: 'Дерматология', icon: '🔴', content: 'Используйте солнцезащиту SPF 30+ ежедневно. Увлажняйте кожу. При сыпи или зуде обратитесь к дерматологу.', tips: ['Солнцезащита', 'Увлажнение', 'Очищение кожи', 'Избегайте химии'], author: 'Система', published: true },
    { id: 8, title: 'Зрение и офтальмология', category: 'Офтальмология', icon: '👁️', content: 'Защищайте глаза от UV лучей. Делайте перерывы при работе за экраном. После 40 лет - ежегодные осмотры офтальмолога.', tips: ['UV защита', 'Перерывы при ПК', 'Гимнастика для глаз', 'Регулярные осмотры'], author: 'Система', published: true },
    { id: 9, title: 'Уши и слух', category: 'Отоларингология', icon: '👂', content: 'Не используйте наушники на громкости выше 60%. Защищайте уши от громких звуков. При звоне в ушах обратитесь к врачу.', tips: ['Безопасная громкость', 'Защита от шума', 'Гигиена ушей', 'Регулярные проверки'], author: 'Система', published: true },
    { id: 10, title: 'Зубы и полость рта', category: 'Стоматология', icon: '🦷', content: 'Чистите зубы 2 раза в день по 2 минуты. Используйте зубную нить. Посещайте стоматолога 2 раза в год.', tips: ['Чистка 2 раза в день', 'Зубная нить', 'Полоскание', 'Профосмотры'], author: 'Система', published: true },
    { id: 11, title: 'Гормональная система', category: 'Эндокринология', icon: '⚡', content: 'Сахарный диабет 2 типа можно предотвратить здоровым образом жизни. Проверяйте уровень сахара регулярно.', tips: ['Здоровое питание', 'Физкультура', 'Контроль веса', 'Регулярные тесты'], author: 'Система', published: true },
    { id: 12, title: 'Иммунитет и профилактика', category: 'Иммунология', icon: '🛡️', content: 'Вакцины спасают жизни. Витамин C, цинк, витамин D укрепляют иммунитет. Спите достаточно и управляйте стрессом.', tips: ['Вакцинируйтесь', 'Витамины', 'Здоровый сон', 'Физкультура'], author: 'Система', published: true },
    { id: 13, title: 'Гинекология и женское здоровье', category: 'Гинекология', icon: '👶', content: 'Регулярные осмотры гинеколога - основа женского здоровья. Во время беременности - витамины и здоровое питание.', tips: ['Регулярные осмотры', 'Гинекологическая профилактика', 'Здоровое питание', 'Фитнес'], author: 'Система', published: true },
    { id: 14, title: 'Спортивная медицина', category: 'Спортивная медицина', icon: '🏃', content: 'Разминка перед тренировкой предотвращает травмы. Восстановление не менее важно, чем сама тренировка.', tips: ['Разминка 10 минут', 'Постепенное увеличение', 'Восстановление', 'Правильная техника'], author: 'Система', published: true },
    { id: 15, title: 'Питание и диетология', category: 'Диетология', icon: '🥗', content: 'Сбалансированное питание включает белки, жиры, углеводы. Ешьте радугу - разноцветные овощи и фрукты.', tips: ['Белки, жиры, углеводы', 'Много воды', 'Овощи и фрукты', 'Меньше обработанной еды'], author: 'Система', published: true }
  ],
  logs: []
};

// ===== STATE =====
let currentUser = null;
let isRegistering = false;
let showAIChat = false;

// ===== AUTHENTICATION =====
function login(email, password) {
  const user = database.users.find(u => u.email === email && u.password === password);
  if (!user) {
    alert('Неверный email или пароль');
    return;
  }
  if (user.blocked) {
    alert('Ваш аккаунт заблокирован. Обратитесь к администратору.');
    return;
  }
  currentUser = { ...user };
  renderApp();
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
    password,
    blocked: false,
    createdAt: new Date()
  };
  
  database.users.push(newUser);
  addLog(`Новый пациент зарегистрирован: ${name} (${email})`);
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

// ===== LOGGING =====
function addLog(message) {
  database.logs.push({
    id: database.logs.length + 1,
    timestamp: new Date(),
    message: message,
    user: currentUser ? currentUser.name : 'Система'
  });
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
function changeUserPassword(userId, newPassword) {
  const user = database.users.find(u => u.id === userId);
  if (user) {
    user.password = newPassword;
    addLog(`Пароль изменён для пользователя: ${user.name}`);
    alert('✓ Пароль изменён');
    renderApp();
  }
}

function blockUser(userId) {
  const user = database.users.find(u => u.id === userId);
  if (user && user.role !== 'admin') {
    user.blocked = !user.blocked;
    addLog(`Пользователь ${user.blocked ? 'заблокирован' : 'разблокирован'}: ${user.name}`);
    alert(user.blocked ? '✓ Пользователь заблокирован' : '✓ Пользователь разблокирован');
    renderApp();
  }
}

function removeUser(userId) {
  const user = database.users.find(u => u.id === userId);
  if (user && user.role === 'admin') {
    alert('⚠️ Нельзя удалить администратора!');
    return;
  }
  if (confirm(`Вы уверены, что хотите удалить пользователя ${user.name}?`)) {
    database.users = database.users.filter(u => u.id !== userId);
    addLog(`Пользователь удалён: ${user.name}`);
    alert('✓ Пользователь удалён');
    renderApp();
  }
}

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
    password,
    blocked: false,
    createdAt: new Date()
  };
  
  database.users.push(newDoctor);
  addLog(`Новый врач создан: ${name}`);
  alert(`✓ Врач ${name} создан!`);
  renderApp();
}

function publishArticle(title, category, icon, content, tips) {
  if (!title || !category || !content) {
    alert('Заполни обязательные поля');
    return;
  }
  
  const article = {
    id: Math.max(...database.articles.map(a => a.id), 0) + 1,
    title,
    category,
    icon: icon || '📝',
    content,
    tips: tips ? tips.split(',').map(t => t.trim()) : [],
    author: currentUser.name,
    published: true,
    publishedAt: new Date()
  };
  
  database.articles.push(article);
  addLog(`Новая статья опубликована: ${title}`);
  alert('✓ Статья опубликована!');
  renderApp();
}

function getStatistics() {
  return {
    totalUsers: database.users.length,
    totalPatients: database.users.filter(u => u.role === 'patient').length,
    totalDoctors: database.users.filter(u => u.role === 'doctor').length,
    blockedUsers: database.users.filter(u => u.blocked).length,
    totalArticles: database.articles.filter(a => a.published).length,
    totalLogs: database.logs.length
  };
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
  return `
    <div class="dashboard">
      <nav class="navbar">
        <div class="navbar-logo">🏥 МедПорт</div>
        <div class="navbar-user">
          <span>${currentUser.name}</span>
          <button class="btn btn-sm" onclick="toggleAIChat()">🤖 AI</button>
          <button class="btn btn-sm" onclick="logout()">Выход</button>
        </div>
      </nav>
      
      ${showAIChat ? `
        <div class="ai-chat">
          <div class="ai-header">
            <h3>🤖 Медицинский AI</h3>
            <button onclick="toggleAIChat()">✕</button>
          </div>
          <div class="ai-messages" id="ai-messages">
            <div class="ai-message bot-msg">
              <div class="msg-text">Привет! Я здесь, чтобы помочь с медицинскими вопросами. Спросите про: болезни, органы, симптомы, лечение!</div>
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
        <p>Добро пожаловать! Используйте AI ассистент для вопросов про здоровье.</p>
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
            <div class="stat-label">Всего пользователей</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${stats.totalPatients}</div>
            <div class="stat-label">Пациентов</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${stats.totalDoctors}</div>
            <div class="stat-label">Врачей</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${stats.blockedUsers}</div>
            <div class="stat-label">Заблокировано</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${stats.totalArticles}</div>
            <div class="stat-label">Статей</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${stats.totalLogs}</div>
            <div class="stat-label">Логов</div>
          </div>
        </div>
        
        <div class="tabs">
          <button class="tab-btn active" data-tab="users">👥 Пользователи</button>
          <button class="tab-btn" data-tab="create-doctor">➕ Создать врача</button>
          <button class="tab-btn" data-tab="articles">📝 Статьи</button>
          <button class="tab-btn" data-tab="logs">📋 Логи</button>
        </div>
        
        <div class="tab-content" id="users">
          <h2>Управление пользователями</h2>
          <div class="card-grid">
            ${database.users.map(u => `
              <div class="card">
                <h3>${u.name}</h3>
                <p><strong>Email:</strong> ${u.email}</p>
                <p><strong>Роль:</strong> <span class="badge">${u.role}</span></p>
                <p><strong>Статус:</strong> <span class="badge ${u.blocked ? 'badge-danger' : 'badge-success'}">${u.blocked ? 'Заблокирован' : 'Активен'}</span></p>
                <div style="margin-top: 1rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
                  ${u.role !== 'admin' ? `
                    <button class="btn btn-sm btn-primary" onclick="blockUser(${u.id})">${u.blocked ? 'Разблокировать' : 'Заблокировать'}</button>
                    <button class="btn btn-sm btn-secondary" onclick="alert('Смена пароля: введите новый пароль'); const p = prompt('Новый пароль:'); if (p) changeUserPassword(${u.id}, p)">Смена пароля</button>
                    <button class="btn btn-sm btn-danger" onclick="removeUser(${u.id})">Удалить</button>
                  ` : `
                    <span style="color: #1e90ff; padding: 0.5rem;">Администратор</span>
                  `}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div class="tab-content hidden" id="create-doctor">
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
        
        <div class="tab-content hidden" id="articles">
          <h2>Публикация статей</h2>
          <form id="publish-article-form" class="form-box">
            <div class="form-group">
              <label>Заголовок статьи</label>
              <input type="text" id="article-title" placeholder="Название статьи" required />
            </div>
            <div class="form-group">
              <label>Категория</label>
              <input type="text" id="article-category" placeholder="Например: Кардиология" required />
            </div>
            <div class="form-group">
              <label>Иконка (эмодзи)</label>
              <input type="text" id="article-icon" placeholder="Например: ❤️" value="📝" />
            </div>
            <div class="form-group">
              <label>Содержание статьи</label>
              <textarea id="article-content" placeholder="Напишите содержание статьи..." required></textarea>
            </div>
            <div class="form-group">
              <label>Советы (через запятую)</label>
              <input type="text" id="article-tips" placeholder="Совет 1, Совет 2, Совет 3" />
            </div>
            <button type="submit" class="btn btn-primary">Опубликовать →</button>
          </form>
          
          <h2 style="margin-top: 3rem;">Опубликованные статьи</h2>
          <div class="articles-grid">
            ${database.articles.filter(a => a.published).map(a => `
              <div class="article-card">
                <div class="article-icon">${a.icon}</div>
                <h3>${a.title}</h3>
                <div class="article-category">${a.category}</div>
                <p>${a.content.substring(0, 80)}...</p>
                <p style="font-size: 0.8rem; color: rgba(0,0,0,0.5); margin-top: 0.5rem;">Автор: ${a.author}</p>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div class="tab-content hidden" id="logs">
          <h2>Логи действий</h2>
          <table class="data-table">
            <thead>
              <tr>
                <th>Время</th>
                <th>Пользователь</th>
                <th>Действие</th>
              </tr>
            </thead>
            <tbody>
              ${database.logs.slice().reverse().map(log => `
                <tr>
                  <td>${new Date(log.timestamp).toLocaleString('ru-RU')}</td>
                  <td>${log.user}</td>
                  <td>${log.message}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
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

  const publishForm = document.getElementById('publish-article-form');
  if (publishForm) {
    publishForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('article-title').value;
      const category = document.getElementById('article-category').value;
      const icon = document.getElementById('article-icon').value;
      const content = document.getElementById('article-content').value;
      const tips = document.getElementById('article-tips').value;
      publishArticle(title, category, icon, content, tips);
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
