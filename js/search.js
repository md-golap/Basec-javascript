
const products = [
    {name: 'iphone', price: 7000},
    {name: 'samsung galaxy 14', price: 6000},
    {name: 'dell laptop', price: 50000},
    {name: 'lenova yoga', price: 55000},
    {name: 'Asus atsus 14', price: 35000},
    {name: 'smart watch samsumg', price: 7000},
    {name: 'apple watch', price: 2000},
    {name: 'plus one phone 4', price: 27000}
];

function searchProduct(products,searchproduct){

    const result =[];
    for(const product of products){
        if(product.name.includes(searchproduct)){
            result.push(product)
        }
      
    }
    return result;
}
  const matchresult=searchProduct(products,'watch');
 console.log(matchresult)







