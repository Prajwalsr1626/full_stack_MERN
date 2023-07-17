let arr =[1,4,3,5,2,4,6]
let stringarr=['abc','aaa','ddd','eee','fff','ggg']

console.log(arr.sort());//ascending [1, 2, 3, 4, 4, 5, 6]
console.log(arr.sort((a,b)=>a-b));//ascending [1, 2, 3, 4, 4, 5, 6]
console.log(arr.sort((a,b)=>b-a));// descending [6, 5, 4, 4,3, 2, 1]

///String Sorting 
console.log(stringarr.sort())//Nothig will ['abc','aaa','ddd','eee','fff','ggg']
                        
console.log(stringarr.sort((a,b)=>(b>a)-(b<a)));//ascending [ 'aaa', 'abc', 'ddd', 'eee', 'fff', 'ggg' ]

console.log(stringarr.sort((a,b)=>(b>a)-(b<a)));// descending [ 'ggg', 'fff', 'eee', 'ddd', 'abc', 'aaa' ]



