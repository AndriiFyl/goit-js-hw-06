// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// Отримуємо посилання на елемент HTML файлі
const list = document.querySelector("#ingredients");

// Створюємо змінну з тегом(елементом), який плануємо додати до
// HTML-документу
const elementsOfList_1_El = document.createElement("li");
// через textContent - записуємо значення в наш створений едемент li
elementsOfList_1_El.textContent = 'Potatoes';
// через classList додаємо клас на наш елемнт li
elementsOfList_1_El.classList.add("item");

const elementsOfList_2_El = document.createElement("li");
elementsOfList_2_El.textContent = 'Mushrooms';
elementsOfList_2_El.classList.add("item");

const elementsOfList_3_El = document.createElement("li");
elementsOfList_3_El.textContent = 'Garlic';
elementsOfList_3_El.classList.add("item");

const elementsOfList_4_El = document.createElement("li");
elementsOfList_4_El.textContent = 'Tomatos';
elementsOfList_4_El.classList.add("item");

const elementsOfList_5_El = document.createElement("li");
elementsOfList_5_El.textContent = 'Herbs';
elementsOfList_5_El.classList.add("item");

const elementsOfList_6_El = document.createElement("li");
elementsOfList_6_El.textContent = 'Condiments';
elementsOfList_6_El.classList.add("item");


// До елемента ul - що вже був у HTML-розмітці додаемо наші створені
// li із значеннями і класами (робимо все це, звертаючись через змінну
// list, яку спеціально створили на початку файла)
// передаємо всі наші елементи до HTML файлу за допомогою append
list.append(elementsOfList_1_El, elementsOfList_2_El, elementsOfList_3_El,
  elementsOfList_4_El, elementsOfList_5_El, elementsOfList_6_El);



