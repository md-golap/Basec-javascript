
// nth = (n-1)+(n-2);
// 3 = (3-1)+(3-2);
// 3 = 2+1;
// 3 = 3;


const fibo = [0,1];

for( let i = 2; i <= 10; i++){
    fibo[i] = fibo [i-1] + fibo[i-2];
    console.log(fibo);
}