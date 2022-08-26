// Напиши скрипт, который при потере фокуса на инпуте(событие blur), проверяет
//  его содержимое на правильное количество введённых символов.

//  Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным,
//     если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid,
//     которые мы уже добавили в исходные файлы задания.

const input = document.querySelector('#validation-input');
input.addEventListener("blur", onBlur);


function onBlur(event) {
    const inp = event.currentTarget;
    const inpLength = Number(inp.dataset.length);

    if (inp.value.length !== inpLength) {
        inp.classList.add('invalid');
        inp.classList.remove('valid');
    }

   else {
        inp.classList.add('valid');
        inp.classList.remove('invalid');
    }
 
}