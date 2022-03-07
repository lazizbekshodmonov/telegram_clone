'use strict';

let messageArea = document.querySelector('.scrol'),
    form = document.querySelector('.form'),
    message = document.querySelector('#message'),
    className;


 let messages = ['Assalomu alekum', 'Valekum salom'];


form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let text = message.value;
    
    if(text){
    messages.push(text);
    messages.reverse();
    addNewMessage(messages, messageArea);
    }
    message.value = '';
});


function addNewMessage(dataBase, text) {
    text.innerHTML = '';
    
    dataBase.forEach((element, i) => {
        
        text.innerHTML += `
            <div class="message ${className}">
                <div class="message-bg">     
                        <p class="message-text">${element}</p>
                </div>
            </div>
        `;
    });
}
addNewMessage(messages, messageArea);