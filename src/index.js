module.exports = function getZerosCount(number, base) {
  let a = [];
  let b = [];
  let p = new Set();
  let z = 0;
  let i = 2;
  while(base >= i){
    if (base % i == 0){
      base /= i;
      if (p.has(i) == false){
        p.add(i);
        a.push(1);
      } else {
        a[a.length - 1] += 1;
      }
    } else {
      i += 1;
    }
  }
  let num = Array.from(p);
  for (i = 0; i < num.length; i++){
    let N = number;
    let sum = 0;
    let x = 1;
    while (N > 0){
      N = Math.floor(number / Math.pow(num[i], x));
      sum += N;
      x += 1;
    }
    b.push(sum);
  }
  num = [];
  for (i = 0; i < b.length; i++){
    num.push(Math.floor(b[i] / a[i]));
  }

  let min = num[0];
  for (i = 1; i < num.length; i++) {
    if (num[i] < min){
      min = num[i];
    }
  }

  return min;
}