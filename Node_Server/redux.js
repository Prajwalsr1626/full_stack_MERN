import axios from "axios";
import { createStore, applyMiddleware, combineReducers } from "redux"
import logger from "redux-logger";
import thunk from "redux-thunk";

console.log("redux");

const inc = "account/increment";
const dec = "account/dicrement"
const incbypay = "account/incbypaylode"
const getUserAccountsuccess = "account/success"
const getUserAccountPending = "account/Pending"
const getUserAccountReject = "account/Reject "



const incpoint = "bouns/increment"



const store = createStore(combineReducers({
    account: accountReducer,
    bonus: bounsReducer
}), applyMiddleware(logger.default, thunk.default))
const hystore = []

function accountReducer(state = { amount: 1 }, action) {

    switch (action.type) {
        case inc: return { amount: state.amount + 1 };
        case dec: return { amount: state.amount - 1 };
        case getUserAccountsuccess: return { amount: state.amount + action.paylode }
        case getUserAccountPending: return { ...state, pending: true }
        case getUserAccountReject: return { ...state, error: action.error }
        default: return state
    }
}
function bounsReducer(state = { point: 1 }, action) {

    switch (action.type) {
        case incpoint: return { point: state.point + 1 };
        default: return state
    }
}





function increment() {
    return { type: inc };
}

function decrement() {
    return { type: dec };
}

function incbypaylode(value) {
    return { type: incbypay, paylode: value };
}
function getuser(id) {

    return async (dispatch, getState) => {
        try {

            const { data } = await axios.get(`http://localhost:3030/account/${id}`)
            dispatch(getUserAccsuccess(data.amount))
        } catch (error) {
            dispatch(getUserAccReject(error.message))
        }
    }

}



function getUserAccsuccess(value) {

    return { type: getUserAccountsuccess, paylode: value }
}
function getUserAccPending() {

    return { type: getUserAccountPending }
}
function getUserAccReject(error) {

    return { type: getUserAccountReject, error: error }
}

function incmentpoint() {
    return { type: incpoint }
}


store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(incbypaylode(4))
store.dispatch(getuser(1))
store.dispatch(incmentpoint())


//setInterval(()=>store.dispatch({type:"increment"}),2000)

//console.log(store.getState());


async function getaxioss() {

    const res = await axios.post('http://localhost:3030/account', 
    {
        "id": 3,
        "name":"Madhu",
        "amount": 399
      }) 
     console.log("post\n\n");
    console.log(res.data);
    return null
}

console.log(getaxioss);


