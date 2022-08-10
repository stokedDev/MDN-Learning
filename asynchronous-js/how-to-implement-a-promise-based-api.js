const btn = document.querySelector('.btn');
const nameInput = document.querySelector('.name');
const delayInput = document.querySelector('.delay');
const msg = document.querySelector('.message');

function alarm(name, delay){
    return new Promise((resolve) => {
        if(delay < 0) throw new Error('Alarm delay must not be negative.');
        setTimeout(() => resolve(`Wake up, ${name}!`), delay)
    })
}

btn.addEventListener('click', async () => {
    event.preventDefault()
    try{
        const output = await alarm(nameInput.value, delayInput.value);
        msg.textContent = output;
    }
    catch(error){
        console.error(`Couldn't set alarm: ${error}`)
    }
}
)