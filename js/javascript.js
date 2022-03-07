let messageArea = document.querySelector('.scrol'),
    form = document.querySelector('.form'),
    message = document.querySelector('#message'),
    className;


 let messags = ['Assalomu alekum', 'Valekum salom'];

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let text = message.value;
    
    if(text){
    messags.push(text);
    addNewMessage(messags, messageArea);
    }
    message.value = '';
});


function addNewMessage(dataBase, text) {
    text.innerHTML = '';
    
    dataBase.forEach((element, i) => {
        if(i%2 == 0){
            className = 'left';
        }else{
            className = 'right';
        }
        text.innerHTML += `
            <div class="message ${className}">
                <div class="message-bg">     
                        <p class="message-text">${element}</p>
                </div>
            </div>
        `;
    });
}
addNewMessage(messags, messageArea);