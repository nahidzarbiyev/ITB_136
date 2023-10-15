// for (let i = 1; i < 3; i++) {
   
//     console.log('index',  i);
// }
// let index =0
// let sum = 0
// while(index<10){
// sum += index
// index ++

// console.log(sum);
// }


// let a = 0
// console.log(++a); 
//     console.log(a++); 
//     console.log(a);

// let i =0
// do {
//     let text = ''
//     text += "The number is " + i;
//     i++;
//     console.log(text);
//   }
//   while (i < 10);

// const cars = ["BMW", "Volvo", "Saab", "Ford"];

// for(i = 0; i<cars.length; i++){
//     console.log(i + " " + cars[i] );
// }
// let text= prompt('adini daxil et', 'john doe')

// let str ='string'
// let num = 1234
// let num2 = '1234'

// let bool = false

// let str2 =null

const sentence = 'The quick brown fox jumps over the lazy dog.';

let index = 5;

console.log(`Using an index of ${index} the character returned is ${sentence.charAt(index)}`);
// Expected output: "Using an index of 5 the character returned is u"

index = -4;

console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);




let str1 = 'hello'
let str2 = 'world'
console.log(str1.concat(' ',str2))

console.log(sentence.endsWith('dog.'));
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());
console.log(sentence.toLocaleUpperCase());
console.log(sentence.toLocaleLowerCase());



 sentence.includes('jumps') ? console.log(true) : console.log(false);
 

let str3 = sentence.replace('jumps', ' cat')
console.log(str3);

console.log(sentence.slice(0,sentence.indexOf(' ')+1 ));

console.log(str1.substring(0,str1.length-1));

let trimStr = "      hello      "
console.log(trimStr);
console.log(trimStr.trim());

let newStr = new String('string')

console.log(typeof newStr);

let newNum = new Number(20)


console.log(newNum);
console.log(typeof newNum);