// Счетчик состоит из спана и кнопок, которые, при клике, должны
// увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика
//  и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.




// // Створюємо змінні decrementBtnEl та incrementBtnEl - в які записуємо посилання через дата-атрибути
// // на елементи з HTML-файлу - відповідно [data-action="decrement"] та [data-action="increment"]
// const decrementBtnEl = document.querySelector('[data-action="decrement"]')
// const incrementBtnEl = document.querySelector('[data-action="increment"]')
//     // в змінну counterNumberEl - записуємо посилання на елемент span
// const counterNumberEl = document.querySelector('#value')
// // на decrementBtnEl та incrementBtnEl встановлюємо слухача подій,
// // тобто після click будуть виконуватись
// //  відповідні функції , з певним значенням counterValue,
// // який далі буде прирівнюватись до valueEl.textContent - який динамічно буде змінювати
// // значення в HTML-файлі, оскільки раніше ми зробили на нього посилання: const counterNumberEl = document.querySelector('#value')
// // ну і звичайно, щоб записати значення, звертаємось до елемента через textContent

// let counterValue = 0;

// decrementBtnEl.addEventListener('click', (event) => {
//     counterValue -= 1;
//     counterNumberEl.textContent = counterValue;
// });


// incrementBtnEl.addEventListener('click', (event) => {
//     counterValue += 1;
//     counterNumberEl.textContent = counterValue;
// });




// // Варіант без коментарів==============================================
const decrementBtnEl = document.querySelector('[data-action="decrement"]')
const incrementBtnEl = document.querySelector('[data-action="increment"]')
const counterNumberEl = document.querySelector('#value')

let counterValue = 0;

decrementBtnEl.addEventListener('click', (event) => {
    counterValue -= 1;
    counterNumberEl.textContent = counterValue;
});


incrementBtnEl.addEventListener('click', (event) => {
    counterValue += 1;
    counterNumberEl.textContent = counterValue;
});













