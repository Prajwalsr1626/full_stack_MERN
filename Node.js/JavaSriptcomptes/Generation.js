function* numbersycn(){
    let count =1
     while(true){
        
        yield count
        count++
     }

}
let count = numbersycn();
console.log(count.next().value);
console.log(count.next().value);
console.log(count.next().value);
