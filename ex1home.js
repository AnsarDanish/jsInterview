/* for in loop with array */
const pro=[10,40,60,70];
for(let k in pro){
    console.log("7" ,k ,pro[k]);
}

const person={
    name:"hasrshit",
    age :22,
    "person hobbies" :["abc" ,"cde" ,"efg"]

}
console.log( "2 ", person["person hobbies"]);

/* for in loop with object */
for (let key in person)
{
    console.log(`1 ${key} : ${person[key]}`);
}



/* for of loop can not be used in object . if you want to use 
it so below is given using Object.keys(person)

for(let key of person){
    console.log(`5`,key);
} */


/* for of  */
let v1=Object.keys(person);
console.log( "4",typeof v1 , v1.length ,v1);
for( let key of Object.keys(person))
{
    console.log( "3",key ,` : ${person[key]}`);
}

for( let index in Object.keys(person))
{
    console.log( "8",Object.keys(person)[index] ,` : ${person[Object.keys(person)[index]]}`);
}
