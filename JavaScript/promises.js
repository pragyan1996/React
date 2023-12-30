let fs = require('fs');
//.then is like an eventListener for a promise when promise state changes to resolved
/* let promise = fs.promises.readFile("./f1.txt");
promise.then(function(data){
    console.log("The data in the file is : "+data);
})

promise.then((data)=>{
    console.log("Buffer format data : ",data);
})

//.catch is an eventListener for a promise when promise state changes to reject.
promise.catch((err)=>{
    console.log('Error has occoured : ',err);
}) */

/* let promise = Promise.resolve(10);

promise.then(data => {
    console.log(data);
}).then(data => {
    console.log(data);
    return 100;
}).then(data => {
    console.log(data);
})
 */

let promise = Promise.reject(10);

promise.catch(data => {
    console.log(data);
    return "Hello"
}).then(data => {
    console.log(data);
    return 100;
}).then(data => {
    console.log(data);
}).finally(data => {
    console.log(data);
})