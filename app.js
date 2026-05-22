// ===== MEDICAL AI SYSTEM =====
const medicalAI = {
  processQuestion: function(question) {
    const q = question.toLowerCase().trim();
    
    // Нога, ноги, стопа
    if (this.hasKeywords(q, ['нога', 'ноги', 'стопа', 'пальцы ног', 'голень', 'бедро', 'колено'])) {
      return '🦵 **Ноги (нижние конечности)**: Состоят из бедра, голени, стопы. Основные проблемы: боли, отёки, варикоз, плоскостопие. Профилактика: удобная обувь, физкультура, массаж. При постоянных болях обратитесь к врачу!';
    }
    
    // Сердце
    if (this.hasKeywords(q, ['сердце', 'сердечн', 'кардио', 'давлени', 'гипертони', 'инфаркт', 'аритми', 'пульс'])) {
      return '❤️ **Сердце и кровообращение**: Качает кровь по организму. Основные болезни: гипертония, инфаркт, аритмия. Профилактика: физкультура, здоровое питание, отказ от курения. Норма давления 120/80.';
    }
    
    // Легкие, дыхание
    if (this.hasKeywords(q, ['легкие', 'дыхани', 'кашел', 'пневмони', 'бронхит', 'астма', 'одышка'])) {
      return '🫁 **Дыхательная система**: Вдыхают кислород, выдыхают CO2. Основные болезни: пневмония, бронхит, астма. Профилактика: отказ от курения, вентиляция, вакцины.';
    }
    
    // Живот, пищеварение
    if (this.hasKeywords(q, ['живот', 'желудок', 'кишечник', 'гастрит', 'язва', 'диарея', 'запор', 'рвота', 'тошнота'])) {
      return '🍽️ **Пищеварение**: Правильное питание - ключ к здоровью. Ешьте маленькими порциями, пейте много воды. При болях в животе обратитесь к гастроэнтерологу.';
    }
    
    // Голова, мозг
    if (this.hasKeywords(q, ['голова', 'мозг', 'нервн', 'голов боль', 'мигрень', 'инсульт', 'паралич'])) {
      return '🧠 **Нервная система**: При сильной головной боли, нарушении речи или слабости - СРОЧНО вызовите 911! Обычные головные боли помогут облегчить отдых, вода и прохладное место.';
    }
    
    // Почки, мочевой
    if (this.hasKeywords(q, ['почки', 'мочевой', 'нефрит', 'цистит', 'камни', 'моча', 'мочеиспускани'])) {
      return '💧 **Почки и мочеполовая система**: Фильтруют кровь и производят мочу. Профилактика: пейте 2-3 литра воды в день, ограничьте соль. При боли в пояснице обратитесь к урологу.';
    }
    
    // Кожа
    if (this.hasKeywords(q, ['кожа', 'дерматит', 'экзема', 'псориаз', 'прыщи', 'акне', 'сыпь', 'грибок'])) {
      return '🔴 **Кожа**: Самый большой орган. Используйте солнцезащиту, увлажняйте кожу. При сильных высыпаниях обратитесь к дерматологу.';
    }
    
    // Глаза
    if (this.hasKeywords(q, ['глаз', 'зрени', 'катаракта', 'глаукома', 'миопи', 'близоркость'])) {
      return '👁️ **Глаза и зрение**: Делайте перерывы при работе за ПК каждые 20 минут. Используйте UV защиту. После 40 лет - ежегодные осмотры офтальмолога.';
    }
    
    // Уши
    if (this.hasKeywords(q, ['ухо', 'слух', 'отит', 'тугоухость', 'звон в ухе'])) {
      return '👂 **Уши и слух**: Не используйте наушники громче 60%. При боли в ухе - срочно к отоларингологу. Защищайте уши от громких звуков.';
    }
    
    // Зубы
    if (this.hasKeywords(q, ['зуб', 'зубы', 'кариес', 'пародонтит', 'гингивит', 'десна', 'стоматолог'])) {
      return '🦷 **Зубы и полость рта**: Чистите зубы 2 раза в день, используйте зубную нить. Посещайте стоматолога 2 раза в год.';
    }
    
    // Здоровье, профилактика
    if (this.hasKeywords(q, ['здоровье', 'профилактик', 'диета', 'питани', 'спорт', 'упражнени', 'физкультур', 'вес'])) {
      return '🏥 **Здоровье - это образ жизни!** Ключевые факторы: здоровое питание (овощи, фрукты), 30 минут физкультуры в день, сон 7-9 часов, управление стрессом.';
    }
    
    // Если не совпадает
    return '❓ Я отвечаю на медицинские вопросы. Спросите про: болезни, органы, симптомы, здоровье, лечение. Например: "Что такое нога?", "Как лечить кашель?", "Симптомы гастрита?"';
  },
  
  hasKeywords: function(text, keywords) {
    return keywords.some(kw => text.includes(kw));
  }
};

// ===== DATABASE WITH LOCALSTORAGE =====
let database = {
  users: [
    { id: 1, name: 'Главный администратор', email: 'abboskulovtoxir@gmail.com', role: 'admin', password: '10052005', blocked: false, createdAt: new Date().toISOString() }
  ],
  doctors: [
    { id: 1, name: 'Доктор Смирнов', specialty: 'Терапевт', rating: 4.8, experience: '12 лет', votes: 50 },
    { id: 2, name: 'Доктор Петрова', specialty: 'Кардиолог', rating: 4.9, experience: '15 лет', votes: 60 },
    { id: 3, name: 'Доктор Сидоров', specialty: 'Невролог', rating: 4.7, experience: '8 лет', votes: 40 }
  ],
  appointments: [],
  medicalRecords: [],
  ratings: [],
  articles: [
    { id: 1, title: '10 советов для здоровья сердца', category: 'Кардиология', icon: '❤️', content: 'Регулярные физические упражнения, здоровое питание, контроль давления, отказ от курения - ключи к здоровью сердца.', createdAt: new Date().toISOString() },
    { id: 2, title: 'Профилактика простуды и гриппа', category: 'Иммунология', icon: '🤧', content: 'Мойте руки часто, избегайте тесного контакта с больными, используйте маску в общественных местах.', createdAt: new Date().toISOString() },
    { id: 3, title: 'Правильное питание для здоровья', category: 'Диетология', icon: '🥗', content: 'Ешьте много овощей, фруктов, цельных зёрен. Ограничьте сладкое, жирное, солёное.', createdAt: new Date().toISOString() },
    { id: 4, title: 'Упражнения для спины', category: 'Спортивная медицина', icon: '💪', content: 'Регулярные упражнения помогут избежать боли в спине. Консультируйтесь с физиотерапевтом.', createdAt: new Date().toISOString() },
    { id: 5, title: 'Стресс и здоровье', category: 'Психология', icon: '🧘', content: 'Медитация, йога, прогулки на природе помогают снизить стресс и улучшить здоровье.', createdAt: new Date().toISOString() },
    { id: 6, title: 'Здоровый сон - залог здоровья', category: 'Неврология', icon: '😴', content: 'Спите 7-9 часов в день, избегайте ночных смартфонов, создайте комфортные условия для сна.', createdAt: new Date().toISOString() }
  ]
};

function loadDatabase() {
  const saved = localStorage.getItem('medportData');
  if (saved) {
    database = JSON.parse(saved);
  }
  
  const userEmail = localStorage.getItem('currentUserEmail');
  
  if (userEmail) {
    const userFromDB = database.users.find(u => u.email === userEmail);
    if (userFromDB && !userFromDB.blocked) {
      currentUser = { ...userFromDB };
    } else {
      currentUser = null;
      localStorage.removeItem('currentUser');
      localStorage.removeItem('currentUserEmail');
    }
  }
}

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
    alert('❌ Неверный email или пароль');
    return;
  }
  if (user.blocked) {
    alert('⚠️ Ваш аккаунт заблокирован');
    return;
  }
  currentUser = { ...user };
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
  localStorage.setItem('currentUserEmail', user.email);
  renderApp();
}

function register(name, email, password, passwordConfirm) {
  if (!name || !email || !password) {
    alert('❌ Заполни все поля');
    return;
  }
  if (password !== passwordConfirm) {
    alert('❌ Пароли не совпадают');
    return;
  }
  if (password.length < 4) {
    alert('❌ Пароль минимум 4 символа');
    return;
  }
  if (database.users.find(u => u.email === email)) {
    alert('❌ Email уже зарегистрирован');
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
  alert('✓ Аккаунт создан!');
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
  localStorage.removeItem('currentUser');
  localStorage.removeItem('currentUserEmail');
  renderApp();
}

// ===== APPOINTMENTS =====
function bookAppointment(doctorId, date, time) {
  const appointment = {
    id: Math.max(...database.appointments.map(a => a.id), 0) + 1,
    patientId: currentUser.id,
    doctorId,
    date,
    time,
    status: 'scheduled',
    createdAt: new Date().toISOString()
  };
  database.appointments.push(appointment);
  saveDatabase();
  alert('✓ Запись на приём создана!');
  renderApp();
}

function cancelAppointment(appointmentId) {
  database.appointments = database.appointments.filter(a => a.id !== appointmentId);
  saveDatabase();
  alert('✓ Запись отменена');
  renderApp();
}

function rateDoctor(doctorId, rating) {
  const rate = {
    id: Math.max(...database.ratings.map(r => r.id), 0) + 1,
    patientId: currentUser.id,
    doctorId,
    rating,
    createdAt: new Date().toISOString()
  };
  database.ratings.push(rate);
  
  const doctor = database.doctors.find(d => d.id === doctorId);
  if (doctor) {
    const doctorRatings = database.ratings.filter(r => r.doctorId === doctorId);
    const avgRating = doctorRatings.reduce((sum, r) => sum + r.rating, 0) / doctorRatings.length;
    doctor.rating = parseFloat(avgRating.toFixed(1));
    doctor.votes = doctorRatings.length;
  }
  
  saveDatabase();
  alert('✓ Спасибо за оценку!');
  renderApp();
}

// ===== ADMIN FUNCTIONS =====
function promoteToAdmin(userId) {
  const user = database.users.find(u => u.id === userId);
  if (user && user.role !== 'admin') {
    user.role = 'admin';
    saveDatabase();
    alert(`✓ ${user.name} теперь администратор!`);
    renderApp();
  }
}

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
  if (confirm(`Удалить пользователя ${user.name}?`)) {
    database.users = database.users.filter(u => u.id !== userId);
    saveDatabase();
    alert('✓ Пользователь удалён');
    renderApp();
  }
}

function createDoctorAccount(name, email, password) {
  if (!name || !email || !password) {
    alert('❌ Заполни все поля');
    return;
  }
  if (password.length < 4) {
    alert('❌ Пароль минимум 4 символа');
    return;
  }
  if (database.users.find(u => u.email === email)) {
    alert('❌ Email уже существует');
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

function publishArticle(title, category, icon, content) {
  if (!title || !category || !content) {
    alert('❌ Заполни все поля');
    return;
  }
  
  const article = {
    id: Math.max(...database.articles.map(a => a.id), 0) + 1,
    title,
    category,
    icon,
    content,
    createdAt: new Date().toISOString()
  };
  
  database.articles.push(article);
  saveDatabase();
  alert('✓ Статья опубликована!');
  renderApp();
}

function deleteArticle(articleId) {
  if (confirm('Удалить статью?')) {
    database.articles = database.articles.filter(a => a.id !== articleId);
    saveDatabase();
    alert('✓ Статья удалена');
    renderApp();
  }
}

function getStatistics() {
  return {
    totalUsers: database.users.length,
    totalPatients: database.users.filter(u => u.role === 'patient').length,
    totalDoctors: database.users.filter(u => u.role === 'doctor').length,
    totalAdmins: database.users.filter(u => u.role === 'admin').length,
    blockedUsers: database.users.filter(u => u.blocked).length,
    totalAppointments: database.appointments.length,
    completedAppointments: database.appointments.filter(a => a.status === 'completed').length
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
            <h3>✨ Возможности:</h3>
            <div class="feature-item">📅 Запись к врачу онлайн</div>
            <div class="feature-item">⭐ Оценка врачей</div>
            <div class="feature-item">💬 AI помощник 24/7</div>
            <div class="feature-item">📋 Электронная медкарта</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderPatientDashboard() {
  const appointments = database.appointments.filter(a => a.patientId === currentUser.id);
  
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
              <div class="msg-text">Привет! Спросите про здоровье, болезни, симптомы или лечение.</div>
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
          <h2>Добро пожаловать, ${currentUser.name}!</h2>
          <p>Запишитесь к врачу, поставьте оценку или поговорите с AI ассистентом.</p>
        </div>
        
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-value">${appointments.length}</div>
            <div class="stat-label">Записей к врачу</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${database.doctors.length}</div>
            <div class="stat-label">Врачей в системе</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">⭐ 4.8</div>
            <div class="stat-label">Средний рейтинг</div>
          </div>
        </div>
        
        <div class="tabs">
          <button class="tab-btn active" data-tab="appointments">📅 Мои записи</button>
          <button class="tab-btn" data-tab="doctors">👨‍⚕️ Врачи</button>
          <button class="tab-btn" data-tab="book">✏️ Новая запись</button>
          <button class="tab-btn" data-tab="articles">📰 Статьи</button>
        </div>
        
        <div class="tab-content" id="appointments">
          <h2>Ваши записи к врачу</h2>
          ${appointments.length === 0 ? '<p class="no-data">Нет активных записей</p>' : `
            <div class="card-grid">
              ${appointments.map(a => {
                const doctor = database.doctors.find(d => d.id === a.doctorId);
                return `
                  <div class="card">
                    <h3>${doctor.name}</h3>
                    <p><strong>Специальность:</strong> ${doctor.specialty}</p>
                    <p><strong>Дата:</strong> ${a.date} в ${a.time}</p>
                    <p><strong>Статус:</strong> <span class="badge">${a.status === 'completed' ? '✓ Завершено' : '📅 Назначено'}</span></p>
                    <button class="btn btn-danger btn-sm" onclick="cancelAppointment(${a.id})">Отменить</button>
                  </div>
                `;
              }).join('')}
            </div>
          `}
        </div>
        
        <div class="tab-content hidden" id="doctors">
          <h2>Наши врачи</h2>
          <div class="card-grid">
            ${database.doctors.map(d => `
              <div class="card">
                <h3>${d.name}</h3>
                <p><strong>Специальность:</strong> ${d.specialty}</p>
                <p><strong>Опыт:</strong> ${d.experience}</p>
                <p><strong>Рейтинг:</strong> ⭐ ${d.rating} (${d.votes} оценок)</p>
                <div style="margin-top: 1rem; display: flex; gap: 0.5rem;">
                  <button class="btn btn-primary btn-sm" onclick="openRatingForm(${d.id})">⭐ Оценить</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div class="tab-content hidden" id="book">
          <h2>Запись к врачу</h2>
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
        
        <div class="tab-content hidden" id="articles">
          <h2>📰 Статьи о здоровье</h2>
          <div class="card-grid">
            ${database.articles.map(a => `
              <div class="card">
                <div style="font-size: 2rem; margin-bottom: 1rem;">${a.icon}</div>
                <h3>${a.title}</h3>
                <p><strong>Категория:</strong> <span class="badge">${a.category}</span></p>
                <p style="margin-top: 1rem; line-height: 1.6;">${a.content}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderDoctorDashboard() {
  const doctor = database.doctors.find(d => d.name === currentUser.name);
  const appointments = database.appointments.filter(a => a.doctorId === doctor?.id);
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
        <h1>👨‍⚕️ Кабинет врача</h1>
        
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-value">${appointments.length}</div>
            <div class="stat-label">Приёмов</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">⭐ ${doctor?.rating || 0}</div>
            <div class="stat-label">Рейтинг</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${doctor?.experience || 'н/д'}</div>
            <div class="stat-label">Опыт работы</div>
          </div>
        </div>
        
        <h2>📅 Расписание приёмов</h2>
        ${appointments.length === 0 ? '<p class="no-data">Нет записанных приёмов</p>' : `
          <div class="card-grid">
            ${appointments.map(a => {
              const patient = database.users.find(u => u.id === a.patientId);
              return `
                <div class="card">
                  <h3>${patient.name}</h3>
                  <p><strong>Дата:</strong> ${a.date} в ${a.time}</p>
                  <p><strong>Статус:</strong> <span class="badge">${a.status}</span></p>
                </div>
              `;
            }).join('')}
          </div>
        `}
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
            <div class="stat-value">${stats.totalPatients}</div>
            <div class="stat-label">Пациентов</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${stats.totalDoctors}</div>
            <div class="stat-label">Врачей</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${stats.totalAdmins}</div>
            <div class="stat-label">Администраторов</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${stats.totalAppointments}</div>
            <div class="stat-label">Всего приёмов</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${stats.completedAppointments}</div>
            <div class="stat-label">Завершённых</div>
          </div>
        </div>
        
        <div class="tabs">
          <button class="tab-btn active" data-tab="users">👥 Пользователи</button>
          <button class="tab-btn" data-tab="appointments">📅 Записи</button>
          <button class="tab-btn" data-tab="create-doctor">➕ Создать врача</button>
          <button class="tab-btn" data-tab="articles">📰 Статьи</button>
        </div>
        
        <div class="tab-content" id="users">
          <h2>Управление пользователями</h2>
          <div class="card-grid">
            ${database.users.map(u => `
              <div class="card">
                <h3>${u.name}</h3>
                <p><strong>Email:</strong> ${u.email}</p>
                <p><strong>Роль:</strong> <span class="badge">${u.role}</span></p>
                <p><strong>Статус:</strong> <span class="badge ${u.blocked ? 'badge-danger' : 'badge-success'}">${u.blocked ? '❌ Заблокирован' : '✓ Активен'}</span></p>
                <div style="margin-top: 1rem; display: flex; gap: 0.5rem; flex-wrap: wrap; font-size: 0.8rem;">
                  ${u.role !== 'admin' ? `
                    <button class="btn btn-primary btn-sm" onclick="promoteToAdmin(${u.id})">👑 Админ</button>
                    <button class="btn btn-secondary btn-sm" onclick="changePassword(${u.id})">🔑 Пароль</button>
                    <button class="btn btn-secondary btn-sm" onclick="blockUser(${u.id})">${u.blocked ? '🔓 Разблок' : '🔒 Блок'}</button>
                    <button class="btn btn-danger btn-sm" onclick="removeUser(${u.id})">🗑️ Удалить</button>
                  ` : '<span style="color: #00d4ff; font-weight: 600;">Администратор</span>'}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div class="tab-content hidden" id="appointments">
          <h2>Все записи к врачам</h2>
          <table class="data-table">
            <thead>
              <tr>
                <th>Пациент</th>
                <th>Врач</th>
                <th>Дата</th>
                <th>Время</th>
                <th>Статус</th>
              </tr>
            </thead>
            <tbody>
              ${database.appointments.map(a => {
                const patient = database.users.find(u => u.id === a.patientId);
                const doctor = database.doctors.find(d => d.id === a.doctorId);
                return `
                  <tr>
                    <td>${patient?.name || 'н/д'}</td>
                    <td>${doctor?.name || 'н/д'}</td>
                    <td>${a.date}</td>
                    <td>${a.time}</td>
                    <td><span class="badge">${a.status}</span></td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
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
          <h2>📰 Управление статьями</h2>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="margin-top: 0;">Опубликовать новую статью</h3>
            <form id="publish-article-form" class="form-box">
              <div class="form-group">
                <label>Заголовок</label>
                <input type="text" id="article-title" placeholder="Название статьи" required />
              </div>
              <div class="form-group">
                <label>Категория</label>
                <input type="text" id="article-category" placeholder="Например: Кардиология" required />
              </div>
              <div class="form-group">
                <label>Иконка (эмодзи)</label>
                <input type="text" id="article-icon" placeholder="❤️" required />
              </div>
              <div class="form-group">
                <label>Содержание</label>
                <textarea id="article-content" placeholder="Напишите содержание статьи..." required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Опубликовать →</button>
            </form>
          </div>
          
          <h3>Все статьи</h3>
          <div class="card-grid">
            ${database.articles.map(a => `
              <div class="card">
                <div style="font-size: 2rem; margin-bottom: 1rem;">${a.icon}</div>
                <h3 style="margin-top: 0;">${a.title}</h3>
                <p><strong>Категория:</strong> ${a.category}</p>
                <p style="margin-top: 1rem;">${a.content}</p>
                <button class="btn btn-danger btn-sm" onclick="deleteArticle(${a.id})">🗑️ Удалить</button>
              </div>
            `).join('')}
          </div>
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
  
  const response = medicalAI.processQuestion(question);
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

// ===== HELPER FUNCTIONS =====
function openRatingForm(doctorId) {
  const rating = prompt('Оцените врача от 1 до 5:');
  if (rating && rating >= 1 && rating <= 5) {
    rateDoctor(doctorId, parseInt(rating));
  }
}

function changePassword(userId) {
  const newPass = prompt('Введите новый пароль:');
  if (newPass && newPass.length >= 4) {
    changeUserPassword(userId, newPass);
  }
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

  const publishArticleForm = document.getElementById('publish-article-form');
  if (publishArticleForm) {
    publishArticleForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('article-title').value;
      const category = document.getElementById('article-category').value;
      const icon = document.getElementById('article-icon').value;
      const content = document.getElementById('article-content').value;
      publishArticle(title, category, icon, content);
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
