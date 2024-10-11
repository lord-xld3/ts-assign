let A = () => {};
let B = (num) => {console.log(num)};
// @ts-ignore
A = B;
A(1);