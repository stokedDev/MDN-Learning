        const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');
let motherInfo = 'The mother cats are called ';
let kittenInfo;
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

fetch(requestURL)
  .then(response => response.text())
  .then(text => displayCatInfo(text))

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;
// Add your code here
const cS = JSON.parse(catString)
console.log(cS)
console.log(cS[0].kittens)
for(let i = 0; i < cS.length; i++){
    for(const kitten of cS[i].kittens){
        total++
        if(kitten.gender == 'm') male++;
    }
    if(i < cS.length - 1){
      motherInfo += `${cS[i].name}, `
    } else {
      motherInfo += `and ${cS[i].name}.`
    }
}

kittenInfo = `There's a total of ${total} kittens. There's ${male} male kittens and ${total - male} female kittens.`
// Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);