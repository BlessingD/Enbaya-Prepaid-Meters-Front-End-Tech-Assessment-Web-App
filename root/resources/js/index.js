/**IMPLEMENT REST COUNTRIES API CALL AND DISPLAY COUNTRY NAMES IN THE SELECT DROPDOWN FIELD.**/
const countriesList = document.getElementById("country");
const getPost = async () => {
    const response = await fetch("https://restcountries.com/v3.1/independent?status=true");
    const data = await response.json();
    return data;
};
const displayOption = async () => {
    const options = await getPost();
    for (option of options) {
        const newOption = document.createElement("option");
        newOption.value = option.name.common;
        newOption.text = option.name.common;
        countriesList.appendChild(newOption);
    }
};
displayOption();

/** SPLIT FULL NAME INTO FIRST NAME & LAST NAME AND POST ALL FORM DATA TO A LOCAL CSV FILE**/
let saveFile = () => {

    // Get the data from each element on the form.
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email");
    const country = document.getElementById("country");
    const cellphone = document.getElementById("cellphone");

    let tmpArray = fullname.split(' '); 
    const lastname = tmpArray.pop(); 
    const firstname = tmpArray.join(' '); 

    // The data variable stores all the data to be posted to a CSV file.
    let data = "\r First Name: " + firstname + " \r " + "Last Name: " + lastname + " \r " +"Email: " + email.value + " \r" +"Country: " + country.value + " \r" + "Cellphone: " + cellphone.value + " \r ";
    const textToBLOB = new Blob([data], { type: "text/csv" }); // Convert the text to BLOB.
    var filename = new Date();
    var month = new Date(); //months from 1-12
    month = month.getMonth();

    var day = new Date();
    var day = day.getUTCDate();

    var year = new Date();
    var year = year.getUTCFullYear();

    newdate = year + "/" + month + "/" + day;
    const sFileName = "Enbaya form data " + filename; // The file to save the data to.

    let newLink = document.createElement("a");
    newLink.download = new Date();

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    } else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); //autodownload the CSV file and save it on the machine.
};












