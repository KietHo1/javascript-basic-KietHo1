console.log(`"Hello world from HTML`);

let arrTop4 = ["Live", "Chelsea", "Mu", "Man city"];

let i = 0;
//Dùng continue
while (i < arrTop4.length) {
  i++;
  if (arrTop4[i] === "Chelsea") {
    console.log("Found it: ", arrTop4[i]);
    continue;
  }

  console.log(">>> check i: ", i);
}
//Dùng break
while (i < arrTop4.length) {
  if (arrTop4[i] === "Chelsea") {
    console.log("Found it: ", arrTop4[i]);
    break;
  }
  i++;
  console.log(">>> check i: ", i);
}
