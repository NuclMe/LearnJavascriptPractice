function findElem() {
  let border = "list-style-imAge";
  let res = border
    .split("-")
    .map(function (item, index) {
      if (index === 0) {
        return item;
      } else {
        return item[0].toUpperCase() + item.slice(1).toLowerCase();
      }
    })
    .join("");

  //   console.log(res);
}
findElem();

/*
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
Функция должна возвращать новый массив и не изменять исходный.
*/
// sort, reverse и splice - не использвать в этой задаче
let arr5 = [0, 1, 2, 3, 4, 5];
function filterRange(arr5, a, b) {
  const res = arr5.filter((item) => item >= a && item <= b);

  console.log(res);
}

// function filterRange(arr5, a, b) {
//   const res = arr5.filter(function (item, index, array) {
//     if (item !== a && item !== b) {
//     } else {
//     }
//   });
//   console.log(res);
// }

filterRange(arr5, 1, 5);
