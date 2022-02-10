var bintang = "";

for (var i = 5; i > 0; i--) {
  for (var j = 0; j < i; j++) {
    bintang += "*";
  }
  bintang += "\n";
}
console.log(bintang);
