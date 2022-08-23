let pizza;
addEventListener('message', message => {
    if(message.data.pizzaIngredients.dough[0] == 'flour'){
        pizza = message.data.pizzaIngredients;
        makePizza();
    }
})

function makePizza(){
postMessage(pizza);
}