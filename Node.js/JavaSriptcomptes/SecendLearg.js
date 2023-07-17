const input =[1,-2,-4,11,7,-2]
const input2 =[1,-2,-4,11,7,-2]

console.log([...new Set(input)].sort((a,b)=>b-a)[1])

const vlu = input.filter((item,index,self)=>{return index === self.indexOf(item)}).sort((a,b)=>b-a)[1]
console.log(vlu)