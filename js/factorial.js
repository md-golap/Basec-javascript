
// 4! = 4*3*2*1

// let factorial = 1;

// for(i=1; i<=4; i++){
//     factorial = factorial*i;
    
// }
// console.log(factorial);

// for (i=1; i<=10; i++){
//   console.log('2*'+i, 2*i);

// }


// for (i=1; i<=22; i++){
//     if(i%2==0){
//         console.log(i, 'even Number')
//     }else{
//         console.log(i, 'odd number')
//     }
// }

function factorial(i){
    if(i==1){
        return 1;
    }return i*factorial(--i);
} 

4

console.log(factorial(4));




