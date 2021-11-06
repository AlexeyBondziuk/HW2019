var ID = document.getElementById("ID");
var firstName = document.getElementById("First name");
var lastName = document.getElementById("Last name");
var age = document.getElementById("Age");

var buttonCreate = document.getElementById("Create");
var buttonUpdate = document.getElementById("Update");
var buttonDelete = document.getElementById("Delete");

var table = document.querySelector('#table tbody');


buttonCreate.addEventListener("click", createNewRow);

function createNewRow() {

    var newTr = document.createElement('tr');
    newTr.innerHTML = "<td>".concat(ID.value, "</td><td>").concat(firstName.value, "</td><td>").concat(lastName.value, "</td><td>").concat(age.value, "</td>");
    table.appendChild(newTr);

}