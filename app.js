// ===== DATABASE =====
const database = {
  users: [
    { id: 1, name: 'Главный администратор', email: 'abboskulovtoxir@gmail.com', role: 'admin', password: '10052005' }
  ],
  doctors: [
    { id: 1, name: 'Доктор Смирнов', specialty: 'Терапевт', rating: 4.8, experience: '12 лет' },
    { id: 2, name: 'Доктор Петрова', specialty: 'Кардиолог', rating: 4.9, experience: '15 лет' },
    { id: 3, name: 'Доктор Сидоров', specialty: 'Невролог', rating: 4.7, experience: '8 лет' }
  ],
  appointments: [],
  medicalRecords: [],
  articles: [
    {
      id: 1,
      title: '💪 Как укрепить иммунитет',
      category: 'Профилактика',
      icon: '🛡️',
      content: 'Регулярная физическая активность, здоровое питание и достаточный сон — основа крепкого иммунитета. Не забывайте о витаминах и минералах!'
    },
    {
      id: 2,
      title: '❤️ Здоровье сердца',
      category: 'Кардиология',
      icon: '💓',
      content: 'Ограничьте соль и жиры, занимайтесь спортом 30 минут в день, и ваше сердце будет вам благодарно. Регулярные проверки спасают жизни!'
    },
    {
      id: 3,
      title: '🧠 Здоровье мозга',
      category: 'Неврология',
      icon: '🧠',
      content: 'Медитация, чтение и обучение новому — лучшие друзья вашего мозга. Не забывайте про качественный сон и избегайте стресса.'
    },
    {
      id: 4,
      title: '🥗 Правильное питание',
      category: 'Диетология',
      icon: '🥕',
      content: 'Ешьте больше овощей и фруктов, пейте воду, избегайте фастфуда. Сбалансированное питание — инвестиция в ваше здоровье.'
    },
    {
      id: 5,
      title: '😴 Качество сна',
      category: 'Здоровый образ жизни',
      icon: '🌙',
      content: 'Спите 7-9 часов, соблюдайте режим, избегайте гаджетов перед сном. Хороший сон — залог продуктивного дня и здоровья!'
    },
    {
      id: 6,
      title: '🏃 Физическая активность',
      category: 'Спорт',
      icon: '⚽',
      content: 'Минимум 150 минут активности в неделю укрепляют сердце, мышцы и кости. Выбирайте вид спорта, который вам нравится!'
    }
  ]
};

// ===== STATE =====
let currentUser = null;
let currentPage = 'auth';
let isRegistering = false;

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
  renderApp();
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
  alert(`✓ Врач ${name} создан! Email: ${email}`);
  renderApp();
}

function changeUserRole(userId, newRole) {
  const user = database.users.find(u => u.id === userId);
  if (user && user.role !== 'admin') {
    user.role = newRole;
    const roleNames = { patient: 'пациент', doctor: 'врач', admin: 'администратор' };
    alert(`✓ Роль пользователя ${user.name} изменена на ${roleNames[newRole]}`);
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
  const doctorUser = database.users.find(u => u.email === currentUser.email);
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
      <div class="auth-container">
        <div class="auth-box">
          <div class="auth-logo">🏥</div>
          <h1>МедПорт</h1>
          <p class="auth-subtitle">Создание аккаунта пациента</p>
          
          <div class="info-box" style="margin-bottom: 1.5rem; background: linear-gradient(135deg, rgba(0,200,100,0.1), rgba(76,175,80,0.1));">
            ℹ️ <strong>Добро пожаловать!</strong> Создайте аккаунт, чтобы записаться к врачу и получить доступ к своей медицинской карте
          </div>
          
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
    `;
  }
  
  return `
    <div class="auth-page">
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
          
          <button type="button" class="btn btn-secondary" onclick="toggleRegister()">Создать аккаунт пациента</button>
          
          <div class="features-preview">
            <h3>✨ Что вас ждёт:</h3>
            <div class="feature-item">📅 Запись к врачу онлайн</div>
            <div class="feature-item">📋 Электронная медкарта</div>
            <div class="feature-item">💬 Консультации с врачами</div>
            <div class="feature-item">📊 История приёмов</div>
          </div>
        </div>
      </div>
      
      <div class="articles-preview">
        <h2>📚 Советы для здоровья</h2>
        <div class="articles-grid">
          ${database.articles.slice(0, 3).map(a => `
            <div class="article-card">
              <div class="article-icon">${a.icon}</div>
              <h3>${a.title}</h3>
              <p>${a.content}</p>
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
          <button class="btn btn-sm" onclick="logout()">Выход</button>
        </div>
      </nav>
      
      <div class="container">
        <h1>🧑 Кабинет пациента</h1>
        
        <div class="tabs">
          <button class="tab-btn active" data-tab="home">🏠 Главная</button>
          <button class="tab-btn" data-tab="appointments">📅 Записи</button>
          <button class="tab-btn" data-tab="medical">📋 Медкарта</button>
          <button class="tab-btn" data-tab="articles">📚 Здоровье</button>
        </div>
        
        <div class="tab-content" id="home">
          <div class="welcome-box">
            <h2>Добро пожаловать, ${currentUser.name}! 👋</h2>
            <p>Ваше здоровье — наш приоритет. Здесь вы можете записаться к врачу, просмотреть свою медицинскую карту и получить полезные советы.</p>
          </div>
          
          <div class="stats-patient">
            <div class="stat-item">
              <div class="stat-icon">📅</div>
              <div class="stat-info">
                <div class="stat-number">${appointments.length}</div>
                <div class="stat-label">Записей к врачу</div>
              </div>
            </div>
            <div class="stat-item">
              <div class="stat-icon">📋</div>
              <div class="stat-info">
                <div class="stat-number">${records.length}</div>
                <div class="stat-label">Записей в медкарте</div>
              </div>
            </div>
          </div>
          
          <div style="margin-top: 2rem;">
            <a href="#" class="btn btn-primary" onclick="document.querySelector('[data-tab=\\'appointments\\']').click(); return false;">📅 Записаться к врачу</a>
          </div>
        </div>
        
        <div class="tab-content hidden" id="appointments">
          <h2>Ваши записи к врачу</h2>
          ${appointments.length === 0 ? `
            <div class="empty-state">
              <div class="empty-icon">📅</div>
              <p>У вас нет записей</p>
              <a href="#" class="btn btn-primary" onclick="document.querySelector('[data-tab=\\'book\\']').click(); return false;">Записаться к врачу</a>
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
        
        <div class="tab-content hidden" id="medical">
          <h2>Электронная медицинская карта</h2>
          ${records.length === 0 ? `
            <div class="empty-state">
              <div class="empty-icon">📋</div>
              <p>Пока нет записей в медкарте</p>
            </div>
          ` : `
            <div class="card-grid">
              ${records.map(r => `
                <div class="card">
                  <p><strong>Дата приёма:</strong> ${r.date}</p>
                  <p><strong>Врач:</strong> ${r.doctor}</p>
                  <p><strong>Диагноз:</strong> ${r.diagnosis}</p>
                  <p><strong>Назначение:</strong> ${r.prescription}</p>
                </div>
              `).join('')}
            </div>
          `}
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
        
        <div class="info-box" style="background: linear-gradient(135deg, rgba(123,111,255,0.1), rgba(103,58,183,0.1));">
          <p><strong>Специальность:</strong> ${doctor ? doctor.specialty : 'Не указана'}</p>
          <p><strong>Опыт:</strong> ${doctor ? doctor.experience : 'Нет'}</p>
          <p><strong>Рейтинг:</strong> ⭐ ${doctor ? doctor.rating : 'Нет оценок'}</p>
        </div>
        
        <h2>📅 Ваше расписание приёмов</h2>
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
            <div class="stat-label">Всего приёмов</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${stats.completedAppointments}</div>
            <div class="stat-label">Завершённых</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">⭐ ${stats.averageRating}</div>
            <div class="stat-label">Средний рейтинг</div>
          </div>
        </div>
        
        <div class="tabs">
          <button class="tab-btn active" data-tab="statistics">📊 Статистика</button>
          <button class="tab-btn" data-tab="create-doctor">👨‍⚕️ Создать врача</button>
          <button class="tab-btn" data-tab="users">👥 Пользователи</button>
          <button class="tab-btn" data-tab="doctors">💼 Врачи</button>
          <button class="tab-btn" data-tab="appointments">📅 Приёмы</button>
        </div>
        
        <div class="tab-content" id="statistics">
          <h2>Статистика системы</h2>
          <div class="info-box">
            <p><strong>Всего пользователей:</strong> ${stats.totalUsers}</p>
            <p><strong>Всего врачей:</strong> ${stats.totalDoctors}</p>
            <p><strong>Всего приёмов:</strong> ${stats.totalAppointments}</p>
            <p><strong>Завершённых приёмов:</strong> ${stats.completedAppointments}</p>
            <p><strong>Средний рейтинг врачей:</strong> ⭐ ${stats.averageRating}</p>
            <p><strong>Процент завершённых:</strong> ${((stats.completedAppointments / stats.totalAppointments) * 100).toFixed(1)}%</p>
          </div>
        </div>
        
        <div class="tab-content hidden" id="create-doctor">
          <h2>👨‍⚕️ Создать аккаунт врача</h2>
          <form id="create-doctor-form" class="form-box">
            <div class="form-group">
              <label>Полное имя врача</label>
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
          <h2>Управление пользователями</h2>
          <p style="color: rgba(255,255,255,0.6); margin-bottom: 1.5rem;">Назначьте роли пациентам или удалите их из системы</p>
          <div class="card-grid">
            ${database.users.map(u => `
              <div class="card">
                <h3>${u.name}</h3>
                <p><strong>Email:</strong> ${u.email}</p>
                <p><strong>Роль:</strong> <span class="badge">${u.role}</span></p>
                <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
                  ${u.role !== 'admin' ? `
                    <select style="flex: 1; padding: 0.5rem; border-radius: 6px; border: 1px solid rgba(0,212,255,0.3); background: rgba(0,212,255,0.1); color: #fff;" onchange="changeUserRole(${u.id}, this.value)">
                      <option value="">Изменить роль</option>
                      <option value="patient">Пациент</option>
                      <option value="doctor">Врач</option>
                    </select>
                    <button class="btn btn-danger btn-sm" onclick="removeUser(${u.id})">Удалить</button>
                  ` : `
                    <span style="color: rgba(0,212,255,0.7); padding: 0.5rem;">Главный администратор</span>
                  `}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div class="tab-content hidden" id="doctors">
          <h2>💼 Врачи системы</h2>
          <div class="card-grid">
            ${database.doctors.map(d => `
              <div class="card">
                <h3>${d.name}</h3>
                <p><strong>Специальность:</strong> ${d.specialty}</p>
                <p><strong>Опыт:</strong> ${d.experience}</p>
                <p><strong>Рейтинг:</strong> ⭐ ${d.rating}</p>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div class="tab-content hidden" id="appointments">
          <h2>📅 Все приёмы</h2>
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
                    <td>${patient ? patient.name : 'Неизвестен'}</td>
                    <td>${doctor ? doctor.name : 'Неизвестен'}</td>
                    <td>${a.date}</td>
                    <td>${a.time}</td>
                    <td><span class="badge ${a.status === 'completed' ? 'badge-success' : 'badge-info'}">${a.status}</span></td>
                  </tr>
                `;
              }).join('')}
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
