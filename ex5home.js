/* hoisting
   with function :- hoisting is applicable only for function decleration . it does'nt work with expression
   with varible :- if we use var typed varible before its decleration then it will print undefined but with 
   let and const it will print ' can not access befoer its initialization.

*/

let letvar;
console.log('2' ,letvar);
console.log(x);
hello()
function hello(){
    console.log("Danish Ansari");
}
var x=5;

/* lexical scope
fun1 and first of all its own scope and two lexical scope which are myapp and global scope
global scope is lexical scope for fun1,fun2 and fun3
*/
function myApp(){
    function fun1(){
        console.log(" 3 , fun1");
    }
    const fun2=function(){
        console.log("4 , fun2");
    }
    const fun3=()=>{
        console.log("5 , fun3");
    }
}
// fun1() >> ReferenceError: fun1 is not defined

/* block scope (if, for ,else)vs function scope
 let and const are block scope
 var is function scope ( assume that this whole file is main function)
 let,const varible can not be access out side the block in which it has defined

*/
if(true){
    var name="Danish Ansari"
    console.log("6" ,name);
}
console.log("7" , name);

/* rest and default parameter */

function defaultFun(a,b=1){
    console.log("7." ,a+b);

}

defaultFun(4)

function restFun(a,b,...c)
{
    console.log("8." ,a+b,c);
}

restFun(4,5,6,9)

