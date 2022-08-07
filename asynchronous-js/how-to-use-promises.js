const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
// here we are sending a request to the url passed to the fetch promise
fetchPromise.then(response => {/* This first handler receives the response*/
    if(!response.ok){/* if we don't get a 200 (OK) status code we throw an error */
        throw new Error(`HTTP error: ${response.status}`)
    }
    return response.json();/* the .json() method converts the JSON to a JS object */
}).then(data => { /* This handler accesses the JS object returned by the last handler */
    console.log(data[0].name); /* Here we log the first object and it's name property which is "baked beans" */
})
.catch(error => console.error(`Couldn't get products: ${error}`)) /* This handler deals with errors if they come up */
