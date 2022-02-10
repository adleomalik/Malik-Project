var bintang = "",
  m = 5,
  n = m++;
for (var i = 5; i > 0; i--) {
  for (var j = 0; j < 6; j++) {
    if (i > j) {
      bintang += " ";
    } else {
      bintang += "*";
    }
  }
  bintang += "\n";
}
console.log(bintang);
