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

  console.log(res);
}
findElem();


/*










/
// sort, reverse и splice - не использвать в этой задаче
function filterRange(arr, a, b) {}
filterRange();
