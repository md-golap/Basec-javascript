const products = [
    {name: 'iphone', price: 70000},
    {name: 'samsung galaxy 14', price: 60000},
    {name: 'dell laptop', price: 50000},
    {name: 'lenova yoga', price: 55000},
    {name: 'Asus atsus 14', price: 35000},
    {name: 'smart watch samsumg', price: 7000},
    {name: 'apple watch', price: 82000},
    {name: 'plus one phone 4', price: 2000}
];

for(const product of products){
    if(product.price<50000){
        
        break;
    }
    console.log(product);
}