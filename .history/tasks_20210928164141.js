function findElem() {
  let border = "list-style-image";
  let res = border.split("-");
  let newRes = res.map(function (item, index) {
    if (index === 0) {
      return item;
    } else {
      debugger;
      return item[0].toUpperCase() + item.slice(1).toLo;
    }
  });
  console.log(newRes);
}
findElem();
// const
// console.log(res);
