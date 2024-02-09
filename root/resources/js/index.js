//get REST Countries API data & display in the select field.
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