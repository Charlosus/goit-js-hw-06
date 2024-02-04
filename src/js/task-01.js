const body = document.body;
const list = document.querySelectorAll(`#categories li.item`);
const numberOfCategories = list.length;
console.log(`Number of categories : ${numberOfCategories}`);
list.forEach((category) => {
  let categoryName = category.querySelector(`h2`);
  let numberOfItems = category.querySelectorAll(`li`);
  console.log(`\nCategory: ${categoryName.textContent} \nElements : ${numberOfItems.length} 
`);
});
