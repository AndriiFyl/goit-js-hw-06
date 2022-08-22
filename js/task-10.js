function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// отримуємо посилання на елементи з HTML-файлу
const formEl = document.querySelector('#controls');
const inputEl = document.querySelector('input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const divBoxesEl = document.querySelector('#boxes');







// ця функція - приймає 1 параметр - число, і створює стільки ж  div та додає їх до
// HTML розмітки
function createBoxes(amount) {
  const arrayForDiv_s = [];
  inputEl.textContent = amount;


  let addvalue = 0;  // зміна з початковим значенням - приросту розмірів елемента
  // цикл фор для 5ти ітерацій
for (let i = 0; i < amount; i++) {
// створюємо в памяті обєкт div (створиться 5 div)
const createDiv = document.createElement('div');

// задаємо стилі
    createDiv.style.backgroundColor = getRandomHexColor();
    addvalue += 10;
    createDiv.style.width =  30 + addvalue + 'px';
    createDiv.style.height = 30 + addvalue + 'px';
// пушимо всі діви в раніше створений пустий масив
    arrayForDiv_s.push(createDiv);
  }
  // додаємо 5 дівів до розмітки (розпилюємо)
  divBoxesEl.append(...arrayForDiv_s);
}
// створюємо слухача подій на кнопці "створити"
createBtnEl.addEventListener('click', (event) => {
  // після кліка - виконується функція, що передає число введене в інпут до функції
  //  createBoxes
  createBoxes(Number(inputEl.value));
  inputEl.value = '';

});

// створюємо слухача подій для кнопки "видалити"
destroyBtnEl.addEventListener('click', (event) => {
  divBoxesEl.innerHTML = '';
  inputEl.value = '';
})
