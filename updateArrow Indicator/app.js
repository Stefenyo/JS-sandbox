const ul = document.querySelector('ul');
const listItems = ul.querySelectorAll('li');
const indicator = document.createElement('div');
indicator.classList.add('indicator');

function getValues(){
    let values = [];

    for(let i = 0; i < listItems.length; i++){
        if(i == 0) continue;
        values[i - 1] = listItems[i].offsetLeft + (listItems[i].offsetWidth / 2) - 10;
    }
    return values;
}

let indicatorPositions = getValues();
ul.appendChild(indicator);
indicator.style.left = indicatorPositions[0] + 'px';

for(let i = 1; i < listItems.length; i++){
    console.log(listItems[i]);
    listItems[i].addEventListener('click', function(){
        indicator.style.left = indicatorPositions[i-1] + 'px';
    });
}