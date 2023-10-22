//task 1
// function userName(user) {
//     console.log(`${user} is active now `);
// }

// const userName = (user,...rest) =>{
//     console.log(`${user + rest} is active now `)
// }

// let userName = function (user) {
//   console.log(`${user} is active now `);
// };

// let arr = [1, 2, 3, 4, 5];

// arr.map((x,i)=>{
//     console.log(x + "index " + i);
// })

// const arrovvFunc = (x) => {
//   console.log(x);
// };

// arr.map(arrovvFunc);

// userName("John Doe" + 1, 2, 3, 4);
// userName("Nahid Zerbiyev");
// userName("user surname");

//task2

// function bigNum(...nums) {
//   let num = nums[0];
//   nums.map((x) => {
//     if (num < x) {
//       num = x; // num =1 . num = 2 num = 4
//     }
//   });
//   console.log(num);
// }

// bigNum(1, 2, -3, 4, 5);
// bigNum(1,667,12,345);
// bigNum(-2,-3,11,-13,4);

//task3
// function dollarToRubl(rubl, dollar){
//     let toRubl = dollar * 75
//     let sum = toRubl + rubl
//     console.log(`Bütün depozitlər üzrə məbləğ: ${sum} rubl`);
// }

// dollarToRubl(1200,20)
//for in

//task 5

// function min(num1, num2) {
//   if (num1 < num2) {
//     console.log(num1);
//   } else {
//     console.log(num2);
//   }
// }

// min(10, 12);

// min(10,4)

//task6

// function calc(num1, num2, symbol) {
//     let sum = 0
//   switch (symbol) {
//     case "+":
//       sum = num1 + num2;
//     break;
//     case "-":
//       sum = num1 - num2;
//       break;
//     case "*":
//       sum = num1 * num2;
//       break;
//     case "/":
//       sum = num1 / num2;
//       break;
//     default:
//       console.log('yanlis simvol');
//   }
//   console.log(sum);
// }

// calc(10,12, '/')

//task7

// function isLucky(num) {
//   let numtoString = num.toString();
//   let arr = [...numtoString];
//   let num1 = 0;
//   let num2 = 0;
//   arr.splice(3, arr.length-1).map((x) => {
//     num1 += Number(x);
//   });

//   arr.splice(0, 3).map((x) => {
//     num2 += Number(x);
//   });
//   min(num1, num2);
// }

// isLucky(123456);
// isLucky(345624);

//task8
// function capitalizeWords(letter) {
//   let arr = letter.split(" ");
//   let strToarr = [];
//   arr.map((x) => {
//     let str = x.replace(x[0], String(x[0]).toLocaleUpperCase());

//     strToarr.push(str);
//   });
//   console.log(strToarr.join(' '));
// }

// let letter = "Hello my name is Harry";

// capitalizeWords("Hello my name is Harry");
// capitalizeWords("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, molestias.");

//task9
// function isEven(num) {
//   num % 2 == 0 ? console.log(true) : console.log(false);

// }

// isEven(22)

// function isvalidnumber(phone) {
//   let arr = [...phone]
//   if (phone.length  === 12 && arr.slice(0,2).join('') === "+7") {
//     console.log(true);
//   }
// }
// isvalidnumber("+71234567890");
