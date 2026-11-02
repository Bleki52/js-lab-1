/**
 * Лабораторна робота №1: Основи роботи з JavaScript
 * Варіант 3: Бігун Денис (номер у журналі: 3)
 */

// Дані студента для варіанту 3
const STUDENT_FIRST_NAME = 'Денис';
const STUDENT_LAST_NAME = 'Бігун';
const STUDENT_FULL_NAME = `${STUDENT_LAST_NAME} ${STUDENT_FIRST_NAME}`;
const JOURNAL_NUMBER = 3;
const LAST_DIGIT = JOURNAL_NUMBER % 10; // 3

// ==========================================
// РІВЕНЬ 4–6 БАЛІВ
// ==========================================

/**
 * Завдання 1:
 * Діалогове вікно alert, після натиснення "ОК" — виведення привітання у вікно браузера
 */
const task1Btn = document.getElementById('btn-task1');
const task1Output = document.getElementById('output-task1');

task1Btn.addEventListener('click', () => {
  // 1. Виведення діалогового вікна
  alert('Увага! Натисніть кнопку "ОК", щоб отримати привітання.');

  // 2. Виведення тексту у вікно браузера після закриття alert
  task1Output.innerHTML = `<p class="greeting-text">Hello, ${STUDENT_FULL_NAME}!</p>`;
});

/**
 * Завдання 2:
 * Діалогове вікно confirm ("Ок" і "Відміна") з повідомленням про натиснуту кнопку
 */
const task2Btn = document.getElementById('btn-task2');
const task2Output = document.getElementById('output-task2');

task2Btn.addEventListener('click', () => {
  // Відображення діалогового вікна з двома кнопками
  const isConfirmed = confirm('Будь ласка, оберіть дію: натисніть "ОК" або "Відміна"');

  if (isConfirmed) {
    task2Output.innerHTML = '<span class="confirm-result confirm-ok">Натиснуто кнопку: <strong>ОК</strong></span>';
  } else {
    task2Output.innerHTML = '<span class="confirm-result confirm-cancel">Натиснуто кнопку: <strong>Відміна</strong></span>';
  }
});

/**
 * Завдання 3:
 * Таблиця множення для числа, що дорівнює останній цифрі номера у журналі (3)
 */
const task3Btn = document.getElementById('btn-task3');
const task3Output = document.getElementById('output-task3');

function generateMultiplicationTable(number) {
  let tableHtml = `
    <table class="multiplication-table">
      <thead>
        <tr>
          <th>Вираз</th>
          <th>Результат</th>
        </tr>
      </thead>
      <tbody>
  `;

  for (let i = 1; i <= 10; i++) {
    tableHtml += `
      <tr>
        <td>${number} × ${i}</td>
        <td><strong>${number * i}</strong></td>
      </tr>
    `;
  }

  tableHtml += '</tbody></table>';
  return tableHtml;
}

task3Btn.addEventListener('click', () => {
  task3Output.innerHTML = generateMultiplicationTable(LAST_DIGIT);
});

// ==========================================
// РІВЕНЬ 7–9 БАЛІВ
// ==========================================

/**
 * Завдання 1:
 * Функція, яка перевіряє парність/непарність номера у журналі
 * і виводить результат у кольоровому абзаці (парне — зелений, непарне — червоний).
 */
const level2Task1Btn = document.getElementById('btn-level2-task1');
const level2Task1Output = document.getElementById('output-level2-task1');

function checkParity(num) {
  const isEven = num % 2 === 0;
  const parityParagraph = document.createElement('p');

  if (isEven) {
    parityParagraph.className = 'parity-even';
    parityParagraph.textContent = `Число ${num} (номер у журналі) є ПАРНИМ.`;
  } else {
    parityParagraph.className = 'parity-odd';
    parityParagraph.textContent = `Число ${num} (номер у журналі) є НЕПАРНИМ.`;
  }

  return parityParagraph;
}

level2Task1Btn.addEventListener('click', () => {
  level2Task1Output.innerHTML = '';
  const resultP = checkParity(JOURNAL_NUMBER);
  level2Task1Output.appendChild(resultP);
});

/**
 * Завдання 2:
 * Функція створення пароля: перші 3 літери імені + номер * 2.
 * Виведення у блоці div.
 */
const level2Task2Btn = document.getElementById('btn-level2-task2');
const level2Task2Output = document.getElementById('output-level2-task2');

const generatePassword = (name, number) => {
  // Перші 3 літери імені
  const namePart = name.substring(0, 3);
  // Номер * 2
  const numPart = number * 2;
  return `${namePart}${numPart}`;
};

level2Task2Btn.addEventListener('click', () => {
  const password = generatePassword(STUDENT_FIRST_NAME, JOURNAL_NUMBER);
  const passDiv = document.createElement('div');
  passDiv.className = 'password-box';
  passDiv.textContent = `Згенерований пароль: ${password}`;
  
  level2Task2Output.innerHTML = '';
  level2Task2Output.appendChild(passDiv);
});

/**
 * Завдання 3:
 * Функція приймає три оцінки через prompt, обчислює середнє
 * та виводить результат у динамічно створений div з id = номер у журналі (id="3").
 */
const level2Task3Btn = document.getElementById('btn-level2-task3');
const level2Task3Container = document.getElementById('container-level2-task3');

function calculateAverageGrades() {
  const grade1 = parseFloat(prompt('Введіть першу оцінку:', '85'));
  if (isNaN(grade1)) return;

  const grade2 = parseFloat(prompt('Введіть другу оцінку:', '90'));
  if (isNaN(grade2)) return;

  const grade3 = parseFloat(prompt('Введіть третю оцінку:', '95'));
  if (isNaN(grade3)) return;

  const average = ((grade1 + grade2 + grade3) / 3).toFixed(2);

  // Створення динамічного div із id, що дорівнює номеру в журналі
  const existingDiv = document.getElementById(String(JOURNAL_NUMBER));
  if (existingDiv) {
    existingDiv.remove();
  }

  const dynamicDiv = document.createElement('div');
  dynamicDiv.id = String(JOURNAL_NUMBER);
  dynamicDiv.innerHTML = `
    <strong>Блок з id="${JOURNAL_NUMBER}":</strong><br>
    Оцінки: ${grade1}, ${grade2}, ${grade3}<br>
    Середній бал: <strong>${average}</strong>
  `;

  level2Task3Container.innerHTML = '';
  level2Task3Container.appendChild(dynamicDiv);
}

level2Task3Btn.addEventListener('click', calculateAverageGrades);

/**
 * Завдання 4:
 * Запитує кількість студентів, потім їх прізвища та імена.
 * Відображає прізвища та імена у вікні браузера ПІСЛЯ КОЖНОГО введення.
 */
const level2Task4Btn = document.getElementById('btn-level2-task4');
const level2Task4Output = document.getElementById('output-level2-task4');

level2Task4Btn.addEventListener('click', () => {
  const countStr = prompt('Введіть кількість студентів групи:', '3');
  const count = parseInt(countStr, 10);

  if (isNaN(count) || count <= 0) {
    alert('Введено некоректну кількість студентів.');
    return;
  }

  level2Task4Output.innerHTML = '<ol class="student-list"></ol>';
  const listElement = level2Task4Output.querySelector('ol');

  for (let i = 1; i <= count; i++) {
    const studentName = prompt(`Студент #${i} із ${count}. Введіть прізвище та ім'я:`, `Студент ${i}`);
    
    // Якщо користувач натиснув "Відміна"
    if (studentName === null) {
      break;
    }

    // Відображаємо одразу після кожного введення
    const li = document.createElement('li');
    li.textContent = studentName.trim() || `Студент #${i}`;
    listElement.appendChild(li);
  }
});

// ==========================================
// РІВЕНЬ 10–12 БАЛІВ
// ==========================================

/**
 * Завдання 1:
 * Список (ul) з елементами, що відповідають літерам імені ("Денис").
 * При наведенні миші — показує alert із цією літерою.
 */
const level3Task1Btn = document.getElementById('btn-level3-task1');
const level3Task1Output = document.getElementById('output-level3-task1');

level3Task1Btn.addEventListener('click', () => {
  level3Task1Output.innerHTML = '';
  
  const ul = document.createElement('ul');
  ul.className = 'name-letters-list';

  const nameLetters = STUDENT_FIRST_NAME.split('');

  nameLetters.forEach((letter) => {
    const li = document.createElement('li');
    li.textContent = letter;
    li.title = `Наведіть мишу, щоб побачити літеру`;

    // Обробник події при наведенні курсору миші
    li.addEventListener('mouseover', () => {
      alert(`Літера вашого імені: ${letter}`);
    });

    ul.appendChild(li);
  });

  level3Task1Output.appendChild(ul);
});

/**
 * Завдання 2:
 * Скрипт запитує прізвища та імена доти, доки користувач не натисне "Відміна".
 * Прізвища та імена відображаються у вікні браузера після кожного введення.
 */
const level3Task2Btn = document.getElementById('btn-level3-task2');
const level3Task2Output = document.getElementById('output-level3-task2');

level3Task2Btn.addEventListener('click', () => {
  level3Task2Output.innerHTML = '<ol class="student-list"></ol>';
  const listElement = level3Task2Output.querySelector('ol');

  let studentIndex = 1;
  while (true) {
    const student = prompt(`Введіть прізвище та ім'я студента #${studentIndex} (або натисніть "Відміна" для завершення):`);

    // Якщо натиснуто кнопку "Відміна"
    if (student === null) {
      break;
    }

    if (student.trim() !== '') {
      const li = document.createElement('li');
      li.textContent = student.trim();
      // Відображаємо у вікні браузера одразу після введення
      listElement.appendChild(li);
      studentIndex++;
    }
  }
});

/**
 * Завдання 3:
 * Кнопка «Показати блоки» й контейнер id="letters".
 * Для кожної літери прізвища ("Бігун") створює div у контейнері.
 * При наведенні на блок у alert показує «Це літера [X]».
 * При повторному натисканні контейнер очищається.
 */
const lettersBtn = document.getElementById('btn-letters');
const lettersContainer = document.getElementById('letters');

lettersBtn.addEventListener('click', () => {
  // Якщо контейнер уже містить блоки — очищаємо його
  if (lettersContainer.children.length > 0) {
    lettersContainer.innerHTML = '';
    lettersBtn.textContent = 'Показати блоки';
    return;
  }

  // Створюємо блоки для кожної літери прізвища "Бігун"
  const surnameLetters = STUDENT_LAST_NAME.split('');

  surnameLetters.forEach((letter) => {
    const letterDiv = document.createElement('div');
    letterDiv.className = 'letter-block';
    letterDiv.textContent = letter;

    // Подія при наведенні курсору миші
    letterDiv.addEventListener('mouseover', () => {
      alert(`Це літера [ ${letter} ]`);
    });

    lettersContainer.appendChild(letterDiv);
  });

  lettersBtn.textContent = 'Приховати блоки (очистити)';
});
