
const phones = [
   {name: 'samsung s5', price: 4500, camera: 10, Storage:12 },
   {name: 'walton m32', price: 5000, camera: 10, Storage:12 },
   {name: 'shaomi a5', price: 1500, camera: 8, Storage:24 },
   {name: 'oppo s5', price: 4500, camera: 10, Storage:12 },
   {name: 'nokia n95', price: 3500, camera: 8, Storage:32 },
   {name: 'htc h81 s5', price: 2500, camera: 12, Storage:64 }
   
];

let cheapest = phones[0];
for (const phone of phones){
    if(phone.price < cheapest.price){
        cheapest = phone;
    }

}
console.log(cheapest);
