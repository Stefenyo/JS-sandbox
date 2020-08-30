'use strict';

function makeOrder(orderType, orderItems,callback){
    orderType = orderType || 'pickup';

    switch(orderType){
        case 'pickup':
            callback(orderType , orderItems);
            break;
        case 'delivery':
            callback(orderType , orderItems);
            break;
        default: 
        console.error(`The orderType parameter can only receive string arguments 'pickup' or 'delivery' as arguments`);
    }
}

function order(orderType, items){
    let orderDiv = document.createElement('div');
    orderDiv.classList.add('order');
    let itemsList = document.createElement('ul');
    let h1 = document.createElement('h1');
    h1.innerHTML = 'Thank you for your order!';
    let p = document.createElement('p');
    
    if(orderType == 'pickup'){
        p.innerHTML = 'Your items will be avialble to pick up in 15 mins. See item(s) below:';
    }else{
        p.innerHTML = 'Your order is currently being processed and you will receive an email once they are out for delivery. See item(s) below:';
    }

    if(typeof items === 'object'){
        for(let i = 0; i < items.length; i++){
            let li = document.createElement('li');
            li.innerHTML = items[i];
            itemsList.appendChild(li);
        }
    }else{
        let li = document.createElement('li');
        li.innerHTML = items;
        itemsList.appendChild(li);
    }

    orderDiv.appendChild(h1);
    orderDiv.appendChild(p);
    orderDiv.appendChild(itemsList);
    document.querySelector('.container').appendChild(orderDiv);
    setTimeout(() => { orderDiv.classList.add('completed');}, 250)
}

makeOrder('delivery', ['Juice','Water','kfc', 'Grapes', 'Almond Butter'], order);