
let searchInput = document.getElementById("searchInput");
const resultDiv = document.getElementById("result");


let data = [
    {name:"sunil"},
   { name:"Rajesh"},
   {name:"Golu"}
]

function simulateApiCall(query){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let filterData = data.filter((el,i)=>el.name.toLowerCase().includes(query.toLowerCase()));
        resolve(filterData);
    },1000)
  })
}

function displayResult(result){
resultDiv.innerHTML = ""
    if(result.length>0){
        result.forEach((el)=>{
            let resultItem = document.createElement('p');
            resultDiv.appendChild(resultItem);
        })
    }
}


function debouchSeach (fun,delay){
  clearTimeout(timeout);
  timeout = setTimeout(fun,delay);

  
}
