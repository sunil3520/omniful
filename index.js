let searchInput = document.getElementById("searchInput");
const resultDiv = document.getElementById("result");
let timeout;
console.log(resultDiv);
let data = [
    {name:"ankit"},
    {name:"bima"},
    {name:"cima"},
    {name:"don"},
  { name: "sunil" },
  { name: "sun" },
  { name: "Rajesh" },
  { name: "Golu" },
];

function simulateApiCall(query) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let filterData = data.filter((el, i) =>
        el.name.toLowerCase().includes(query.toLowerCase())
      );
      resolve(filterData);
    }, 1000);
  });
}

function displayResult(result) {
  resultDiv.innerHTML = "";

  if (result.length === 0) {
    const noResultItem = document.createElement("p");
    noResultItem.textContent = "No results found";
    resultDiv.appendChild(noResultItem);
    return;
  }

  result.forEach((el) => {
    let resultItem = document.createElement("p");
    resultItem.textContent = el.name;
    resultDiv.appendChild(resultItem);
  });
}

function debouchSeach(fun, delay) {
  clearTimeout(timeout);
  timeout = setTimeout(fun, delay);
}

searchInput.addEventListener("input", (event) => {
  const query = event.target.value.trim();
  if (query.length > 0) {
    debouchSeach(() => {
      simulateApiCall(query).then(displayResult);
    }, 300);
  } else {
    resultDiv.innerHTML = "";
  }
});
