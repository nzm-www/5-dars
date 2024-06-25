// --------------------------------------
// construktr function qanday yoziladi

// function Cars(name, year, color) {
//   this.name = name;
//   this.year = color;
//   this.color = color;
// }
// // Masalalar---------------------------------------------

// // const students = [
// //   { isim: "ali", yosh: 23, baholar: [90, 80, 85] },
// //   { isim: "john", yosh: 22, baholar: [85, 87, 90] },
// //   { isim: "salim", yosh: 21, baholar: [88, 92, 84] },
// // ];

// // let result = students[0];
// // let sum =
// //   students[0].baholar[0] + students[0].baholar[1] + students[0].baholar[2];

// // students.forEach((el) => {
// //   if (sum < el.baholar[0] + el.baholar[1] + el.baholar[2]) {
// //     sum = el.baholar[0] + el.baholar[1] + el.baholar[2];
// //     result = el;
// //   }
// // });
// // console.log(result);
// // .................................................
// // const products = [
// //   { nom: "Kompyuter", narxi: 1000, mavjud: true },
// //   { nom: "Monitor", narxi: 300, mavjud: true },
// //   { nom: "telefon", narxi: 7000, mavjud: false },
// //   { nom: "palanshet", narxi: 500, mavjud: true },
// // ];

// // let result = products[0];
// // let max = products[0].narxi + products[0].narxi + products[0].narxi;

// // products.forEach((el) => {
// //   if (max < el.narxi + el.narxi + el.narxi) {
// //     max = el.narxi + el.narxi + el.narxi;
// //     result = el;
// //   }
// // });

// // console.log(result);

// // -----------------------------------------------

// // const workers = [
// //   { isim: "ali", oylik: 2000, lavozim: "dasturchi," },
// //   { isim: "Qodir", oylik: 1800, lavozim: "Dizayner," },
// //   { isim: "bahodr", oylik: 1500, lavozim: "bugalter," },
// //   { isim: "Dilshod", oylik: 25000, lavozim: "Loyyiha boshqaruvchsi," },
// // ];

// // let result = workers[0];
// // let max =
// //   workers[0].oylik + workers[0].oylik + workers[0].oylik + workers[0].oylik;

// // workers.forEach((el) => {
// //   if (max < el.oylik + el.oylik + el.oylik) {
// //     max = el.oylik + el.oylik + el.oylik;
// //     result = el;
// //   }
// // });

// // console.log(result);

// // =========================

// // const workers = [
// //   { isim: "ali", oylik: 2000, lavozim: "dasturchi," },
// //   { isim: "Qodir", oylik: 1800, lavozim: "Dizayner," },
// //   { isim: "bahodr", oylik: 100000, lavozim: "bugalter," },
// //   { isim: "Dilshod", oylik: 100, lavozim: "Loyyiha boshqaruvchsi," },
// // ];

// // let result = workers[0];
// // let max =
// //   workers[0].oylik + workers[0].oylik + workers[0].oylik + workers[0].oylik;

// // workers.forEach((el) => {
// //   if (max < el.oylik + el.oylik + el.oylik) {
// //     max = el.oylik + el.oylik + el.oylik;
// //     result = el;
// //   }
// // });
// // console.log(result);

// const students=[
//   {ism: "Ali", yosh: 20, fanlari: ['Matematika', 'Fizika']},
//   {ism: "Vali", yosh: 22, fanlari: ['Matematika', 'Fizika']},
//   {ism: "Sammi", yosh: 21, fanlari: ['Fizika', 'Informatika']}
// ]

// function counter(arr=[]){
//   let fanlar=arr.map(item=>{
//       return item.fanlari
//   })
//   fanlar=fanlar.flat();
//   let m=0, f=0, i=0;
//   fanlar.forEach(item=>{
//       if(item=='Matematika'){
//           m++;
//       }else if(item=='Fizika'){
//           f++;
//       }else if(item=='Informatika'){
//           i++;
//       }
//   })
//   let fan={
//       matematika: m,
//       fizika: f,
//       inforrmatika: i
//   }
//   return fan;
// }
// console.log(counter(students));

// let bmw = new Cars("bmw", 2020, "black");

// console.log(bmw);
// ---------------------------------------

// function evechscor(arr) {
//     let sum = 0
//     arr.forEach(element => {
//         sum += element.score;
//     });

//     let count = arr.length

// }const students = [
//     { name: 'aloice',}
// ]

// ------------
// let fruits = ["olma", "giloz", "anor", "anjir", "banan", "olma"];

// let result = [];

// fruits.forEach(function (value, indexforuach) {
//   let isExist = fruits.find(function (el, indexFind) {
//     return el == value && indexFind != indexforuach;
//   });
//   if (!isExist) {
//     result.push(value);
//   }
// });
// console.log();

//

// const greet = document.getElementById("h1");
// console.log(greet);

// const test = document.getElementsByClassName("test");
// console.log(test);

// const Bytegs = document.getElementsByTagName("p");
// console.log(Bytegs);

// const a = document.querySelectorAll(".test");
// console.log(a);

// let h1 = document.getElementById("h1");
// let img = document.querySelector("img");

// img.setAttribute("alt", "Bu yerda tabiat rasmi bor edi");
// console.log(img);

// let p = document.querySelector("#h1");
// p.innerHTML = "Nizomiddin";
// console.log(p.innerHTML);
// console.log(p.textContent);

// const card = document.querySelector("#box1");
// const card2 = document.querySelector("#box2");
// const card3 = document.querySelector("#box3");
// const button = document.querySelector("#btn1");
// const button2 = document.querySelector("#btn2");
// const button3 = document.querySelector("#btn3");

// const checbox = document.querySelector("#checkbox");
// const body = document.querySelector("#body");

// checbox.addEventListener("click", function () {
//   body.style.backgroundColor = "#f0ffff";
// });

// button.addEventListener("click", function () {
//   card.style.backgroundColor = "red";
// });

// button2.addEventListener("click", function () {
//   card2.style.backgroundColor = "#FCFF00";
// });

// button3.addEventListener("click", function () {
//   card3.style.backgroundColor = "#49C628";
// });

const left = document.getElementById("left");
const right = document.getElementById("right");
const mode = document.querySelector("#mode");
const info = document.getElementById("info");
const allbox = document.querySelector(".allbox");

mode.addEventListener("click", () => {
  if (mode.checked) {
    left.style.backgroundColor = "#f4f4f5";
    right.style.backgroundColor = "#18181b";
    info.style.marginRight = "550px";
    info.style.position = "relative";
    info.style.fontFamily = "sans-serif";

    allbox.classList.add("dark-mode");
  } else {
    left.style.backgroundColor = "#18181b";
    right.style.backgroundColor = "#f4f4f5";
    info.style.marginRight = "0";
    info.style.position = "static";
    allbox.classList.remove("dark-mode");
  }
  left.style.transform = "translate(10px)";
  left.style.transition = "2s";
  right.style.transform = "translate(10px)";
  right.style.transition = "2s";
});

// =============
// document.addEventListener("DOMContentLoaded", (event) => {
//   const toggleButton = document.getElementById("toggleButton");
//   const currentMode = localStorage.getItem("mode") || "light";

//   document.body.classList.add(currentMode + "-mode");

//   toggleButton.addEventListener("click", () => {
//     const isLightMode = document.body.classList.contains("light-mode");
//     if (isLightMode) {
//       document.body.classList.replace("light-mode", "dark-mode");
//       localStorage.setItem("mode", "dark");
//     } else {
//       document.body.classList.replace("dark-mode", "light-mode");
//       localStorage.setItem("mode", "light");
//     }
//   });
// });
