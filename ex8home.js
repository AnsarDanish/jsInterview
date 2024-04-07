/* 19 feb 7:05 
advantage :- assume it is userName with string name then it will do sorting based on dictionary order

*/
const num=[85,75,14,93,15]
num.sort()
console.log("1. " ,num);    //   sort method change in original method
const num1=[5,9,3000,1200,400]

num1.sort()
console.log("2." ,num1); // sort does sorting based on ascii code
// const num1=[5,9,3000,1200,400]   sorting happen based on dictionary order like first compare using first digit

// if you have to do sort number based on ascending and descending

num1.sort((a,b)=> a-b)
console.log("3." ,num1);
/* working
case 1 : a=1200
b=410
a-b = 790 > 0 (Positive)
410 , 1200 

case2 :
a=5
b=9
a-b =-4
sort --->  a,b (5,9)
  
*/

const card=[{product:"iron",price:1500},{product:"fridge",price:2000},{product:"bat",price:500}];

 const duplicateCard= card.slice(0).sort((a,b)=>a.price-b.price)
 const ReverseduplicateCard= card.slice(0).sort((a,b)=>b.price-a.price)
console.log("4.",card);
console.log("5.",duplicateCard);
console.log("6.",ReverseduplicateCard);



