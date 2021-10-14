const numbers = [3 , 8 , 4 , 5];
// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log( 'the result is :' , output);

// const square = element => element * element;
// const square = x => x * x ;

// const result =  numbers.map(function(data){
//     return data * data;
// })


// const result = numbers.map(x => x*x);
// console.log(result);

// const bigger = numbers.filter( function (data){
//     return data > 3 ;
// })

const bigger = numbers.filter( x => x > 5);
console.log(bigger);