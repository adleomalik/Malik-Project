var bintang = "",
  m = 5;

for (var i = 0; i < m; i++) {
  for (var j = 0; j < m; j++) {
    if (i >= j) {
      bintang += "*";
    } else {
      bintang += " ";
    }
  }
  bintang += "\n";
}
for (var i = 4; i > 0; i--) {
  for (var j = 0; j < i; j++) {
    bintang += "*";
  }
  bintang += "\n";
}
console.log(bintang);
