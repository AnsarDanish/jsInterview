/* object is not iterable . we can not use for of loop */

/* set and array is an object
 no index based access
  order is not guaranteed
  no duplicate allowed
  set is iterable ( means for Of loop can be used on it)
*/
const item=['item1','item2','item3']
const numbers=new Set();
numbers.add(1)
numbers.add(2)
numbers.add(1)
numbers.add([5,6,9])
numbers.add([5,6,9])
numbers.add(item)
numbers.add(item)
console.log(numbers);
console.log( "2",numbers.has(1));

for( let ob of numbers)
{
    console.log("3",ob);
}

for(let index in numbers){
  console.log("7" ,index);
}

const myarr=[1,2,3,4,4,5,6,6,6]
const uniqueElement=new Set(myarr)
console.log("4" ,uniqueElement);
console.log("5",uniqueElement.length);/* can not be used (undefined)  */
console.log("6", typeof uniqueElement);