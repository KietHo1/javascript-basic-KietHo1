console.log(`"Hello world from HTML`.toUpperCase());
let a = 5;
let b = 6;
let c = 6.9;
let d = "5"; // chuoi input => NaN(Not a Number)
//let e = Number(d);
let e = +d;
console.log(a + b);
console.log(a + c);
console.log(a * d); // chuoi va so => so
console.log(a === d, "a:", typeof a, "d: ", typeof d); //so sanh 2 kieu du lieu
console.log(d === e, "d:", typeof d, "e: ", typeof e); //false
console.log(a === e, "d:", typeof d, "e: ", typeof e); //true
