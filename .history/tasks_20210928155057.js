function findElem() {
  let border = "background-color";
  let res = border.split("-").join(" ");
  console.log(typeof res);
  return res;
}
findElem();
// console.log(res);
