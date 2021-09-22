const numbers = [3 , 8 , 4 , 5];
const output = [];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log( 'the result is :' , output);
