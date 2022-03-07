let messageArea = document.querySelector('.scrol'),
    form = document.querySelector('.form'),
    message = document.querySelector('#message'),
    className;


 let messags = ['Assalomu alekum', 'Valekum salom','Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, nihil. Ullam quos rem ea at, dolores enim culpa, nihil dolorem vitae voluptate asperiores quidem iure ex, harum porro odit sit.', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, nihil. Ullam quos rem ea at, dolores enim culpa, nihil dolorem vitae voluptate asperiores quidem iure ex, harum porro odit sit.', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, nihil. Ullam quos rem ea at, dolores enim culpa, nihil dolorem vitae voluptate asperiores quidem iure ex, harum porro odit sit.', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, nihil. Ullam quos rem ea at, dolores enim culpa, nihil dolorem vitae voluptate asperiores quidem iure ex, harum porro odit sit.', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, nihil. Ullam quos rem ea at, dolores enim culpa, nihil dolorem vitae voluptate asperiores quidem iure ex, harum porro odit sit.', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, nihil. Ullam quos rem ea at, dolores enim culpa, nihil dolorem vitae voluptate asperiores quidem iure ex, harum porro odit sit.', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, nihil. Ullam quos rem ea at, dolores enim culpa, nihil dolorem vitae voluptate asperiores quidem iure ex, harum porro odit sit.', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, nihil. Ullam quos rem ea at, dolores enim culpa, nihil dolorem vitae voluptate asperiores quidem iure ex, harum porro odit sit.'];

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
    //  dataBase.reverse();
     console.log(dataBase);
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