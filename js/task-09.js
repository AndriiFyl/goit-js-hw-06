// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн 
// стиль при клике на button.change - color и выводит значение цвета в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


// отримуэмо посилання на елементи із HTML-файлу: 
// <button>, <span> та <div> відповідно
const buttonEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');
const widgetEl = document.querySelector('.widget');

// на кнопку додаємо слухача подій
buttonEl.addEventListener('click', (event) => {
  // Виконуємо функцію, що заипше в textEl.textContent значення
  // рандомного кольору
  // і змінить колір елемента <body> - а саме <div>
  const randomColor = getRandomHexColor();
  textEl.textContent = randomColor;
  widgetEl.style.backgroundColor = randomColor;
});





