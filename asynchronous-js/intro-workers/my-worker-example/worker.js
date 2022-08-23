addEventListener('message', message => {
    if(message.data.command === 'count'){
        count(message.data.numVal);
    }
})
function count(num){
    for(let i = 0; i <= num; i++){
            postMessage(i);
    }
}