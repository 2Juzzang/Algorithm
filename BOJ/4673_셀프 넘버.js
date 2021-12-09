function selfNumber(x) {
  if (x < 10) {
    console.log(x + (x % 10));
  } else if (x < 100) {
    console.log(x + parseInt(x / 10) + (x % 10));
  } else if (x < 1000) {
    console.log(
      x + parseInt(x / 100) + (parseInt(x / 10) % 10) + parseInt(x % 10),
    );
  } else if (x < 10000) {
    console.log(
      x +
        parseInt(x / 1000) +
        (parseInt(x / 100) % 10) +
        (parseInt(x / 10) % 10) +
        parseInt(x % 10),
    );
  }
}
for (let i = 1; i <= 10000; i++) {
  if (i !== selfNumber(i)) {
    console.log(i);
  }
}

let;
