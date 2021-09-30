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
  return arr5.filter((item) => item >= a && item <= b);
}

filterRange(arr5, 1, 5);

/*
Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция должна изменять принимаемый массив и ничего не возвращать.
*/
let arr = [0, 1, 2, 3, 4, 5];
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] ==  a && arr[i] === b) {
      arr.splice(i, 1);
      debugger;
    } else {
      console.log("lolo");
    }
  }
  console.log(arr);
  // let res = arr.splice(0, item <= a && item >= b);
}

filterRangeInPlace(arr, 1, 4);
