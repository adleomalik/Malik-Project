var bintang = "",
  m = 5;
for (var i = 0; i < m; i++) {
  for (var j = 0; j < m; j++) {
    if (i <= j) {
      bintang += "*";
    } else {
      bintang += " ";
    }
  }
  bintang += "\n";
}
console.log(bintang);
