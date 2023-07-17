/* 
import cls from './text.js'
const s1 =performance.now()
const s2 =performance.now()
console.log(s2-s1)
let arry =["Banglore",1,"raju","Hema","prajwal",2,"raju","Hema"]
let arry2 =["prajwal",2,"raju","Hema"]
const obj = 
[
    {name: "india",rollno: 10,cities:[ "Bengaluru","Mysore" ]}, 
    {name: "pak",rollno: 12, cities:["lahor","pok"]},
    {name: "nepal",rollno: 13,cities:["simal","nepalcity"]}
]



const arr1 = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 3, name: 'Bob' }];
const arr2 = [{ id: 2, name: 'Jane' }, { id: 4, name: 'Alice' }, { id: 1, name: 'John' }];

const matching = arr1.filter(obj1 => {
  return arr2.some(obj2 => {
    return obj1.id === obj2.id;
  });
});
;//

const str="This is JavaScript Code"
let str2 =str.split(" ").join("")
let result={}
for(let s of str2){
    result[s]=result[s]==null?1:result[s]+1
}

const sortedDict = Object.fromEntries(
    Object.entries(result).sort((a, b) => b[1] - a[1])
  );
//console.log(sortedDict);
//console.log(Object.entries(result).sort((a,b)=>b[1]-a[1]));

let  inputs =[1,2,4,11,7,2]
let results=[]

for(let i=0 ; i<inputs.length ; i++ )
{
    let newinput = [...inputs]
    //newinput.splice(i,1)
    results[i]=newinput.reduce((a,b)=>a+b)-inputs[i]
    
} 

function outputs(k,A,B){
  let output;

  if(A.length === B.length)
  {

    A.sort()
    B.sort((a,b)=>b-a)
    
    console.log(A,B);
    for (let i = 0; i < A.length; i++) {

      if(A[i]+B[i]<k){

        return "NO"
      }
      
    }

  }
  return "YES"
  
}





let k = 10
let A= [2, 1, 3]
let B = [7, 8, 9]

console.log(outputs(k,A,B))


 */


let a = new Promise((reslove,reject)=>{
  let arr=[1,2 ] ;
  if(arr.length>0){
    reslove(arr)
  }
  else{
    reject("Array is NULL")
  }
  
})

a.
then((response)=>{console.log(response);})
.catch((error)=>{console.log(error);})