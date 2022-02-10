var bintang = "",
  m = 4,
  n = m++;
for (i = m; i > 0; i--) {
  for (j = 0; j < n; j++) {
    if (i > j) {
      bintang += " ";
    } else {
      bintang += "*";
    }
  }
  bintang += "\n";
}
for (i = 0; i < n; i++) {
  for (j = 0; j < n; j++) {
    if (i > j) {
      bintang += " ";
    } else {
      bintang += "*";
    }
  }
  bintang += "\n";
}
console.log(bintang);
