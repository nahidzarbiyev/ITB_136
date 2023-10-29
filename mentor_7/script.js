let nums = [1, 2, 3, 23, 11, 20, 41, -13];

//foreach

// nums.forEach( (value,index,arr)=>{
//     console.log(`[${index}]-${value}`);
//    })

//map

// let num = nums.map(numsFn);
// console.log(num);

// function numsFn(num, index, arr) {
// return num
// }

//filter

// let filteredArr = nums.filter((num, idx, arr) => {
//     return num <5
// });

// console.log(filteredArr);


// reduce

// let sum = 0

// for (let i = 0; i < nums.length; i++) {
    
//     sum+=nums[i]
    
// }

// console.log(sum);

// let reducedArr = nums.reduce((acc,curr,idx,arr)=>{
//     return acc+ curr
// },0)

// console.log(reducedArr);
// let num = nums[0]
// for (let i = 0; i < nums.length; i++) {
 
//  if (num<nums[i]) {
//     num = nums[i]
    
//  }

  
// }

// console.log(num);



// let reducedBigNum = nums.reduce((acc,curr)=>{
//     if (acc<curr) {
//         acc = curr
//     }
//     return acc
// })

// console.log(reducedBigNum);


//slice
// let slicedArr= nums.slice(0,2)

// console.log(slicedArr);

// console.log(nums);

//splice 
// let spliceArr = nums.splice(0,2)
// console.log(spliceArr);
// console.log(nums.splice(0,2,13,24));


// console.log(nums);

//sort

let nameArr= ['Tural','asif','vusal','heyder']

// console.log(nameArr.sort())

// let sortedNums = nums.sort((a,b)=>a-b)

// console.log(sortedNums);

//concat

// let concatArr = nums.concat(nameArr)

// console.log(concatArr);


// fill

// console.log(nums.fill(0));


//includes
// console.log(nameArr.includes('tural'));


//reverse

// console.log(nameArr.reverse());

//push

// nameArr.push('xalid')

// console.log(nameArr)
//pop
// nameArr.pop()
// console.log(nameArr)
//unshift
// nameArr.unshift('xalid')

// console.log(nameArr)
// nameArr.shift()
// console.log(nameArr)

// every

// console.log(nums.every(x=>x>0));

// some


// console.log(nums.some(x=>x=0));
// find
// console.log(nums.find(x=>x==-13));

//flat

let arr = [12,32,[23,45,[21,32,[67,89,7,0,1,[2,3,45]]]]]

console.log(arr.flat(Infinity));

let flatmap = arr.flatMap((x)=>x)


//join
console.log(nums.join('-'));

// 