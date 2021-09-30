function findElem() {
  let border = "list-style-image";
  let res = border.split("-");
  let newRes = res.map(function (item, index) {
    if (index === 0) {
      return item;
    } else {
      debugger;
      return item[0].toUpperCase() + ;
    }
  });
  console.log(newRes);
}
findElem();
// const
// console.log(res);
