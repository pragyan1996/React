// Make http request from the browser: 

fetch(`https://restcountries.com/v3.1/name/ind`)
    .then(function(res){
        console.log(res.json());
    })
    .catch(function(err){
        console.log(err);
    })
    