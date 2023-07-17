
interface usid{
    name:string,
    id:number,
    stutes:boolean,
    arrayobj:object
}


function userfun(obj:usid){

    const {name,id,stutes,arrayobj} =obj;

    return  name +id + stutes + arrayobj
}

const object ={
    name:"parjwal",
    id:123456,
    stutes:true,
    arrayobj:[1,2,3,4]

}

console.log(userfun(object));
