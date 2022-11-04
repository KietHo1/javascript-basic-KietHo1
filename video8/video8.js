console.log(`"Hello world from HTML`);
let a = {}; //object rong(empty object)
let c = "";
//key: value
let obj = {
  name: "Eric",
  address: "Ha Noi",
  email: "",
  gender: "",
};
let b = "address";

// obj[b] = 'Hary'
obj.name = "HCM"; //Dat lai gia tri khoa name(reset value of key name)

console.log("what is your name ? ", `My name 's : `, obj["name"], obj);
console.log("Where are you from ? ", `I'm from : `, obj["address"]);
