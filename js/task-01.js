// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories,
//     то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и 
// выведет в консоль текст заголовка элемента(тега < h2 >) и количество элементов в
// категории(всех вложенных в него < li >).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5





// Задача 1 =====================================================================
// V1===============================================================================

// // отримуємо посилання на весь список по id
// const allListOfCategoriesEl = document.querySelector('#categories');
// // Отримуємо псевдомасив перших дітей залаьного списку [li.item, li.item, li.item]
// const firstChildrenOfListEl = allListOfCategoriesEl.children;
// // Виводимо у консоль результат довжини псевдомасиву,
// // відповідно дізнаємось кількість категорій у списку
// console.log(`Number of categories: ${firstChildrenOfListEl.length}`)




// // Отримуємо псевдомасив усіх елементів з классом item  // [li.item, li.item, li.item]
// const allListEl = document.querySelectorAll('.item');

// // перебираємо данний псевдомасив
// for (let i = 0; i < allListEl.length; i++) {
//     // в змінну childrenofFirstElementsEl записуємо у псевдомасив дітей кожного елемента li.item -> [h2, ul]
//     const arrChildrenOfFirstElementsEl = allListEl[i].children;
    
//     // В змінну categoryElTitle записуємо текстовий контент перших елементів псевдомасиву [h2, ul],
//     // тобто текстовий контент h2 - назви категорій
//     const titleOfCategoryEl = arrChildrenOfFirstElementsEl[0].textContent;
//     // Виводимо результат - назви категорій:
//     console.log(`Catrgory: ${titleOfCategoryEl}`);


//     // В змінну categoryLengthEl записуємо:
//     // 1. спочатку arrChildrenOfFirstElementsEl[1]  - в псевдомасиві [h2, ul] звертаємось до
//     // першого елемента, тобто ul
//     // 2. через querySelectorAll('li') отримуємо посилання на ВСІ елементи li - новий псевдомасив,
//     // який є дочірніми для ul
//     // 3. через .length знаходимо довжину даного псевдомасиву
//     const categoryLengthEl = arrChildrenOfFirstElementsEl[1].querySelectorAll('li').length;

//     // Виводимо результат кількості елементів в категорій:
//     console.log(`Elements  ${categoryLengthEl}`);
// }


// V2================================================================================
// ==================================================================================
// // Через селектор .item отримуємо посилання на всі елементи з даним селектором
// // [li.item, li.item, li.item] - псевдомасив
// const menuItemsByClass = document.querySelectorAll(".item");
// // Оскільки це масив, то можемо за домогою властивості .length - знайти його довжину
// // - відповідно кількість даних елементів
// console.log(`Number of categories: ${menuItemsByClass.length}`);




// // переберемо наш массив menuItemsByClass
// //  let categoryNameEl of menuItemsByClass -> отримуємо 3 однакові елементи:
// // <li class="item"></li> (із дочірніми елементами h2 та ul);
// for (let menuItem of menuItemsByClass) {
//     // звертаємось до всіх дочірніх елементів елементу <li class="item">
//     //  і відразу ж до першого з них - саме
//     // h2 - оскількі він є нульовим елементом, і застосовуємо для нього властивість
//     // textContent - щоб вивести в консоль його значення Animals, Products та Technologies
//     const categoryNameEl = (menuItem.children)[0].textContent;
//     console.log(`Category: ${categoryNameEl}`);



// //    Далі потрібно порахувати кількість елементів у кожномі підсписку
//     // 1. в кожному псевдомасиві menuItem - [h2, ul] звертаємось до його дітей, а саме до елемента
//     // з індексом 1,   - ul.
//     // 2. в даному елементі ul, отримуэмо посилання на його вкладені елементи через querySelectorAll - li -
//     // отримуємо псевдомасив цих елементів
//     // 3. знаходимо довжину цього псевдомасиву, відповідно кількість елементів
//     const amountofElementsEl = menuItem.children[1].children.length;
//     console.log(`Elements: ${amountofElementsEl}`);
// }



// Рішення V2 без коментарів===========================================================
// ======================================================================================

// 1
const menuItemsByClass = document.querySelectorAll(".item");
console.log(`Number of categories: ${menuItemsByClass.length}`);

// 2
for (let menuItem of menuItemsByClass) {
    const categoryNameEl = (menuItem.children)[0].textContent;
    console.log(`Category: ${categoryNameEl}`);

// 3
    const amountofElementsEl = menuItem.children[1].children.length;
    console.log(`Elements: ${amountofElementsEl}`);
}



