// object de structuring
const band={
    bandName :"led zepplin",
    famouseSong : "abcd songs",
    name:"danish",
    age:25
}

const {bandName ,famouseSong}=band

const {bandName:var1 ,famouseSong:var2, ...rest}=band
const{...all}=band

console.log("1" ,bandName,famouseSong);
console.log("1.5" , var1,var2,all);
console.log("2" , rest);


// array of object
const user=[{id:25,firstName:"danish",lastName:"ansari"},{id:26,firstName:"danish1",lastName:"ansari1"}]

for(let use in user)
{
    console.log("3",user[use]);// we get index in use
}

for(let use of user)
{
    console.log("4",use); // we get element in use
}

// nested destructuring
const [user1,user2]=user
console.log("5",user1,user2);
const[{firstName:user1FirstName},{firstName,id,lastName}]=user
console.log("6",user1FirstName,firstName,id,lastName);