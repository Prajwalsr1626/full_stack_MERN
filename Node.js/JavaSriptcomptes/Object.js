const arr1c = {a:1,b:2,c:3,d:4,e:5}
const arr2c = {a:2,b:1,c:3,d:4}
const objs={};
for(let i in arr1c )
{
    if(arr1c[i]==arr2c[i]){
        objs[i]=arr1c[i]
    }
}
console.log(objs)