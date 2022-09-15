const inputUsername = document.getElementById("input-username");
const inputEmail = document.getElementById("input-email");
const inputAddress = document.getElementById("input-address");
const inputAdmin = document.getElementById("input-admin");
const submitData = document.getElementById("submit-data");
let tableBody = document.getElementById("table-content");
const emptyTable = document.getElementById("empty-table");
const table = document.getElementById("table");
const fileUpload = document.getElementById("input-image");

submitData.addEventListener("click", () => changeTable());
emptyTable.addEventListener("click", () => cleanTable());

function changeTable() {
  let newRow = document.createElement("tr");

  let newUsername = document.createElement("td");
  newUsername.innerText = inputUsername.value;
  newRow.appendChild(newUsername);

  let newEmail = document.createElement("td");
  newEmail.innerText = inputEmail.value;
  newRow.appendChild(newEmail);

  let newAddress = document.createElement("td");
  newAddress.innerText = inputAddress.value;
  newRow.appendChild(newAddress);

  let newAdmin = document.createElement("td");
  if (inputAdmin.checked) {
    newAdmin.innerText = "X";
  } else {
    newAdmin.innerText = "-";
  }
  newRow.appendChild(newAdmin);

  let imageTD = document.createElement("td");
  if (!(fileUpload.files.length == 0)) {
    let imageSrc = URL.createObjectURL(fileUpload.files[0]);
    let newImage = document.createElement("img");
    newImage.src = imageSrc;
    newImage.setAttribute("width", 64);
    newImage.setAttribute("height", 64);
    imageTD.appendChild(newImage);
    newRow.appendChild(imageTD);
  } else {
    imageTD.innerHTML = "";
    newRow.appendChild(imageTD);
  }

  if (!checkTable(newRow)) {
    tableBody.appendChild(newRow);
  }
}

function cleanTable() {
  tableBody.innerHTML = "";
}

function checkTable(newRow) {
  for (let i = 0; i < table.tBodies[0].rows.length; i++) {
    if (
      tableBody.getElementsByTagName("tr")[i].firstChild.innerText ==
      inputUsername.value
    ) {
      tableBody.getElementsByTagName("tr")[i].innerHTML = newRow.innerHTML;
      return true;
    }
  }
  return false;
}
