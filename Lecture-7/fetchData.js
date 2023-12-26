// Make http request from the browser: 

async function getCountries(keyword){
    try {
        const rawResponse = await fetch(`https://restcountries.com/v3.1/name/${keyword}`);
        const response = await rawResponse.json();

        if(rawResponse.status == 404){
            console.log('Page not found.');
            return [];
        }
        else if(rawResponse.status == 500){
            console.log("Internal server error");
            return [];
        }
        else{
            console.log("Data found");
        }
        return response;
    } catch (err) {
        console.log('err: ',err);
    }
}

export default getCountries;