import axios from "axios";
import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger";
import thunk from "redux-thunk";

console.log("redux");

const inc = "increment";
const dec = "dicrement"
const incbypay = "incbypaylode"
const init = "init"



const store = createStore(reducer , applyMiddleware(logger.default, thunk.default))
const hystore = []

function accountReducer(state = { amount: 1 }, action) {

    switch (action.type) {
        case init: return { amount: state.amount + action.paylode };
        case inc: return { amount: state.amount + 1 };
        case dec: return { amount: state.amount - 1 };
        case incbypay: return { amount: state.amount + action.paylode }
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
        const { data } = await axios.get(`http://localhost:3030/account/${id}`)

        dispatch(inituser(data.amount))

    }

}

function inituser(value) {

    return { type: init, paylode: value }
}


store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(incbypaylode(4))
store.dispatch(getuser(2))

//setInterval(()=>store.dispatch({type:"increment"}),2000)

//console.log(store.getState());
async function getaccount() {

    const { data } = await axios.get("http://localhost:3030/account/2")
    
    console.log(data);
}

getaccount()


