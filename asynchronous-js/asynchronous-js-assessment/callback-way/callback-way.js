const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");

  function animationPlay(char, callback){
       char.animate(aliceTumbling, aliceTiming)
       .finished
       .then(callback);
  }
  
/* Callback hell below */
  animationPlay(alice1, () => {
    animationPlay(alice2, () => {
      animationPlay(alice3, () => {
        console.log('All animations finished.')
      })
    })
  })