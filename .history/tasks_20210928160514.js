function findElem() {
  let border = "list-style-image";
  let res = border.split("-");
  res.map(function (item, index) {
    item === index[0];
  });
  console.log(res);
}
findElem();
// const
// console.log(res);
