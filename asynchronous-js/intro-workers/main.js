const worker = new Worker('./generate.js');
// When the user clicks "Generate primes", send a message to the worker.
// The message command is "generate", and the message also contains "quota",
// which is the number of primes to generate.
document.querySelector('#generate').addEventListener('click', () => {
    const quota = document.querySelector('#quota').value;
    worker.postMessage({
        command: 'generate',
        quota,
    });
});
worker.addEventListener('message', (message) => {
    document.querySelector('#output').textContent = `Finished generating ${message.data} primes!`;
});

document.querySelector('#reload').addEventListener('click', () => {
    document.querySelector('#user-input').value = `Try typing in here immediately after pressing "Generate primes".`
    document.location.reload();
})