function findElem() {
  let border = "list-style-imAge";
  let res = border.split("-");
  let newRes = res
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
// const
// console.log(res);

function filterRange(arr, a, b) {}
