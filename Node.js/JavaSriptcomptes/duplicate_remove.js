//dupicates and remove in a arrays


let arry =["Banglore",1,"raju","Hema","prajwal",2,"raju","Hema"]

//using Set() ES6 function 
console.log([...new Set(arry)])
//using filter ES6
const unique = arry.filter((elem, index, self) => {
    return index === self.indexOf(elem);
  });

  //reduce 
  const count = arry.reduce((acc, curr) => {
    if(curr in acc) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  
  const uniques = Object.keys(count).map((elem) => {
    return parseInt(elem);
  });
  
  console.log(uniques);