    const [countBtn, count, numInput] = 
    [document.querySelector('.count-btn'),
    document.querySelector('.current-count'),
    document.querySelector('.num')];


/* 
Thought Journey for this project->
every 1000 nums counted by worker, put nums in grid, then request 1000 more from worker and repeat this loop
*/
const worker = new Worker('worker.js');
    function countHigh(){
            const numVal = numInput.value
            worker.postMessage({
                command: 'count',
                numVal
            })
    }
    countBtn.addEventListener("click", () => countHigh())
    worker.addEventListener('message', (message) => {
        count.textContent = `${message.data} counted.`
    })
    

