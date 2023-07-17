const input =[1,-2,-4,11,7,-2]
const input2 =[1,-2,-4,11,7,-2]
//const input2 =[1,4,3,-4,4,3,5,2]

//Shift :Remove the first elememt of Array
//Splice : Remove the element of index like Splice(index(start Index),number element)
//pop :Remove the last element of the Array
//push :add an 

for(let i=0 ;i<2;i++)
{
    input[input.length-1]=input.shift() 
}

for(let i=0 ;i<2;i++)
{
    input2.push(...input2.splice(0,1))
}
console.log(input)
console.log(input2)

//