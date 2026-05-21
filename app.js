// ===== DATABASE =====
const database = {
  users: [
    { id: 1, name: 'Иван Пациент', email: 'patient@clinic.ru', role: 'patient', password: '1234' },
    { id: 2, name: 'Доктор Смирнов', email: 'doctor@clinic.ru', role: 'doctor', password: '1234' },
    { id: 3, name: 'Админ Иванова', email: 'admin@clinic.ru', role: 'admin', password: '1234' }
  ],
  doctors: [
    { id: 1, name: 'Доктор Смирнов', specialty: 'Терапевт', rating: 4.8, experience: '12 лет' },
    { id: 2, name: 'Доктор Петрова', specialty: 'Кардиолог', rating: 4.9, experience: '15 лет' },
    { id: 3, name: 'Доктор Сидоров', specialty: 'Невролог', rating: 4.7, experience: '8 лет' }
  ],
  appointments: [
    { id: 1, patientId: 1, doctorId: 1, date: '2024-12-20', time: '10:00', status: 'scheduled' },
    { id: 2, patientId: 1, doctorId: 2, date: '2024-12-22', time: '14:30', status: 'completed', diagnosis: 'Здоров' }
  ],
  medicalRecords: [
    { id: 1, patientId: 1, date: '2024-12-22', doctor: 'Доктор Петрова', diagnosis: 'Здоров', prescription: 'Отдых 3 дня' }
  ]
};

// ===== STATE =====
let currentUser = null;
let currentPage = 'auth';

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

function logout() {
  currentUser = null;
  currentPage = 'auth';
  renderApp();
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
    .filter(a => a.doctorId === database.doctors.find(d => d.name === currentUser.name)?.id)
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

// ===== ADMIN FUNCTIONS =====
function getStatistics() {
  return {
    totalUsers: database.users.length,
    totalDoctors: database.doctors.length,
    totalAppointments: database.appointments.length,
    completedAppointments: database.appointments.filter(a => a.status === 'completed').length,
    averageRating: (database.doctors.reduce((sum, d) => sum + d.rating, 0) / database.doctors.length).toFixed(1)
  };
}

function addUser(name, email, role) {
  const user = {
    id: database.users.length + 1,
    name,
    email,
    role,
    password: '1234'
  };
  database.users.push(user);
  alert('✓ Пользователь добавлен');
  renderApp();
}

function removeUser(userId) {
  database.users = database.users.filter(u => u.id !== userId);
  alert('✓ Пользователь удалён');
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
  return `
    <div class="auth-container">
      <div class="auth-box">
        <div class="auth-logo">🏥</div>
        <h1>МедПорт</h1>
        <p class="auth-subtitle">Онлайн-система поликлиники</p>
        
        <div class="demo-roles">
          <h3>🧑 Попробуйте как пациент</h3>
          <p>Email: <code>patient@clinic.ru</code> | Пароль: <code>1234</code></p>
          
          <h3>👨‍⚕️ Попробуйте как врач</h3>
          <p>Email: <code>doctor@clinic.ru</code> | Пароль: <code>1234</code></p>
          
          <h3>👩‍💼 Попробуйте как админ</h3>
          <p>Email: <code>admin@clinic.ru</code> | Пароль: <code>1234</code></p>
        </div>
        
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
          <button class="tab-btn active" data-tab="appointments">📅 Записи</button>
          <button class="tab-btn" data-tab="medical">📋 Медкарта</button>
          <button class="tab-btn" data-tab="book">✏️ Новая запись</button>
        </div>
        
        <div class="tab-content" id="appointments">
          <h2>Ваши записи к врачу</h2>
          ${appointments.length === 0 ? '<p class="no-data">Записей нет</p>' : `
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
          ${records.length === 0 ? '<p class="no-data">Записей в медкарте нет</p>' : `
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
        
        <div class="info-box">
          <p><strong>Специальность:</strong> ${doctor.specialty}</p>
          <p><strong>Опыт:</strong> ${doctor.experience}</p>
          <p><strong>Рейтинг:</strong> ⭐ ${doctor.rating}</p>
        </div>
        
        <h2>📅 Ваш расписание приёмов</h2>
        ${appointments.length === 0 ? '<p class="no-data">Нет записанных пациентов</p>' : `
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
          <button class="tab-btn" data-tab="users">👥 Пользователи</button>
          <button class="tab-btn" data-tab="doctors">👨‍⚕️ Врачи</button>
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
        
        <div class="tab-content hidden" id="users">
          <h2>Управление пользователями</h2>
          <table class="data-table">
            <thead>
              <tr>
                <th>Имя</th>
                <th>Email</th>
                <th>Роль</th>
                <th>Действие</th>
              </tr>
            </thead>
            <tbody>
              ${database.users.map(u => `
                <tr>
                  <td>${u.name}</td>
                  <td>${u.email}</td>
                  <td><span class="badge">${u.role}</span></td>
                  <td><button class="btn btn-danger btn-sm" onclick="removeUser(${u.id})">Удалить</button></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        
        <div class="tab-content hidden" id="doctors">
          <h2>Врачи системы</h2>
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
          <h2>Все приёмы</h2>
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
                    <td>${patient.name}</td>
                    <td>${doctor.name}</td>
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
  // Auth form
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      login(email, password);
    });
  }
  
  // Tab switching
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tabName = e.target.dataset.tab;
      document.querySelectorAll('.tab-content').forEach(t => t.classList.add('hidden'));
      document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
      document.getElementById(tabName)?.classList.remove('hidden');
      e.target.classList.add('active');
    });
  });
  
  // Patient book appointment
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
  
  // Doctor diagnosis
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
