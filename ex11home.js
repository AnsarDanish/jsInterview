/* msp is an object , iterable(forof loop valid)
 key and value pair, duplicate key is not allowed

 different between map and object
 object can only have string or symbol as key
 in map you can use anything as key like array,number,string

*/

// alway key will be string
const person={
  firstName:"danish",
  age:7,
  18:15,
}
console.log("1",person.firstName);
console.log( "2",person['firstName']);
console.log(person);

/* Map */
arr=[15,18]
const users= new Map();
users.set('firstName','Danish')
users.set('age',7)
users.set(arr,[1,2,3,4,5])
users.set([15,18],[])
users.set(1,2.5);
console.log("3",users);
console.log("4",users.get('age'));
console.log("5",users.get(arr));
console.log("6",users.keys());

for(let key of users.keys())
{
    console.log("7",key ,users.get(key));
}

for( let [key , value] of users)
{
  console.log("8" ,key,"->",value);
}



