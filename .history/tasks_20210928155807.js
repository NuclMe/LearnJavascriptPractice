function findElem() {
  let border = "list-style-image";
  let res = border
    .split("-")
    .join(" ")
    .map((item) => item.toUppercase);
}
findElem();
// const
// console.log(res);
