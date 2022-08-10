// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
// // here we are sending a request to the url passed to the fetch promise
// fetchPromise.then(response => {/* This first handler receives the response*/
//     if(!response.ok){/* if we don't get a 200 (OK) status code we throw an error */
//         throw new Error(`HTTP error: ${response.status}`)
//     }
//     return response.json();/* the .json() method converts the JSON to a JS object */
// }).then(data => { /* This handler accesses the JS object returned by the last handler */
//     console.log(data[0].name); /* Here we log the first object and it's name property which is "baked beans" */
// })
// .catch(error => console.error(`Couldn't get products: ${error}`)) /* This handler deals with errors if they come up */

// /* Combining Multiple Promises */

// const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
// const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

// Promise.all([fetchPromise1, fetchPromise2]) /* Promise.all() takes an array of promises and returns a fulfilled promise
//                                      if all promises in it's array are fulfilled. It returns a rejected promise if any are rejected. */
// .then(responses => {
//  return responses.map(el => el.json());
// })
// .then(data => console.log([...data]))
// .catch(error => console.error(`Here's the error: ${error}`))
// .finally(setTimeout(() => console.log('This runs no matter what.'),500))

// const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
// const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');
// Promise.any([fetchPromise1, fetchPromise2]) /* Promise.any() will return a fulfilled promise if any of the promises passed to it are fulfilled. It returns a rejected promise only if all the promises in it's passed array are rejected. */
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error(`Here's the error: ${error}`))
// .finally(setTimeout(() => 
// console.log('I am logged when the promise is settled, whether fulfilled or rejected.'),500)); /* The .finally() handler is called when the promise is settled, whether fulfilled or rejected. */

async function fetchProducts(){
    try{
        const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
        if(!response.ok){
            throw new Error(`HTTP error: ${response.status}`)
        }
        const data = await response.json()
        return data;
    }
    catch(error){
        console.error(`Could not get products because of the following error: ${error}`)
    }
}
const promise = fetchProducts()
promise.then(data => console.log(data));


async function fetchSuperheroes(){
    try{
        const response = await fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');
        if(!response.ok) throw new Error(`HTTP error: ${response.status}`)
        const data = await response.json();
        return data;
    }
    catch(error){
        console.error(`Couldn't fetch superheroes because of the following error: ${error}`)
    }
}
const promise2 = fetchSuperheroes()
promise2.then(data => console.log(data))