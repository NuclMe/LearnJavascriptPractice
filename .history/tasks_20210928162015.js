function findElem() {
  let border = "list-style-image";
  let res = border.split("-");
  let newRes = res.map(function (item, index) {
    if (index === 0) {
      return item;
    } else {
      item.splice(1)toUpperCase();
      debugger;
    }
  });
  console.log(newRes);
}
findElem();
// const
// console.log(res);
