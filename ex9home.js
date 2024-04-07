/* find method */
let nouns=["danish","cat","bat","faisal"];
let ans = nouns.find((n)=>n.length===3);
console.log(ans);

/* every mrthod */
const numbers=[2,4,6,8,10];

const anss = numbers.every((num)=>num%2==0);
console.log("2" ,anss);

/* some method */
numb2=[2,4,5,6,8]
let sn= numb2.some((num)=>num%2 !==0)
console.log("3" , sn);

/* fill method :- If u have to fill all element by -1 */

const myarray=new Array(10).fill(-1);
console.log("4" , myarray , typeof myarray);
const myarrr2=[].fill(10);
console.log("5" , myarrr2);

/* fill method :-2  if you have an array but some value u haveto change */

const myaar2=[1,2,3,4,5,6,7,8,9]
myaar2.fill(0,2,5);  /* fill(element , startIndex , end+1) */
console.log("6" , myaar2);

/* splice  method for delete*/
const myu=["item1" , "item2","item3" ,"item4" ,"item5"];
const deleredItem = myu.splice(1,2) /* starting index , how many item have to delete ,what to insert */
console.log("6" ,myu);
console.log("8" ,deleredItem);

/* splice  method for insert*/
const dan=["item1" , "item2","item3" ,"item4" ,"item5"];
dan.splice(1,0,"inserted item")
console.log("7" ,dan);

/* splice mthod insertion and deletion both */
const han=["item1" , "item2","item3" ,"item4" ,"item5"];
han.splice(1,2,"inserted item1","inserted item2")
console.log("8",han);


