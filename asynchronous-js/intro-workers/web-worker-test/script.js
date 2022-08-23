/* web-worker-test was my way of seeing what data structures can be sent via postMessage to and from a web worker */
const pizzaBtn = document.querySelector('.pizza');
const h3 = document.querySelector('h3');
const worker = new Worker('worker.js');
const pizzaIngredients = {
    dough: ['flour', 'yeast', 'water', 'salt'],
    topping: ['cheese', 'meat','sauce'],
}

pizzaBtn.addEventListener('click', () => {
    worker.postMessage({
    messageToWorker: 'Hello from main thread.',
    pizzaIngredients
});
});
worker.addEventListener('message', message => {
    h3.textContent = `A ${message.data.dough[0]} dough pizza, with organic ${message.data.topping[2]} was just baked for you.`;
})
