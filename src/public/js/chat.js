const socket = io();
/* 
socket.on('countUpdated', (count) => {
    console.log('The count has been updated!', count);
});

document.querySelector('#increment').addEventListener('click', () => {
    console.log('Clicked');
    socket.emit('increment');
}); */

/* socket.on('message', (message) => {
    var textnode = document.createTextNode(message);
    document.querySelector('#whatTheF').appendChild(textnode);
});
 */

socket.on('getMessage', (uMessage) => {
    var textnode = document.createTextNode(uMessage);
    linebreak = document.createElement("br");
    document.querySelector('#message').appendChild(textnode);
    document.querySelector('#message').appendChild(linebreak);
    console.log(uMessage);
});

document.getElementById('myForm').addEventListener('submit', logSubmit);

function logSubmit(e) {
    e.preventDefault();
    var x = document.getElementById("myForm");
    const text = e.target.elements.uMessage.value;
    //const text = document.querySelector('#uMessage').value;
    console.log(text);
    socket.emit('uMessage', text);
    document.getElementById("myForm").reset();
}
  
/* window.onload = function() {
    var form = document.querySelector("form");
    form.onsubmit = submitted.bind(form);
}

function submitted(event) {
    socket.emit()
    event.preventDefault();
} */