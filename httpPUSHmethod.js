// http Request POST method
//or we can say that is using post then we should provide some additional information to the server

let userRequestDataEle=document.getElementById("requestBody");
let requestStatusEle=document.getElementById("requestStatus");
let responseEle=document.getElementById("httpResponse");
let requestBtnEle=document.getElementById("sendPostRequestBtn");
let urlForEle=document.getElementById("urlFor");
let loadingEle=document.getElementById("loading");


function apply(){

    loadingEle.classList.remove("d-none");
    requestStatusEle.classList.add("d-none");
    let userData=userRequestDataEle.value;
    let urlText=urlForEle.textContent;
    //console.log(urlText);
    let options={
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            Authorization:"Bearer f3b327e706c853240dd37807d3eb5864e7c815010f0ccb6d15f38351eff47b4b"

        },
        body:userData
    };
    fetch(urlText,options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonText){
        loadingEle.classList.add("d-none");
    requestStatusEle.classList.remove("d-none");
        requestStatusEle.textContent=jsonText.code;
        responseEle.textContent=JSON.stringify(jsonText.data);
    })
}


requestBtnEle.addEventListener("click",apply);