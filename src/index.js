const inputUsername = document.getElementById("input-username");
const inputEmail = document.getElementById("input-email");
const inputAddress = document.getElementById("input-address");
const inputAdmin = document.getElementById("input-admin");
const submitData = document.getElementById("submit-data");
let tableBody = document.getElementById("table-content");
const emptyTable = document.getElementById("empty-table");

submitData.addEventListener("click", () => changeTable());
emptyTable.addEventListener("click", () => cleanTable());

function changeTable() {
  let newRow = document.createElement("tr");
  let newUsername = document.createElement("td");
  newUsername.innerText = inputUsername.value;
  let newEmail = document.createElement("td");
  newEmail.innerText = inputEmail.value;
  let newAddress = document.createElement("td");
  newAddress.innerText = inputAddress.value;
  let newAdmin = document.createElement("td");
  if (inputAdmin.checked) {
    newAdmin.innerText = "X";
  } else {
    newAdmin.innerText = "-";
  }
  newRow.appendChild(newUsername);
  newRow.appendChild(newEmail);
  newRow.appendChild(newAddress);
  newRow.appendChild(newAdmin);
  tableBody.appendChild(newRow);
}

function cleanTable() {
  tableBody.innerHTML = "";
}
