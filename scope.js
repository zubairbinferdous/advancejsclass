let zubi = 30;

function sum( fast , second){
    let result = fast + second +zubi;
    //console.log(zubi);
    if ( result < 20 ) {
        const mood = "happy";
        console.log(mood);
    }else{
        const mood = "sad";
        console.log(mood);
    }
    return result;

}

const output = sum(10 , 20);
console.log(output);