let person1={
    id:15,
    firstName:"Danish"
}

let extraInfo=new Map();
extraInfo.set(person1,{age:15,city:"Thane"});
console.log(extraInfo.get(person1).city);


/* cloning of an object */
let obj={
    key1:"val1",
    key2:"val2"
}
const obj2={...obj}
const obj3=Object.assign({},obj); // old way to clone
obj2.key3="val3";
console.log("2",obj);
console.log("3",obj2);