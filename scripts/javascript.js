function callAlert() {
    alert("Alert button has been called")
}
async function getAPI() {
    const api_url = 'https://api.wheretheiss.at/v1/satellites';
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
    console.log(data[0].name);
    document.getElementById("demo").innerHTML = data[0].name;
}
var number = 0;
function getNumber() {
    number += 1;
    document.getElementById("button-count").innerText = number;
    console.log(number);
    console.log(typeof (number))
}
var myForm = document.forms.MyForm;
myForm.onsubmit = function () {
    // var myForm=document.forms.MyForm;
    console.log(myForm.name.value);
    console.log(myForm.password.value);
    if (myForm.name.value == "") {
        alert("PLEASE FILL IN THE NAME")
        return false;
    }
    alert("FORM SUBMITTED");
    return true;
}
