function findElem() {
  let border = "list-style-image";
  let res = border.split("-");
  let newRes = res.map(function (item, index, array) {
    if (index === 0) {
      return array;
    } else {
      item.split("");
      console.log(typeof());
      debugger;
    }
  });
  console.log(newRes);
}
findElem();
// const
// console.log(res);
