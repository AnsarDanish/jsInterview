/* foreach
map
filter
reduce
above are array method */
// parameter  --when function is declared
// argument --> when it is called
const num=[4,5,6,7,8]
num.forEach((a , index)=>{console.log("1.",a,index)})

function sum(a){
    console.log("2.",a);
}
for(let i=0;i<num.length;i++)
{
    sum(num[i])
}

const user=[{firstName:"danish",age:25},{firstName:"Husna",age:23},{firstName:"Hazim",age:19}]
user.forEach(({firstName})=>{console.log("3" ,firstName);})

console.log(num.map((n ,index)=>{
    return ` index = ${index} and it's square = ${n*n}`
}))

// filter
console.log(user.filter(({age})=> 
{return age>=20}))

// reduce
console.log("sum",num.reduce((accumulator , currentValue)=> accumulator + currentValue))
// acc  cuVl   return
// 4      5      9
// 9      6      15
// 15     7       22
// 22     8       30


const card=[{product:"iron",price:1500},{product:"fridge",price:2000},{product:"bat",price:500}];

const totalPrice=card.reduce((accumulator ,currentProduct)=>{ return accumulator+currentProduct.price},0)
console.log("4" ,totalPrice);


// when u pass initai value for accumulator the current value will be first index