import getCountries from "./fetchData";

console.log(getCountries("india"));

const inputBox = document.getElementById("search_input");
const suggestionBox = document.getElementById("suggestion_box");

//Functions

const handleSearch = async(keyword) => {
    const countriesArr = await getCountries(keyword);
    const countryNameArr = countriesArr.map((country) => {
            country.name.common
    });
    return countryNameArr;
}

const populateSuggestionBox = (countryNameArr) => {
    if(countryNameArr.length){
        suggestionBox.classList.add("visible");
    }
    else{
        suggestionBox.classList.remove("visible");
    }

    //Before showing any result reset your suggestion box.
    suggestionBox.innerHTML = "";
    const fragment = document.createDocumentFragment();
    countryNameArr.forEach(countryName => {
        const li = document.createElement("li");
        li.innerText = countryName;
        fragment.appendChild(li);
    });

    suggestionBox.appendChild(fragment);
}

const handleSuggestion = async (e) =>{
    const keyword = e.target.value;
    const countryNameArr = await handleSearch(keyword);
    populateSuggestionBox(countryNameArr);
}

function debounce(fn,delay=500){
    let timeoutId = null;
    return function(...args) {
        if(timeoutId) {
            console.log("I'm resetting you now wait again for the start.");
            clearTimeout(timeoutId);
        }
    

        timeoutId = setTimeout(() => {
            fn(...args);
            timeoutId = null;
        },delay);
    }
}

inputBox.addEventListener("input",debounce(handleSuggestion))