/* at-2  computed property */
const key1="objkey1";
const key2="objkey2";
const val1="val1";
const val2="val2";

const ob1={key1 : val1,key2:val2}
console.log(" 1 ",ob1);

const ob2={[key1] : val1,[key2]:val2}
console.log(" 2 ",ob2);

const ob3={}
ob3[key1]=val1;
ob3[key2]=val2;
console.log( "3",ob3);
