// ===== ENHANCED MEDICAL AI =====
const medicalDB = {
  // Ноги, стопы, нижние конечности
  'ноги|нога|стопа|пальцы ног|голень|бедро|колено|икры|щиколотка': {
    name: 'Ноги и нижние конечности',
    answers: [
      '🦵 **Ноги (нижние конечности)**: Состоят из бедра, голени, стопы. Основные проблемы: боли, отёки, варикоз, плоскостопие, спазмы. Профилактика: удобная обувь, физкультура, массаж, поднятие ног выше сердца при отёках. При постоянных болях обратитесь к неврологу или хирургу!',
      '🦶 **Плоскостопие**: Своды стопы опущены. Симптомы: боли в ногах, усталость, нарушение осанки. Лечение: специальная обувь, стельки, упражнения для укрепления мышц стопы. Физиотерапия помогает!',
      '⚠️ **Варикоз (расширение вен)**: Вены опухают, становятся заметны, может быть боль и судороги. Причины: генетика, беременность, сидячий образ жизни. Профилактика: компрессионные чулки, движение, не перегревать ноги. Лечение: лазер или хирургия в тяжелых случаях.'
    ]
  },
  
  // Руки
  'рук|рука|палец|кисть|локоть|плечо|предплечье|кулак': {
    name: 'Руки и верхние конечности',
    answers: [
      '🙌 **Руки (верхние конечности)**: Состоят из плеча, локтя, предплечья, кисти. Основные проблемы: боли, онемение, спазмы, тендинит. Причины: перегрузка, неправильная осанка, синдром карпального канала. Профилактика: регулярные перерывы при работе за ПК, разминка, правильная осанка.',
      '🖐️ **Синдром карпального канала**: Онемение и покалывание в пальцах (большой, указательный, средний). Вызвано сдавлением нерва в запястье. Лечение: ортез на ночь, противовоспалительные, физиотерапия. В тяжелых случаях - операция.',
      '💪 **Тендинит (воспаление сухожилия)**: Боль в локте, запястье, при движении рукой. Причины: перегрузка (теннис, сверление). Лечение: отдых, лёд, компрессия, противовоспалительные, физиотерапия. Не игнорируйте - может перейти в хроническую форму!'
    ]
  },

  // Голова, мозг, неврология
  'голова|мозг|нервн|голов боль|мигрень|инсульт|паралич|судороги|головокруж|головокружен': {
    name: 'Голова и нервная система',
    answers: [
      '🧠 **Головная боль**: Могут быть разные виды - напряжение, мигрень, кластерная. Причины: стресс, недосыпание, дегидратация, напряжение мышц шеи. Помощь: отдых, вода, аспирин/парацетамол, компресс, тёмное место. Если постоянно - к неврологу!',
      '⚡ **Инсульт - СРОЧНО 911!**: Признаки - внезапная слабость половины тела, нарушение речи, перекос лица, головокружение, потеря зрения. НЕМЕДЛЕННО вызовите скорую! Каждая минута важна! Время = мозг!',
      '🤕 **Мигрень**: Сильная пульсирующая боль на одной стороне головы, может быть тошнота, рвота, светобоязнь. Триггеры: стресс, гормоны, некоторые продукты, недосыпание. Помощь: тёмное место, триптаны, медитация. Профилактика важна!'
    ]
  },

  // Живот, пищеварение
  'живот|желудок|кишечник|гастрит|язва|диарея|запор|рвота|тошнота|боль живот|пищеварени': {
    name: 'Живот и пищеварение',
    answers: [
      '🍽️ **Гастрит (воспаление желудка)**: Боль в верхней части живота, тошнота, изжога, отсутствие аппетита. Причины: стресс, острая пища, алкоголь, бактерия H. pylori. Лечение: мягкая диета, лекарства, антибиотики если бактерия. К гастроэнтерологу!',
      '🚽 **Диарея**: Частый жидкий стул, может быть вызвана инфекцией, аллергией, стрессом. Лечение: много воды (чтобы не было обезвоживания), солевые растворы, диета (рис, банан, сухари), противодиарейные препараты. Если длится более 2 дней - к врачу!',
      '⚠️ **Язва желудка**: Сильная боль в верхней части живота, может быть кровь в рвоте или чёрный стул. СЕРЬЕЗНО! Может кровоточить. Лечение: лекарства, диета, антибиотики. Избегайте спиртного, острого, кофеина!'
    ]
  },

  // Сердце, давление
  'сердце|сердечн|кардио|давлени|гипертони|инфаркт|аритми|пульс|холестерин': {
    name: 'Сердце и кровообращение',
    answers: [
      '❤️ **Сердце**: Качает кровь по организму. Основные болезни: гипертония (высокое давление), инфаркт, аритмия. Профилактика: физкультура, здоровое питание (овощи, рыба), отказ от курения, контроль стресса. Норма давления: 120/80.',
      '🏥 **Высокое давление (гипертония)**: Норма 120/80. Факторы риска: стресс, соль, ожирение, сидячий образ жизни, возраст. Лечение: DASH диета, физкультура, медикаменты, медитация. Измеряйте давление регулярно - опасно без симптомов!',
      '⚡ **Аритмия (нарушение ритма)**: Неправильное сердцебиение, ощущение перебоев. Может быть опасна! Причины: кофеин, стресс, гормоны, болезнь сердца. Обязательна ЭКГ и консультация кардиолога!'
    ]
  },

  // Легкие, дыхание
  'легкие|дыхани|кашел|пневмони|бронхит|астма|одышка|респиратор|воздух': {
    name: 'Легкие и дыхание',
    answers: [
      '🫁 **Легкие**: Органы дыхания. Вдыхают кислород, выдыхают CO2. Основные болезни: пневмония, бронхит, астма. Профилактика: отказ от курения, вентиляция, вакцины, избегайте загрязнения воздуха.',
      '🤒 **Пневмония (воспаление легких)**: Кашель с мокротой, температура выше 38°C, боль в груди при дыхании, одышка. ОПАСНО! Нужна срочная помощь и антибиотики. НЕ занимайтесь самолечением!',
      '💨 **Бронхит**: Кашель (сначала сухой, потом с мокротой), температура до 38°C, усталость. Лечение: питьё, увлажнитель, отхаркивающие, тепло. Если не проходит 2+ недели - к врачу!'
    ]
  },

  // Почки, мочевой
  'почки|мочевой|нефрит|цистит|уретрит|камни|моча|мочеиспускани': {
    name: 'Почки и мочеполовая система',
    answers: [
      '💧 **Почки**: Фильтруют кровь, производят мочу. Основные болезни: нефрит, камни, почечная недостаточность. Профилактика: много воды, здоровое питание, контроль давления, отказ от алкоголя.',
      '🪨 **Камни в почках**: Острая боль в пояснице, кровь в моче. Профилактика: пейте 2-3 литра воды в день, ограничьте кальций/оксалаты (шпинат, щавель). УЗИ помогает обнаружить.',
      '🔥 **Цистит (воспаление мочевого пузыря)**: Боль при мочеиспускании, частые позывы, может быть температура. Лечение: антибиотики, много воды, тепло. К урологу!'
    ]
  },

  // Общее здоровье, профилактика
  'здоровье|профилактик|диета|питани|спорт|упражнени|физкультур|вес|ожирени|похудени': {
    name: 'Общее здоровье',
    answers: [
      '🏥 **Здоровье - это образ жизни!** Ключевые факторы: здоровое питание (овощи, фрукты, цельные зёрна), физкультура (30 минут в день), сон 7-9 часов, управление стрессом (йога, медитация), отказ от вредных привычек.',
      '💪 **Физкультура**: 30 минут активности в день укрепляет сердце, мышцы, кости. Выбирайте то, что нравится: ходьба, плавание, танцы, йога, бег. Разминка перед упражнениями важна!',
      '🥗 **Здоровое питание**: Сбалансируйте: белки (мясо, рыба, яйца), жиры (оливковое масло, орехи), углеводы (цельные зёрна). Ешьте радугу - разные овощи и фрукты. Пейте 2+ литра воды в день!'
    ]
  },

  // Кожа
  'кожа|дерматит|экзема|псориаз|прыщи|акне|сыпь|грибок|лишай': {
    name: 'Кожа',
    answers: [
      '🔴 **Кожа**: Самый большой орган. Защищает от инфекций, регулирует температуру. Основные проблемы: дерматит, экзема, прыщи, инфекции.',
      '🧴 **Акне (прыщи)**: Вызывают бактерии и избыток кожного сала. Лечение: очищение, салициловая кислота, бензоилпероксид, витамин А. НЕ давите! К дерматологу в тяжелых случаях.',
      '🌡️ **Экзема**: Хроническое воспаление, зуд, волдыри. Триггеры: мыло, аллергены, стресс. Помощь: увлажнение, ванны с овсянкой, гормональные мази. Избегайте триггеров!'
    ]
  },

  // Глаза
  'глаз|зрени|катаракта|глаукома|миопи|близоркость|дальнозоркость|астигматизм': {
    name: 'Глаза и зрение',
    answers: [
      '👁️ **Глаза**: Органы зрения. Основные болезни: близорукость, дальнозоркость, катаракта, глаукома. Профилактика: UV защита, перерывы при ПК (20-20-20 правило: каждые 20 минут смотрите на 20 метров 20 секунд).',
      '🔍 **Близорукость (миопия)**: Видно хорошо близко, далеко размыто. Помощь: очки, линзы, возможна LASIK операция. Берегите глаза - частые перерывы при работе за экраном!',
      '⚠️ **Глаукома**: Повышенное давление в глазу повреждает зрительный нерв. ОПАСНА - может привести к слепоте! Часто бессимптомна. Нужны регулярные осмотры офтальмолога после 40 лет!'
    ]
  },

  // Уши
  'ухо|слух|отит|тугоухость|звон в ухе|тиннитус': {
    name: 'Уши и слух',
    answers: [
      '👂 **Ухо и слух**: Орган слуха состоит из наружного уха, среднего уха, внутреннего уха. Основные болезни: отит, потеря слуха, тиннитус.',
      '🔊 **Отит (воспаление уха)**: Боль в ухе, может быть выделение, температура. ОПАСНО - может привести к менингиту! Лечение: антибиотики, обезболивающие. К отоларингологу срочно!',
      '🔔 **Тиннитус (звон в ушах)**: Постоянный звон, шум, щелканье. Причины: повреждение клеток, стресс, некоторые лекарства. Лечение: звуковая терапия, снижение стресса, когнитивная терапия.'
    ]
  },

  // Зубы
  'зуб|зубы|кариес|пародонтит|пульпит|гингивит|десна|стоматолог': {
    name: 'Зубы и полость рта',
    answers: [
      '🦷 **Зубы**: Нужны для жевания. Основные болезни: кариес, пародонтит, воспаление десен. Профилактика: чистка 2 раза в день, зубная нить, частые осмотры стоматолога.',
      '🪥 **Кариес (разрушение зуба)**: Вызывают бактерии и сахар. Профилактика: чистка, нить, избегайте сахара. Лечение: пломба. НЕ запускайте - может привести к потере зуба!',
      '🩸 **Пародонтит (воспаление десен)**: Кровоточивость, гноение, шатание зубов. ОПАСНО - может привести к потере зубов! Лечение: профессиональная чистка, гигиена, антибиотики. К стоматологу!'
    ]
  }
};

function getAIResponse(question) {
  const q = question.toLowerCase().trim();
  
  if (!q) return '❓ Пожалуйста, задайте вопрос про здоровье, болезни или органы человека. Я помогу!';
  
  // Ищем совпадение в базе знаний
  for (let key in medicalDB) {
    const keywords = key.split('|');
    for (let keyword of keywords) {
      if (q.includes(keyword)) {
        const answers = medicalDB[key].answers;
        return answers[Math.floor(Math.random() * answers.length)];
      }
    }
  }
  
  // Если вообще не медицинское
  return '❌ Я отвечаю только на медицинские вопросы про здоровье, болезни и органы человека. Спросите что-то вроде: "Что такое нога?", "Как лечить кашель?", "Симптомы диабета?", "Что такое сердце?"';
}

// ===== DATABASE WITH LOCALSTORAGE =====
let database = {
  users: [
    { id: 1, name: 'Главный администратор', email: 'abboskulovtoxir@gmail.com', role: 'admin', password: '10052005', blocked: false, createdAt: new Date().toISOString() }
  ],
  doctors: [
    { id: 1, name: 'Доктор Смирнов', specialty: 'Терапевт', rating: 4.8, experience: '12 лет' },
    { id: 2, name: 'Доктор Петрова', specialty: 'Кардиолог', rating: 4.9, experience: '15 лет' },
    { id: 3, name: 'Доктор Сидоров', specialty: 'Невролог', rating: 4.7, experience: '8 лет' }
  ],
  appointments: [],
  medicalRecords: [],
  articles: [],
  logs: []
};

// Загрузить данные из localStorage
function loadDatabase() {
  const saved = localStorage.getItem('medportData');
  if (saved) {
    database = JSON.parse(saved);
  }
}

// Сохранить данные в localStorage
function saveDatabase() {
  localStorage.setItem('medportData', JSON.stringify(database));
}

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
    createdAt: new Date().toISOString()
  };
  
  database.users.push(newUser);
  saveDatabase();
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

// ===== ADMIN FUNCTIONS =====
function changeUserPassword(userId, newPassword) {
  const user = database.users.find(u => u.id === userId);
  if (user) {
    user.password = newPassword;
    saveDatabase();
    alert('✓ Пароль изменён');
    renderApp();
  }
}

function blockUser(userId) {
  const user = database.users.find(u => u.id === userId);
  if (user && user.role !== 'admin') {
    user.blocked = !user.blocked;
    saveDatabase();
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
    saveDatabase();
    alert('✓ Пользователь удалён');
    renderApp();
  }
}

function promoteToAdmin(userId) {
  const user = database.users.find(u => u.id === userId);
  if (user && user.role !== 'admin') {
    user.role = 'admin';
    saveDatabase();
    alert(`✓ ${user.name} теперь администратор!`);
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
    createdAt: new Date().toISOString()
  };
  
  database.users.push(newDoctor);
  saveDatabase();
  alert(`✓ Врач ${name} создан!`);
  renderApp();
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
          <button class="btn btn-sm" onclick="toggleAIChat()" title="Медицинский AI ассистент">🤖 AI</button>
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
              <div class="msg-text">Привет! 👋 Я здесь, чтобы помочь с медицинскими вопросами. Спросите про болезни, органы, симптомы, лечение. Например: "Что такое нога?", "Как лечить кашель?", "Симптомы гастрита?"</div>
            </div>
          </div>
          <div class="ai-input-box">
            <input type="text" id="ai-input" placeholder="Спросите про здоровье..." />
            <button onclick="sendAIMessage()">→</button>
          </div>
        </div>
      ` : ''}
      
      <div class="container">
        <h1>🧑 Кабинет пациента</h1>
        
        <div class="welcome-box">
          <h2>Добро пожаловать, ${currentUser.name}! 👋</h2>
          <p>Используйте AI ассистент для вопросов про здоровье, запишитесь к врачу или прочитайте статьи про медицину.</p>
        </div>
        
        <div class="quick-actions">
          <a href="#" class="action-card" onclick="alert('Функция запуска к врачу в разработке'); return false;">
            <div class="action-icon">📅</div>
            <h3>Запись к врачу</h3>
            <p>Скоро доступно</p>
          </a>
          <a href="#" class="action-card" onclick="toggleAIChat(); return false;">
            <div class="action-icon">🤖</div>
            <h3>AI Помощник</h3>
            <p>Вопросы про здоровье</p>
          </a>
          <a href="#" class="action-card" onclick="alert('Статьи в разработке'); return false;">
            <div class="action-icon">📚</div>
            <h3>Статьи про здоровье</h3>
            <p>15+ медицинских статей</p>
          </a>
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
            <div class="stat-value">${database.users.length}</div>
            <div class="stat-label">Всего пользователей</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${database.users.filter(u => u.role === 'patient').length}</div>
            <div class="stat-label">Пациентов</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${database.users.filter(u => u.role === 'doctor').length}</div>
            <div class="stat-label">Врачей</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${database.users.filter(u => u.role === 'admin').length}</div>
            <div class="stat-label">Администраторов</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${database.users.filter(u => u.blocked).length}</div>
            <div class="stat-label">Заблокировано</div>
          </div>
        </div>
        
        <div class="tabs">
          <button class="tab-btn active" data-tab="users">👥 Пользователи</button>
          <button class="tab-btn" data-tab="create-doctor">➕ Создать врача</button>
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
                    ${u.role !== 'admin' ? `<button class="btn btn-sm btn-secondary" onclick="promoteToAdmin(${u.id})">Сделать админом</button>` : ''}
                    <button class="btn btn-sm btn-secondary" onclick="alert('Введите новый пароль'); const p = prompt('Новый пароль:'); if (p) changeUserPassword(${u.id}, p)">Смена пароля</button>
                    <button class="btn btn-sm btn-danger" onclick="removeUser(${u.id})">Удалить</button>
                  ` : `
                    <span style="color: #1e90ff; padding: 0.5rem; font-weight: 600;">Администратор</span>
                  `}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div class="tab-content hidden" id="create-doctor">
          <h2>Создать врача</h2>
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
      </div>
    </div>
  `;
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
loadDatabase();
document.addEventListener('DOMContentLoaded', renderApp);
