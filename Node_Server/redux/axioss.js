import axios from "axios";
/*
async function getaccount() {

    let datas = JSON.stringify({
        "id": 4,
        "name": "Madhukar",
        "amount": 800
      });
    try{
    const { data }  =  await axios.post('http://localhost:3030/account', datas, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        console.log(data);
        return data 
    }catch(error){
        console.log(error.message);
    }
 
   
}

getaccount()


let data = {
  "id": 4,
  "name": "Madhukar",
  "amount": 800
};

axios.post('http://localhost:3030/account', data, {
  headers: {
    'Content-Type': 'application/json'
  }
})
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error.message);
});
 */

let data = JSON.stringify({
  "id": 4,
  "name": "Madhukar",
  "amount": 800
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:3030/account',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error.message);
});
