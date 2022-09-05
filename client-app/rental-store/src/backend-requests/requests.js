import axios from "axios"

let baseUrl="http://localhost:5000/moviesApi"
let assetUrl="http://localhost:5000/"

function makeGetReq(url,callback){
    axios.get(baseUrl+url).then(d=>{
        callback(d.data)
    })
}

function makePostReq(url,callback,data){
    axios.post(baseUrl+url,data=data).then(d=>{
        callback(d.data)
    })
}

export function getAssetString(){
    return assetUrl
}

export function getMovies(callback){
    makeGetReq('/movies',callback)
}

export function getSearchResults(callback,queryString){
    makePostReq('/movies',callback,{query:queryString})
}

export function getRentals(callback,email){
    makePostReq('/rented',callback,{email:email})
}

export function postRentalReq(callback,email,title){
    makePostReq('/rent',callback,{email:email,title:title})
}

export function checkUserLogin(callback,email,pass){
    makePostReq('/login',callback,{email:email,pass:pass})
}