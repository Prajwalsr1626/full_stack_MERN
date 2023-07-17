/* 
function birthday(s, d, m) {
    let count =0
    if(s.length>1){
     
        for(let i=0;i<s.length;i++){
            let subarray=s.slice(i,i+m)
            let sum =subarray.reduce((a,b)=>a+b,0)
            if(sum===d){
                count++
            }
 
     }
     }else{
         if(s.length===m){
             count = s[0]===d ?1:0;
         }
     }
     
     return count
    }
     // Wri */


    function binarys(arr,low,high,key)
    {
        let mid=Math.floor((low+high)/2)
        if(high>=low)
        {

        
        if(arr[mid]==key)
        {
            return mid;
        }
        else if(arr[mid]<key)
        {
           return binarys(arr,mid+1,high,key)
        }
        else
        {
           return binarys(arr,low,mid-1,key)
        }
        }
        else  
        {
            return -1;
        }
        
    }
    const arr=[10,20,30,40,50,60,70]
    let a=binarys(arr,0,arr.length-1,80);
    console.log(a);