
//String to array "Array.from(__Array__)"
let ary ='ABCDEFG'
console.log(Array.from(ary))
//Array to String (_Array.join(""))
let arry =["prajwal",1,"raju","Hema"]
console.log(arry.join(""));

const obj = 
[
    {name: "india",rollno: 9}, 
    {name: "pak",rollno: 12},
    {name: "nepal",rollno: 13}
]

const cpy = obj.filter((ele)=>ele.rollno>10)

const listItems = cpy.map(item => {
    var li = document.createElement('li');
    li.textContent = item.name+ " "+item.rollno
    return li;
  });
  
 function mapto(){
 
    const ul = document.getElementById('my-list');
      listItems.forEach(item => {
        ul.appendChild(item);
      });
     }
    



  let names = ['john','jane','smith'];
  names.forEach((name)=>{
  let li = document.createElement('li');
  li.innerText = name;
  document.getElementById('friendsList').appendChild(li);
  })
  
  const ul = document.getElementById('my-list');
  listItems.forEach(item => {
    ul.appendChild(item);
  });
