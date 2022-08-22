
// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//     подставляет его текущее значение в span#name - output.Если инпут пустой,
//         в спане должна отображаться строка "Anonymous".


// У змінні textInput та output записуємо посилання на елементи з
// HTML-файлу, відповідно на <input> та <span>
const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

// Додаємо слухача на textInput - коли щось друкуємо в полі інпуту,
// то в спан буде динамічно записуватись нове значення.
// Якщо ж нічого не записуємо - то буде відображатись Anonymous
textInput.addEventListener('input', (event) => {
    output.textContent = event.currentTarget.value;

    if (event.currentTarget.value === '') {
    output.textContent = "Anonymous"
}});

