// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
//  и изменяет инлайн - стиль span#text обновляя свойство font - size.В результате при перетаскивании
// ползунка будет меняться размер текста.

// створюємо змінні, в які записуємо посилання нa елементи з HTML-документу
// відповідно на <input> та  <span>
const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
console.log(inputEl);

// на наш інпут встановлюємо слухача подій: 'input' - значення моментально буде
// змінбватись при перетягуванні бігунка
inputEl.addEventListener('input', (event) => {
    //миттєве значення шрифту елементу spanEl буде = значенню 
    // в якому полженні буде перебувати бігунок в інпуті +  додаємо 'px' 
    spanEl.style.fontSize  = event.currentTarget.value + 'px' ;
});





