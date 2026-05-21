// ===== SIMPLE AI RESPONSES =====
const aiResponses = {
  health: [
    { keywords: ['давление', 'гипертония'], answer: '🩺 Высокое давление требует внимания. Рекомендуется: ограничить соль, регулярно заниматься спортом, медитировать. Проконсультируйтесь с врачом для назначения лечения!' },
    { keywords: ['температура', 'жар', 'лихорадка'], answer: '🌡️ При температуре: пейте больше воды, отдыхайте, применяйте жаропонижающие препараты. Если температура выше 39°C более 3 дней - обратитесь к врачу!' },
    { keywords: ['кашель'], answer: '🫁 При кашле помогает: тёплое молоко с мёдом, полоскание горла, увлажнитель воздуха. Если кашель не проходит 2 недели - запишитесь к терапевту!' },
    { keywords: ['головная боль', 'мигрень'], answer: '🤕 Для облегчения головной боли: отдохните в тёмной комнате, пейте воду, применяйте обезболивающее. Проверьте, не ли это стресс или усталость!' },
    { keywords: ['бессонница', 'не сплю'], answer: '😴 Советы для лучшего сна: ложитесь в одно время, избегайте гаджетов за час до сна, пейте успокаивающий чай, проветривайте комнату!' },
    { keywords: ['стресс', 'тревога', 'паника'], answer: '🧘 От стресса помогает: дыхательные упражнения, медитация, йога, прогулки на свежем воздухе, здоровый сон. Если критично - обратитесь к психологу!' },
    { keywords: ['диета', 'похудение', 'вес'], answer: '🥗 Здоровое питание: ешьте больше овощей и фруктов, пейте воду, ограничьте сахар и жиры. Консультируйтесь с диетологом для персональной программы!' },
    { keywords: ['спорт', 'тренировка', 'фитнес'], answer: '💪 Регулярная физическая активность 30 минут в день укрепляет здоровье. Выбирайте вид спорта по интересам: ходьба, плавание, йога, бег!' },
    { keywords: ['привет', 'привет', 'как дела', 'hello'], answer: '👋 Привет! Я здесь, чтобы помочь с вопросами о здоровье. Спросите меня о симптомах, профилактике или здоровом образе жизни!' },
    { keywords: ['спасибо', 'thanks'], answer: '😊 Пожалуйста! Если у вас ещё есть вопросы - всегда готов помочь. Берегите своё здоровье!' }
  ],
  default: '🤔 Интересный вопрос! Рекомендую записаться на консультацию к врачу. Он даст вам профессиональный совет. Могу ещё чем-то помочь?'
};

function getAIResponse(question) {
  const q = question.toLowerCase();
  
  for (let category of aiResponses.health) {
    for (let keyword of category.keywords) {
      if (q.includes(keyword)) {
        return category.answer;
      }
    }
  }
  
  return aiResponses.default;
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
    {
      id: 1,
      title: 'Как укрепить иммунитет',
      category: 'Профилактика',
      icon: '💪',
      image: '🛡️',
      content: 'Регулярная физическая активность, здоровое питание и достаточный сон — основа крепкого иммунитета. Не забывайте о витаминах и минералах!',
      tips: ['Витамин C из цитрусовых', ' 7-9 часов сна', 'Упражнения 30 минут в день', 'Избегайте стресса']
    },
    {
      id: 2,
      title: 'Здоровье сердца',
      category: 'Кардиология',
      icon: '❤️',
      image: '💓',
      content: 'Ограничьте соль и жиры, занимайтесь спортом 30 минут в день, и ваше сердце будет вам благодарно. Регулярные проверки спасают жизни!',
      tips: ['Контролируйте давление', 'Избегайте жирной пищи', 'Гуляйте каждый день', 'Медитируйте']
    },
    {
      id: 3,
      title: 'Здоровье мозга',
      category: 'Неврология',
      icon: '🧠',
      image: '🧠',
      content: 'Медитация, чтение и обучение новому — лучшие друзья вашего мозга. Не забывайте про качественный сон и избегайте стресса.',
      tips: ['Решайте головоломки', 'Учитесь новому', 'Медитируйте 10 минут', 'Спите хорошо']
    },
    {
      id: 4,
      title: 'Правильное питание',
      category: 'Диетология',
      icon: '🥗',
      image: '🥕',
      content: 'Ешьте больше овощей и фруктов, пейте воду, избегайте фастфуда. Сбалансированное питание — инвестиция в ваше здоровье.',
      tips: ['50% овощей', '2 литра воды', 'Меньше сахара', 'Больше клетчатки']
    },
    {
      id: 5,
      title: 'Качество сна',
      category: 'Здоровый образ жизни',
      icon: '😴',
      image: '🌙',
      content: 'Спите 7-9 часов, соблюдайте режим, избегайте гаджетов перед сном. Хороший сон — залог продуктивного дня и здоровья!',
      tips: ['Режим сна', 'Без гаджетов за час', 'Прохладная комната', 'Полная темнота']
    },
    {
      id: 6,
      title: 'Физическая активность',
      category: 'Спорт',
      icon: '⚽',
      image: '🏃',
      content: 'Минимум 150 минут активности в неделю укрепляют сердце, мышцы и кости. Выбирайте вид спорта, который вам нравится!',
      tips: ['30 минут в день', 'Выбирайте интересный спорт', 'Разминка важна', 'Постепенное увеличение']
    }
  ]
};

// ===== STATE =====
let currentUser = null;
let currentPage = 'auth';
let isRegistering = false;
let showAIChat = false;

// ===== AUTHENTICATION =====
function login(email, password) {
  const user = database.users.find(u => u.email === email && u.password === password);
  if (user) {
    currentUser = { ...user };
    currentPage = user.role;
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
  currentPage = 'auth';
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
    const roleNames = { patient: 'пациент', doctor: 'врач', admin: 'администратор' };
    alert(`✓ Роль изменена на ${roleNames[newRole]}`);
    renderApp();
  } else {
    alert('⚠️ Нельзя изменить роль администратора!');
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
  const appointment = database.appointments.find(a => a.id === appointmentId);
  if (appointment) {
    database.appointments = database.appointments.filter(a => a.id !== appointmentId);
    alert('✓ Запись отменена');
    renderApp();
  }
}

function getPatientAppointments() {
  return database.appointments
    .filter(a => a.patientId === currentUser.id)
    .map(a => {
      const doctor = database.doctors.find(d => d.id === a.doctorId);
      return { ...a, doctorName: doctor.name, doctorSpecialty: doctor.specialty };
    });
}

function getPatientMedicalRecords() {
  return database.medicalRecords.filter(r => r.patientId === currentUser.id);
}

// ===== DOCTOR FUNCTIONS =====
function getDoctorAppointments() {
  return database.appointments
    .filter(a => {
      const doctorFromAppointment = database.doctors.find(d => d.id === a.doctorId);
      return doctorFromAppointment && doctorFromAppointment.name === currentUser.name;
    })
    .map(a => {
      const patient = database.users.find(u => u.id === a.patientId);
      return { ...a, patientName: patient.name };
    });
}

function completeDiagnosis(appointmentId, diagnosis, prescription) {
  const appointment = database.appointments.find(a => a.id === appointmentId);
  if (appointment) {
    appointment.status = 'completed';
    const doctor = database.doctors.find(d => d.id === appointment.doctorId);
    const record = {
      id: database.medicalRecords.length + 1,
      patientId: appointment.patientId,
      date: appointment.date,
      doctor: doctor.name,
      diagnosis,
      prescription
    };
    database.medicalRecords.push(record);
    alert('✓ Диагноз записан');
    renderApp();
  }
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
          </div>
        </div>
      </div>
      
      <div class="articles-preview">
        <h2>📚 Статьи про здоровье</h2>
        <div class="articles-grid">
          ${database.articles.slice(0, 3).map(a => `
            <div class="article-card">
              <div class="article-icon">${a.icon}</div>
              <h3>${a.title}</h3>
              <p>${a.content.substring(0, 80)}...</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderPatientDashboard() {
  const appointments = getPatientAppointments();
  const records = getPatientMedicalRecords();
  
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
            <h3>🤖 AI Ассистент МедПорт</h3>
            <button onclick="toggleAIChat()">✕</button>
          </div>
          <div class="ai-messages" id="ai-messages">
            <div class="ai-message bot-msg">
              <div class="msg-text">Привет! 👋 Я здесь, чтобы помочь с вопросами о здоровье. Спросите меня о симптомах или здоровом образе жизни!</div>
            </div>
          </div>
          <div class="ai-input-box">
            <input type="text" id="ai-input" placeholder="Спросите меня что-нибудь..." />
            <button onclick="sendAIMessage()">Отправить</button>
          </div>
        </div>
      ` : ''}
      
      <div class="container">
        <h1>🧑 Кабинет пациента</h1>
        
        <div class="tabs">
          <button class="tab-btn active" data-tab="home">🏠 Главная</button>
          <button class="tab-btn" data-tab="appointments">📅 Записи</button>
          <button class="tab-btn" data-tab="articles">📚 Здоровье</button>
        </div>
        
        <div class="tab-content" id="home">
          <div class="welcome-box">
            <h2>Добро пожаловать, ${currentUser.name}! 👋</h2>
            <p>Запишитесь к врачу, получите консультацию и улучшайте своё здоровье каждый день!</p>
          </div>
          
          <div class="quick-actions">
            <a href="#" class="action-card" onclick="document.querySelector('[data-tab=\\'appointments\\']').click(); return false;">
              <div class="action-icon">📅</div>
              <h3>Запись к врачу</h3>
              <p>Выберите врача и время</p>
            </a>
            <a href="#" class="action-card" onclick="document.querySelector('[data-tab=\\'articles\\']').click(); return false;">
              <div class="action-icon">📚</div>
              <h3>Статьи про здоровье</h3>
              <p>Полезные советы и информация</p>
            </a>
            <a href="#" class="action-card" onclick="toggleAIChat(); return false;">
              <div class="action-icon">🤖</div>
              <h3>AI Помощник</h3>
              <p>Ответы на вопросы про здоровье</p>
            </a>
          </div>
        </div>
        
        <div class="tab-content hidden" id="appointments">
          <h2>Ваши записи к врачу</h2>
          ${appointments.length === 0 ? `
            <div class="empty-state">
              <div class="empty-icon">📅</div>
              <p>У вас нет записей</p>
              <a href="#" class="btn btn-primary" onclick="document.querySelector('.book-section').style.display='block'; return false;">Записаться к врачу</a>
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
          
          <div class="book-section" style="margin-top: 2rem;">
            <h3>Запись к врачу</h3>
            <form id="book-form" class="form-box">
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
        </div>
        
        <div class="tab-content hidden" id="articles">
          <h2>📚 Советы для здоровья</h2>
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
  const appointments = getDoctorAppointments();
  const doctor = database.doctors.find(d => d.name === currentUser.name);
  
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
        
        <div class="info-box">
          <p><strong>Специальность:</strong> ${doctor ? doctor.specialty : 'Не указана'}</p>
          <p><strong>Опыт:</strong> ${doctor ? doctor.experience : 'Нет'}</p>
          <p><strong>Рейтинг:</strong> ⭐ ${doctor ? doctor.rating : 'Нет оценок'}</p>
        </div>
        
        <h2>📅 Ваши приёмы</h2>
        ${appointments.length === 0 ? `
          <div class="empty-state">
            <div class="empty-icon">📅</div>
            <p>Нет записанных пациентов</p>
          </div>
        ` : `
          <div class="card-grid">
            ${appointments.map(a => `
              <div class="card">
                <h3>${a.patientName}</h3>
                <p><strong>Дата:</strong> ${a.date} в ${a.time}</p>
                <p><strong>Статус:</strong> <span class="badge ${a.status === 'completed' ? 'badge-success' : 'badge-info'}">${a.status === 'completed' ? 'Завершено' : 'Назначено'}</span></p>
                ${a.status === 'scheduled' ? `
                  <button class="btn btn-primary btn-sm" onclick="openDiagnosisForm(${a.id})">Записать диагноз</button>
                ` : ''}
              </div>
            `).join('')}
          </div>
        `}
        
        <div class="tab-content hidden" id="diagnosis-form">
          <h2>Запись диагноза</h2>
          <form id="diagnosis-submit" class="form-box">
            <input type="hidden" id="appointment-id" />
            <div class="form-group">
              <label>Диагноз</label>
              <input type="text" id="diagnosis" placeholder="Введите диагноз" required />
            </div>
            <div class="form-group">
              <label>Назначение</label>
              <textarea id="prescription" placeholder="Введите назначение" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Сохранить диагноз →</button>
            <button type="button" class="btn btn-secondary" onclick="closeDiagnosisForm()">Отмена</button>
          </form>
        </div>
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
          <div class="stat-card">
            <div class="stat-value">${stats.totalAppointments}</div>
            <div class="stat-label">Приёмов</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">⭐ ${stats.averageRating}</div>
            <div class="stat-label">Рейтинг</div>
          </div>
        </div>
        
        <div class="tabs">
          <button class="tab-btn active" data-tab="create-doctor">👨‍⚕️ Создать врача</button>
          <button class="tab-btn" data-tab="users">👥 Пользователи</button>
          <button class="tab-btn" data-tab="statistics">📊 Статистика</button>
        </div>
        
        <div class="tab-content" id="create-doctor">
          <h2>👨‍⚕️ Создать аккаунт врача</h2>
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
          <h2>👥 Управление пользователями</h2>
          <div class="card-grid">
            ${database.users.map(u => `
              <div class="card">
                <h3>${u.name}</h3>
                <p><strong>Email:</strong> ${u.email}</p>
                <p><strong>Роль:</strong> <span class="badge">${u.role}</span></p>
                <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
                  ${u.role !== 'admin' ? `
                    <select style="flex: 1; padding: 0.5rem; border-radius: 6px; border: 1px solid rgba(0,212,255,0.3); background: rgba(0,212,255,0.1); color: #fff;" onchange="changeUserRole(${u.id}, this.value)">
                      <option value="">Роль</option>
                      <option value="patient">Пациент</option>
                      <option value="doctor">Врач</option>
                    </select>
                    <button class="btn btn-danger btn-sm" onclick="removeUser(${u.id})">Удалить</button>
                  ` : `
                    <span style="color: rgba(0,212,255,0.7); padding: 0.5rem;">Администратор</span>
                  `}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div class="tab-content hidden" id="statistics">
          <h2>📊 Статистика системы</h2>
          <div class="info-box">
            <p><strong>Всего пользователей:</strong> ${stats.totalUsers}</p>
            <p><strong>Всего врачей:</strong> ${stats.totalDoctors}</p>
            <p><strong>Всего приёмов:</strong> ${stats.totalAppointments}</p>
            <p><strong>Средний рейтинг:</strong> ⭐ ${stats.averageRating}</p>
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
  
  const diagnosisForm = document.getElementById('diagnosis-submit');
  if (diagnosisForm) {
    diagnosisForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const appointmentId = parseInt(document.getElementById('appointment-id').value);
      const diagnosis = document.getElementById('diagnosis').value;
      const prescription = document.getElementById('prescription').value;
      completeDiagnosis(appointmentId, diagnosis, prescription);
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

// ===== HELPER FUNCTIONS =====
function openDiagnosisForm(appointmentId) {
  const form = document.getElementById('diagnosis-form');
  document.getElementById('appointment-id').value = appointmentId;
  form.classList.remove('hidden');
}

function closeDiagnosisForm() {
  document.getElementById('diagnosis-form').classList.add('hidden');
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', renderApp);
