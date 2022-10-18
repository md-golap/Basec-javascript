// Problem 2:
// panda Cost

function pandaCost(singara,chamusa,jilapi){
    
    const persingaraCost = 7;
    const perchamusaCost = 10;
    const perjilapiCost = 15;


    const singaraQuantityCost = persingaraCost * singara;
    const chamusaQuantityCost = perchamusaCost * chamusa;
    const jilapiQuantityCost = perjilapiCost * jilapi;


    const totalFoodCost = singaraQuantityCost + chamusaQuantityCost + jilapiQuantityCost;
    return totalFoodCost;

}


console.log(pandaCost(1,2,5,));


