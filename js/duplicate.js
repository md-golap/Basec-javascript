
// const names = ['abul', 'bokul', 'sikul', 'jamal', 'kukil', 'Raju', 'abul', 'sikul', 'jamal', 'zahid', 'golap', 'monin'];


// function removeDuplicate(names){
//   const unique = [];

//    for(let i = 0; i <names.length; i++){
//         const element = names[i];
         
//         if(unique.indexOf(element) == -1){
//             unique.push(element);
//         }
//    }
//     return unique;


// }

// const result = removeDuplicate(names);



// console.log(result);


// const demo =names.indexOf();
// console.log(demo);



const names = ['abul', 'bokul', 'hoda', 'raju', 'sojib', 'abul', 'hoda', 'jakir', 'enu', 'sojib', 'rahim', 'goljar'];

function removeDuplicate(names){
    const unique = [];

    for(const element of names){

    if(unique.indexOf(element) == -1){
        unique.push(element);
    }
    }
    return unique;
}

const result = removeDuplicate(names);
console.log(result);