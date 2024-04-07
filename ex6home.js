/* params destructuring */
const person={
    firstName:"Danish",
    gender:"male"
}

function printDeatils({firstName , gender,age}){
 
    console.log("1." , firstName ,age,gender);
}
printDeatils(person);

/* callback function */

function fun1(callback){
    // sql data fetched ang got data then u pass data object in call back function
  callback();
}

fun1(()=>{
    console.log("2. call back function");
})
const tt=()=>{console.log("3. call back function");}
fun1(tt);

/* function retuning function  and function taking argument other function is called higher order function*/

function fun2(){
    return ()=>{
        console.log("4. returning a function from fun2 function");
    }
}
fun2()()