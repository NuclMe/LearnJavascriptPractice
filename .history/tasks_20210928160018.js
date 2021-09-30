function findElem() {
  let border = "list-style-image";
  let res = border
    .split("-")
    .join(" ")
    .map((item) => item.toUppercase()); 
  console.log(res);
}
findElem();
// const
// console.log(res);
