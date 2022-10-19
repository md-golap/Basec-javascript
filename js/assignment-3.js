
// Problem 3:
// picnicBudget

function picnicBudget(person){
   
    const hundredPersonPrice = 5000;
    const twoHundredPersonPrice = 4000;
    const threeHundredPersonPrice = 3000;

    if(person <= 100){
        return hundredPersonPrice * person;


    }else if(person <= 200){
        const firstHundredPersonPrice = hundredPersonPrice * 100;
        const seconHundredPersonPrice = (person-100)*twoHundredPersonPrice;

        return firstHundredPersonPrice + seconHundredPersonPrice;
    }else{
        const firstHundredPersonPrice = hundredPersonPrice * 100;
        const seconHundredPersonPrice = twoHundredPersonPrice * 100;
        const thirdHundredPersonPrice = (person-200) * threeHundredPersonPrice;

        return (firstHundredPersonPrice + seconHundredPersonPrice + thirdHundredPersonPrice);
    }
}

console.log(picnicBudget(101));



